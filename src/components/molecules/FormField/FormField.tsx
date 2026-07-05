import { type InputHTMLAttributes, forwardRef } from 'react';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        <label
          htmlFor={fieldId}
          className="block text-sm font-medium text-vaporwave-black dark:text-vaporwave-white mb-1"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={fieldId}
          className={`w-full px-4 py-3 bg-vaporwave-white-dark dark:bg-vaporwave-black-light border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-vaporwave-purple transition-colors ${
            error ? 'border-red-500' : ''
          } ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined
          }
          {...props}
        />
        {error && (
          <p id={`${fieldId}-error`} className="mt-1 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${fieldId}-helper`} className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
