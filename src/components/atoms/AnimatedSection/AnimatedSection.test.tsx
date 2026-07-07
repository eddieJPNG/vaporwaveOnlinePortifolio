import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AnimatedSection } from './AnimatedSection';

vi.mock('../../../hooks/useReducedMotion', () => ({
  useReducedMotion: () => false,
}));

describe('AnimatedSection', () => {
  it('renders children', () => {
    render(
      <AnimatedSection>
        <div>Animated Content</div>
      </AnimatedSection>
    );

    expect(screen.getByText('Animated Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AnimatedSection className="custom-class">
        <div>Content</div>
      </AnimatedSection>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with default className', () => {
    const { container } = render(
      <AnimatedSection>
        <div>Content</div>
      </AnimatedSection>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders multiple children', () => {
    render(
      <AnimatedSection>
        <div>First Child</div>
        <div>Second Child</div>
      </AnimatedSection>
    );

    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
  });
});
