export type SkillCategory =
  'Back-end' | 'Banco de dados e Infra' | 'Front-end' | 'Blockchain' | 'Informática';

export type ExperienceType = 'Estágio' | 'Emprego' | 'Projeto' | 'Hackathon' | 'Bootcamp';

export type SkillLevel = 'Básico' | 'Intermediário' | 'Avançado';

export type ProjectCategory = 'Blockchain' | 'Web' | 'Mobile' | 'Desktop';

export interface Project {
  id: string;
  titulo: string;
  descricao: string;
  descricaoLonga?: string;
  tecnologias: string[];
  periodo: string;
  githubUrl: string;
  imagem?: string;
  destaque: boolean;
  categoria: ProjectCategory;
}

export interface Skill {
  id: string;
  nome: string;
  categoria: SkillCategory;
  icone: string;
  nivel?: SkillLevel;
}

export interface Experience {
  id: string;
  empresa: string;
  cargo: string;
  periodo: string;
  tipo: ExperienceType;
  conquistas: string[];
  url?: string;
}

export interface PersonalInfo {
  nome: string;
  cargo: string;
  email: string;
  telefone: string;
  endereco: string;
  resumo: string;
  linkedin?: string;
  github?: string;
  whatsapp?: string;
}

export interface ContactForm {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
  honeypot?: string;
}
