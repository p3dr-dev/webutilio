import React, { useState, useCallback } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { useToast } from '../../Toast';

interface DiffLine {
  leftNum: number | null;
  rightNum: number | null;
  left: string;
  right: string;
  type: 'added' | 'removed' | 'unchanged';
}

const TextDiff: React.FC<{ lang: 'pt' | 'en' | 'es' | 'fr' | 'de' | 'ru' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [diffResult, setDiffResult] = useState<DiffLine[] | null>(null);
  const [summary, setSummary] = useState<{ added: number; removed: number; unchanged: number } | null>(null);

  const computeDiff = useCallback(() => {
    const leftLines = left.split('\n');
    const rightLines = right.split('\n');

    // Simple LCS-based diff
    const m = leftLines.length;
    const n = rightLines.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (leftLines[i - 1] === rightLines[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    // Backtrack to find diff
    const result: DiffLine[] = [];
    let i = m, j = n;
    const temp: DiffLine[] = [];

    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && leftLines[i - 1] === rightLines[j - 1]) {
        temp.push({ leftNum: i, rightNum: j, left: leftLines[i - 1], right: rightLines[j - 1], type: 'unchanged' });
        i--; j--;
      } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
        temp.push({ leftNum: null, rightNum: j, left: '', right: rightLines[j - 1], type: 'added' });
        j--;
      } else {
        temp.push({ leftNum: i, rightNum: null, left: leftLines[i - 1], right: '', type: 'removed' });
        i--;
      }
    }

    temp.reverse();
    const added = temp.filter((l) => l.type === 'added').length;
    const removed = temp.filter((l) => l.type === 'removed').length;
    const unchanged = temp.filter((l) => l.type === 'unchanged').length;

    setDiffResult(temp);
    setSummary({ added, removed, unchanged });
  }, [left, right]);

  const handleSwap = () => {
    setLeft(right);
    setRight(left);
    setDiffResult(null);
    setSummary(null);
  };

  const handleClear = () => {
    setLeft('');
    setRight('');
    setDiffResult(null);
    setSummary(null);
  };

  const formatJson = (text: string): string => {
    try {
      return JSON.stringify(JSON.parse(text), null, 2);
    } catch {
      return text;
    }
  };

  const handleFormat = () => {
    setLeft(formatJson(left));
    setRight(formatJson(right));
    showToast(t('components.diff.formatted'), 'success');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex gap-2 mb-4">
        <button
          onClick={handleSwap}
          className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
        >
          {t('components.diff.swap')}
        </button>
        <button
          onClick={handleFormat}
          className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
        >
          {t('components.diff.formatJson')}
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
        >
          {t('components.diff.clear')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('components.diff.left')}</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            style={{ resize: 'vertical', minHeight: '10rem' }}
            placeholder={t('components.diff.leftPlaceholder')}
            value={left}
            onChange={(e) => setLeft(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('components.diff.right')}</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            style={{ resize: 'vertical', minHeight: '10rem' }}
            placeholder={t('components.diff.rightPlaceholder')}
            value={right}
            onChange={(e) => setRight(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={computeDiff}
        disabled={!left && !right}
        className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 disabled:bg-purple-300 transition-colors"
      >
        {t('components.diff.compare')}
      </button>

      {diffResult && summary && (
        <div className="mt-4">
          <div className="flex gap-4 mb-3 text-sm">
            <span className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
              +{summary.added} {t('components.diff.added')}
            </span>
            <span className="px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
              -{summary.removed} {t('components.diff.removed')}
            </span>
            <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
              {summary.unchanged} {t('components.diff.unchanged')}
            </span>
          </div>

          <div className="border border-gray-200 dark:border-gray-600 rounded-md overflow-hidden">
            <div className="overflow-x-auto max-h-96">
              <table className="w-full text-xs font-mono">
                <tbody>
                  {diffResult.map((line, i) => (
                    <tr key={i} className={
                      line.type === 'added' ? 'bg-green-50 dark:bg-green-900/20' :
                      line.type === 'removed' ? 'bg-red-50 dark:bg-red-900/20' :
                      ''
                    }>
                      <td className="w-10 text-right pr-2 text-gray-400 dark:text-gray-500 select-none border-r border-gray-200 dark:border-gray-600">
                        {line.leftNum ?? ''}
                      </td>
                      <td className="w-1/2 px-2 py-0.5 border-r border-gray-200 dark:border-gray-600">
                        {line.type === 'removed' && <span className="text-red-500 mr-1">-</span>}
                        <span className="text-gray-800 dark:text-gray-200">{line.left}</span>
                      </td>
                      <td className="w-10 text-right pr-2 text-gray-400 dark:text-gray-500 select-none border-r border-gray-200 dark:border-gray-600">
                        {line.rightNum ?? ''}
                      </td>
                      <td className="w-1/2 px-2 py-0.5">
                        {line.type === 'added' && <span className="text-green-500 mr-1">+</span>}
                        <span className="text-gray-800 dark:text-gray-200">{line.right}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextDiff;
