import { type HTMLAttributes, type ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  ...props
}: CardProps) => {
  const baseStyles = 'rounded-lg transition-shadow';

  const variants = {
    default: 'bg-white dark:bg-vaporwave-black-light border border-gray-200 dark:border-gray-700',
    outlined: 'bg-transparent border-2 border-vaporwave-purple',
    elevated: 'bg-white dark:bg-vaporwave-black-light shadow-lg hover:shadow-xl',
  };

  const paddings = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
