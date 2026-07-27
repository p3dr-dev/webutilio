import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from '../../../i18n/utils';
import type { Language } from "../../../data/tools";
import { useToast } from '../../Toast';

const PasswordGenerator: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    };
  }, []);

  const generate = useCallback(() => {
    let charset = '';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (!charset) {
      showToast(t('components.passwordGenerator.noCharset'), 'error');
      return;
    }
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    const result = Array.from(array, (x) => charset[x % charset.length]).join('');
    setPassword(result);
    setCopied(false);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, t, showToast]);

  const handleCopy = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      showToast(t('components.passwordGenerator.copied'), 'success');
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  const strength = password.length >= 20 ? 'strong' : password.length >= 12 ? 'medium' : 'weak';
  const strengthColor = strength === 'strong' ? 'text-green-600 dark:text-green-400' : strength === 'medium' ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="mb-4">
        <label htmlFor="password-output" className="sr-only">{t('components.passwordGenerator.outputLabel')}</label>
        <div className="flex gap-2">
          <input
            id="password-output"
            type="text"
            readOnly
            value={password}
            className="flex-1 p-3 border border-gray-300 rounded-md font-mono text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            placeholder={t('components.passwordGenerator.placeholder')}
          />
          <button
            onClick={handleCopy}
            disabled={!password}
            className={`px-4 py-2 rounded-md font-bold transition-colors ${
              copied ? 'bg-green-500 text-white' : 'bg-purple-600 text-white hover:bg-purple-700 disabled:bg-purple-300'
            }`}
          >
            {copied ? '✓' : '📋'}
          </button>
        </div>
        {password && (
          <p className={`mt-1 text-sm font-semibold ${strengthColor}`}>
            {t(`components.passwordGenerator.strength.${strength}`)}
          </p>
        )}
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <label htmlFor="password-length" className="text-sm text-gray-700 dark:text-gray-300">
            {t('components.passwordGenerator.length')}: {length}
          </label>
          <input
            id="password-length"
            type="range"
            min={8}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-48"
          />
        </div>
        {[
          { label: t('components.passwordGenerator.uppercase'), checked: includeUppercase, onChange: setIncludeUppercase },
          { label: t('components.passwordGenerator.lowercase'), checked: includeLowercase, onChange: setIncludeLowercase },
          { label: t('components.passwordGenerator.numbers'), checked: includeNumbers, onChange: setIncludeNumbers },
          { label: t('components.passwordGenerator.symbols'), checked: includeSymbols, onChange: setIncludeSymbols },
        ].map((opt) => (
          <label key={opt.label} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
            <input type="checkbox" checked={opt.checked} onChange={(e) => opt.onChange(e.target.checked)} className="rounded" />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>

      <button
        onClick={generate}
        className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
      >
        {t('components.passwordGenerator.generate')}
      </button>
    </div>
  );
};

export default PasswordGenerator;
