import { describe, it, expect } from 'vitest';
import {
  SITE_CONFIG,
  COLORS,
  BREAKPOINTS,
  NAV_ITEMS,
  SKILL_CATEGORIES,
  SOCIAL_LINKS,
  ANIMATION_DURATIONS,
} from './constants';

describe('SITE_CONFIG', () => {
  it('has required properties', () => {
    expect(SITE_CONFIG).toHaveProperty('title');
    expect(SITE_CONFIG).toHaveProperty('description');
    expect(SITE_CONFIG).toHaveProperty('url');
    expect(SITE_CONFIG).toHaveProperty('author');
    expect(SITE_CONFIG).toHaveProperty('email');
  });

  it('has valid URL', () => {
    expect(SITE_CONFIG.url).toMatch(/^https?:\/\//);
  });

  it('has valid email', () => {
    expect(SITE_CONFIG.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});

describe('COLORS', () => {
  it('has vaporwave color palette', () => {
    expect(COLORS.purple).toBe('#9b59b6');
    expect(COLORS.pink).toBe('#e91e63');
    expect(COLORS.cyan).toBe('#00ffff');
    expect(COLORS.black).toBe('#000000');
    expect(COLORS.white).toBe('#ffffff');
  });

  it('all colors are valid hex', () => {
    Object.values(COLORS).forEach((color) => {
      expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });
  });
});

describe('BREAKPOINTS', () => {
  it('has responsive breakpoints', () => {
    expect(BREAKPOINTS.sm).toBe('320px');
    expect(BREAKPOINTS.md).toBe('768px');
    expect(BREAKPOINTS.lg).toBe('1024px');
    expect(BREAKPOINTS.xl).toBe('1440px');
  });
});

describe('NAV_ITEMS', () => {
  it('has all navigation items', () => {
    expect(NAV_ITEMS).toHaveLength(6);
  });

  it('each item has label and href', () => {
    NAV_ITEMS.forEach((item) => {
      expect(item).toHaveProperty('label');
      expect(item).toHaveProperty('href');
      expect(item.href).toMatch(/^#/);
    });
  });

  it('has home item first', () => {
    expect(NAV_ITEMS[0].href).toBe('#home');
  });
});

describe('SKILL_CATEGORIES', () => {
  it('has all skill categories', () => {
    expect(SKILL_CATEGORIES).toContain('Back-end');
    expect(SKILL_CATEGORIES).toContain('Front-end');
    expect(SKILL_CATEGORIES).toContain('Blockchain');
  });
});

describe('SOCIAL_LINKS', () => {
  it('has all social links', () => {
    expect(SOCIAL_LINKS).toHaveProperty('github');
    expect(SOCIAL_LINKS).toHaveProperty('linkedin');
    expect(SOCIAL_LINKS).toHaveProperty('whatsapp');
  });

  it('all links are valid URLs', () => {
    Object.values(SOCIAL_LINKS).forEach((link) => {
      expect(link).toMatch(/^https?:\/\//);
    });
  });
});

describe('ANIMATION_DURATIONS', () => {
  it('has animation durations', () => {
    expect(ANIMATION_DURATIONS.fast).toBe(150);
    expect(ANIMATION_DURATIONS.normal).toBe(300);
    expect(ANIMATION_DURATIONS.slow).toBe(500);
  });

  it('fast is less than normal', () => {
    expect(ANIMATION_DURATIONS.fast).toBeLessThan(ANIMATION_DURATIONS.normal);
  });

  it('normal is less than slow', () => {
    expect(ANIMATION_DURATIONS.normal).toBeLessThan(ANIMATION_DURATIONS.slow);
  });
});
