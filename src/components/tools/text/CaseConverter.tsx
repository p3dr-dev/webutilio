import React, { useState } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { useToast } from '../../Toast';

const CASES = ['lowercase', 'uppercase', 'titlecase', 'sentencecase', 'camelcase', 'snakecase', 'kebabcase', 'pascalcase'] as const;

function toCase(text: string, caseType: string): string {
  switch (caseType) {
    case 'lowercase': return text.toLowerCase();
    case 'uppercase': return text.toUpperCase();
    case 'titlecase': return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    case 'sentencecase': return text.replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase());
    case 'camelcase': return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
    case 'snakecase': return text.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    case 'kebabcase': return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    case 'pascalcase': return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^\w/, (c) => c.toUpperCase());
    default: return text;
  }
}

const CaseConverter: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [input, setInput] = useState('');
  const [activeCase, setActiveCase] = useState<string>('lowercase');

  const output = input ? toCase(input, activeCase) : '';

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      showToast(t('components.caseConverter.copied'), 'success');
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <label htmlFor="case-input" className="sr-only">{t('components.caseConverter.inputLabel')}</label>
      <textarea
        id="case-input"
        className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
        style={{ resize: 'vertical', minHeight: '8rem' }}
        placeholder={t('components.caseConverter.placeholder')}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex flex-wrap gap-2 mt-3 mb-4">
        {CASES.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCase(c)}
            className={`px-3 py-1 text-xs rounded-full font-bold transition-colors ${
              activeCase === c ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300'
            }`}
          >
            {t(`components.caseConverter.cases.${c}`)}
          </button>
        ))}
      </div>

      {output && (
        <div className="p-3 bg-gray-100 rounded-md dark:bg-gray-700">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">{t('components.caseConverter.result')}</h3>
            <button onClick={handleCopy} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300">
              📋 {t('components.caseConverter.copy')}
            </button>
          </div>
          <p className="text-sm text-gray-800 break-all dark:text-gray-200">{output}</p>
        </div>
      )}
    </div>
  );
};

export default CaseConverter;
