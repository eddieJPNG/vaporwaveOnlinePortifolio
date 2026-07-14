import { type PersonalInfo } from '../types';
import { getProfileImage } from '../utils/iconImports';
import { SOCIAL_LINKS } from '../utils/constants';

export const personalInfo: PersonalInfo = {
  nome: 'Edson Rocha da Silva',
  cargo:
    'Desenvolvedor Back-End Júnior | Desenvolvedor Python | Desenvolvedor Web | Desenvolvedor NodeJS',
  email: 'rochaedsonn12@gmail.com',
  telefone: '+55 86 994268973',
  endereco: 'Ilha Grande, Piauí, BR',
  resumo:
    'Desenvolvedor Back-End com foco em Python e Node.js, atuando na criação de APIs, sistemas web e integração com banco de dados. Tenho base em Full Stack, com conhecimento em Front-end, o que facilita comunicação entre camadas e entrega de soluções completas. Sempre com foco na escalabilidade do projeto, integração contínua de trabalho e resolução de problemas.',
  imagem: getProfileImage(),
  linkedin: SOCIAL_LINKS.linkedin,
  github: SOCIAL_LINKS.github,
  whatsapp: SOCIAL_LINKS.whatsapp,
};
