import { type Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'hackathon-janela',
    empresa: 'Instituto Janela Para o Mundo',
    cargo: 'Líder de Projeto em Hackathon',
    periodo: 'fev. 2022 — set. 2022',
    tipo: 'Hackathon',
    conquistas: [
      'Liderança de grupo de desenvolvimento de sistema de vendas',
      'Criação do design do negócio e visual geral do sistema',
      'Uso de tecnologias no-code como Wix e design com Canva',
      'Sistema promoveu aumento de eficiência de vendas em até 20%',
      'Organização e divisão de papéis entre os 6 membros do time',
    ],
  },
  {
    id: 'convmonitor',
    empresa: 'Do Piauí para o mundo / SEDUC',
    cargo: 'Desenvolvedor',
    periodo: 'mai. 2026 — jun. 2026',
    tipo: 'Projeto',
    conquistas: [
      'Participação no Programa "Do Piauí para o Mundo"',
      'Desenvolvimento dos módulos de Banco de dados e integração',
      'Criação e manipulação de documentação do projeto',
      'Trabalho em equipe no qual ficamos entre as finalistas',
      'Desenvolvimento de relações de Models e Schemas em SQLAlchemy',
      'Viagem de pesquisa nacional para o Rio de Janeiro',
    ],
    url: 'https://github.com/pedroaguiarcd/sistema-convenios',
  },
];
