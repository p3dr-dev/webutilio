import React, { useState, useEffect, useCallback } from 'react';

interface Props {
  placeholder: string;
  noResultsText: string;
  clearText: string;
}

export default function HomeSearch({ placeholder, noResultsText, clearText }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasResults, setHasResults] = useState(true);

  const handleSearch = useCallback((term: string) => {
    const cards = document.querySelectorAll('[data-tool-card]');
    const normalizedTerm = term.toLowerCase().trim();
    let matchCount = 0;

    cards.forEach((card) => {
      const searchData = (card as HTMLElement).dataset.searchTerms || '';
      const isVisible = searchData.includes(normalizedTerm);
      
      if (isVisible) {
        (card as HTMLElement).style.display = 'flex';
        matchCount++;
      } else {
        (card as HTMLElement).style.display = 'none';
      }
    });

    setHasResults(matchCount > 0);
  }, []);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 mb-12">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0" />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full rounded-2xl border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition-all hover:shadow-md"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label={placeholder}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label={clearText}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {!hasResults && (
        <div className="mt-8 text-center animate-fade-in">
          <div className="inline-block p-4 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-500 dark:text-gray-400">{noResultsText}</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-4 text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
          >
            {clearText}
          </button>
        </div>
      )}
    </div>
  );
}
