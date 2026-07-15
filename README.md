# Vaporwave Online Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Portfólio profissional online com estética vaporwave imersivo, desenvolvido com React, TypeScript e Vite.

<img 
  src="src/assets/images/projects/portfolio.png"
  alt="Portfolio-image"
  />

## Descrição

O **Vaporwave Online Portfolio** é uma aplicação web single-page application (SPA) que funciona como cartão de visitas digital avançado. Apresenta o perfil profissional, habilidades técnicas e projetos de desenvolvimento web, backend e blockchain de Edson Rocha da Silva, combinando design vaporwave imersivo com funcionalidade profissional.

## Funcionalidades

- **Hero Section** com animações de entrada usando Framer Motion
- **Seção "Sobre Mim"** com resumo profissional e links para redes sociais
- **Seção de Habilidades** com ícones interativos e categorias organizadas
- **Galeria de Projetos** com cards interativos, filtros por tecnologia e modal de detalhes
- **Timeline de Experiência** profissional com design estilizado
- **Formulário de Contato** funcional com validação via EmailJS
- **Modo Escuro/Claro** com persistência no localStorage
- **Design Responsivo** mobile-first com menu hamburger
- **Animações** sob demanda com suporte a `prefers-reduced-motion`
- **SEO Otimizado** com meta tags e Open Graph
- **Google Analytics 4** integrado para tracking de visitas
- **Acessibilidade** com roles ARIA, navegação por teclado e focus trap

## Stack Tecnológica

| Categoria | Tecnologias |
|-----------|-------------|
| **Framework** | React 19, TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Estilização** | Tailwind CSS 4 |
| **Animações** | Framer Motion |
| **Formulários** | EmailJS, Zod |
| **Testes** | Vitest, React Testing Library |
| **Linting** | ESLint, Prettier |
| **Git Hooks** | Husky, lint-staged |

## Estrutura do Projeto

```
vaporwaveOnlinePortifolio/
├── public/                    # Arquivos estáticos
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── curriculo-edson-rocha.pdf
├── src/
│   ├── app/                   # Configuração da aplicação
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── assets/                # Imagens e ícones
│   │   ├── backgrounds/       # Imagens de fundo
│   │   ├── decorative/        # Elementos decorativos
│   │   ├── icons/             # Ícones de tecnologias
│   │   └── profile/           # Foto de perfil
│   ├── components/            # Componentes React (Atomic Design)
│   │   ├── atoms/             # Componentes básicos
│   │   │   ├── AnimatedSection/
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── LazySection/
│   │   │   ├── SectionDivider/
│   │   │   └── Text/
│   │   ├── molecules/         # Componentes compostos
│   │   │   ├── Card/
│   │   │   ├── Filter/
│   │   │   ├── FormField/
│   │   │   ├── MenuItem/
│   │   │   ├── ProjectModal/
│   │   │   └── SkillBadge/
│   │   ├── organisms/         # Seções da página
│   │   │   ├── About/
│   │   │   ├── Contact/
│   │   │   ├── Experience/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── Hero/
│   │   │   ├── Projects/
│   │   │   └── Skills/
│   │   └── templates/         # Templates de layout
│   ├── data/                  # Dados estáticos
│   │   ├── experiences.ts
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── hooks/                 # Hooks customizados
│   │   ├── useInView.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useReducedMotion.ts
│   │   ├── useScrollSpy.ts
│   │   └── useTheme.ts
│   ├── styles/                # Estilos globais
│   ├── types/                 # Tipagens TypeScript
│   ├── utils/                 # Utilitários e constantes
│   └── validations/           # Validações com Zod
├── .env.example               # Variáveis de ambiente exemplo
├── index.html                 # HTML principal com SEO
├── package.json
├── SPEC.md                    # Especificação do projeto
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/eddieJPNG/vaporwaveOnlinePortifolio.git
cd vaporwaveOnlinePortifolio
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas credenciais:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
VITE_GA_TRACKING_ID=seu_tracking_id_ga4
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## Uso

### Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza build de produção |
| `npm run lint` | Verifica erros de linting |
| `npm run lint:fix` | Corrige erros de linting automaticamente |
| `npm run format` | Formata código com Prettier |
| `npm run format:check` | Verifica formatação |
| `npm run test` | Roda testes em watch mode |
| `npm run test:run` | Roda testes uma vez |
| `npm run test:coverage` | Roda testes com relatório de cobertura |

### Build de Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`. Para visualizar localmente:

```bash
npm run preview
```

## Configuração

### Variáveis de Ambiente

| Variável | Descrição | Obrigatória |
|----------|-----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | ID do serviço EmailJS | Sim (para formulário) |
| `VITE_EMAILJS_TEMPLATE_ID` | ID do template EmailJS | Sim (para formulário) |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública EmailJS | Sim (para formulário) |
| `VITE_GA_TRACKING_ID` | ID de rastreamento GA4 | Não |

### Google Analytics 4

O GA4 está integrado via `index.html`. Para ativar:

1. Crie uma propriedade no [Google Analytics](https://analytics.google.com/)
2. Obtenha o ID de medição (formato `G-XXXXXXXXXX`)
3. Adicione `VITE_GA_TRACKING_ID=G-XXXXXXXXXX` no arquivo `.env`

### EmailJS

O formulário de contato usa EmailJS para envio de emails sem backend:

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Crie um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Configure as variáveis de ambiente com seus IDs

## SEO

O projeto já inclui:

- Meta tags otimizadas no `index.html`
- Open Graph para compartilhamento em redes sociais
- Twitter Cards
- `robots.txt` e `sitemap.xml` na pasta `public/`
- Canonical URL configurada

## Acessibilidade

- Roles ARIA em componentes interativos
- Navegação completa por teclado
- Focus trap no menu mobile
- Labels acessíveis em formulários
- Suporte a `prefers-reduced-motion`
- Contraste de cores adequado

## Testes

```bash
# Rodar todos os testes
npm run test

# Rodar uma vez
npm run test:run

# Com cobertura
npm run test:coverage
```

Os testes cobrem hooks customizados e componentes principais usando Vitest e React Testing Library.

## Contribuição

1. Fork o projeto
2. Crie uma branch de features (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Convenções

- Siga o estilo de código existente
- Execute `npm run lint` antes de commitar
- Adicione testes para novas funcionalidades
- Atualize a documentação se necessário

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido por** [Edson Rocha da Silva](https://github.com/eddieJPNG)
