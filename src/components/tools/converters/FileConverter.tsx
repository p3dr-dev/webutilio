import React, { useState, useRef, useEffect } from 'react';
import LoadingSpinner from '../common/LoadingSpinner';
import { useTranslations } from '../../../i18n/utils';
import { Canvg } from 'canvg';
import * as pdfjs from 'pdfjs-dist';


// Set the worker source for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

type OutputFormat = 'jpeg' | 'png' | 'webp' | 'csv' | 'svg' | 'json';
type InputType = 'image' | 'svg' | 'pdf' | 'json';

import { useLoadingPhrases } from '../common/useLoadingPhrases';

const FileConverter: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [convertedUrl, setConvertedUrl] = useState<string>('');
  const [outputFormat, setOutputFormat] = useState<OutputFormat>('png');
  const [inputType, setInputType] = useState<InputType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const loadingText = useLoadingPhrases(isLoading, t('components.loading.genericPhrases') as string[]);

  useEffect(() => {
    // This effect runs when the component unmounts or when the URLs change.
    return () => {
      if (originalUrl) {
        URL.revokeObjectURL(originalUrl);
      }
      if (convertedUrl) {
        URL.revokeObjectURL(convertedUrl);
      }
    };
  }, [originalUrl, convertedUrl]);

  const availableFormats: Record<string, OutputFormat[]> = {
    'image/jpeg': ['png', 'webp', 'jpeg', 'svg'],
    'image/png': ['jpeg', 'webp', 'png', 'svg'],
    'image/webp': ['jpeg', 'png', 'webp', 'svg'],
    'image/svg+xml': ['png', 'jpeg', 'webp', 'svg'],
    'application/pdf': ['png', 'jpeg', 'webp'],
    'application/json': ['csv'],
    'text/csv': ['json'], // Although not explicitly requested, it's good to have a reverse
  };

  const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setOriginalFile(file);
    setConvertedUrl('');
    setError('');

    let detectedInputType: InputType | null = null;
    let defaultOutput: OutputFormat | null = null;

    if (file.type === 'image/svg+xml') {
      detectedInputType = 'svg';
      setOriginalUrl(URL.createObjectURL(file));
      defaultOutput = availableFormats[file.type]?.[0] || 'png';
    } else if (file.type.startsWith('image/')) {
      detectedInputType = 'image';
      setOriginalUrl(URL.createObjectURL(file));
      defaultOutput = availableFormats[file.type]?.[0] || 'png';
    } else if (file.type === 'application/pdf') {
      detectedInputType = 'pdf';
      setOriginalUrl(URL.createObjectURL(file));
      defaultOutput = availableFormats[file.type]?.[0] || 'png';
    } else if (file.type === 'application/json') {
      detectedInputType = 'json';
      setOriginalUrl(''); // No preview for JSON
      defaultOutput = availableFormats[file.type]?.[0] || 'csv';
    } else if (file.type === 'text/csv') {
      detectedInputType = 'json'; // Assuming CSV to JSON conversion
      setOriginalUrl(''); // No preview for CSV
      defaultOutput = availableFormats[file.type]?.[0] || 'json';
    } else {
      setError(t('components.fileConverter.errorInvalidFile'));
      setOriginalFile(null);
      setOriginalUrl('');
      setInputType(null);
      return;
    }

    setInputType(detectedInputType);
    if (defaultOutput) {
      setOutputFormat(defaultOutput);
    }
  };

  const convertFile = async () => {
    if (!originalFile || !inputType) return;

    setIsLoading(true);
    setConvertedUrl('');
    setError('');

    try {
      let convertedBlob: Blob | null = null;

      if (inputType === 'image') {
        convertedBlob = await convertImageToImage(originalFile, outputFormat);
      } else if (inputType === 'svg') {
        if (outputFormat === 'svg') {
          // If converting SVG to SVG, just return the original file blob
          convertedBlob = originalFile;
        } else {
          convertedBlob = await convertSvgToImage(originalFile, outputFormat);
        }
      } else if (inputType === 'pdf') {
        convertedBlob = await convertPdfToImage(originalFile, outputFormat);
      } else if (inputType === 'json' && outputFormat === 'csv') {
        convertedBlob = await convertJsonToCsv(originalFile);
      } else if (inputType === 'json' && outputFormat === 'json') { // CSV to JSON
        convertedBlob = await convertCsvToJson(originalFile);
      }

      if (convertedBlob) {
        setConvertedUrl(URL.createObjectURL(convertedBlob));
      } else {
        setError(t('components.fileConverter.errorConversionFailed'));
      }
    } catch (e: unknown) {
      setError(`${t('components.fileConverter.errorConversion')} ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setIsLoading(false);
    }
  };

  const convertImageToImage = async (file: File, format: OutputFormat): Promise<Blob | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error(t('components.fileConverter.errorCanvas')));
            return;
          }
          ctx.drawImage(img, 0, 0);

          canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            `image/${format}`,
            0.95
          );
        };
        img.onerror = reject;
        img.src = event.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  

  const convertSvgToImage = async (file: File, format: OutputFormat): Promise<Blob | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const svgString = event.target?.result as string;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error(t('components.fileConverter.errorCanvas')));
            return;
          }

          const v = await Canvg.from(ctx, svgString);
          await v.render();

          canvas.toBlob((blob) => {
            resolve(blob);
          }, `image/${format}`);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const convertPdfToImage = async (file: File, format: OutputFormat): Promise<Blob | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const pdfData = new Uint8Array(event.target?.result as ArrayBuffer);
          const loadingTask = pdfjs.getDocument({ data: pdfData });
          const pdf = await loadingTask.promise;
          const page = await pdf.getPage(1);

          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error(t('components.fileConverter.errorCanvas')));
            return;
          }
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: ctx,
            viewport: viewport,
            canvas: canvas,
          };
          await page.render(renderContext).promise;

          canvas.toBlob((blob) => {
            resolve(blob);
          }, `image/${format}`);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const escapeCsvField = (value: unknown): string => {
    const str = value === null || value === undefined ? '' : String(value);
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const convertJsonToCsv = async (file: File): Promise<Blob | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const jsonString = event.target?.result as string;
          const data = JSON.parse(jsonString);

          if (!Array.isArray(data) || data.length === 0) {
            reject(new Error(t('components.fileConverter.errorInvalidJson')));
            return;
          }

          const headers = Object.keys(data[0]);
          const csvRows = [
            headers.map(escapeCsvField).join(','),
            ...data.map(row => headers.map(header => escapeCsvField(row[header])).join(','))
          ];
          const csvString = csvRows.join('\n');
          resolve(new Blob([csvString], { type: 'text/csv' }));
        } catch {
          reject(new Error(t('components.fileConverter.errorParsingJson')));
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const parseCsvLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (inQuotes) {
        if (char === '"') {
          if (i + 1 < line.length && line[i + 1] === '"') {
            current += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          current += char;
        }
      } else {
        if (char === '"') {
          inQuotes = true;
        } else if (char === ',') {
          result.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
    }
    result.push(current.trim());
    return result;
  };

  const convertCsvToJson = async (file: File): Promise<Blob | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const csvString = event.target?.result as string;
          const lines = csvString.split('\n').filter(line => line.trim() !== '');
          if (lines.length < 2) {
            reject(new Error(t('components.fileConverter.errorInvalidCsv')));
            return;
          }

          const headers = parseCsvLine(lines[0]);
          const result = [];

          for (let i = 1; i < lines.length; i++) {
            const values = parseCsvLine(lines[i]);
            const obj: { [key: string]: string } = {};
            headers.forEach((header, index) => {
              obj[header] = values[index] || '';
            });
            result.push(obj);
          }
          resolve(new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' }));
        } catch {
          reject(new Error(t('components.fileConverter.errorParsingCsv')));
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };
  
  const getOutputFileName = () => {
    if (!originalFile) return 'download';
    const name = originalFile.name.substring(0, originalFile.name.lastIndexOf('.'));
    return `${name}.${outputFormat}`;
  }

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={loadingText} />}
      
      <input
        type="file"
        accept="image/jpeg, image/png, image/webp, image/svg+xml, application/pdf, application/json, text/csv"
        onChange={handleInputFileChange}
        className="hidden"
        ref={fileInputRef}
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={isLoading}
        className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 dark:disabled:bg-purple-800"
      >
        {t('components.fileConverter.selectFile')}
      </button>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {originalFile && (
        <div className={`mt-6 ${isLoading ? 'opacity-20' : ''}`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {inputType && (inputType === 'image' || inputType === 'svg' || inputType === 'pdf') && originalUrl ? (
              <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.fileConverter.original')}</h3>
                <img src={originalUrl} alt="Original" className="mt-2 rounded-lg shadow-sm mx-auto max-h-60" />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{originalFile.type}</p>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.fileConverter.original')}</h3>
                <div className="mt-2 flex items-center justify-center h-60 w-80 bg-gray-100 rounded-lg dark:bg-gray-700">
                  <p className="text-gray-500 dark:text-gray-400">{t('components.fileConverter.noPreview')}</p>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{originalFile.name}</p>
              </div>
            )}

            {isLoading ? (
                <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin my-8"></div>
            ) : (
                <p className="text-3xl font-light text-gray-400">→</p>
            )}

            <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-gray-200">{t('components.fileConverter.converted')}</h3>
                {convertedUrl ? (
                    (outputFormat === 'csv' || outputFormat === 'json') ? (
                      <a href={convertedUrl} download={getOutputFileName()} className="mt-2 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                        {t('components.fileConverter.download')}
                      </a>
                    ) : (
                      <img src={convertedUrl} alt="Convertido" className="mt-2 rounded-lg shadow-sm mx-auto max-h-60" />
                    )
                ) : (
                    <div className="mt-2 flex items-center justify-center h-60 w-80 bg-gray-100 rounded-lg dark:bg-gray-700">
                        <p className="text-gray-500 dark:text-gray-400">{t('components.fileConverter.waiting')}</p>
                    </div>
                )}
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
             <label htmlFor="format-select" className="font-medium text-gray-700 dark:text-gray-300">{t('components.fileConverter.convertTo')}</label>
             <select 
                id="format-select"
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value as OutputFormat)}
                className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                disabled={isLoading}
             >
                {inputType && availableFormats[originalFile.type as keyof typeof availableFormats] && availableFormats[originalFile.type as keyof typeof availableFormats].map(format => (
                    <option key={format} value={format}>{format.toUpperCase()}</option>
                ))}
             </select>
            <button 
                onClick={convertFile}
                disabled={isLoading}
                className="w-full sm:w-auto bg-green-500 text-white font-bold py-2 px-6 rounded-md hover:bg-green-600 transition-colors disabled:bg-green-300 dark:disabled:bg-green-800"
            >
                {t('components.fileConverter.convert')}
            </button>
          </div>

          {convertedUrl && (outputFormat !== 'csv' && outputFormat !== 'json') && (
            <div className="text-center mt-6">
                 <a
                    href={convertedUrl}
                    download={getOutputFileName()}
                    className="inline-block bg-blue-500 text-white font-bold py-2 px-8 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300 dark:disabled:bg-blue-800"
                  >
                    {t('components.fileConverter.download')}
                  </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileConverter;
