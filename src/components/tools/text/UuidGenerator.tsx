import React, { useState } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { useToast } from '../../Toast';

function generateUuid(): string {
  return crypto.randomUUID?.() ?? ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> (c === 'x' ? 0 : 3);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  }));
}

const UuidGenerator: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const { showToast } = useToast();
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [uppercase, setUppercase] = useState(false);

  const generate = () => {
    const newUuids = Array.from({ length: count }, () => {
      const uuid = generateUuid();
      return uppercase ? uuid.toUpperCase() : uuid;
    });
    setUuids(newUuids);
  };

  const handleCopy = async (uuid: string) => {
    try {
      await navigator.clipboard.writeText(uuid);
      showToast(t('components.uuid.copied'), 'success');
    } catch {
      // clipboard not available
    }
  };

  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(uuids.join('\n'));
      showToast(t('components.uuid.copiedAll'), 'success');
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex flex-wrap gap-4 mb-4 items-end">
        <div>
          <label htmlFor="uuid-count" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">{t('components.uuid.count')}</label>
          <input
            id="uuid-count"
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value))))}
            className="w-20 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
          <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} className="rounded" />
          <span>{t('components.uuid.uppercase')}</span>
        </label>
        <button
          onClick={generate}
          className="bg-purple-600 text-white font-bold py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
        >
          {t('components.uuid.generate')}
        </button>
        {uuids.length > 0 && (
          <button
            onClick={handleCopyAll}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {t('components.uuid.copyAll')}
          </button>
        )}
      </div>

      {uuids.length > 0 && (
        <div className="space-y-2">
          {uuids.map((uuid, i) => (
            <div key={i} className="flex items-center gap-2 p-2 bg-gray-100 rounded dark:bg-gray-700">
              <code className="flex-1 text-sm font-mono break-all dark:text-gray-200">{uuid}</code>
              <button
                onClick={() => handleCopy(uuid)}
                className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 flex-shrink-0"
              >
                📋
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UuidGenerator;
