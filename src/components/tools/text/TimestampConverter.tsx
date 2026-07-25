import React, { useState, useEffect } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { useToast } from '../../Toast';

const TimestampConverter: React.FC<{ lang: 'pt' | 'en' | 'es' | 'fr' | 'de' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const [inputTimestamp, setInputTimestamp] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [convertedDate, setConvertedDate] = useState('');
  const [convertedTimestamp, setConvertedTimestamp] = useState('');

  useEffect(() => {
    const interval = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(interval);
  }, []);

  const timestampToDate = () => {
    try {
      const ts = Number(inputTimestamp);
      if (isNaN(ts)) throw new Error('Invalid');
      const date = new Date(ts * 1000);
      setConvertedDate(date.toISOString());
    } catch {
      showToast(t('components.timestamp.invalidTimestamp'), 'error');
    }
  };

  const dateToTimestamp = () => {
    try {
      const date = new Date(inputDate);
      if (isNaN(date.getTime())) throw new Error('Invalid');
      setConvertedTimestamp(Math.floor(date.getTime() / 1000).toString());
    } catch {
      showToast(t('components.timestamp.invalidDate'), 'error');
    }
  };

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast(t('components.timestamp.copied'), 'success');
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 space-y-6">
      <div className="text-center p-4 bg-purple-50 rounded-lg dark:bg-purple-900/20">
        <p className="text-sm text-gray-500 dark:text-gray-400">{t('components.timestamp.current')}</p>
        <p className="text-2xl font-mono font-bold text-purple-700 dark:text-purple-300">{now}</p>
      </div>

      <div>
        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{t('components.timestamp.tsToDate')}</h3>
        <div className="flex gap-2">
          <input
            type="number"
            value={inputTimestamp}
            onChange={(e) => setInputTimestamp(e.target.value)}
            placeholder={t('components.timestamp.tsPlaceholder')}
            className="flex-1 p-2 border border-gray-300 rounded-md font-mono dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <button onClick={timestampToDate} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            →
          </button>
        </div>
        {convertedDate && (
          <div className="mt-2 p-2 bg-gray-100 rounded dark:bg-gray-700 flex items-center justify-between">
            <code className="text-sm font-mono dark:text-gray-200">{convertedDate}</code>
            <button onClick={() => handleCopy(convertedDate)} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">📋</button>
          </div>
        )}
      </div>

      <div>
        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{t('components.timestamp.dateToTs')}</h3>
        <div className="flex gap-2">
          <input
            type="datetime-local"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <button onClick={dateToTimestamp} className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            →
          </button>
        </div>
        {convertedTimestamp && (
          <div className="mt-2 p-2 bg-gray-100 rounded dark:bg-gray-700 flex items-center justify-between">
            <code className="text-sm font-mono dark:text-gray-200">{convertedTimestamp}</code>
            <button onClick={() => handleCopy(convertedTimestamp)} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">📋</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimestampConverter;
