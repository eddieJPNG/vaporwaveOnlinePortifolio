import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders with name as title', () => {
    const { container } = render(<Icon name="test-icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg?.querySelector('title')).toHaveTextContent('test-icon');
  });

  it('applies correct size styles', () => {
    const { container } = render(<Icon name="test" size="lg" />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('class')).toContain('w-8 h-8');
  });

  it('applies correct color styles', () => {
    const { container } = render(<Icon name="test" color="cyan" />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('class')).toContain('text-vaporwave-cyan');
  });

  it('has aria-hidden attribute', () => {
    const { container } = render(<Icon name="test" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
});
