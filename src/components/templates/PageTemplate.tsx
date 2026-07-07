import { type ReactNode } from 'react';
import { Header } from '../organisms/Header';

export interface PageTemplateProps {
  children: ReactNode;
  onThemeToggle?: () => void;
  isDark?: boolean;
}

export const PageTemplate = ({ children, onThemeToggle, isDark }: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-vaporwave-white dark:bg-vaporwave-black">
      <Header onThemeToggle={onThemeToggle} isDark={isDark} />
      <main className="pt-16">{children}</main>
    </div>
  );
};
