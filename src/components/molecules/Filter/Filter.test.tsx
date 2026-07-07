import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Filter } from './Filter';

describe('Filter', () => {
  const categories = ['Web', 'Blockchain', 'Mobile'] as const;
  const onFilterChange = vi.fn();

  it('renders Todos button', () => {
    render(<Filter categories={categories} activeFilter="Todos" onFilterChange={onFilterChange} />);
    expect(screen.getByText('Todos')).toBeInTheDocument();
  });

  it('renders all category buttons', () => {
    render(<Filter categories={categories} activeFilter="Todos" onFilterChange={onFilterChange} />);
    expect(screen.getByText('Web')).toBeInTheDocument();
    expect(screen.getByText('Blockchain')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
  });

  it('calls onFilterChange when Todos is clicked', () => {
    render(<Filter categories={categories} activeFilter="Web" onFilterChange={onFilterChange} />);
    fireEvent.click(screen.getByText('Todos'));
    expect(onFilterChange).toHaveBeenCalledWith('Todos');
  });

  it('calls onFilterChange when category is clicked', () => {
    render(<Filter categories={categories} activeFilter="Todos" onFilterChange={onFilterChange} />);
    fireEvent.click(screen.getByText('Blockchain'));
    expect(onFilterChange).toHaveBeenCalledWith('Blockchain');
  });

  it('highlights active filter', () => {
    render(<Filter categories={categories} activeFilter="Web" onFilterChange={onFilterChange} />);
    const webButton = screen.getByText('Web');
    expect(webButton).toHaveClass('bg-vaporwave-purple');
  });

  it('does not highlight inactive filters', () => {
    render(<Filter categories={categories} activeFilter="Web" onFilterChange={onFilterChange} />);
    const blockchainButton = screen.getByText('Blockchain');
    expect(blockchainButton).not.toHaveClass('bg-vaporwave-purple');
  });
});
