import JSZip from 'jszip';

self.onmessage = async (e) => {
  const { files, options } = e.data;
  const zip = new JSZip();

  try {
    for (const file of files) {
      zip.file(file.name, file);
    }

    const blob = await zip.generateAsync(
      {
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: {
          level: 9,
        },
      },
      (metadata) => {
        self.postMessage({ type: 'progress', progress: metadata.percent / 100 });
      }
    );

    self.postMessage({ type: 'result', blob });
  } catch (error: any) {
    self.postMessage({ type: 'error', error: error.message });
  }
};
