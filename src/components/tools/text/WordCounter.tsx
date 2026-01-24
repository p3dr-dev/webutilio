import React, { useState, useMemo } from 'react';
import { useTranslations } from '../../../i18n/utils';

const WordCounter: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [text, setText] = useState('');

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = useMemo(() => {
    if (!text.trim()) {
      return { words: 0, characters: 0, sentences: 0, paragraphs: 0, readingTimeStr: '0' + t('components.wordCounter.seconds'), speakingTimeStr: '0' + t('components.wordCounter.seconds') };
    }

    // Improved word count regex (supports accents and punctuation splitting)
    const wordsMatch = text.match(/[\w\u00C0-\u00FF]+/g);
    const words = wordsMatch ? wordsMatch.length : 0;
    
    const characters = text.length;
    const sentences = text.match(/[^.!?]+[.!?]+/g)?.length || (text.trim().length > 0 ? 1 : 0);
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
    
    const formatTime = (wpm: number) => {
      const totalSeconds = Math.ceil((words / wpm) * 60);
      const m = Math.floor(totalSeconds / 60);
      const s = totalSeconds % 60;
      let res = '';
      if (m > 0) res += `${m}${t('components.wordCounter.minutes')} `;
      if (s > 0 || m === 0) res += `${s}${t('components.wordCounter.seconds')}`;
      return res;
    };

    return { 
      words, 
      characters, 
      sentences, 
      paragraphs, 
      readingTimeStr: formatTime(225), // Average adult silent reading
      speakingTimeStr: formatTime(130)  // Average speaking/reading aloud speed
    };
  }, [text, t]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="relative">
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          placeholder={t('components.wordCounter.placeholder')}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {text && (
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              onClick={handleCopy}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
              }`}
            >
              {copied ? t('components.hashGenerator.copied') : t('components.hashGenerator.copy')}
            </button>
            <button
              onClick={() => setText('')}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 text-sm"
            >
              {t('components.wordCounter.clear')}
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.words}</p>
          <p className="text-xs text-gray-600 dark:text-gray-300 uppercase font-semibold">{t('components.wordCounter.words')}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.characters}</p>
          <p className="text-xs text-gray-600 dark:text-gray-300 uppercase font-semibold">{t('components.wordCounter.characters')}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.sentences}</p>
          <p className="text-xs text-gray-600 dark:text-gray-300 uppercase font-semibold">{t('components.wordCounter.sentences')}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.paragraphs}</p>
          <p className="text-xs text-gray-600 dark:text-gray-300 uppercase font-semibold">{t('components.wordCounter.paragraphs')}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-md dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
          <p className="text-xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">{stats.readingTimeStr}</p>
          <p className="text-xs text-purple-600 dark:text-purple-400 uppercase font-bold">{t('components.wordCounter.readingTime')}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-md dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
          <p className="text-xl font-bold text-blue-700 dark:text-blue-300 whitespace-nowrap">{stats.speakingTimeStr}</p>
          <p className="text-xs text-blue-600 dark:text-blue-400 uppercase font-bold">{t('components.wordCounter.speakingTime')}</p>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;

