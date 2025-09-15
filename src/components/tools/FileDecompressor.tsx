import React, { useState, useCallback, useRef } from 'react';
import JSZip from 'jszip';
import untar from 'js-untar';
import LoadingSpinner from './LoadingSpinner';
import { useTranslations } from '../../i18n/utils';

import { useLoadingPhrases } from './useLoadingPhrases';

interface ExtractedFile {
  name: string;
  isDirectory: boolean;
  size: number;
  blob: Blob | null;
}

const FileDecompressor: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [archiveFile, setArchiveFile] = useState<File | null>(null);
  const [fileList, setFileList] = useState<ExtractedFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const loadingText = useLoadingPhrases(isLoading);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const processArchiveFile = useCallback(async (file: File) => {
    setArchiveFile(file);
    setIsLoading(true);
    setError(null);
    setFileList([]);
    setProgress(null); // Added this line

    try {
      if (file.name.endsWith('.zip')) {
        const zip = new JSZip();
        const loadedZip = await zip.loadAsync(file);
        const entries: ExtractedFile[] = [];
        const filesInZip = Object.keys(loadedZip.files);
        const totalFiles = filesInZip.length;
        
        for (let i = 0; i < totalFiles; i++) {
          const relativePath = filesInZip[i];
          const zipEntry = loadedZip.files[relativePath];
          const blob = zipEntry.dir ? null : await zipEntry.async('blob');
          entries.push({
            name: relativePath,
            isDirectory: zipEntry.dir,
            size: blob ? blob.size : 0,
            blob: blob,
          });
          setProgress((i + 1) / totalFiles); // Update progress here
        }
        setFileList(entries);
      } else if (file.name.endsWith('.tar')) {
        const buffer = await file.arrayBuffer();
        const extractedFiles = await untar(buffer);
        const entries: ExtractedFile[] = [];

        extractedFiles.forEach((extractedFile: any) => {
          entries.push({
            name: extractedFile.name,
            isDirectory: extractedFile.type === 'directory',
            size: extractedFile.size || 0,
            blob: extractedFile.blob || null,
          });
        });
        setFileList(entries);
      } else {
        setError(t('components.fileDecompressor.errorInvalidArchive'));
        setArchiveFile(null);
        setFileList([]);
        return;
      }

    } catch (err: any) {
      setError(t('components.fileDecompressor.errorReadingArchive'));
    } finally {
      setIsLoading(false);
    }
  }, [t, setProgress]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processArchiveFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      processArchiveFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const downloadFile = (file: ExtractedFile) => {
    if (file.blob && !file.isDirectory) {
      const url = URL.createObjectURL(file.blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.name.split('/').pop() || 'arquivo';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const resetState = () => {
    setArchiveFile(null);
    setFileList([]);
    setError(null);
    setProgress(null);
  }

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={loadingText} progress={progress} />}

      <input
        type="file"
        accept=".zip,.tar,application/zip,application/x-tar"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
        disabled={isLoading}
      />

      {!archiveFile && (
        <div 
          onDrop={handleDrop} 
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg transition-colors ${isDragging ? 'border-purple-600 bg-purple-50 dark:bg-gray-700' : 'border-gray-300 dark:border-gray-600'}`}>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{t('components.fileDecompressor.dragAndDrop')}</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="w-auto bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 dark:disabled:bg-purple-800"
          >
            {t('components.fileDecompressor.selectArchive')}
          </button>
        </div>
      )}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      
      {fileList.length > 0 && (
        <div className={`mt-6 ${isLoading ? 'opacity-20' : ''}`}>
          <h2 className="text-xl font-semibold mb-2 dark:text-gray-200">{t('components.fileDecompressor.fileContents')}</h2>
          <div className="border rounded-lg dark:border-gray-600 max-h-96 overflow-y-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-gray-700 sticky top-0">
                <tr>
                  <th className="p-3 text-sm font-semibold text-gray-600 dark:text-gray-300">{t('components.fileDecompressor.fileName')}</th>
                  <th className="p-3 text-sm font-semibold text-gray-600 dark:text-gray-300">{t('components.fileDecompressor.size')}</th>
                  <th className="p-3 text-sm font-semibold text-gray-600 dark:text-gray-300">{t('components.fileDecompressor.action')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {fileList.map((file) => (
                  <tr key={file.name}>
                    <td className="p-3 text-sm text-gray-800 dark:text-gray-200">{file.name}</td>
                    <td className="p-3 text-sm text-gray-600 dark:text-gray-400">{!file.isDirectory ? formatBytes(file.size) : t('components.fileDecompressor.folder')}</td>
                    <td className="p-3">
                      {!file.isDirectory && (
                        <button onClick={() => downloadFile(file)} className="text-blue-500 hover:underline text-sm">
                          {t('components.fileDecompressor.download')}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={resetState} className="w-full mt-4 text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">{t('components.fileDecompressor.selectAnother')}</button>
        </div>
      )}
    </div>
  );
};

export default FileDecompressor;
