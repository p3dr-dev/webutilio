import en from './en.json';
import pt from './pt.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';

export const languages = { en, pt, es, fr, de };

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'pt' } },
    { params: { lang: 'es' } },
    { params: { lang: 'fr' } },
    { params: { lang: 'de' } },
  ];
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return 'pt';
}

export function useTranslations(lang: keyof typeof languages) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function t(key: string): any {
    // Deeply nested key access
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = languages[lang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key itself if not found
      }
    }
    return value;
  };
}