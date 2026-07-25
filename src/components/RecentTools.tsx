import React, { useEffect, useState } from 'react';
import { tools, type Language } from '../data/tools';
import { useTranslations } from '../i18n/utils';
import { toolBasePath } from '../lib/slugs';

// Helper to get tool by id
const getToolById = (id: string) => tools.find(t => t.id === id);

const RecentTools: React.FC<{ lang: Language }> = ({ lang }) => {
  const [recentIds, setRecentIds] = useState<string[]>([]);
  const t = useTranslations(lang);

  useEffect(() => {
    try {
      const history = JSON.parse(localStorage.getItem('tool-history') || '[]');
      setRecentIds(history.slice(0, 3)); // Only show top 3
    } catch {
      setRecentIds([]);
    }
  }, []);

  if (recentIds.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
          <span className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg mr-3 text-lg">🕒</span>
          {t('recentTools.title')}
        </h2>
        <div className="h-px flex-grow mx-4 bg-gray-100 dark:bg-gray-800 hidden sm:block"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentIds.map(id => {
          const tool = getToolById(id);
          if (!tool) return null;
          
          const title = t(`tools.${tool.id}.title`);
          const slug = tool.slugs[lang];
          const basePath = toolBasePath[lang];

          return (
            <a
              key={id}
              href={`/${lang}/${basePath}/${slug}`}
              className="group flex items-center p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:border-purple-200 dark:hover:border-purple-900/50 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-700 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 rounded-lg text-xl mr-3 transition-colors">
                {tool.icon}
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 truncate transition-colors text-sm">
                {title}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default RecentTools;
