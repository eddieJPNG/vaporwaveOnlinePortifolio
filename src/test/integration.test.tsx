import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn().mockResolvedValue({ status: 200 }),
  },
}));

describe('Theme Toggle Integration', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('toggles theme from light to dark', () => {
    render(<App />);
    const themeButton = screen.getByLabelText('Mudar para tema escuro');

    fireEvent.click(themeButton);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(screen.getByLabelText('Mudar para tema claro')).toBeInTheDocument();
  });

  it('toggles theme from dark to light', () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');

    render(<App />);
    const themeButton = screen.getByLabelText('Mudar para tema claro');

    fireEvent.click(themeButton);

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(screen.getByLabelText('Mudar para tema escuro')).toBeInTheDocument();
  });

  it('reads theme from localStorage on mount', () => {
    localStorage.setItem('theme', 'dark');

    render(<App />);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(screen.getByLabelText('Mudar para tema claro')).toBeInTheDocument();
  });
});

describe('Navigation Integration', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('has home section rendered', () => {
    render(<App />);

    const homeSection = document.getElementById('home');
    expect(homeSection).toBeInTheDocument();
  });

  it('has all navigation links in header', () => {
    render(<App />);

    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThanOrEqual(6);
  });
});

describe('Form Submission Integration', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders form fields', async () => {
    render(<App />);

    await waitFor(
      () => {
        expect(screen.getByLabelText('Nome')).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('validates email format in real-time', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    expect(screen.getByText(/Email inválido/)).toBeInTheDocument();
  });

  it('clears validation errors when fields are corrected', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    });

    const nameInput = screen.getByLabelText('Nome');
    fireEvent.change(nameInput, { target: { value: 'ab' } });
    fireEvent.blur(nameInput);

    expect(screen.queryByText(/Nome deve ter pelo menos 2 caracteres/)).not.toBeInTheDocument();
  });

  it('disables honeypot field from user interaction', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('textbox', { name: '' })).toBeInTheDocument();
    });

    const honeypot = screen.getByRole('textbox', { name: '' });
    expect(honeypot).toHaveClass('hidden');
  });
});

describe('Section Rendering Integration', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders hero section with correct content', () => {
    render(<App />);

    expect(screen.getByText('Edson Rocha da Silva')).toBeInTheDocument();
    expect(screen.getByText(/Desenvolvedor Back-End Júnior/)).toBeInTheDocument();
  });

  it('renders skills section', async () => {
    render(<App />);

    await waitFor(() => {
      const skillsSection = document.getElementById('skills');
      expect(skillsSection).toBeInTheDocument();
    });
  });

  it('renders projects section', async () => {
    render(<App />);

    await waitFor(() => {
      const projectsSection = document.getElementById('projects');
      expect(projectsSection).toBeInTheDocument();
    });
  });

  it('renders experience section', async () => {
    render(<App />);

    await waitFor(() => {
      const experienceSection = document.getElementById('experience');
      expect(experienceSection).toBeInTheDocument();
    });
  });

  it('renders contact section with form', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    });

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders footer with copyright', () => {
    render(<App />);

    expect(screen.getByText(/Todos os direitos reservados/)).toBeInTheDocument();
  });
});

describe('Responsive Design Integration', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders mobile menu button', () => {
    render(<App />);

    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu visibility', () => {
    render(<App />);

    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);

    expect(screen.getByText(/Modo Escuro/)).toBeInTheDocument();
  });
});

describe('External Links Integration', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders social media links in About section', async () => {
    render(<App />);

    await waitFor(() => {
      const aboutSection = document.getElementById('about');
      expect(aboutSection).toBeInTheDocument();
    });

    const aboutSection = document.getElementById('about');
    const githubLinks = aboutSection?.querySelectorAll('a[href*="github.com"]');
    const linkedinLinks = aboutSection?.querySelectorAll('a[href*="linkedin.com"]');
    const whatsappLinks = aboutSection?.querySelectorAll('a[href*="wa.me"]');

    expect(githubLinks?.length).toBeGreaterThan(0);
    expect(linkedinLinks?.length).toBeGreaterThan(0);
    expect(whatsappLinks?.length).toBeGreaterThan(0);
  });

  it('renders external links in Footer', () => {
    render(<App />);

    const footer = screen.getByRole('contentinfo');
    const githubLinks = footer.querySelectorAll('a[href*="github.com"]');
    const linkedinLinks = footer.querySelectorAll('a[href*="linkedin.com"]');

    expect(githubLinks.length).toBeGreaterThan(0);
    expect(linkedinLinks.length).toBeGreaterThan(0);
  });
});
