import { useState } from 'react';
import { Button } from '../../atoms';

export interface HeaderProps {
  onThemeToggle?: () => void;
  isDark?: boolean;
}

export const Header = ({ onThemeToggle, isDark = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vaporwave-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-vaporwave-cyan">
            Edson Dev - Portifólio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-vaporwave-cyan transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={onThemeToggle}
              aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-vaporwave-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="ghost" size="sm" onClick={onThemeToggle} className="mt-2">
              {isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
