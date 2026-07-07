import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('renders the portfolio title', () => {
    render(<Header />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('renders all navigation items in desktop', () => {
    render(<Header />);
    const navItems = screen.getAllByText('Início');
    expect(navItems.length).toBeGreaterThanOrEqual(1);
  });

  it('calls onThemeToggle when theme button is clicked', () => {
    const onThemeToggle = vi.fn();
    render(<Header onThemeToggle={onThemeToggle} />);

    const themeButton = screen.getByLabelText('Mudar para tema escuro');
    fireEvent.click(themeButton);

    expect(onThemeToggle).toHaveBeenCalledTimes(1);
  });

  it('shows sun icon when isDark is true', () => {
    render(<Header isDark={true} />);
    expect(screen.getByLabelText('Mudar para tema claro')).toBeInTheDocument();
  });

  it('shows moon icon when isDark is false', () => {
    render(<Header isDark={false} />);
    expect(screen.getByLabelText('Mudar para tema escuro')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Header />);

    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);

    // Mobile menu should be visible
    expect(screen.getByText('🌙 Modo Escuro')).toBeInTheDocument();
  });

  it('shows Modo Claro in mobile menu when isDark is true', () => {
    render(<Header isDark={true} />);

    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);

    expect(screen.getByText('☀️ Modo Claro')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('links have correct href attributes', () => {
    render(<Header />);

    const inicioLinks = screen.getAllByText('Início');
    inicioLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#home');
    });
  });
});
