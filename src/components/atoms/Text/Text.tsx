import { type HTMLAttributes, forwardRef } from 'react';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'caption' | 'lead';
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const variantStyles = {
  body: 'text-base text-vaporwave-black dark:text-vaporwave-white',
  caption: 'text-sm text-gray-500 dark:text-gray-400',
  lead: 'text-lg text-gray-600 dark:text-gray-300',
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = 'body', as: Component = 'p', className = '', children, ...props }, ref) => {
    return (
      <Component ref={ref} className={`${variantStyles[variant]} ${className}`} {...props}>
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
