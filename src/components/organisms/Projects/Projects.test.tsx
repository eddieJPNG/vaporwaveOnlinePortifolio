import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Projects } from './Projects';

describe('Projects', () => {
  it('renders the section title', () => {
    render(<Projects />);
    expect(screen.getByText('Projetos')).toBeInTheDocument();
  });

  it('renders project cards', () => {
    render(<Projects />);
    expect(screen.getByText('Webbb3')).toBeInTheDocument();
    expect(screen.getByText('Nft Hub')).toBeInTheDocument();
    expect(screen.getByText('ConvMonitor')).toBeInTheDocument();
  });

  it('renders filter buttons', () => {
    render(<Projects />);
    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.getByText('Blockchain')).toBeInTheDocument();
    expect(screen.getByText('Web')).toBeInTheDocument();
  });

  it('filters projects when filter is clicked', () => {
    render(<Projects />);
    const blockchainFilter = screen.getByText('Blockchain');
    fireEvent.click(blockchainFilter);

    expect(screen.getByText('Webbb3')).toBeInTheDocument();
    expect(screen.getByText('Nft Hub')).toBeInTheDocument();
    expect(screen.queryByText('ConvMonitor')).not.toBeInTheDocument();
  });

  it('shows all projects when "Todos" is clicked', () => {
    render(<Projects />);
    const blockchainFilter = screen.getByText('Blockchain');
    fireEvent.click(blockchainFilter);
    const todosFilter = screen.getByText('Todos');
    fireEvent.click(todosFilter);

    expect(screen.getByText('Webbb3')).toBeInTheDocument();
    expect(screen.getByText('Nft Hub')).toBeInTheDocument();
    expect(screen.getByText('ConvMonitor')).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    render(<Projects />);
    const section = document.getElementById('projects');
    expect(section).toBeInTheDocument();
  });

  it('renders project technologies', () => {
    render(<Projects />);
    expect(screen.getByText('Solidity')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('opens project modal when Enter key is pressed', () => {
    render(<Projects />);
    const projectCard = screen.getByText('Webbb3').closest('[role="button"]');
    expect(projectCard).toBeInTheDocument();

    fireEvent.keyDown(projectCard!, { key: 'Enter' });
    expect(screen.getByText('Fechar')).toBeInTheDocument();
  });

  it('opens project modal when Space key is pressed', () => {
    render(<Projects />);
    const projectCard = screen.getByText('Webbb3').closest('[role="button"]');
    expect(projectCard).toBeInTheDocument();

    fireEvent.keyDown(projectCard!, { key: ' ' });
    expect(screen.getByText('Fechar')).toBeInTheDocument();
  });

  it('does not open modal for other keys', () => {
    render(<Projects />);
    const projectCard = screen.getByText('Webbb3').closest('[role="button"]');
    expect(projectCard).toBeInTheDocument();

    fireEvent.keyDown(projectCard!, { key: 'Tab' });
    expect(screen.queryByText('Fechar')).not.toBeInTheDocument();
  });
});
