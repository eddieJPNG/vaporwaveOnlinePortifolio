import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Contact } from './Contact';

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}));

describe('Contact', () => {
  it('renders the section title', () => {
    render(<Contact />);
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('renders form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Assunto')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensagem')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<Contact />);
    expect(screen.getByText('Enviar Mensagem')).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    render(<Contact />);
    const section = document.getElementById('contact');
    expect(section).toBeInTheDocument();
  });

  it('renders honeypot field', () => {
    render(<Contact />);
    const honeypot = screen.getByRole('textbox', { name: '' });
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveClass('hidden');
  });

  it('renders email address info', () => {
    render(<Contact />);
    expect(screen.getByText(/rochaedsonn12@gmail.com/)).toBeInTheDocument();
  });

  it('validates required fields on submit', async () => {
    render(<Contact />);
    const submitButton = screen.getByText('Enviar Mensagem');
    fireEvent.click(submitButton);

    expect(screen.getByText(/Nome deve ter pelo menos 2 caracteres/)).toBeInTheDocument();
    expect(screen.getByText(/Email inválido/)).toBeInTheDocument();
    expect(screen.getByText(/Assunto deve ter pelo menos 3 caracteres/)).toBeInTheDocument();
    expect(screen.getByText(/Mensagem deve ter pelo menos 10 caracteres/)).toBeInTheDocument();
  });

  it('validates email format', async () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    expect(screen.getByText(/Email inválido/)).toBeInTheDocument();
  });
});
