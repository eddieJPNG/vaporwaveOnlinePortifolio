import { type Skill } from '../types';

export const skills: Skill[] = [
  // Back-end
  { id: 'python', nome: 'Python', categoria: 'Back-end', icone: '🐍', nivel: 'Avançado' },
  { id: 'nodejs', nome: 'Node.js', categoria: 'Back-end', icone: '🟢', nivel: 'Avançado' },
  {
    id: 'typescript',
    nome: 'TypeScript',
    categoria: 'Back-end',
    icone: '🔷',
    nivel: 'Intermediário',
  },
  { id: 'fastapi', nome: 'FastAPI', categoria: 'Back-end', icone: '⚡', nivel: 'Intermediário' },
  { id: 'nestjs', nome: 'NestJS', categoria: 'Back-end', icone: '🐱', nivel: 'Básico' },

  // Banco de dados e Infra
  {
    id: 'mysql',
    nome: 'MySQL',
    categoria: 'Banco de dados e Infra',
    icone: '🐬',
    nivel: 'Intermediário',
  },
  {
    id: 'sqlite',
    nome: 'SQLite',
    categoria: 'Banco de dados e Infra',
    icone: '🗄️',
    nivel: 'Intermediário',
  },
  { id: 'git', nome: 'Git', categoria: 'Banco de dados e Infra', icone: '📦', nivel: 'Avançado' },
  {
    id: 'github',
    nome: 'GitHub',
    categoria: 'Banco de dados e Infra',
    icone: '🐙',
    nivel: 'Avançado',
  },

  // Front-end
  { id: 'html5', nome: 'HTML5', categoria: 'Front-end', icone: '🌐', nivel: 'Avançado' },
  { id: 'css3', nome: 'CSS3', categoria: 'Front-end', icone: '🎨', nivel: 'Avançado' },
  { id: 'react', nome: 'React', categoria: 'Front-end', icone: '⚛️', nivel: 'Intermediário' },
  {
    id: 'bootstrap',
    nome: 'Bootstrap',
    categoria: 'Front-end',
    icone: '🎭',
    nivel: 'Intermediário',
  },
  { id: 'javascript', nome: 'JavaScript', categoria: 'Front-end', icone: '🟨', nivel: 'Avançado' },

  // Blockchain
  {
    id: 'solidity',
    nome: 'Solidity',
    categoria: 'Blockchain',
    icone: '💎',
    nivel: 'Intermediário',
  },
  { id: 'move', nome: 'Move (Sui)', categoria: 'Blockchain', icone: '🔄', nivel: 'Intermediário' },
  {
    id: 'metamask',
    nome: 'Metamask',
    categoria: 'Blockchain',
    icone: '🦊',
    nivel: 'Intermediário',
  },
  { id: 'remix', nome: 'Remix IDE', categoria: 'Blockchain', icone: '🔨', nivel: 'Intermediário' },

  // Informática
  {
    id: 'office',
    nome: 'Pacote Office',
    categoria: 'Informática',
    icone: '📊',
    nivel: 'Intermediário',
  },
  { id: 'canva', nome: 'Canva', categoria: 'Informática', icone: '🎨', nivel: 'Intermediário' },
  { id: 'wix', nome: 'Wix', categoria: 'Informática', icone: '🕸️', nivel: 'Básico' },
];
