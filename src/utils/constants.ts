export const SITE_CONFIG = {
  title: 'Edson Rocha da Silva - Portfólio',
  description: 'Portfólio profissional de Edson Rocha da Silva - Desenvolvedor Back-End',
  url: 'https://eddiepng.dev',
  author: 'Edson Rocha da Silva',
  email: 'rochaedsonn12@gmail.com',
} as const;

export const COLORS = {
  purple: '#9b59b6',
  purpleDark: '#8e44ad',
  pink: '#e91e63',
  pinkLight: '#ff69b4',
  cyan: '#00ffff',
  cyanDark: '#00bcd4',
  black: '#000000',
  blackLight: '#1a1a1a',
  white: '#ffffff',
  whiteDark: '#f5f5f5',
} as const;

export const BREAKPOINTS = {
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
} as const;

export const NAV_ITEMS = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Contato', href: '#contact' },
] as const;

export const SKILL_CATEGORIES = [
  'Back-end',
  'Banco de dados e Infra',
  'Front-end',
  'Blockchain',
  'Informática',
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/eddieJPNG',
  linkedin: 'https://linkedin.com/in/edson-rocha-da-silva-300030379',
  whatsapp: 'https://wa.me/qr/OZ354YNZCNIAG1',
  githubProjects: 'https://github.com/eddieJPNG?tab=repositories',
} as const;

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;
