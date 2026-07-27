import React, { useState } from 'react';
import { useTranslations } from '../../../i18n/utils';
import type { Language } from "../../../data/tools";
import { useToast } from '../../Toast';

const Base64Tool: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const process = () => {
    try {
      if (mode === 'encode') {
        const encoded = btoa(unescape(encodeURIComponent(input)));
        setOutput(encoded);
      } else {
        const decoded = decodeURIComponent(escape(atob(input)));
        setOutput(decoded);
      }
    } catch {
      showToast(t('components.base64.error'), 'error');
      setOutput('');
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      showToast(t('components.base64.copied'), 'success');
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('encode')}
          className={`flex-1 py-2 rounded-md font-bold transition-colors ${mode === 'encode' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'}`}
        >
          {t('components.base64.encode')}
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`flex-1 py-2 rounded-md font-bold transition-colors ${mode === 'decode' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'}`}
        >
          {t('components.base64.decode')}
        </button>
      </div>

      <label htmlFor="base64-input" className="sr-only">{t('components.base64.inputLabel')}</label>
      <textarea
        id="base64-input"
        className="w-full p-3 border border-gray-300 rounded-md font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
        style={{ resize: 'vertical', minHeight: '8rem' }}
        placeholder={mode === 'encode' ? t('components.base64.inputPlaceholder') : t('components.base64.inputPlaceholderDecode')}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={process}
        disabled={!input}
        className="mt-3 w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 disabled:bg-purple-300 transition-colors"
      >
        {mode === 'encode' ? t('components.base64.encodeButton') : t('components.base64.decodeButton')}
      </button>

      {output && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md dark:bg-gray-700">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">{t('components.base64.result')}</h3>
            <button onClick={handleCopy} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300">
              {t('components.base64.copy')}
            </button>
          </div>
          <p className="text-sm text-gray-800 break-all font-mono dark:text-gray-200">{output}</p>
        </div>
      )}
    </div>
  );
};

export default Base64Tool;
