import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    render(<Card>Default Card</Card>);
    const card = screen.getByText('Default Card').closest('div');
    expect(card).toBeInTheDocument();
  });

  it('renders with elevated variant', () => {
    render(<Card variant="elevated">Elevated</Card>);
    const card = screen.getByText('Elevated').closest('div');
    expect(card).toBeInTheDocument();
  });

  it('renders with large padding', () => {
    render(<Card padding="lg">Padded</Card>);
    const card = screen.getByText('Padded').closest('div');
    expect(card).toBeInTheDocument();
  });
});
