import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  it('renders children', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders as paragraph by default', () => {
    render(<Text>Test</Text>);
    expect(screen.getByText('Test').tagName).toBe('P');
  });

  it('renders as custom element', () => {
    render(<Text as="h1">Heading</Text>);
    expect(screen.getByText('Heading').tagName).toBe('H1');
  });

  it('applies body variant styles', () => {
    render(<Text variant="body">Body</Text>);
    expect(screen.getByText('Body').className).toContain('text-base');
  });

  it('applies caption variant styles', () => {
    render(<Text variant="caption">Caption</Text>);
    expect(screen.getByText('Caption').className).toContain('text-sm');
  });

  it('applies lead variant styles', () => {
    render(<Text variant="lead">Lead</Text>);
    expect(screen.getByText('Lead').className).toContain('text-lg');
  });
});
