import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

describe('Skills', () => {
  it('renders the section title', () => {
    render(<Skills />);
    expect(screen.getByText('Habilidades')).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Back-end')).toBeInTheDocument();
    expect(screen.getByText('Front-end')).toBeInTheDocument();
    expect(screen.getByText('Blockchain')).toBeInTheDocument();
  });

  it('renders skill badges', () => {
    render(<Skills />);
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    render(<Skills />);
    const section = document.getElementById('skills');
    expect(section).toBeInTheDocument();
  });

  it('renders all skill categories from constants', () => {
    render(<Skills />);
    const categories = [
      'Back-end',
      'Banco de dados e Infra',
      'Front-end',
      'Blockchain',
      'Informática',
    ];
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});
