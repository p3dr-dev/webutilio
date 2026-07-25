import React, { useState } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { useToast } from '../../Toast';

const LOREM_WORDS = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'.split(' ');

function generateLorem(count: number, startWithLorem: boolean): string {
  const sentences: string[] = [];
  for (let i = 0; i < Math.ceil(count / 10); i++) {
    const len = 8 + Math.floor(Math.random() * 8);
    const words = Array.from({ length: len }, () => LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]);
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    sentences.push(words.join(' ') + '.');
  }
  let result = sentences.join(' ');
  if (startWithLorem && !result.toLowerCase().startsWith('lorem')) {
    result = 'Lorem ipsum dolor sit amet, ' + result.slice(result.indexOf(' ') + 1);
  }
  return result.slice(0, count);
}

const LoremGenerator: React.FC<{ lang: 'pt' | 'en' | 'es' | 'fr' | 'de' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [wordCount, setWordCount] = useState(50);
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [text, setText] = useState('');

  const generate = () => {
    setText(generateLorem(wordCount, startWithLorem));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(t('components.lorem.copied'), 'success');
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex flex-wrap gap-4 mb-4 items-end">
        <div>
          <label htmlFor="lorem-count" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">{t('components.lorem.wordCount')}</label>
          <input
            id="lorem-count"
            type="number"
            min={10}
            max={5000}
            value={wordCount}
            onChange={(e) => setWordCount(Math.max(10, Math.min(5000, Number(e.target.value))))}
            className="w-24 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
          <input type="checkbox" checked={startWithLorem} onChange={(e) => setStartWithLorem(e.target.checked)} className="rounded" />
          <span>{t('components.lorem.startLorem')}</span>
        </label>
        <button onClick={generate} className="bg-purple-600 text-white font-bold py-2 px-6 rounded-md hover:bg-purple-700 transition-colors">
          {t('components.lorem.generate')}
        </button>
        {text && (
          <button onClick={handleCopy} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {t('components.lorem.copy')}
          </button>
        )}
      </div>

      {text && (
        <div className="p-4 bg-gray-100 rounded-md dark:bg-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{text}</p>
          <p className="text-xs text-gray-400 mt-2">{t('components.lorem.charCount')}: {text.length}</p>
        </div>
      )}
    </div>
  );
};

export default LoremGenerator;
