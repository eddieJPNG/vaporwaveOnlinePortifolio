import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MenuItem } from './MenuItem';

describe('MenuItem', () => {
  it('renders with label', () => {
    render(<MenuItem label="Home" href="#home" />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(<MenuItem label="About" href="#about" />);
    expect(screen.getByText('About')).toHaveAttribute('href', '#about');
  });

  it('applies active styles when isActive', () => {
    render(<MenuItem label="Home" href="#home" isActive />);
    expect(screen.getByText('Home')).toHaveClass('text-vaporwave-cyan');
  });

  it('sets aria-current when active', () => {
    render(<MenuItem label="Home" href="#home" isActive />);
    expect(screen.getByText('Home')).toHaveAttribute('aria-current', 'page');
  });

  it('does not set aria-current when inactive', () => {
    render(<MenuItem label="Home" href="#home" />);
    expect(screen.getByText('Home')).not.toHaveAttribute('aria-current');
  });
});
