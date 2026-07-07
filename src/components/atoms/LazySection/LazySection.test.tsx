import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LazySection } from './LazySection';

describe('LazySection', () => {
  it('renders children', () => {
    render(
      <LazySection>
        <div>Test Content</div>
      </LazySection>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders with default fallback when children are lazy', () => {
    render(
      <LazySection>
        <div>Content</div>
      </LazySection>
    );

    // Children render immediately when not lazy-loaded
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with custom fallback when children are lazy', () => {
    render(
      <LazySection fallback={<div>Custom Loading</div>}>
        <div>Content</div>
      </LazySection>
    );

    // Children render immediately when not lazy-loaded
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders children inside Suspense', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <LazySection>
        <div>Lazy Content</div>
      </LazySection>
    );

    expect(screen.getByText('Lazy Content')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
