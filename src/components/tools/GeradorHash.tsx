import React, { useState, useCallback } from 'react';
import { useTranslations } from '../../i18n/utils';
import LoadingSpinner from './LoadingSpinner';
import { useLoadingPhrases } from './useLoadingPhrases';


const GeradorHash: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');
  const [compareHash, setCompareHash] = useState('');
  const [comparisonResult, setComparisonResult] = useState<'match' | 'no-match' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loadingText = useLoadingPhrases(isLoading);

  const generateHash = useCallback(async () => {
    if (!input) {
      setHash('');
      setComparisonResult(null);
      return;
    }
    setIsLoading(true);
    setComparisonResult(null);
    if (!crypto.subtle) {
      setError(t('components.hashGenerator.errorCryptoNotAvailable'));
      setIsLoading(false);
      return;
    }
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setHash(hashHex);

      if (compareHash) {
        if (hashHex.toLowerCase() === compareHash.toLowerCase()) {
          setComparisonResult('match');
        } else {
          setComparisonResult('no-match');
        }
      }

    } catch (error) {
      console.error('Erro ao gerar hash:', error);
      setError(t('components.hashGenerator.errorGeneratingHash'));
      setComparisonResult(null);
    } finally {
      setIsLoading(false);
    }
  }, [input, compareHash]);

  const handleClear = () => {
    setInput('');
    setHash('');
    setCompareHash('');
    setComparisonResult(null);
    setError(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {isLoading && <LoadingSpinner text={loadingText} />}
      <div className="relative">
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          placeholder={t('components.hashGenerator.placeholder')}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        ></textarea>
        {input && (
            <button
                onClick={handleClear}
                className="absolute top-2 right-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
            >
                {t('components.hashGenerator.clear')}
            </button>
        )}
      </div>
      <button
        onClick={generateHash}
        disabled={isLoading || !input}
        className="mt-4 w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 disabled:bg-purple-300 transition-colors dark:disabled:bg-purple-800"
      >
        {isLoading ? t('components.hashGenerator.generating') : t('components.hashGenerator.generateButton')}
      </button>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {hash && !error && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md dark:bg-gray-700">
          <h3 className="font-semibold text-gray-700 dark:text-gray-300">{t('components.hashGenerator.generatedHash')}</h3>
          <p className="text-sm text-gray-800 break-all font-mono dark:text-gray-200">{hash}</p>
        </div>
      )}

      <div className="mt-6">
        <h3 className="font-semibold text-gray-700 dark:text-gray-300">{t('components.hashGenerator.verifyOptional')}</h3>
        <input
          type="text"
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 transition-shadow dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          placeholder={t('components.hashGenerator.verifyPlaceholder')}
          value={compareHash}
          onChange={(e) => setCompareHash(e.target.value)}
          disabled={isLoading}
        />
        {comparisonResult === 'match' && (
          <p className="mt-2 text-green-600 font-bold dark:text-green-400">{t('components.hashGenerator.match')}</p>
        )}
        {comparisonResult === 'no-match' && (
          <p className="mt-2 text-red-600 font-bold dark:text-red-400">{t('components.hashGenerator.noMatch')}</p>
        )}
      </div>
    </div>
  );
};

export default GeradorHash;