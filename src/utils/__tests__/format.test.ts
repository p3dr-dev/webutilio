import { describe, it, expect } from 'vitest';
import { formatBytes } from '../format';

describe('formatBytes', () => {
  it('returns "0 Bytes" for null', () => {
    expect(formatBytes(null)).toBe('0 Bytes');
  });

  it('returns "0 Bytes" for 0', () => {
    expect(formatBytes(0)).toBe('0 Bytes');
  });

  it('returns "0 Bytes" for negative values', () => {
    expect(formatBytes(-100)).toBe('0 Bytes');
  });

  it('returns "0 Bytes" for Infinity', () => {
    expect(formatBytes(Infinity)).toBe('0 Bytes');
  });

  it('returns "0 Bytes" for NaN', () => {
    expect(formatBytes(NaN)).toBe('0 Bytes');
  });

  it('formats bytes correctly', () => {
    expect(formatBytes(1)).toBe('1 Bytes');
    expect(formatBytes(500)).toBe('500 Bytes');
    expect(formatBytes(1023)).toBe('1023 Bytes');
  });

  it('formats KB correctly', () => {
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1536)).toBe('1.5 KB');
    expect(formatBytes(1048576)).toBe('1 MB');
  });

  it('formats MB correctly', () => {
    expect(formatBytes(1048576)).toBe('1 MB');
    expect(formatBytes(5242880)).toBe('5 MB');
    expect(formatBytes(1073741824)).toBe('1 GB');
  });

  it('formats GB correctly', () => {
    expect(formatBytes(1073741824)).toBe('1 GB');
    expect(formatBytes(5368709120)).toBe('5 GB');
  });

  it('caps at GB for very large values', () => {
    expect(formatBytes(1099511627776)).toBe('1024 GB');
  });
});
