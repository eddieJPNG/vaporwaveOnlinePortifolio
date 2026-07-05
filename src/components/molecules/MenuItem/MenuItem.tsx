import { type AnchorHTMLAttributes, forwardRef } from 'react';

export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href: string;
  isActive?: boolean;
}

export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ label, href, isActive = false, className = '', ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={`block px-4 py-2 text-sm font-medium transition-colors ${
          isActive
            ? 'text-vaporwave-cyan border-b-2 border-vaporwave-cyan'
            : 'text-gray-300 hover:text-vaporwave-cyan'
        } ${className}`}
        aria-current={isActive ? 'page' : undefined}
        {...props}
      >
        {label}
      </a>
    );
  }
);

MenuItem.displayName = 'MenuItem';
