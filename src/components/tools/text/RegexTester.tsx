import React, { useState, useMemo } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { useToast } from '../../Toast';

interface Match {
  value: string;
  index: number;
  groups: string[];
  namedGroups: Record<string, string>;
}

const RegexTester: React.FC<{ lang: 'pt' | 'en' | 'es' | 'fr' | 'de' | 'ru' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [pattern, setPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [flags, setFlags] = useState({ g: true, i: false, m: false, s: false });
  const [error, setError] = useState('');

  const flagString = Object.entries(flags)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join('');

  const { matches, highlightedHtml } = useMemo(() => {
    if (!pattern || !testString) return { matches: [], highlightedHtml: '' };
    try {
      const regex = new RegExp(pattern, flagString);
      const found: Match[] = [];
      let match: RegExpExecArray | null;

      if (flags.g) {
        while ((match = regex.exec(testString)) !== null) {
          found.push({
            value: match[0],
            index: match.index,
            groups: match.slice(1).map((g) => g || ''),
            namedGroups: match.groups ? { ...match.groups } : {},
          });
          if (match[0].length === 0) regex.lastIndex++;
        }
      } else {
        match = regex.exec(testString);
        if (match) {
          found.push({
            value: match[0],
            index: match.index,
            groups: match.slice(1).map((g) => g || ''),
            namedGroups: match.groups ? { ...match.groups } : {},
          });
        }
      }

      // Build highlighted HTML
      let html = '';
      let lastIndex = 0;
      const regexForHighlight = new RegExp(pattern, flagString);
      let m: RegExpExecArray | null;
      const highlights: { start: number; end: number }[] = [];

      if (flags.g) {
        while ((m = regexForHighlight.exec(testString)) !== null) {
          highlights.push({ start: m.index, end: m.index + m[0].length });
          if (m[0].length === 0) regexForHighlight.lastIndex++;
        }
      } else {
        m = regexForHighlight.exec(testString);
        if (m) highlights.push({ start: m.index, end: m.index + m[0].length });
      }

      for (const h of highlights) {
        html += escapeHtml(testString.slice(lastIndex, h.start));
        html += `<mark class="bg-yellow-200 dark:bg-yellow-700 rounded px-0.5">${escapeHtml(testString.slice(h.start, h.end))}</mark>`;
        lastIndex = h.end;
      }
      html += escapeHtml(testString.slice(lastIndex));

      setError('');
      return { matches: found, highlightedHtml: html };
    } catch {
      setError(t('components.regex.invalidPattern'));
      return { matches: [], highlightedHtml: '' };
    }
  }, [pattern, testString, flagString, flags.g, lang]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(t('components.regex.copied'), 'success');
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('components.regex.pattern')}</label>
        <div className="flex gap-2">
          <span className="flex items-center px-2 bg-gray-100 dark:bg-gray-700 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md text-gray-500 dark:text-gray-400 font-mono text-sm">/</span>
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-r-md font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            placeholder={t('components.regex.patternPlaceholder')}
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
          />
          <span className="flex items-center px-2 bg-gray-100 dark:bg-gray-700 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md text-gray-500 dark:text-gray-400 font-mono text-sm">/{flagString}</span>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        {(['g', 'i', 'm', 's'] as const).map((f) => (
          <label key={f} className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              checked={flags[f]}
              onChange={(e) => setFlags((prev) => ({ ...prev, [f]: e.target.checked }))}
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="font-mono font-bold">{f}</span>
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('components.regex.testString')}</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          style={{ resize: 'vertical', minHeight: '6rem' }}
          placeholder={t('components.regex.testPlaceholder')}
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
        />
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      {pattern && testString && !error && (
        <>
          <div className="mb-4 p-3 bg-gray-100 rounded-md dark:bg-gray-700">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300">{t('components.regex.result')}</h3>
              <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                {matches.length} {matches.length === 1 ? 'match' : 'matches'}
              </span>
            </div>
            <div
              className="text-sm font-mono whitespace-pre-wrap break-all text-gray-800 dark:text-gray-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </div>

          {matches.length > 0 && (
            <div className="p-3 bg-gray-50 rounded-md dark:bg-gray-700/50">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('components.regex.matchDetails')}</h4>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {matches.map((m, i) => (
                  <div key={i} className="text-xs bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between">
                      <span className="font-mono text-purple-600 dark:text-purple-400">#{i + 1}</span>
                      <span className="text-gray-500 dark:text-gray-400">index: {m.index}</span>
                    </div>
                    <div className="font-mono text-gray-800 dark:text-gray-200 mt-1 break-all">"{m.value}"</div>
                    {m.groups.length > 0 && (
                      <div className="mt-1 text-gray-500 dark:text-gray-400">
                        Groups: {m.groups.map((g, gi) => (
                          <span key={gi} className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded ml-1">
                            {gi + 1}: {g || '(empty)'}
                          </span>
                        ))}
                      </div>
                    )}
                    {Object.keys(m.namedGroups).length > 0 && (
                      <div className="mt-1 text-gray-500 dark:text-gray-400">
                        Named: {Object.entries(m.namedGroups).map(([name, val]) => (
                          <span key={name} className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded ml-1">
                            {name}: {val || '(empty)'}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default RegexTester;
