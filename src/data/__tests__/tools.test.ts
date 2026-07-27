import { describe, it, expect } from 'vitest';
import { tools, type ToolCategory } from '../tools';

describe('tools data', () => {
  it('has 23 tools', () => {
    expect(tools).toHaveLength(23);
  });

  it('all tools have required fields', () => {
    for (const tool of tools) {
      expect(tool.id).toBeTruthy();
      expect(tool.category).toBeTruthy();
      expect(tool.slugs.pt).toBeTruthy();
      expect(tool.slugs.en).toBeTruthy();
      expect(tool.slugs.es).toBeTruthy();
      expect(tool.slugs.fr).toBeTruthy();
      expect(tool.slugs.de).toBeTruthy();
      expect(tool.slugs.ru).toBeTruthy();
      expect(tool.icon).toBeTruthy();
      expect(tool.keywords.length).toBeGreaterThan(0);
    }
  });

  it('all tool IDs are unique', () => {
    const ids = tools.map(t => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('all PT slugs are unique', () => {
    const slugs = tools.map(t => t.slugs.pt);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all EN slugs are unique', () => {
    const slugs = tools.map(t => t.slugs.en);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all ES slugs are unique', () => {
    const slugs = tools.map(t => t.slugs.es);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all FR slugs are unique', () => {
    const slugs = tools.map(t => t.slugs.fr);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all DE slugs are unique', () => {
    const slugs = tools.map(t => t.slugs.de);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all RU slugs are unique', () => {
    const slugs = tools.map(t => t.slugs.ru);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('all categories are valid', () => {
    const validCategories: ToolCategory[] = ['images', 'files', 'text', 'converters', 'media', 'generators'];
    for (const tool of tools) {
      expect(validCategories).toContain(tool.category);
    }
  });

  it('every tool has at least 2 keywords', () => {
    for (const tool of tools) {
      expect(tool.keywords.length).toBeGreaterThanOrEqual(2);
    }
  });
});
