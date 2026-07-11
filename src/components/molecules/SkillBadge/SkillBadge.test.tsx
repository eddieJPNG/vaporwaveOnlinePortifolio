import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillBadge } from './SkillBadge';

describe('SkillBadge', () => {
  it('renders with name', () => {
    render(<SkillBadge name="React" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(<SkillBadge name="React" icon="⚛️" />);
    expect(screen.getByText('⚛️')).toBeInTheDocument();
  });

  it('renders with iconPath as img', () => {
    render(<SkillBadge name="React" iconPath="/test-icon.png" />);
    const img = screen.getByRole('img', { name: 'React' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-icon.png');
  });

  it('prefers iconPath over icon', () => {
    render(<SkillBadge name="React" icon="⚛️" iconPath="/test-icon.png" />);
    const img = screen.getByRole('img', { name: 'React' });
    expect(img).toBeInTheDocument();
    expect(screen.queryByText('⚛️')).not.toBeInTheDocument();
  });

  it('applies level styles', () => {
    render(<SkillBadge name="React" level="Avançado" />);
    expect(screen.getByText('React').parentElement).toHaveClass('bg-vaporwave-cyan/10');
  });

  it('has correct title with level', () => {
    render(<SkillBadge name="React" level="Intermediário" />);
    expect(screen.getByText('React').parentElement).toHaveAttribute(
      'title',
      'React - Intermediário'
    );
  });

  it('has correct title without level', () => {
    render(<SkillBadge name="React" />);
    expect(screen.getByText('React').parentElement).toHaveAttribute('title', 'React');
  });
});
