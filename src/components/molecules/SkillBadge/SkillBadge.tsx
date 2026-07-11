import { type HTMLAttributes, forwardRef } from 'react';

export interface SkillBadgeProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  icon?: string;
  iconPath?: string;
  level?: 'Básico' | 'Intermediário' | 'Avançado';
}

const levelColors = {
  Básico: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  Intermediário: 'bg-vaporwave-purple/10 text-vaporwave-purple dark:bg-vaporwave-purple/20',
  Avançado: 'bg-vaporwave-cyan/10 text-vaporwave-cyan-dark dark:bg-vaporwave-cyan/20',
};

export const SkillBadge = forwardRef<HTMLDivElement, SkillBadgeProps>(
  ({ name, icon, iconPath, level, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:scale-105 ${
          level
            ? levelColors[level]
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
        } ${className}`}
        title={level ? `${name} - ${level}` : name}
        {...props}
      >
        {iconPath ? (
          <img src={iconPath} alt={name} className="w-5 h-5 object-contain" />
        ) : (
          icon && <span className="text-lg">{icon}</span>
        )}
        <span className="text-sm font-medium">{name}</span>
      </div>
    );
  }
);

SkillBadge.displayName = 'SkillBadge';
