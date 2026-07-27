import { describe, it, expect } from 'vitest';
import {
  pageSlugs,
  toolBasePath,
  langLocale,
  ogLocale,
  allLangs,
  getPageSlug,
  type Language,
} from '../slugs';

const ALL_LANGUAGES: Language[] = ['en', 'pt', 'es', 'fr', 'de', 'ru'];

describe('slugs library', () => {
  describe('allLangs', () => {
    it('has 6 languages', () => {
      expect(allLangs).toHaveLength(6);
    });

    it('contains exactly the expected languages', () => {
      expect(allLangs).toEqual(ALL_LANGUAGES);
    });
  });

  describe('pageSlugs', () => {
    it('all languages are present for every page', () => {
      for (const [page, slugs] of Object.entries(pageSlugs)) {
        for (const lang of ALL_LANGUAGES) {
          expect(slugs[lang], `Missing lang "${lang}" in pageSlugs["${page}"]`).toBeTruthy();
        }
      }
    });

    it('has known pages', () => {
      const expectedPages = ['about', 'privacy', 'support', 'feedback'];
      for (const page of expectedPages) {
        expect(pageSlugs[page]).toBeDefined();
      }
    });

    it('all page slugs are non-empty strings', () => {
      for (const [page, slugs] of Object.entries(pageSlugs)) {
        for (const [lang, slug] of Object.entries(slugs)) {
          expect(typeof slug).toBe('string');
          expect(slug.length).toBeGreaterThan(0);
        }
      }
    });
  });

  describe('toolBasePath', () => {
    it('all languages are present', () => {
      for (const lang of ALL_LANGUAGES) {
        expect(toolBasePath[lang], `Missing lang "${lang}" in toolBasePath`).toBeTruthy();
      }
    });

    it('all values are non-empty strings', () => {
      for (const [lang, path] of Object.entries(toolBasePath)) {
        expect(typeof path).toBe('string');
        expect(path.length).toBeGreaterThan(0);
      }
    });
  });

  describe('getPageSlug', () => {
    it('returns correct slug for known page and lang', () => {
      expect(getPageSlug('about', 'en')).toBe('about');
      expect(getPageSlug('about', 'pt')).toBe('sobre');
      expect(getPageSlug('privacy', 'de')).toBe('datenschutzrichtlinie');
      expect(getPageSlug('feedback', 'ru')).toBe('obratnaya-svyaz');
    });

    it('returns values consistent with pageSlugs', () => {
      for (const [page, slugs] of Object.entries(pageSlugs)) {
        for (const lang of ALL_LANGUAGES) {
          expect(getPageSlug(page as keyof typeof pageSlugs, lang)).toBe(slugs[lang]);
        }
      }
    });
  });

  describe('langLocale', () => {
    it('all languages are present', () => {
      for (const lang of ALL_LANGUAGES) {
        expect(langLocale[lang], `Missing lang "${lang}" in langLocale`).toBeTruthy();
      }
    });

    it('all locales follow xx-XX pattern', () => {
      for (const [lang, locale] of Object.entries(langLocale)) {
        expect(locale).toMatch(/^[a-z]{2}-[A-Z]{2}$/);
      }
    });
  });

  describe('ogLocale', () => {
    it('all languages are present', () => {
      for (const lang of ALL_LANGUAGES) {
        expect(ogLocale[lang], `Missing lang "${lang}" in ogLocale`).toBeTruthy();
      }
    });

    it('all locales follow xx_XX pattern', () => {
      for (const [lang, locale] of Object.entries(ogLocale)) {
        expect(locale).toMatch(/^[a-z]{2}_[A-Z]{2}$/);
      }
    });
  });
});
