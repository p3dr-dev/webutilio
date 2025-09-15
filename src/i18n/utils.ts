import en from './en.json';
import pt from './pt.json';

export const languages = { en, pt };

export function getStaticPaths() {
  return [{ params: { lang: 'en' } }, { params: { lang: 'pt' } }];
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return 'pt';
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    // Deeply nested key access
    const keys = key.split('.');
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