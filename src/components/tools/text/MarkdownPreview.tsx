import React, { useState } from 'react';
import { useTranslations } from '../../../i18n/utils';

function renderMarkdown(text: string): string {
  return text
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-purple-600 underline">$1</a>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>');
}

const MarkdownPreview: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  const [input, setInput] = useState('# Hello World\n\nThis is **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n`code example`');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="md-input" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{t('components.markdown.input')}</label>
          <textarea
            id="md-input"
            className="w-full p-3 border border-gray-300 rounded-md font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            style={{ resize: 'vertical', minHeight: '20rem' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">{t('components.markdown.preview')}</label>
          <div
            className="w-full p-3 border border-gray-300 rounded-md prose dark:prose-invert dark:bg-gray-700 dark:border-gray-600 min-h-[20rem] overflow-auto text-sm"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(input) }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreview;
