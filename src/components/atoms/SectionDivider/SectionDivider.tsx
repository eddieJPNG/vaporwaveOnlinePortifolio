import { type HTMLAttributes, forwardRef } from 'react';
import pointBg from '../../../assets/backgrounds/point.png';
import romanBg from '../../../assets/decorative/roman.webp';

export interface SectionDividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'point' | 'roman' | 'line';
}

const variantStyles = {
  point: 'py-4',
  roman: 'py-6',
  line: 'py-2',
};

export const SectionDivider = forwardRef<HTMLDivElement, SectionDividerProps>(
  ({ variant = 'point', className = '', ...props }, ref) => {
    if (variant === 'line') {
      return (
        <div
          ref={ref}
          className={`w-full h-px bg-gradient-to-r from-transparent via-vaporwave-purple/30 to-transparent ${className}`}
          {...props}
        />
      );
    }

    const imageSrc = variant === 'roman' ? romanBg : pointBg;
    const imageAlt = variant === 'roman' ? 'Coluna decorativa' : 'Ponto decorativo';

    return (
      <div
        ref={ref}
        className={`flex justify-center items-center ${variantStyles[variant]} ${className}`}
        {...props}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          aria-hidden="true"
          className={`opacity-30 dark:opacity-20 pointer-events-none ${
            variant === 'roman' ? 'w-16 h-16' : 'w-8 h-8'
          }`}
        />
      </div>
    );
  }
);

SectionDivider.displayName = 'SectionDivider';
