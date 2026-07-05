import { type SVGAttributes, forwardRef } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'purple' | 'pink' | 'cyan' | 'white' | 'black';
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

const colorMap = {
  purple: 'text-vaporwave-purple',
  pink: 'text-vaporwave-pink',
  cyan: 'text-vaporwave-cyan',
  white: 'text-vaporwave-white',
  black: 'text-vaporwave-black',
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color = 'purple', className = '', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={`${sizeMap[size]} ${colorMap[color]} ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        {...props}
      >
        <title>{name}</title>
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
