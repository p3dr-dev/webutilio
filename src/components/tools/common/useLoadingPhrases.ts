import { useState, useEffect, useRef } from 'react';

/**
 * Um hook customizado que retorna uma frase de loading aleatória que muda em um intervalo.
 * @param isLoading - Booleano que indica se o estado de loading está ativo.
 * @param phrases - Array de frases para usar.
 * @returns Uma string com a frase de loading atual.
 */
export function useLoadingPhrases(isLoading: boolean, phrases: string[]) {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0] || '');
  const phrasesRef = useRef(phrases);
  phrasesRef.current = phrases;

  useEffect(() => {
    if (isLoading && phrasesRef.current.length > 0) {
      setCurrentPhrase(phrasesRef.current[Math.floor(Math.random() * phrasesRef.current.length)]);

      const interval = setInterval(() => {
        setCurrentPhrase(phrasesRef.current[Math.floor(Math.random() * phrasesRef.current.length)]);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return currentPhrase;
}
