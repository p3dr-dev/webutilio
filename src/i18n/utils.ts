import pt from './pt.json';
import en from './en.json';

const languages = { pt, en };

export function useTranslations(lang: 'pt' | 'en') {
  return function t(key: string) {
    const keys = key.split('.');
    let result = languages[lang] as any;
    for (const k of keys) {
      if (result === undefined || result === null) {
        result = undefined; // Ensure result is undefined if any part of the path is missing
        break;
      }
      result = result?.[k];
    }
    return result || key;
  }
}
