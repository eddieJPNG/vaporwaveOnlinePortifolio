import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Experience } from './Experience';

describe('Experience', () => {
  it('renders the section title', () => {
    render(<Experience />);
    expect(screen.getByText('Experiência')).toBeInTheDocument();
  });

  it('renders experience entries', () => {
    render(<Experience />);
    expect(screen.getByText('Líder de Projeto em Hackathon')).toBeInTheDocument();
    expect(screen.getByText('Desenvolvedor')).toBeInTheDocument();
  });

  it('renders company names', () => {
    render(<Experience />);
    expect(screen.getByText('Instituto Janela Para o Mundo')).toBeInTheDocument();
    expect(screen.getByText('Do Piauí para o mundo / SEDUC')).toBeInTheDocument();
  });

  it('renders experience types', () => {
    render(<Experience />);
    expect(screen.getByText('Hackathon')).toBeInTheDocument();
    expect(screen.getByText('Projeto')).toBeInTheDocument();
  });

  it('renders experience periods', () => {
    render(<Experience />);
    expect(screen.getByText('fev. 2022 — set. 2022')).toBeInTheDocument();
    expect(screen.getByText('mai. 2026 — jun. 2026')).toBeInTheDocument();
  });

  it('renders achievements', () => {
    render(<Experience />);
    expect(screen.getByText(/Liderança de grupo/)).toBeInTheDocument();
    expect(screen.getByText(/Participação no Programa/)).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    render(<Experience />);
    const section = document.getElementById('experience');
    expect(section).toBeInTheDocument();
  });

  it('renders timeline line element', () => {
    render(<Experience />);
    const timelineLine = document.querySelector('.absolute.left-4');
    expect(timelineLine).toBeInTheDocument();
  });
});
