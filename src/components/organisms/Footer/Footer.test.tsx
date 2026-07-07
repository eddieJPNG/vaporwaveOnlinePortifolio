import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument();
  });

  it('renders author name', () => {
    render(<Footer />);
    expect(screen.getByText(/Edson Rocha da Silva/)).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(<Footer />);
    const link = screen.getByText('GitHub');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/eddieJPNG');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders LinkedIn link', () => {
    render(<Footer />);
    const link = screen.getByText('LinkedIn');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/edson-rocha-da-silva-300030379');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders Email link', () => {
    render(<Footer />);
    const link = screen.getByText('Email');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'mailto:rochaedsonn12@gmail.com');
  });

  it('renders footer element', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders all social links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(3);
  });
});
