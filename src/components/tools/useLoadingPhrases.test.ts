import { renderHook, act } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { useLoadingPhrases } from './useLoadingPhrases';

test('useLoadingPhrases should return a phrase when loading', () => {
  vi.useFakeTimers(); // Usa timers falsos para controlar o setInterval

  const phrases = ['Testing...', 'Still testing...'];
  const { result, rerender } = renderHook(
    ({ isLoading }) => useLoadingPhrases(isLoading, phrases),
    { initialProps: { isLoading: true } }
  );

  // Deve retornar uma das frases imediatamente
  expect(phrases).toContain(result.current);

  // Avança o tempo em 3 segundos
  act(() => {
    vi.advanceTimersByTime(3000);
  });

  // A frase pode ter mudado, mas ainda deve ser uma das frases da lista
  expect(phrases).toContain(result.current);

  // Quando isLoading se torna falso, não deve fazer mais nada
  rerender({ isLoading: false });
  const phraseAfterStop = result.current;

  act(() => {
    vi.advanceTimersByTime(3000);
  });

  // A frase não deve ter mudado após isLoading se tornar false
  expect(result.current).toBe(phraseAfterStop);

  vi.useRealTimers(); // Restaura os timers reais
});

test('useLoadingPhrases should use generic phrases if none are provided', () => {
  const { result } = renderHook(() => useLoadingPhrases(true, []));

  // A frase não deve estar vazia
  expect(result.current).not.toBe('');
  // A frase deve ser uma string
  expect(typeof result.current).toBe('string');
});
