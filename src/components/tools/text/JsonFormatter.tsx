import React, { useState } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { useToast } from '../../Toast';

const JsonFormatter: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [json, setJson] = useState('');
  const [error, setError] = useState<string | null>(null);

  const processJson = (spaces?: number) => {
    try {
      if (!json.trim()) return;
      const obj = JSON.parse(json);
      setJson(spaces !== undefined ? JSON.stringify(obj, null, spaces) : JSON.stringify(obj));
      setError(null);
      showToast(t('components.jsonFormatter.valid'), 'success');
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : String(e));
      showToast(t('components.jsonFormatter.invalid'), 'error');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(json);
    showToast(t('components.jsonFormatter.copied'), 'success');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="relative">
        <textarea
          className="w-full h-96 p-4 border border-gray-300 rounded-md font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 resize-y"
          placeholder={t('components.jsonFormatter.placeholder')}
          value={json}
          onChange={(e) => setJson(e.target.value)}
        ></textarea>
        {json && (
          <button
            onClick={() => setJson('')}
            className="absolute top-2 right-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 text-xs"
          >
            {t('components.jsonFormatter.clear')}
          </button>
        )}
      </div>

      {error && (
        <div className="mt-2 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md text-sm dark:bg-red-900/30 dark:border-red-800 dark:text-red-400">
          <strong>{t('components.jsonFormatter.invalid')}:</strong> {error}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => processJson(2)}
          className="bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
        >
          {t('components.jsonFormatter.format')}
        </button>
        <button
          onClick={() => processJson()}
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
        >
          {t('components.jsonFormatter.minify')}
        </button>
        <button
          onClick={handleCopy}
          disabled={!json}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          {t('components.jsonFormatter.copy')}
        </button>
      </div>
    </div>
  );
};

export default JsonFormatter;
