import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Integration', () => {
  it('renders the hero section', () => {
    render(<App />);
    expect(screen.getByText('Edson Rocha da Silva')).toBeInTheDocument();
  });

  it('renders the header with navigation', () => {
    render(<App />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<App />);
    expect(screen.getByText(/Todos os direitos reservados/)).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<App />);
    const homeSection = document.getElementById('home');
    expect(homeSection).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    render(<App />);
    const themeButton = screen.getByLabelText(/Mudar para tema/);
    expect(themeButton).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<App />);
    const navLinks = screen.getAllByText('Início');
    expect(navLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('has proper document structure', () => {
    render(<App />);
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
  });
});
