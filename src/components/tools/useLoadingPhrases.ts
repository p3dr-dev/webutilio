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
 * @returns Uma string com a frase de loading atual.
 */
export function useLoadingPhrases(isLoading: boolean) {
  const [currentPhrase, setCurrentPhrase] = useState(genericLoadingPhrases[0]);

  useEffect(() => {
    if (isLoading) {
      // Define uma frase inicial aleatória imediatamente
      setCurrentPhrase(genericLoadingPhrases[Math.floor(Math.random() * genericLoadingPhrases.length)]);

      // Configura o intervalo para mudar a frase
      const interval = setInterval(() => {
        setCurrentPhrase(genericLoadingPhrases[Math.floor(Math.random() * genericLoadingPhrases.length)]);
      }, 3000);

      // Limpa o intervalo quando o componente é desmontado ou isLoading se torna falso
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return currentPhrase;
}
