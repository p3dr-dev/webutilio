import React, { useState, useMemo } from 'react';
import { useTranslations } from '../../i18n/utils';

const ContadorPalavras: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    if (!text.trim()) {
      return { words: 0, characters: 0, sentences: 0, paragraphs: 0 };
    }

    const words = text.trim().split(/\s+/).length;
    const characters = text.length;
    const sentences = text.match(/[\w|)][.?!](\s|$)/g)?.length || 0;
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;

    return { words, characters, sentences, paragraphs };
  }, [text]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="relative">
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          placeholder={t('components.contadorPalavras.placeholder')}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {text && (
          <button
            onClick={() => setText('')}
            className="absolute top-2 right-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
          >
            {t('components.contadorPalavras.clear')}
          </button>
        )}
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.words}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{t('components.contadorPalavras.words')}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.characters}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{t('components.contadorPalavras.characters')}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.sentences}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{t('components.contadorPalavras.sentences')}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.paragraphs}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{t('components.contadorPalavras.paragraphs')}</p>
        </div>
      </div>
    </div>
  );
};

export default ContadorPalavras;

