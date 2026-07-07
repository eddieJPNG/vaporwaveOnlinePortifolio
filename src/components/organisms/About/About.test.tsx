import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About', () => {
  it('renders the section title', () => {
    render(<About />);
    expect(screen.getByText('Sobre Mim')).toBeInTheDocument();
  });

  it('renders the personal summary', () => {
    render(<About />);
    expect(screen.getByText(/Desenvolvedor Back-End com foco em Python/)).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(<About />);
    const link = screen.getByText('GitHub');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/eddieJPNG');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders LinkedIn link', () => {
    render(<About />);
    const link = screen.getByText('LinkedIn');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/edson-rocha-da-silva-300030379');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders WhatsApp link', () => {
    render(<About />);
    const link = screen.getByText('WhatsApp');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://wa.me/qr/OZ354YNZCNIAG1');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('has proper section id for navigation', () => {
    render(<About />);
    const section = document.getElementById('about');
    expect(section).toBeInTheDocument();
  });

  it('renders all social links', () => {
    render(<About />);
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThanOrEqual(3);
  });
});
