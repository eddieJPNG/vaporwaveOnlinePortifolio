import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ProjectModal } from './ProjectModal';
import { type Project } from '../../../types';

const mockProject: Project = {
  id: 'test-project',
  titulo: 'Test Project',
  descricao: 'A test project',
  descricaoLonga: 'This is a longer description of the test project',
  tecnologias: ['React', 'TypeScript', 'Vite'],
  periodo: 'jan. 2024 - jun. 2024',
  githubUrl: 'https://github.com/test/project',
  imagem: '/images/test.png',
  destaque: true,
  categoria: 'Web',
};

describe('ProjectModal', () => {
  const onClose = vi.fn();

  beforeEach(() => {
    onClose.mockClear();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  it('does not render when project is null', () => {
    render(<ProjectModal project={null} onClose={onClose} />);
    expect(screen.queryByText('Test Project')).not.toBeInTheDocument();
  });

  it('renders project title when project is provided', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project category', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    expect(screen.getByText('Web')).toBeInTheDocument();
  });

  it('renders project period', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    expect(screen.getByText('jan. 2024 - jun. 2024')).toBeInTheDocument();
  });

  it('renders long description when provided', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    expect(
      screen.getByText('This is a longer description of the test project')
    ).toBeInTheDocument();
  });

  it('renders technologies', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    const githubLink = screen.getByText('Ver no GitHub');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/project');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('calls onClose when close button is clicked', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    const closeButton = screen.getByLabelText('Fechar modal');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Fechar button is clicked', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    const fecharButton = screen.getByText('Fechar');
    fireEvent.click(fecharButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape key is pressed', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('shows modal when project is provided', () => {
    render(<ProjectModal project={mockProject} onClose={onClose} />);
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });
});
