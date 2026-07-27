import { describe, it, expect } from 'vitest';
import { DONATION_LINKS } from '../donations';

describe('DONATION_LINKS', () => {
  it('has pixKey field', () => {
    expect(DONATION_LINKS.pixKey).toBeDefined();
    expect(typeof DONATION_LINKS.pixKey).toBe('string');
    expect(DONATION_LINKS.pixKey.length).toBeGreaterThan(0);
  });

  it('has paypal field', () => {
    expect(DONATION_LINKS.paypal).toBeDefined();
  });

  it('has stripe field', () => {
    expect(DONATION_LINKS.stripe).toBeDefined();
  });

  it('has kofi field', () => {
    expect(DONATION_LINKS.kofi).toBeDefined();
  });

  it('has crypto field', () => {
    expect(DONATION_LINKS.crypto).toBeDefined();
  });

  describe('crypto', () => {
    it('has btc address', () => {
      expect(DONATION_LINKS.crypto.btc).toBeDefined();
      expect(typeof DONATION_LINKS.crypto.btc).toBe('string');
    });

    it('has eth address', () => {
      expect(DONATION_LINKS.crypto.eth).toBeDefined();
      expect(typeof DONATION_LINKS.crypto.eth).toBe('string');
    });

    it('has usdt address', () => {
      expect(DONATION_LINKS.crypto.usdt).toBeDefined();
      expect(typeof DONATION_LINKS.crypto.usdt).toBe('string');
    });
  });

  describe('pixKey format', () => {
    it('is a valid UUID format', () => {
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
      expect(DONATION_LINKS.pixKey).toMatch(uuidRegex);
    });
  });

  describe('URLs are valid', () => {
    it('paypal is a valid URL', () => {
      expect(() => new URL(DONATION_LINKS.paypal)).not.toThrow();
      expect(DONATION_LINKS.paypal).toMatch(/^https?:\/\//);
    });

    it('stripe is a valid URL', () => {
      expect(() => new URL(DONATION_LINKS.stripe)).not.toThrow();
      expect(DONATION_LINKS.stripe).toMatch(/^https?:\/\//);
    });

    it('kofi is a valid URL', () => {
      expect(() => new URL(DONATION_LINKS.kofi)).not.toThrow();
      expect(DONATION_LINKS.kofi).toMatch(/^https?:\/\//);
    });
  });

  describe('eth address format', () => {
    it('starts with 0x', () => {
      expect(DONATION_LINKS.crypto.eth).toMatch(/^0x/);
    });

    it('has 42 characters (0x + 40 hex)', () => {
      expect(DONATION_LINKS.crypto.eth).toHaveLength(42);
    });
  });
});
