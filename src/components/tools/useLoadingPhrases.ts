import { useState, useEffect } from 'react';

// Frases genéricas que se aplicam a várias ferramentas
const genericLoadingPhrases = [
  "Aguarde um momento, a mágica está acontecendo...",
  "Processando seus arquivos...",
  "Quase lá! Tomando um café enquanto processamos...",
  "Trabalhando duro para deixar tudo perfeito.",
  "Só mais um instante...",
  "Estamos fazendo o nosso melhor!",
  "Contando os pixels... são muitos!",
  "Compactando, criptografando, convertendo... ufa!",
  "Seus arquivos estão em boas mãos."
];

/**
 * Um hook customizado que retorna uma frase de loading aleatória que muda em um intervalo.
 * @param isLoading - Booleano que indica se o estado de loading está ativo.
 * @param phrases - Array opcional de frases para usar em vez das genéricas.
 * @returns Uma string com a frase de loading atual.
 */
export function useLoadingPhrases(isLoading: boolean, phrases?: string[]) {
  const phraseList = phrases && phrases.length > 0 ? phrases : genericLoadingPhrases;
  const [currentPhrase, setCurrentPhrase] = useState(phraseList[0]);

  useEffect(() => {
    if (isLoading) {
      // Define uma frase inicial aleatória imediatamente
      setCurrentPhrase(phraseList[Math.floor(Math.random() * phraseList.length)]);

      // Configura o intervalo para mudar a frase
      const interval = setInterval(() => {
        setCurrentPhrase(phraseList[Math.floor(Math.random() * phraseList.length)]);
      }, 3000);

      // Limpa o intervalo quando o componente é desmontado ou isLoading se torna falso
      return () => clearInterval(interval);
    }
  }, [isLoading, phraseList]);

  return currentPhrase;
}
