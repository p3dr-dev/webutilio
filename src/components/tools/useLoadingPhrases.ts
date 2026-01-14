import { useState, useEffect } from 'react';

/**
 * Um hook customizado que retorna uma frase de loading aleatória que muda em um intervalo.
 * @param isLoading - Booleano que indica se o estado de loading está ativo.
 * @param phrases - Array de frases para usar.
 * @returns Uma string com a frase de loading atual.
 */
export function useLoadingPhrases(isLoading: boolean, phrases: string[]) {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0] || '');

  useEffect(() => {
    if (isLoading && phrases.length > 0) {
      // Define uma frase inicial aleatória imediatamente
      setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)]);

      // Configura o intervalo para mudar a frase
      const interval = setInterval(() => {
        setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
      }, 3000);

      // Limpa o intervalo quando o componente é desmontado ou isLoading se torna falso
      return () => clearInterval(interval);
    }
  }, [isLoading, phrases]);

  return currentPhrase;
}
