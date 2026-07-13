import { type ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-vaporwave-purple text-white hover:bg-vaporwave-purple-dark focus:ring-vaporwave-purple dark:bg-vaporwave-purple dark:hover:bg-vaporwave-purple-dark',
      secondary:
        'bg-transparent border-2 border-vaporwave-purple text-vaporwave-purple hover:bg-vaporwave-purple/10 focus:ring-vaporwave-purple dark:border-vaporwave-purple dark:text-vaporwave-purple dark:hover:bg-vaporwave-purple/20',
      ghost:
        'bg-transparent text-vaporwave-purple hover:bg-vaporwave-purple/10 focus:ring-vaporwave-purple dark:text-vaporwave-purple dark:hover:bg-vaporwave-purple/20',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
