import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Header } from '../components/organisms/Header';
import { Hero } from '../components/organisms/Hero';
import { About } from '../components/organisms/About';
import { Skills } from '../components/organisms/Skills';
import { Projects } from '../components/organisms/Projects';
import { Experience } from '../components/organisms/Experience';
import { Contact } from '../components/organisms/Contact';
import { Footer } from '../components/organisms/Footer';
import { PageTemplate } from '../components/templates/PageTemplate';

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('Header should have no accessibility violations', async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Hero should have no accessibility violations', async () => {
    const { container } = render(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('About should have no accessibility violations', async () => {
    const { container } = render(<About />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Skills should have no accessibility violations', async () => {
    const { container } = render(<Skills />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Projects should have no accessibility violations', async () => {
    const { container } = render(<Projects />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Experience should have no accessibility violations', async () => {
    const { container } = render(<Experience />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Contact should have no accessibility violations (honeypot excluded)', async () => {
    const { container } = render(<Contact />);

    const results = await axe(container, {
      rules: {
        label: { enabled: false },
      },
    });
    expect(results).toHaveNoViolations();

    const visibleInputs = container.querySelectorAll('input:not([name="honeypot"]), textarea');
    visibleInputs.forEach((input) => {
      expect(input).toHaveAccessibleName();
    });
  });

  it('Footer should have no accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('PageTemplate should have no accessibility violations', async () => {
    const { container } = render(
      <PageTemplate>
        <div>Test Content</div>
      </PageTemplate>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Color Contrast', () => {
  it('Header should have sufficient color contrast', async () => {
    const { container } = render(<Header />);
    const results = await axe(container, {
      rules: { 'color-contrast': { enabled: true } },
    });
    expect(results).toHaveNoViolations();
  });

  it('Hero should have sufficient color contrast', async () => {
    const { container } = render(<Hero />);
    const results = await axe(container, {
      rules: { 'color-contrast': { enabled: true } },
    });
    expect(results).toHaveNoViolations();
  });

  it('Footer should have sufficient color contrast', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container, {
      rules: { 'color-contrast': { enabled: true } },
    });
    expect(results).toHaveNoViolations();
  });
});

describe('Form Accessibility', () => {
  it('visible Contact form fields should have proper labels', async () => {
    render(<Contact />);

    const nomeInput = screen.getByLabelText('Nome');
    const emailInput = screen.getByLabelText('Email');
    const assuntoInput = screen.getByLabelText('Assunto');
    const mensagemInput = screen.getByLabelText('Mensagem');

    expect(nomeInput).toHaveAccessibleName();
    expect(emailInput).toHaveAccessibleName();
    expect(assuntoInput).toHaveAccessibleName();
    expect(mensagemInput).toHaveAccessibleName();
  });
});

describe('Image Alt Text', () => {
  it('all images should have alt text', async () => {
    const { container } = render(<Hero />);
    const results = await axe(container, {
      rules: { 'image-alt': { enabled: true } },
    });
    expect(results).toHaveNoViolations();
  });
});

describe('Link Accessibility', () => {
  it('Header links should have accessible names', async () => {
    const { container } = render(<Header />);
    const results = await axe(container, {
      rules: { 'link-name': { enabled: true } },
    });
    expect(results).toHaveNoViolations();
  });

  it('Footer links should have accessible names', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container, {
      rules: { 'link-name': { enabled: true } },
    });
    expect(results).toHaveNoViolations();
  });
});

describe('ARIA Attributes', () => {
  it('Header should have valid ARIA attributes', async () => {
    const { container } = render(<Header />);
    const results = await axe(container, {
      rules: {
        'aria-valid-attr': { enabled: true },
        'aria-valid-attr-value': { enabled: true },
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Contact should have valid ARIA attributes (honeypot excluded)', async () => {
    const { container } = render(<Contact />);
    const results = await axe(container, {
      rules: {
        'aria-valid-attr': { enabled: true },
        'aria-valid-attr-value': { enabled: true },
        label: { enabled: false },
      },
    });
    expect(results).toHaveNoViolations();
  });
});
