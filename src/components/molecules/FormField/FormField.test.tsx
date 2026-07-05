import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormField } from './FormField';

describe('FormField', () => {
  it('renders with label', () => {
    render(<FormField label="Name" />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<FormField label="Email" error="Required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Required');
  });

  it('displays helper text', () => {
    render(<FormField label="Password" helperText="At least 8 characters" />);
    expect(screen.getByText('At least 8 characters')).toBeInTheDocument();
  });

  it('does not show helper text when error', () => {
    render(<FormField label="Password" helperText="At least 8 characters" error="Too short" />);
    expect(screen.queryByText('At least 8 characters')).not.toBeInTheDocument();
  });

  it('sets aria-invalid when error', () => {
    render(<FormField label="Email" error="Invalid" />);
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
  });
});
