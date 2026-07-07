import { describe, it, expect } from 'vitest';
import { contactFormSchema } from './contact';

describe('contactFormSchema', () => {
  const validData = {
    nome: 'Edson Rocha',
    email: 'edson@example.com',
    assunto: 'Projeto',
    mensagem: 'Olá, gostaria de discutir um projeto.',
  };

  it('validates correct data', () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  describe('nome', () => {
    it('rejects empty nome', () => {
      const result = contactFormSchema.safeParse({ ...validData, nome: '' });
      expect(result.success).toBe(false);
    });

    it('rejects nome with less than 2 characters', () => {
      const result = contactFormSchema.safeParse({ ...validData, nome: 'A' });
      expect(result.success).toBe(false);
    });

    it('rejects nome with more than 100 characters', () => {
      const result = contactFormSchema.safeParse({ ...validData, nome: 'A'.repeat(101) });
      expect(result.success).toBe(false);
    });

    it('accepts nome with exactly 2 characters', () => {
      const result = contactFormSchema.safeParse({ ...validData, nome: 'AB' });
      expect(result.success).toBe(true);
    });
  });

  describe('email', () => {
    it('rejects invalid email', () => {
      const result = contactFormSchema.safeParse({ ...validData, email: 'invalid' });
      expect(result.success).toBe(false);
    });

    it('rejects email without @', () => {
      const result = contactFormSchema.safeParse({ ...validData, email: 'testexample.com' });
      expect(result.success).toBe(false);
    });

    it('rejects email without domain', () => {
      const result = contactFormSchema.safeParse({ ...validData, email: 'test@' });
      expect(result.success).toBe(false);
    });

    it('accepts valid email', () => {
      const result = contactFormSchema.safeParse({ ...validData, email: 'test@example.com' });
      expect(result.success).toBe(true);
    });
  });

  describe('assunto', () => {
    it('rejects assunto with less than 3 characters', () => {
      const result = contactFormSchema.safeParse({ ...validData, assunto: 'AB' });
      expect(result.success).toBe(false);
    });

    it('rejects assunto with more than 100 characters', () => {
      const result = contactFormSchema.safeParse({ ...validData, assunto: 'A'.repeat(101) });
      expect(result.success).toBe(false);
    });

    it('accepts assunto with exactly 3 characters', () => {
      const result = contactFormSchema.safeParse({ ...validData, assunto: 'ABC' });
      expect(result.success).toBe(true);
    });
  });

  describe('mensagem', () => {
    it('rejects mensagem with less than 10 characters', () => {
      const result = contactFormSchema.safeParse({ ...validData, mensagem: 'Short' });
      expect(result.success).toBe(false);
    });

    it('rejects mensagem with more than 1000 characters', () => {
      const result = contactFormSchema.safeParse({ ...validData, mensagem: 'A'.repeat(1001) });
      expect(result.success).toBe(false);
    });

    it('accepts mensagem with exactly 10 characters', () => {
      const result = contactFormSchema.safeParse({ ...validData, mensagem: 'A'.repeat(10) });
      expect(result.success).toBe(true);
    });
  });

  describe('honeypot', () => {
    it('accepts missing honeypot', () => {
      const { ...dataWithoutHoneypot } = validData;
      const result = contactFormSchema.safeParse(dataWithoutHoneypot);
      expect(result.success).toBe(true);
    });

    it('accepts empty honeypot', () => {
      const result = contactFormSchema.safeParse({ ...validData, honeypot: '' });
      expect(result.success).toBe(true);
    });

    it('rejects non-empty honeypot (bot detected)', () => {
      const result = contactFormSchema.safeParse({ ...validData, honeypot: 'spam' });
      expect(result.success).toBe(false);
    });
  });
});
