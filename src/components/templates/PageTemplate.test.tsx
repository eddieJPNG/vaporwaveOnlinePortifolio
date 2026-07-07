import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PageTemplate } from './PageTemplate';

describe('PageTemplate', () => {
  it('renders children content', () => {
    render(
      <PageTemplate>
        <div>Test Content</div>
      </PageTemplate>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders Header component', () => {
    render(
      <PageTemplate>
        <div>Content</div>
      </PageTemplate>
    );
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('passes onThemeToggle to Header', () => {
    const onThemeToggle = vi.fn();
    render(
      <PageTemplate onThemeToggle={onThemeToggle} isDark={false}>
        <div>Content</div>
      </PageTemplate>
    );
    const themeButton = screen.getByLabelText('Mudar para tema escuro');
    expect(themeButton).toBeInTheDocument();
  });

  it('passes isDark to Header', () => {
    render(
      <PageTemplate isDark={true}>
        <div>Content</div>
      </PageTemplate>
    );
    expect(screen.getByLabelText('Mudar para tema claro')).toBeInTheDocument();
  });

  it('applies correct layout classes', () => {
    render(
      <PageTemplate>
        <div>Content</div>
      </PageTemplate>
    );
    const container = screen.getByText('Content').closest('div');
    expect(container?.parentElement?.parentElement).toHaveClass(
      'min-h-screen',
      'bg-vaporwave-white',
      'dark:bg-vaporwave-black'
    );
  });

  it('applies padding top to main content', () => {
    render(
      <PageTemplate>
        <div>Content</div>
      </PageTemplate>
    );
    const main = screen.getByRole('main');
    expect(main).toHaveClass('pt-16');
  });

  it('renders without optional props', () => {
    render(
      <PageTemplate>
        <div>Content</div>
      </PageTemplate>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });
});
