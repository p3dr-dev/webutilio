import { describe, it, expect } from 'vitest';
import { useTranslations, getLangFromUrl } from '../utils';

describe('useTranslations', () => {
  it('returns a function', () => {
    const t = useTranslations('en');
    expect(typeof t).toBe('function');
  });

  it('resolves simple key', () => {
    const tEn = useTranslations('en');
    const tPt = useTranslations('pt');
    expect(tEn('site.plainTitle')).toBe('SLIT.IO - Fast & Secure Online Tools');
    expect(tPt('site.plainTitle')).toBe('SLIT.IO - Ferramentas Online Rápidas e Seguras');
  });

  it('resolves nested key', () => {
    const t = useTranslations('en');
    expect(t('nav.feedback')).toBe('Feedback');
    expect(t('nav.support')).toBe('Support the Project');
  });

  it('resolves array values', () => {
    const t = useTranslations('en');
    const phrases = t('components.loading.genericPhrases');
    expect(Array.isArray(phrases)).toBe(true);
    expect(phrases.length).toBeGreaterThan(0);
  });

  it('returns key itself if not found', () => {
    const t = useTranslations('en');
    expect(t('nonexistent.key.path')).toBe('nonexistent.key.path');
  });

  it('both languages have the same key count', () => {
    const tEn = useTranslations('en');
    const tPt = useTranslations('pt');
    const keys = [
      'site.title', 'home.searchPlaceholder', 'nav.feedback',
      'categories.images', 'donation.title', 'privacyReport.title',
      'footer.rights', 'theme.toggle', 'search.clear',
    ];
    for (const key of keys) {
      expect(tEn(key)).toBeDefined();
      expect(tPt(key)).toBeDefined();
    }
  });
});

describe('getLangFromUrl', () => {
  it('returns "en" for /en/ paths', () => {
    const url = new URL('https://slitio.vercel.app/en/tools/word-counter');
    expect(getLangFromUrl(url)).toBe('en');
  });

  it('returns "pt" for /pt/ paths', () => {
    const url = new URL('https://slitio.vercel.app/pt/ferramentas/contador-palavras');
    expect(getLangFromUrl(url)).toBe('pt');
  });

  it('defaults to "pt" for root path', () => {
    const url = new URL('https://slitio.vercel.app/');
    expect(getLangFromUrl(url)).toBe('pt');
  });
});
