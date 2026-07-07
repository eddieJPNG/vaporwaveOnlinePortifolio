import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the personal name', () => {
    render(<Hero />);
    expect(screen.getByText('Edson Rocha da Silva')).toBeInTheDocument();
  });

  it('renders the job title', () => {
    render(<Hero />);
    expect(screen.getByText(/Desenvolvedor Back-End Júnior/)).toBeInTheDocument();
  });

  it('renders the "Ver Projetos" CTA link', () => {
    render(<Hero />);
    const link = screen.getByText('Ver Projetos');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('renders the "Contato" CTA link', () => {
    render(<Hero />);
    const link = screen.getByText('Contato');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#contact');
  });

  it('has proper section id for navigation', () => {
    render(<Hero />);
    const section = document.getElementById('home');
    expect(section).toBeInTheDocument();
  });

  it('renders with min-h-screen class', () => {
    render(<Hero />);
    const section = document.getElementById('home');
    expect(section?.className).toContain('min-h-screen');
  });

  it('renders both CTA buttons', () => {
    render(<Hero />);
    const ctaLinks = screen.getAllByRole('link');
    expect(ctaLinks.length).toBeGreaterThanOrEqual(2);
  });
});
