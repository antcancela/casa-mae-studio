import { describe, expect, test } from 'bun:test';
import { getCanonicalUrl } from './seo-url';

describe('primary page URLs', () => {
  test('uses ateliercasamae.pt for each public page', () => {
    for (const path of ['/', '/about', '/work', '/contact', '/links', '/consultoria', '/consultoria/en']) {
      expect(getCanonicalUrl(path)).toBe(`https://ateliercasamae.pt${path}`);
    }
  });

  test('does not identify tracking or hash URLs as separate pages', () => {
    expect(getCanonicalUrl('/consultoria/?utm_source=instagram#price')).toBe('https://ateliercasamae.pt/consultoria');
  });
});