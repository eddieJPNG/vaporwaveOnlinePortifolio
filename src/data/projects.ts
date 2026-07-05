import { type Project } from '../types';

export const projects: Project[] = [
  {
    id: 'webbb3',
    titulo: 'Webbb3',
    descricao: 'Sistema de votação on-chain com smart-contract em Solidity',
    descricaoLonga:
      'Sistema de votação com deploy direto na blockchain, com a criação de smart-contract na linguagem Solidity, consolidado como um Dapp (Decentralized Application).',
    tecnologias: ['Solidity', 'Metamask', 'HTML', 'CSS', 'TypeScript', 'React', 'Bootstrap'],
    periodo: 'fev. 2026 — jun. 2026',
    githubUrl: 'https://github.com/eddieJPNG/webbb3_dapp_course_blockchain',
    destaque: true,
    categoria: 'Blockchain',
  },
  {
    id: 'nft-hub',
    titulo: 'Nft Hub',
    descricao: 'Sistema de visualização de NFTs on-chain na rede Sui',
    descricaoLonga:
      'Sistema desenvolvido como prática de criação de Dapps na rede Blockchain Sui, na linguagem Move, com deploy do smart-contract direto na rede Mainnet.',
    tecnologias: ['Move', 'Sui', 'HTML5', 'CSS3', 'JavaScript'],
    periodo: 'jan. 2025 — dez. 2025',
    githubUrl: 'https://github.com/eddieJPNG/Sui_Nft_Hub_Project',
    destaque: true,
    categoria: 'Blockchain',
  },
  {
    id: 'convmonitor',
    titulo: 'ConvMonitor',
    descricao: 'Sistema de monitoramento de convênios de estágio',
    descricaoLonga:
      'Aplicação desktop para gerenciamento de convênios de estágio da Universidade Estadual do Piauí (UESPI), com painéis distintos por perfil de acesso, geração de documentos e controle de vencimentos.',
    tecnologias: ['Python', 'FastAPI', 'SQLAlchemy', 'Flask', 'Flutter', 'MySQL'],
    periodo: 'mai. 2026 — jun. 2026',
    githubUrl: 'https://github.com/pedroaguiarcd/sistema-convenios',
    destaque: true,
    categoria: 'Web',
  },
];
