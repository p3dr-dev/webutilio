export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de';

export const pageSlugs: Record<string, Record<Language, string>> = {
  about: { en: 'about', pt: 'sobre', es: 'sobre', fr: 'a-propos', de: 'ueber-uns' },
  privacy: { en: 'privacy-policy', pt: 'politica-privacidade', es: 'politica-privacidad', fr: 'politique-confidentialite', de: 'datenschutzrichtlinie' },
  support: { en: 'support', pt: 'apoie', es: 'apoyar', fr: 'soutenir', de: 'unterstuetzen' },
  feedback: { en: 'feedback', pt: 'feedback', es: 'feedback', fr: 'retour', de: 'feedback' },
};

export const toolBasePath: Record<Language, string> = {
  en: 'tools',
  pt: 'ferramentas',
  es: 'herramientas',
  fr: 'outils',
  de: 'werkzeuge',
};

export const langLocale: Record<Language, string> = {
  en: 'en-US',
  pt: 'pt-BR',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
};

export const ogLocale: Record<Language, string> = {
  en: 'en_US',
  pt: 'pt_BR',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
};

export const allLangs: Language[] = ['en', 'pt', 'es', 'fr', 'de'];

export function getPageSlug(page: keyof typeof pageSlugs, lang: Language): string {
  return pageSlugs[page][lang];
}
