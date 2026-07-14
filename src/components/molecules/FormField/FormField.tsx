import { type InputHTMLAttributes, forwardRef } from 'react';
import { Input } from '../../atoms';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        <Input
          ref={ref}
          id={fieldId}
          label={label}
          error={error}
          className={className}
          aria-describedby={
            error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined
          }
          {...props}
        />
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
