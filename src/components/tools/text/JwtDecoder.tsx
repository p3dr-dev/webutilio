import React, { useState } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { useToast } from '../../Toast';

const JwtDecoder: React.FC<{ lang: 'pt' | 'en' | 'es' | 'fr' | 'de' | 'ru' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [token, setToken] = useState('');
  const [header, setHeader] = useState<string | null>(null);
  const [payload, setPayload] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [error, setError] = useState('');

  const decode = () => {
    setError('');
    setHeader(null);
    setPayload(null);
    setSignature(null);

    const trimmed = token.trim();
    if (!trimmed) {
      setError(t('components.jwt.empty'));
      return;
    }

    const parts = trimmed.split('.');
    if (parts.length < 2 || parts.length > 3) {
      setError(t('components.jwt.invalid'));
      return;
    }

    try {
      const decodeBase64Url = (str: string) => {
        let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) base64 += '=';
        return decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
      };

      const headerJson = JSON.parse(decodeBase64Url(parts[0]));
      setHeader(JSON.stringify(headerJson, null, 2));

      const payloadJson = JSON.parse(decodeBase64Url(parts[1]));
      // Auto-format known date fields
      const dateFields = ['exp', 'iat', 'nbf'];
      for (const field of dateFields) {
        if (payloadJson[field] && typeof payloadJson[field] === 'number') {
          const d = new Date(payloadJson[field] * 1000);
          payloadJson[`${field}_formatted`] = d.toISOString();
        }
      }
      setPayload(JSON.stringify(payloadJson, null, 2));

      if (parts[2]) {
        setSignature(parts[2]);
      }
    } catch {
      setError(t('components.jwt.decodeError'));
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setToken(text);
    } catch {
      // clipboard not available
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(t('components.jwt.copied'), 'success');
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex gap-2 mb-4">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          style={{ resize: 'vertical', minHeight: '5rem' }}
          placeholder={t('components.jwt.placeholder')}
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={decode}
          disabled={!token}
          className="flex-1 bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 disabled:bg-purple-300 transition-colors"
        >
          {t('components.jwt.decodeButton')}
        </button>
        <button
          onClick={handlePaste}
          className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {t('components.jwt.paste')}
        </button>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      {header && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md dark:bg-gray-700">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">Header</h3>
            <button onClick={() => handleCopy(header)} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300">
              {t('components.jwt.copy')}
            </button>
          </div>
          <pre className="text-sm text-gray-800 font-mono dark:text-gray-200 whitespace-pre-wrap break-all">{header}</pre>
        </div>
      )}

      {payload && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md dark:bg-gray-700">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">Payload</h3>
            <button onClick={() => handleCopy(payload)} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300">
              {t('components.jwt.copy')}
            </button>
          </div>
          <pre className="text-sm text-gray-800 font-mono dark:text-gray-200 whitespace-pre-wrap break-all">{payload}</pre>
        </div>
      )}

      {signature && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md dark:bg-gray-700">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">Signature</h3>
            <button onClick={() => handleCopy(signature)} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300">
              {t('components.jwt.copy')}
            </button>
          </div>
          <p className="text-sm text-gray-800 break-all font-mono dark:text-gray-200">{signature}</p>
        </div>
      )}
    </div>
  );
};

export default JwtDecoder;
