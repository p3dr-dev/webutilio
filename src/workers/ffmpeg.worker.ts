// src/workers/ffmpeg.worker.ts
console.log('[ffmpeg.worker] Worker script started.');
import { FFmpeg } from '@ffmpeg/ffmpeg';

let ffmpeg: FFmpeg | null = null;

// Função para inicializar o FFmpeg
async function initializeFFmpeg() {
  if (ffmpeg) return ffmpeg;

  ffmpeg = new FFmpeg();

  // Configura o log para ver o progresso no console do worker
  ffmpeg.on('log', ({ message }) => {
    self.postMessage({ type: 'log', message });
  });

  // Configura o progresso para enviar mensagens ao thread principal
  ffmpeg.on('progress', ({ progress, time }) => {
    self.postMessage({ type: 'progress', progress, time });
  });

  // Carrega os arquivos core do FFmpeg.wasm
  // Certifique-se de que estes arquivos estão na pasta `public/ffmpeg/`
  try {
    await ffmpeg.load({
      coreURL: '/ffmpeg/ffmpeg-core.js',
      wasmURL: '/ffmpeg/ffmpeg-core.wasm',
    });
  } catch (e: any) {
    self.postMessage({ type: 'error', message: `[ffmpeg.worker] Error loading FFmpeg core files: ${e.message}` });
    throw e; // Re-throw to propagate the error to the main thread's onerror handler
  }

  self.postMessage({ type: 'log', message: '[ffmpeg.worker] FFmpeg loaded successfully.' });
  return ffmpeg;
}

// Listener para mensagens do thread principal
self.onmessage = async (event) => {
  const { type, payload } = event.data;

  try {
    const ffmpegInstance = await initializeFFmpeg();

    switch (type) {
      case 'run': {
        const { file, fileName, outputFileName, args } = payload;

        // Escreve o arquivo de entrada no sistema de arquivos virtual do FFmpeg
        await ffmpegInstance.writeFile(fileName, await file.arrayBuffer());
        self.postMessage({ type: 'log', message: `[ffmpeg.worker] Wrote file: ${fileName}` });

        // Executa o comando FFmpeg
        await ffmpegInstance.exec(args);
        self.postMessage({ type: 'log', message: `[ffmpeg.worker] Executed command: ${args.join(' ')}` });

        // Lê o arquivo de saída
        const data = await ffmpegInstance.readFile(outputFileName);
        self.postMessage({ type: 'log', message: `[ffmpeg.worker] Read output file: ${outputFileName}` });

        // Envia o resultado de volta para o thread principal
        console.log('[ffmpeg.worker] Sending result to main thread.');
        self.postMessage({ type: 'result', data: data as Uint8Array, outputFileName });
        break;
      }
      default:
        self.postMessage({ type: 'log', message: `[ffmpeg.worker] Unknown message type: ${type}` });
    }
  } catch (error) {
    self.postMessage({ type: 'error', message: (error as Error).message });
  }
};
