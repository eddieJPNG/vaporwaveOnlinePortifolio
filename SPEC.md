# SPEC — Vaporwave Online Portfolio

---

## 1. Visão Geral

**Nome do Projeto:** Vaporwave Online Portfolio

**Objetivo:** Criar um portfólio online interativo e imersivo com estética vaporwave que展现 o perfil profissional, habilidades técnicas e projetos de desenvolvimento web, backend e blockchain de Edson Rocha da Silva.

**Problema Resolvido:** Necessidade de uma presença digital profissional que se destaque visualmente, comunicando competências técnicas de forma memorável e alinhada com tendências de design contemporâneo (vaporwave/retrowave).

**Público-Alvo:**

- Recrutadores e gestores de TI
- Empresas de desenvolvimento de software
- Comunidade de desenvolvedores
- Parceiros potenciais para projetos blockchain/web3

**Proposta de Valor:** Combinação única de design vaporwave imersivo com展示 funcional de habilidades técnicas em backend (Python, Node.js), frontend (React) e blockchain (Solidity, Move), criando uma experiência memorável que reflete criatividade e competência técnica.

---

## 2. Resumo Executivo

O **Vaporwave Online Portfolio** é uma aplicação web single-page application (SPA) que funciona como cartão de visitas digital avançado. O sistema apresenta:

- **Landing page imersiva** com animações e transições vaporwave
- **Seção de habilidades** com ícones interativos e categorias organizadas
- **Galeria de projetos** com cards interativos mostrando tecnologias utilizadas
- **Timeline de experiência profissional** com design estilizado
- **Formulário de contato** funcional
- **Modo escuro/claro** com tema vaporwave customizável
- **Responsividade total** para dispositivos móveis
- **Performance otimizada** com carregamento懒惰 de imagens e animações sob demanda

A aplicação utiliza tecnologias modernas (React, TypeScript, Vite) e segue princípios de Clean Architecture para garantir manutenibilidade e escalabilidade.

---

## 3. Escopo

### Inclui

- Landing page com hero section e animações vaporwave
- Seção "Sobre mim" com resumo profissional
- Seção de habilidades com ícones e categorias
- Galeria de projetos relevantes com filtros
- Timeline de experiência profissional
- Formulário de contato funcional
- Modo escuro/claro
- Design responsivo (mobile-first)
- Otimização de performance (Lighthouse > 90)
- SEO básico (meta tags, Open Graph)
- Analytics integrado (Google Analytics)
- Deploy automatizado via CI/CD
- Documentação do projeto

### Não Inclui

- Sistema de autenticação de usuários
- Painel administrativo
- Blog integrado
- Sistema de comentários
- Integração com redes sociais (além de links)
- Suporte a múltiplos idiomas (internacionalização)
- Aplicação mobile nativa
- Backend para armazenamento de dados
- Sistema de pagamento
- Marketplace de projetos

---

## 4. Requisitos Funcionais

### RF-001 — Landing Page com Hero Section

**Descrição:** Página inicial com seção hero contendo título, subtítulo e call-to-action principal.

**Critérios de Aceitação:**

- [ ] Título principal exibe nome completo
- [ ] Subtítulo descreve cargo/função
- [ ] Botão CTA redireciona para seção de projetos
- [ ] Animação de entrada (fade-in ou slide)
- [ ] Background com elemento visual vaporwave
- [ ] Tempo de carregamento < 2s

**Fluxo Principal:**

1. Usuário acessa a URL principal
2. Sistema carrega hero section com animação
3. Usuário visualiza informações principais
4. Usuário clica no CTA
5. Sistema redireciona para seção de projetos

**Fluxos Alternativos:**

- Usuário rola a página manualmente
- Usuário navega pelo menu

**Casos de Erro:**

- Falha no carregamento de imagens: exibir placeholder
- JavaScript desabilitado: conteúdo estático acessível

**Prioridade:** Alta

---

### RF-002 — Seção "Sobre Mim"

**Descrição:** Apresentação profissional com foto, resumo e links para perfis.

**Critérios de Aceitação:**

- [ ] Foto de perfil com borda estilizada
- [ ] Resumo profissional (texto do currículo)
- [ ] Links para LinkedIn, GitHub, WhatsApp
- [ ] Ícones de redes sociais clicáveis
- [ ] Layout responsivo

**Fluxo Principal:**

1. Usuário rola até seção "Sobre Mim"
2. Sistema exibe foto e resumo
3. Usuário clica em link de rede social
4. Sistema abre nova aba com perfil

**Fluxos Alternativos:**

- Usuário navega pelo menu diretamente

**Casos de Erro:**

- Link quebrado: exibir tooltip com URL
- Foto não carrega: exibir avatar padrão

**Prioridade:** Alta

---

### RF-003 — Seção de Habilidades

**Descrição:** Lista categorizada de habilidades com ícones visuais.

**Critérios de Aceitação:**

- [ ] Categorias: Back-end, Banco de dados, Front-end, Blockchain, Informática
- [ ] Ícones para cada tecnologia (imagens fornecidas em Elements/icons)
- [ ] Animação ao hover
- [ ] Layout em grid responsivo
- [ ] Tooltip com nome da tecnologia

**Fluxo Principal:**

1. Usuário navega até seção de habilidades
2. Sistema exibe categorias com ícones
3. Usuário passa mouse sobre ícone
4. Sistema exibe tooltip com nome

**Fluxos Alternativos:**

- Usuário filtra por categoria

**Casos de Erro:**

- Ícone não carrega: exibir fallback com iniciais

**Prioridade:** Média

---

### RF-004 — Galeria de Projetos

**Descrição:** Cards interativos mostrando projetos relevantes.

**Critérios de Aceitação:**

- [ ] Cards com imagem, título, descrição e tecnologias
- [ ] Links para repositório GitHub
- [ ] Filtros por tecnologia
- [ ] Animação de entrada (stagger)
- [ ] Modal com detalhes ao clicar

**Fluxo Principal:**

1. Usuário navega até seção de projetos
2. Sistema exibe cards em grid
3. Usuário clica em um card
4. Sistema abre modal com detalhes
5. Usuário clica no link do GitHub
6. Sistema abre repositório em nova aba

**Fluxos Alternativos:**

- Usuário filtra por tecnologia
- Usuário navega com teclado

**Casos de Erro:**

- Repositório inacessível: exibir mensagem de erro
- Imagem não carrega: exibir placeholder

**Prioridade:** Alta

---

### RF-005 — Timeline de Experiência

**Descrição:** Linha do tempo visual com experiências profissionais.

**Critérios de Aceitação:**

- [ ] Eventos ordenados cronologicamente
- [ ] Ícones representando tipo de experiência
- [ ] Detalhes: empresa, cargo, período, conquistas
- [ ] Animação de scroll
- [ ] Layout responsivo (vertical em mobile)

**Fluxo Principal:**

1. Usuário rola até seção de experiência
2. Sistema exibe timeline com eventos
3. Usuário passa mouse sobre evento
4. Sistema exibe detalhes expandidos

**Fluxos Alternativos:**

- Usuário navega por setas

**Casos de Erro:**

- Dados não carregam: exibir mensagem

**Prioridade:** Média

---

### RF-006 — Formulário de Contato

**Descrição:** Formulário funcional para envio de mensagens.

**Critérios de Aceitação:**

- [ ] Campos: Nome, Email, Assunto, Mensagem
- [ ] Validação em tempo real
- [ ] Envio via EmailJS ou similar
- [ ] Mensagem de sucesso/erro
- [ ] Proteção contra spam (honeypot)

**Fluxo Principal:**

1. Usuário preenche formulário
2. Sistema valida campos
3. Usuário envia mensagem
4. Sistema processa envio
5. Sistema exibe mensagem de sucesso

**Fluxos Alternativos:**

- Usuário limpa formulário
- Usuário corrige erros de validação

**Casos de Erro:**

- Falha no envio: exibir erro e permitir retry
- Campos obrigatórios vazios: exibir validação

**Prioridade:** Alta

---

### RF-007 — Modo Escuro/Claro

**Descrição:** Toggle para alternar entre temas escuro e claro.

**Critérios de Aceitação:**

- [ ] Botão toggle visível no header
- [ ] Preferência salva no localStorage
- [ ] Transição suave entre temas
- [ ] Cores vaporwave mantidas em ambos modos
- [ ] Respeita preferência do sistema

**Fluxo Principal:**

1. Usuário clica no toggle
2. Sistema alterna tema
3. Sistema salva preferência
4. Sistema aplica tema em todas páginas

**Fluxos Alternativos:**

- Sistema detecta preferência do OS
- Usuário acessa com tema salvo

**Casos de Erro:**

- localStorage indisponível: usar tema padrão

**Prioridade:** Média

---

### RF-008 — Design Responsivo

**Descrição:** Layout adaptável para todos tamanhos de tela.

**Critérios de Aceitação:**

- [ ] Mobile-first design
- [ ] Breakpoints: 320px, 768px, 1024px, 1440px
- [ ] Menu hamburger em mobile
- [ ] Touch-friendly interactions
- [ ] Performance otimizada em mobile

**Fluxo Principal:**

1. Usuário acessa em dispositivo móvel
2. Sistema detecta viewport
3. Sistema aplica estilos responsivos
4. Usuário navega com touch

**Fluxos Alternativos:**

- Usuário redimensiona janela
- Usuário rota dispositivo

**Casos de Erro:**

- Viewport não detectada: usar padrão mobile

**Prioridade:** Alta

---

### RF-009 — SEO e Analytics

**Descrição:** Otimização para mecanismos de busca e tracking de访问as.

**Critérios de Aceitação:**

- [ ] Meta tags (title, description, keywords)
- [ ] Open Graph tags
- [ ] Google Analytics integrado
- [ ] Sitemap.xml
- [ ] robots.txt

**Fluxo Principal:**

1. Robô de busca acessa site
2. Sistema retorna meta tags
3. Robô indexa conteúdo

**Fluxos Alternativos:**

- Usuário compartilha link (Open Graph)

**Casos de Erro:**

- Analytics bloqueado: falhar graciosamente

**Prioridade:** Baixa

---

### RF-010 — Performance e Otimização

**Descrição:** Carregamento rápido e experiência fluida.

**Critérios de Aceitação:**

- [ ] Lighthouse Performance > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Imagens otimizadas (WebP/AVIF)
- [ ] Code splitting automático

**Fluxo Principal:**

1. Usuário acessa URL
2. Sistema carrega recursos críticos
3. Sistema renderiza conteúdo
4. Sistema carrega recursos non-critical

**Fluxos Alternativos:**

- Conexão lenta: lazy loading
- Dispositivo limitado: reduzir animações

**Casos de Erro:**

- Timeout: mostrar conteúdo estático

**Prioridade:** Alta

---

## 5. Requisitos Não Funcionais

### Performance

- **Tempo de carregamento inicial:** < 2 segundos em conexão 4G
- **Lighthouse Score:** > 90 em todas categorias
- **Bundle Size:** < 200KB (gzipped)
- **Imagens:** Formato WebP/AVIF com lazy loading
- **Animações:** 60fps, GPU-acelerated

### Escalabilidade

- **Arquitetura:** Modular com code splitting
- **Componentes:** Reutilizáveis e independentes
- **State Management:** Local (Context API) para simplicidade
- **Deploy:** CDN global (Vercel/Netlify)

### Disponibilidade

- **Uptime:** 99.9% (via plataforma de hosting)
- **Fallback:** Página estática se JS falhar
- **Cache:** Service Worker para visitas retornantes

### Observabilidade

- **Analytics:** Google Analytics 4
- **Error Tracking:** Sentry (opcional)
- **Performance Monitoring:** Web Vitals
- **User Behavior:** Hotjar (opcional)

### Manutenibilidade

- **Código:** TypeScript para type safety
- **Linting:** ESLint + Prettier
- **Componentes:** Atomic Design
- **Testes:** Vitest + React Testing Library
- **Documentação:** Storybook (opcional)

### Acessibilidade

- **WCAG 2.1:** Nível AA
- **Contraste:** Ratio mínimo 4.5:1
- **Navegação:** Tab navigation completa
- **Screen Readers:** ARIA labels
- **Reduced Motion:** Respeitar preferência do usuário

### Internacionalização

- **Idioma:** Português (Brasil) como padrão
- **Estrutura:** Preparada para futura tradução
- **Formato:** Data/hora localizado

### Compliance

- **LGPD:** banner de cookies se analytics obrigatório
- **Privacidade:** Política de privacidade链接

### LGPD/GDPR

- **Consentimento:** Banner de cookies
- **Dados:** Apenas dados fornecidos voluntariamente
- **Armazenamento:** Apenas via serviços terceiros (EmailJS)
- **Exclusão:** Solicitação via email

### Segurança

- **HTTPS:** Obrigatório
- **CSP:** Content Security Policy
- **XSS:** Sanitização de inputs
- **CSRF:** Tokens em formulários
- **Dependencies:** Dependabot alerts

---

## 6. Regras de Negócio

### RB-001 — Informações Profissionais

O conteúdo exibido deve refletir fielmente o currículo fornecido (Edson Rocha da Silva). Qualquer atualização requer 修改 do código fonte.

### RB-002 — Projetos Exibidos

Apenas projetos com repositório público no GitHub serão exibidos. Cada projeto deve conter:

- Nome do projeto
- Descrição curta
- Tecnologias utilizadas
- Link para repositório
- Período de desenvolvimento

### RB-003 — Tecnologias Destacadas

As habilidades devem ser organizadas por categorias conforme definido no currículo:

- Back-end
- Banco de dados e Infra
- Front-end
- Blockchain
- Informática

### RB-004 — Contato

O formulário de contato deve enviar mensagens diretamente para o email profissional (rochaedsonn12@gmail.com) sem armazenamento em banco de dados.

### RB-005 — Design Visual

O tema vaporwave deve seguir a paleta de cores:

- Roxo: #9b59b6, #8e44ad
- Rosa: #e91e63, #ff69b4
- Ciano: #00ffff, #00bcd4
- Preto: #000000, #1a1a1a
- Branco: #ffffff, #f5f5f5

### RB-006 — Performance

O site deve manter Lighthouse score > 90 mesmo com animações complexas. Animações devem ser desabilitadas em `prefers-reduced-motion`.

### RB-007 — Responsividade

O site deve ser totalmente funcional em dispositivos móveis com touch interactions. Menu hamburger obrigatório em viewports < 768px.

### RB-008 — Acessibilidade

Todos os elementos interativos devem ser acessíveis via teclado. Imagens devem ter alt text. Contraste mínimo de 4.5:1.

### RB-009 — SEO

O site deve ser indexável por mecanismos de busca com meta tags completas e Open Graph para compartilhamento em redes sociais.

### RB-010 — Atualizações

O conteúdo deve ser atualizado manualmente via código fonte. Futuras versões podem incluir CMS headless.

---

## 7. Casos de Uso

### UC-001 — Visualizar Portfólio

**Objetivo:** Acessar e explorar o portfólio online

**Atores:** Visitante (recrutador, desenvolvedor, potencial cliente)

**Pré-condições:**

- Dispositivo com acesso à internet
- Navegador web atualizado

**Fluxo Principal:**

1. Visitante acessa a URL do portfólio
2. Sistema carrega landing page com animação
3. Visitante visualiza hero section
4. Visitante rola a página
5. Visitante visualiza seções: Sobre, Habilidades, Projetos, Experiência
6. Visitante interage com cards de projetos
7. Visitante acessa formulário de contato
8. Visitante envia mensagem (opcional)

**Fluxos Alternativos:**

- Visitante navega pelo menu diretamente
- Visitante clica em links externos (GitHub, LinkedIn)
- Visitante alterna modo escuro/claro

**Pós-condições:**

- Visitante registra visita (analytics)
- Visitante pode enviar mensagem

---

### UC-002 — Navegar entre Seções

**Objetivo:** Acessar rapidamente uma seção específica

**Atores:** Visitante

**Pré-condições:**

- Portfólio carregado

**Fluxo Principal:**

1. Visitante clica em item do menu
2. Sistema identifica seção alvo
3. Sistema faz scroll suave até seção
4. Sistema atualiza URL com âncora

**Fluxos Alternativos:**

- Visitante usa atalhos de teclado
- Visitante clica em links internos

**Pós-condições:**

- Seção visível na viewport

---

### UC-003 — Explorar Projeto

**Objetivo:** Visualizar detalhes de um projeto específico

**Atores:** Visitante

**Pré-condições:**

- Portfólio carregado
- Seção de projetos visível

**Fluxo Principal:**

1. Visitante clica em card de projeto
2. Sistema abre modal com detalhes
3. Visitante visualiza: título, descrição, tecnologias, período
4. Visitante clica no link do GitHub
5. Sistema abre repositório em nova aba

**Fluxos Alternativos:**

- Visitante fecha modal com ESC
- Visitante clica fora do modal
- Visitante navega entre projetos com setas

**Pós-condições:**

- Visitante acessou repositório (se clicou no link)

---

### UC-004 — Enviar Mensagem de Contato

**Objetivo:** Entrar em contato com o proprietário do portfólio

**Atores:** Visitante

**Pré-condições:**

- Portfólio carregado
- Seção de contato acessível

**Fluxo Principal:**

1. Visitante preenche formulário (Nome, Email, Assunto, Mensagem)
2. Sistema valida campos em tempo real
3. Visitante clica em "Enviar"
4. Sistema processa envio via EmailJS
5. Sistema exibe mensagem de sucesso
6. Sistema limpa formulário

**Fluxos Alternativos:**

- Visitante corrige erros de validação
- Visitante limpa formulário

**Casos de Erro:**

- Falha no envio: sistema exibe erro e sugere retry
- Campos obrigatórios vazios: sistema impede envio
- Email inválido: sistema exibe validação

**Pós-condições:**

- Mensagem enviada para email do proprietário
- Visitante recebe confirmação visual

---

### UC-005 — Alternar Tema

**Objetivo:** Mudar entre modo escuro e claro

**Atores:** Visitante

**Pré-condições:**

- Portfólio carregado

**Fluxo Principal:**

1. Visitante localiza toggle de tema
2. Visitante clica no toggle
3. Sistema alterna classes CSS
4. Sistema atualiza ícone do toggle
5. Sistema salva preferência no localStorage

**Fluxos Alternativos:**

- Sistema detecta preferência do sistema operacional
- Visitante acessa com tema salvo

**Pós-condições:**

- Tema alternado
- Preferência persistida

---

## 8. Modelagem de Dados

### Entidades

#### Projeto

| Atributo       | Tipo     | Obrigatório | Descrição                   |
| -------------- | -------- | ----------- | --------------------------- |
| id             | string   | Sim         | Identificador único (slug)  |
| titulo         | string   | Sim         | Nome do projeto             |
| descricao      | string   | Sim         | Descrição curta             |
| descricaoLonga | string   | Não         | Descrição detalhada         |
| tecnologias    | string[] | Sim         | Lista de tecnologias        |
| periodo        | string   | Sim         | Ex: "fev. 2026 — jun. 2026" |
| githubUrl      | string   | Sim         | URL do repositório          |
| imagem         | string   | Não         | URL da imagem de capa       |
| destaque       | boolean  | Sim         | Se é projeto em destaque    |
| categoria      | string   | Sim         | Ex: "Blockchain", "Web"     |

#### Habilidade

| Atributo  | Tipo   | Obrigatório | Descrição                       |
| --------- | ------ | ----------- | ------------------------------- |
| id        | string | Sim         | Identificador único             |
| nome      | string | Sim         | Nome da tecnologia              |
| categoria | string | Sim         | Back-end, Front-end, etc.       |
| icone     | string | Sim         | Caminho para ícone              |
| nivel     | enum   | Não         | Básico, Intermediário, Avançado |

#### Experiencia

| Atributo   | Tipo     | Obrigatório | Descrição                 |
| ---------- | -------- | ----------- | ------------------------- |
| id         | string   | Sim         | Identificador único       |
| empresa    | string   | Sim         | Nome da empresa           |
| cargo      | string   | Sim         | Cargo/Função              |
| periodo    | string   | Sim         | Período de atuação        |
| tipo       | enum     | Sim         | Estágio, Emprego, Projeto |
| conquistas | string[] | Sim         | Lista de conquistas       |
| url        | string   | Não         | Link externo              |

#### ContatoForm

| Atributo | Tipo   | Obrigatório | Descrição              |
| -------- | ------ | ----------- | ---------------------- |
| nome     | string | Sim         | Nome do remetente      |
| email    | string | Sim         | Email do remetente     |
| assunto  | string | Sim         | Assunto da mensagem    |
| mensagem | string | Sim         | Conteúdo da mensagem   |
| honeypot | string | Não         | Campo oculto anti-spam |

### Relacionamentos

- **Projeto** possui muitas **Tecnologias** (N:N via array)
- **Experiencia** pode estar associada a **Projetos** (opcional)
- **ContatoForm** é independente (não persistido localmente)

### Validações

- **Email:** Regex pattern validation
- **Campos obrigatórios:** Não vazios
- **Mensagem:** Mínimo 10 caracteres
- **URL:** Formato válido

### Indices

- **Projetos:** Ordenados por período (mais recente primeiro)
- **Habilidades:** Agrupados por categoria
- **Experiências:** Ordenadas cronologicamente

### Constraints

- **Unicidade:** ID de projeto único
- **Formato:** URLs devem ser válidas
- **Tamanho:** Mensagem máx. 1000 caracteres

---

## 9. Arquitetura Recomendada

### Frontend

- **Framework:** React 18+ com TypeScript
- **Build Tool:** Vite
- **Estilização:** Tailwind CSS + CSS Modules
- **State Management:** React Context API
- **Roteamento:** React Router DOM (hash routing)
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Formulários:** React Hook Form + Zod

### Backend

**NÃO APLICÁVEL** — O portfólio é uma aplicação estática (SPA). Não há backend próprio.

**Serviços externos:**

- **Email:** EmailJS (envio de formulário)
- **Analytics:** Google Analytics 4
- **Hosting:** Vercel/Netlify

### Banco de Dados

**NÃO APLICÁVEL** — Todos os dados são estáticos e embutidos no código fonte.

**Estrutura de dados:**

- Arrays de objetos TypeScript
- Dados carregados em tempo de build
- Nenhuma persistência local necessária

### Infraestrutura

- **Hosting:** Vercel (recomendado) ou Netlify
- **CDN:** Integrada ao hosting
- **DNS:** Configurado no provedor
- **SSL:** Automático via hosting
- **Domain:** Personalizado (opcional)

### Filas

**NÃO APLICÁVEL** — Não há processamento assíncrono.

### Cache

- **Browser:** Cache de assets estáticos
- **Service Worker:** Para visitas retornantes (PWA opcional)
- **CDN:** Cache de edge

### Storage

- **localStorage:** Preferência de tema
- **SessionStorage:** Estado da sessão (opcional)

### Autenticação

**NÃO APLICÁVEL** — Site público, sem necessidade de autenticação.

### Autorização

**NÃO APLICÁVEL** — Todos os conteúdos são públicos.

### Monitoramento

- **Analytics:** Google Analytics 4
- **Performance:** Web Vitals via GA
- **Errors:** Sentry (opcional)
- **Uptime:** UptimeRobot (opcional)

### Logs

- **Client-side:** Console logs em desenvolvimento
- **Analytics:** Eventos de interação
- **Errors:** Error boundary + Sentry

### Métricas

- **Pageviews:** Visualizações de página
- **Scroll Depth:** Profundidade de scroll
- **Click Through Rate:** Cliques em links externos
- **Form Submissions:** Envios de formulário
- **Core Web Vitals:** LCP, FID, CLS

### Tracing

**NÃO APLICÁVEL** — Aplicação estática sem backend.

---

## 10. Stack Recomendada

### Frameworks

| Tecnologia        | Justificativa                                                                |
| ----------------- | ---------------------------------------------------------------------------- |
| **React 18**      | Ecossistema maduro, componentes reutilizáveis, SEO com renderização estática |
| **TypeScript**    | Type safety, melhor DX, detecção de erros em compile time                    |
| **Vite**          | Build rápido, HMR instantâneo, configuração mínima                           |
| **Tailwind CSS**  | Utility-first, design system consistente, bundle size pequeno                |
| **Framer Motion** | Animações declarativas, performáticas, fácil integração com React            |

### Banco de Dados

**Não utilizado.** Dados estáticos embutidos no código.

### ORM

**Não utilizado.** Sem banco de dados.

### Ferramentas DevOps

| Ferramenta   | Justificativa                     |
| ------------ | --------------------------------- |
| **Git**      | Controle de versão                |
| **GitHub**   | Repositório e CI/CD               |
| **Vercel**   | Deploy automático, preview em PRs |
| **ESLint**   | Linting de código                 |
| **Prettier** | Formatação consistente            |
| **Husky**    | Git hooks para quality gates      |

### CI/CD

| Etapa          | Ferramenta                            |
| -------------- | ------------------------------------- |
| **Lint**       | ESLint                                |
| **Format**     | Prettier                              |
| **Type Check** | TypeScript                            |
| **Build**      | Vite                                  |
| **Test**       | Vitest                                |
| **Deploy**     | Vercel (automático no push para main) |

### Testes

| Ferramenta                | Justificativa                                    |
| ------------------------- | ------------------------------------------------ |
| **Vitest**                | Compatível com Vite, rápido, API similar ao Jest |
| **React Testing Library** | Testes de componentes focados em comportamento   |
| **Cypress**               | Testes E2E (opcional)                            |
| **Playwright**            | Testes cross-browser (opcional)                  |

### Monitoramento

| Ferramenta             | Justificativa                |
| ---------------------- | ---------------------------- |
| **Google Analytics 4** | Analytics gratuito e robusto |
| **Web Vitals**         | Métricas de performance      |
| **Sentry**             | Error tracking (opcional)    |

### Segurança

| Medida         | Implementação           |
| -------------- | ----------------------- |
| **HTTPS**      | Automático no Vercel    |
| **CSP**        | Headers de segurança    |
| **Dependabot** | Alertas de dependências |
| **SRI**        | Subresource Integrity   |

---

## 11. Estrutura de Pastas

```
vaporwave-portfolio/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── providers/
│   │       └── ThemeProvider.tsx
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile/
│   │   │   ├── projects/
│   │   │   └── backgrounds/
│   │   └── icons/
│   │       ├── backend/
│   │       ├── frontend/
│   │       ├── blockchain/
│   │       ├── database/
│   │       └── tools/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button/
│   │   │   ├── Icon/
│   │   │   ├── Input/
│   │   │   └── Text/
│   │   ├── molecules/
│   │   │   ├── Card/
│   │   │   ├── FormField/
│   │   │   ├── MenuItem/
│   │   │   └── SkillBadge/
│   │   ├── organisms/
│   │   │   ├── Header/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Skills/
│   │   │   ├── Projects/
│   │   │   ├── Experience/
│   │   │   ├── Contact/
│   │   │   └── Footer/
│   │   └── templates/
│   │       └── PageTemplate.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experiences.ts
│   │   └── personal.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useScrollSpy.ts
│   │   └── useLocalStorage.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── animations.ts
│   │   └── constants.ts
│   └── validations/
│       └── contact.ts
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

---

## 12. Roadmap e Roteiro de Implementação

### Mapa de Dependências

```
Fase 0 — Fundação
   ↓
Fase 1 — Core do Domínio (Dados)
   ↓
Fase 2 — Componentes UI
   ↓
Fase 3 — Layout e Design System
   ↓
Fase 4 — Funcionalidades Interativas
   ↓
Fase 5 — Formulários e Integrações
   ↓
Fase 6 — Performance e Otimização
   ↓
Fase 7 — Testes e Qualidade
   ↓
Fase 8 — Deploy e Produção
   ↓
Fase 9 — Evolução Contínua
```

---

### Fase 0 — Fundação

**Objetivo:** Configurar o ambiente de desenvolvimento e estrutura base do projeto.

**Escopo:**

- Inicialização do projeto com Vite + React + TypeScript
- Configuração de ESLint, Prettier, Husky
- Configuração de Tailwind CSS
- Estrutura de pastas (Atomic Design)
- Configuração de Git hooks
- Configuração de testes (Vitest)
- Configuração de CI/CD (GitHub Actions)
- Docker para desenvolvimento (opcional)

**Funcionalidades Implementadas:**

- Comando `npm run dev` funcional
- Comando `npm run build` sem erros
- Comando `npm run lint` passando
- Comando `npm run test` funcional

**Artefatos Produzidos:**

- `package.json` com dependências
- `vite.config.ts` configurado
- `tsconfig.json` configurado
- `tailwind.config.js` configurado
- `.eslintrc.cjs` configurado
- `.prettierrc` configurado
- `vitest.config.ts` configurado
- `.github/workflows/ci.yml` (CI básico)
- Estrutura de pastas criada

**Dependências Técnicas:**

- Node.js 18+
- npm ou yarn
- Git

**Pré-requisitos:**

- Conta no GitHub
- Conta no Vercel (para deploy)

**Critérios para Iniciar:**

- [ ] Repositório criado no GitHub
- [ ] Node.js instalado localmente

**Critérios para Concluir:**

- [ ] Projeto inicializa sem erros
- [ ] Build produz sem erros
- [ ] Lint passa sem warnings
- [ ] Teste básico passa
- [ ] Estrutura de pastas correta
- [ ] CI configurado

**Riscos Envoltos:**

- Incompatibilidade de versões de dependências
- Configuração incorreta do TypeScript

**Estratégia de Validação:**

- Rodar `npm run dev` e verificar se a página carrega
- Rodar `npm run build` e verificar se gera `dist/`
- Rodar `npm run lint` e verificar se não há erros

**Entregáveis Esperados:**

- Projeto funcional em ambiente local
- Estrutura pronta para desenvolvimento
- CI rodando no GitHub

**Possíveis Gargalos:**

- Configuração de Tailwind com Vite
- Configuração de Husky com Git hooks

**Próxima Fase Dependente:** Fase 1 — Core do Domínio

---

### Fase 1 — Core do Domínio

**Objetivo:** Definir a estrutura de dados e tipos TypeScript do portfólio.

**Escopo:**

- Definição de interfaces TypeScript
- Criação dos arquivos de dados estáticos
- Configuração de constantes e enums
- Validação de dados com Zod

**Funcionalidades Implementadas:**

- Types: `Project`, `Skill`, `Experience`, `PersonalInfo`
- Dados: `projects.ts`, `skills.ts`, `experiences.ts`, `personal.ts`
- Validações: schemas Zod para formulários

**Artefatos Produzidos:**

- `src/types/index.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/experiences.ts`
- `src/data/personal.ts`
- `src/validations/contact.ts`
- `src/utils/constants.ts`

**Dependências Técnicas:**

- Fase 0 concluída

**Pré-requisitos:**

- Dados do currículo disponíveis

**Critérios para Iniciar:**

- [ ] Estrutura de pastas criada
- [ ] TypeScript configurado

**Critérios para Concluir:**

- [ ] Todos os types definidos
- [ ] Todos os dados estáticos criados
- [ ] Validações Zod funcionais
- [ ] Build sem erros de tipo

**Riscos Envoltos:**

- Dados incompletos ou inconsistentes
- Types mal definidos causando erros em runtime

**Estratégia de Validação:**

- Verificar se todos os tipos são usados
- Verificar se os dados são válidos according aos schemas

**Entregáveis Esperados:**

- Arquivos de dados populados
- Types consistentes
- Validações funcionais

**Possíveis Gargalos:**

- Definição de tipos complexos para animações

**Próxima Fase Dependente:** Fase 2 — Componentes UI

---

### Fase 2 — Componentes UI (Atoms e Molecules)

**Objetivo:** Criar os componentes atômicos e moleculares reutilizáveis.

**Escopo:**

- Componentes Atom: Button, Icon, Input, Text
- Componentes Molecule: Card, FormField, MenuItem, SkillBadge
- Storybook para documentação (opcional)
- Testes unitários dos componentes

**Funcionalidades Implementadas:**

- Componentes com variantes (size, color, state)
- Props tipadas com TypeScript
- Acessibilidade básica (ARIA)
- Animações com Framer Motion

**Artefatos Produzidos:**

- `src/components/atoms/Button/`
- `src/components/atoms/Icon/`
- `src/components/atoms/Input/`
- `src/components/atoms/Text/`
- `src/components/molecules/Card/`
- `src/components/molecules/FormField/`
- `src/components/molecules/MenuItem/`
- `src/components/molecules/SkillBadge/`
- Testes para cada componente

**Dependências Técnicas:**

- Fase 0 e Fase 1 concluídas

**Pré-requisitos:**

- Design system definido (cores, tipografia, espaçamentos)

**Critérios para Iniciar:**

- [ ] Types definidos
- [ ] Tailwind configurado

**Critérios para Concluir:**

- [ ] Todos os componentes criados
- [ ] Componentes reutilizáveis
- [ ] Testes passando
- [ ] Acessibilidade verificada

**Riscos Envoltos:**

- Componentes acoplados demais
- Falta de reutilização

**Estratégia de Validação:**

- Testar componentes isoladamente
- Verificar responsividade

**Entregáveis Esperados:**

- Biblioteca de componentes pronta
- Testes unitários

**Possíveis Gargalos:**

- Integração de Framer Motion com Tailwind

**Próxima Fase Dependente:** Fase 3 — Layout e Design System

---

### Fase 3 — Layout e Design System

**Objetivo:** Criar os componentes de layout e organismos (seções da página).

**Escopo:**

- Header com navegação
- Hero section
- About section
- Skills section
- Projects section
- Experience section
- Contact section
- Footer
- PageTemplate

**Funcionalidades Implementadas:**

- Layout responsivo
- Navegação suave entre seções
- Menu hamburger em mobile
- Modo escuro/claro
- Animações de scroll

**Artefatos Produzidos:**

- `src/components/organisms/Header/`
- `src/components/organisms/Hero/`
- `src/components/organisms/About/`
- `src/components/organisms/Skills/`
- `src/components/organisms/Projects/`
- `src/components/organisms/Experience/`
- `src/components/organisms/Contact/`
- `src/components/organisms/Footer/`
- `src/components/templates/PageTemplate.tsx`
- `src/hooks/useTheme.ts`
- `src/hooks/useScrollSpy.ts`
- `src/styles/globals.css`
- `src/styles/theme.css`

**Dependências Técnicas:**

- Fase 2 concluída

**Pré-requisitos:**

- Componentes UI prontos
- Dados estáticos definidos

**Critérios para Iniciar:**

- [ ] Atom e Molecule components prontos
- [ ] Dados carregados

**Critérios para Concluir:**

- [ ] Todas as seções renderizadas
- [ ] Layout responsivo
- [ ] Navegação funcional
- [ ] Tema toggle funcional
- [ ] Animações suaves

**Riscos Envoltos:**

- Layout quebrado em diferentes viewports
- Animações causando problemas de performance

**Estratégia de Validação:**

- Testar em múltiplas resoluções
- Verificar performance com Lighthouse

**Entregáveis Esperados:**

- Página completa renderizada
- Design responsivo
- Tema funcional

**Possíveis Gargalos:**

- Scroll suave com header fixo
- Menu hamburger com animação

**Próxima Fase Dependente:** Fase 4 — Funcionalidades Interativas

---

### Fase 4 — Funcionalidades Interativas

**Objetivo:** Implementar interatividade e animações avançadas.

**Escopo:**

- Animações de entrada (scroll-triggered)
- Hover effects em cards e botões
- Modal de detalhes do projeto
- Filtros de projetos por tecnologia
- Tooltip em habilidades
- Smooth scroll entre seções
- Loading states

**Funcionalidades Implementadas:**

- Intersection Observer para animações
- Framer Motion para transições
- Keyboard navigation
- Focus management
- Reduced motion support

**Artefatos Produzidos:**

- Animações em todos os organismos
- Modal component
- Filter component
- Tooltip component
- Keyboard navigation utilities

**Dependências Técnicas:**

- Fase 3 concluída

**Pré-requisitos:**

- Layout completo
- Componentes UI prontos

**Critérios para Iniciar:**

- [ ] Todas as seções renderizadas
- [ ] Layout responsivo

**Critérios para Concluir:**

- [ ] Animações funcionando
- [ ] Modal funcional
- [ ] Filtros funcionando
- [ ] Navegação por teclado
- [ ] Reduced motion respeitado

**Riscos Envoltos:**

- Animações causando jank
- Acessibilidade prejudicada por animações

**Estratégia de Validação:**

- Testar com `prefers-reduced-motion`
- Verificar performance com DevTools

**Entregáveis Esperados:**

- Experiência interativa completa
- Animações fluidas

**Possíveis Gargalos:**

- Sincronização de animações
- Performance em dispositivos antigos

**Próxima Fase Dependente:** Fase 5 — Formulários e Integrações

---

### Fase 5 — Formulários e Integrações

**Objetivo:** Implementar formulário de contato e integrações externas.

**Escopo:**

- Formulário de contato com validação
- Integração com EmailJS
- Honeypot anti-spam
- Mensagens de sucesso/erro
- Analytics tracking
- SEO meta tags

**Funcionalidades Implementadas:**

- Validação em tempo real
- Envio assíncrono
- Loading states
- Error handling
- Event tracking

**Artefatos Produzidos:**

- Formulário completo
- Integração EmailJS
- Analytics setup
- Meta tags
- Open Graph tags

**Dependências Técnicas:**

- Fase 4 concluída
- Conta EmailJS criada

**Pré-requisitos:**

- Layout completo
- Interações funcionais

**Critérios para Iniciar:**

- [ ] Layout completo
- [ ] Interações funcionais

**Critérios para Concluir:**

- [ ] Formulário validando
- [ ] Email sendo enviado
- [ ] Spam bloqueado
- [ ] Analytics funcionando
- [ ] SEO configurado

**Riscos Envoltos:**

- EmailJS com limites de envio
- Google Analytics bloqueado por ad blockers

**Estratégia de Validação:**

- Testar envio de email real
- Verificar analytics em produção

**Entregáveis Esperados:**

- Formulário funcional
- Email recebido
- Analytics trackando

**Possíveis Gargalos:**

- Configuração de EmailJS
- Validação de email em tempo real

**Próxima Fase Dependente:** Fase 6 — Performance e Otimização

---

### Fase 6 — Performance e Otimização

**Objetivo:** Otimizar performance e experiência do usuário.

**Escopo:**

- Otimização de imagens (WebP/AVIF)
- Lazy loading de imagens e componentes
- Code splitting
- Minificação de CSS/JS
- Compression (gzip/brotli)
- Service Worker (PWA opcional)
- Core Web Vitals optimization

**Funcionalidades Implementadas:**

- Imagens otimizadas
- Carregamento lazy
- Bundle splitting
- Preloading de recursos críticos
- Cache strategy

**Artefatos Produzidos:**

- Imagens otimizadas
- Configuração de lazy loading
- Service Worker (opcional)
- Performance budget

**Dependências Técnicas:**

- Fase 5 concluída

**Pré-requisitos:**

- Funcionalidades completas
- Imagens originais disponíveis

**Critérios para Iniciar:**

- [ ] Todas as funcionalidades prontas
- [ ] Imagens originais no projeto

**Critérios para Concluir:**

- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Bundle < 200KB gzipped

**Riscos Envoltos:**

- Over-otimization causando complexidade
- Imagens WebP com qualidade insatisfatória

**Estratégia de Validação:**

- Lighthouse audit
- WebPageTest
- Teste em conexão lenta

**Entregáveis Esperados:**

- Site rápido e otimizado
- Scores Lighthouse > 90

**Possíveis Gargalos:**

- Otimização de imagens
- Balanceamento entre qualidade e tamanho

**Próxima Fase Dependente:** Fase 7 — Testes e Qualidade

---

### Fase 7 — Testes e Qualidade

**Objetivo:** Garantir qualidade com testes e validações.

**Escopo:**

- Testes unitários (componentes)
- Testes de integração
- Testes E2E (opcional)
- Testes de acessibilidade
- Testes de performance
- Code review
- Refatoração

**Funcionalidades Implementadas:**

- Cobertura de testes > 80%
- A11y testing
- Cross-browser testing
- Mobile testing

**Artefatos Produzidos:**

- Suite de testes completa
- Relatório de cobertura
- Testes E2E (se aplicável)
- Checklist de acessibilidade

**Dependências Técnicas:**

- Fase 6 concluída

**Pré-requisitos:**

- Site otimizado
- Funcionalidades estáveis

**Critérios para Iniciar:**

- [ ] Site funcional
- [ ] Performance adequada

**Critérios para Concluir:**

- [ ] Cobertura > 80%
- [ ] Todos os testes passando
- [ ] A11y verificado
- [ ] Cross-browser testado

**Riscos Envoltos:**

- Testes frágeis (flaky)
- Custo de manutenção de testes E2E

**Estratégia de Validação:**

- Rodar suite completa
- Verificar coverage report

**Entregáveis Esperados:**

- Código testado
- Qualidade garantida

**Possíveis Gargalos:**

- Testes de animação
- Testes de responsividade

**Próxima Fase Dependente:** Fase 8 — Deploy e Produção

---

### Fase 8 — Deploy e Produção

**Objetivo:** Publicar o site em produção e configurar monitoramento.

**Escopo:**

- Deploy no Vercel
- Configuração de domínio personalizado
- SSL/HTTPS
- Headers de segurança
- CI/CD completo
- Monitoramento
- Documentação

**Funcionalidades Implementadas:**

- Deploy automático
- Preview em PRs
- Rollback automático
- Error tracking
- Analytics em produção

**Artefatos Produzidos:**

- Site em produção
- CI/CD pipeline
- Documentação operacional
- Checklist de deploy

**Dependências Técnicas:**

- Fase 7 concluída
- Domínio registrado (opcional)

**Pré-requisitos:**

- Todos os testes passando
- Qualidade verificada

**Critérios para Iniciar:**

- [ ] Testes passando
- [ ] Qualidade verificada
- [ ] Conta Vercel pronta

**Critérios para Concluir:**

- [ ] Site acessível em produção
- [ ] SSL funcionando
- [ ] CI/CD rodando
- [ ] Analytics trackando
- [ ] Monitoramento ativo

**Riscos Envoltos:**

- DNS não propagado
- Dependências com vulnerabilidades

**Estratégia de Validação:**

- Acessar site em produção
- Verificar SSL
- Testar formulário
- Verificar analytics

**Entregáveis Esperados:**

- Site em produção
- Monitoramento ativo
- Documentação completa

**Possíveis Gargalos:**

- Configuração de domínio
- Propagação de DNS

**Próxima Fase Dependente:** Fase 9 — Evolução Contínua

---

### Fase 9 — Evolução Contínua (Opcional)

**Objetivo:** Planejar melhorias e novas funcionalidades.

**Escopo:**

- CMS headless para gerenciamento de conteúdo
- Blog integrado
- Multi-idiomas
- PWA completa
- Integração com LinkedIn API
- Dashboard de analytics
- A/B testing
- Heatmaps

**Funcionalidades Futuras:**

- Edição de conteúdo via CMS
- Posts sobre desenvolvimento
- Suporte a múltiplos idiomas
- Instalação como PWA
- Sincronização automática com LinkedIn

**Artefatos Produzidos:**

- Roadmap de evolução
- Backlog de melhorias
- Análise de ROI

**Dependências Técnicas:**

- Fase 8 concluída
- Site em produção funcionando

**Pré-requisitos:**

- Site estável em produção
- Feedback de usuários

**Critérios para Iniciar:**

- [ ] Site em produção
- [ ] Estabilidade verificada
- [ ] Feedback coletado

**Critérios para Concluir:**

- [ ] Próximas funcionalidades definidas
- [ ] Priorização feita
- [ ] Roadmap atualizado

**Riscos Envoltos:**

- Over-engineering
- Manutenção complexa

**Estratégia de Validação:**

- Análise de custo-benefício
- Priorização por impacto

**Entregáveis Esperados:**

- Roadmap atualizado
- Backlog priorizado

**Possíveis Gargalos:**

- Decisão sobre CMS
- Custo de multi-idiomas

**Próxima Fase Dependente:** Manutenção contínua

---

## Ordem de Implementação dos Componentes

| #   | Componente                  | Motivo da Ordem    | Dependências | Riscos                 | Resultado Esperado  |
| --- | --------------------------- | ------------------ | ------------ | ---------------------- | ------------------- |
| 1   | Inicialização do projeto    | Base para tudo     | Node.js, Git | Configuração incorreta | Projeto funcional   |
| 2   | Configuração da arquitetura | Estrutura organize | Fase 0       | Padrões inconsistentes | Código organizado   |
| 3   | Tipos TypeScript            | Segurança de tipos | Fase 0       | Types incompletos      | Types definidos     |
| 4   | Dados estáticos             | Conteúdo do site   | Tipos        | Dados desatualizados   | Dados prontos       |
| 5   | Componentes Atoms           | Blocos básicos     | Tailwind     | Componentes acoplados  | Biblioteca atômica  |
| 6   | Componentes Molecules       | Composição         | Atoms        | Falta de reutilização  | Molecules prontas   |
| 7   | Componentes Organisms       | Seções             | Molecules    | Layout quebrado        | Seções completas    |
| 8   | Layout System               | Estrutura visual   | Organisms    | Responsividade         | Layout responsivo   |
| 9   | Animações                   | Interatividade     | Layout       | Performance            | Experiência fluida  |
| 10  | Formulário                  | Contato            | Organisms    | Validação              | Form funcional      |
| 11  | Integrações externas        | Funcionalidade     | Formulário   | API limits             | Integrações prontas |
| 12  | SEO                         | Visibilidade       | Layout       | Indexação              | Site indexável      |
| 13  | Performance                 | Usabilidade        | Tudo         | Otimização excessiva   | Site rápido         |
| 14  | Testes                      | Qualidade          | Tudo         | Manutenção             | Código testado      |
| 15  | Deploy                      | Produção           | Tudo         | DNS/SSL                | Site em produção    |

---

## Roadmap de Entregas

| Fase   | Objetivo       | Dependências | Entregáveis         | Critério de Conclusão  |
| ------ | -------------- | ------------ | ------------------- | ---------------------- |
| Fase 0 | Fundação       | Node.js, Git | Projeto configurado | `npm run dev` funciona |
| Fase 1 | Dados          | Fase 0       | Types e dados       | Build sem erros        |
| Fase 2 | Componentes UI | Fase 1       | Atoms e Molecules   | Componentes renderizam |
| Fase 3 | Layout         | Fase 2       | Seções completas    | Página renderizada     |
| Fase 4 | Interatividade | Fase 3       | Animações e modais  | Interações funcionam   |
| Fase 5 | Formulários    | Fase 4       | Contato funcional   | Email enviado          |
| Fase 6 | Performance    | Fase 5       | Otimizações         | Lighthouse > 90        |
| Fase 7 | Qualidade      | Fase 6       | Testes              | Cobertura > 80%        |
| Fase 8 | Produção       | Fase 7       | Site publicado      | Acessível na web       |
| Fase 9 | Evolução       | Fase 8       | Melhorias           | Roadmap atualizado     |

---

## 13. Estratégia de Testes

### Testes Unitários

**Ferramenta:** Vitest + React Testing Library

**Escopo:**

- Componentes Atoms
- Componentes Molecules
- Hooks customizados
- Funções utilitárias
- Validações Zod

**Exemplo de Teste:**

```typescript
describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Testes de Integração

**Ferramenta:** Vitest + React Testing Library

**Escopo:**

- Composição de componentes
- Formulário completo
- Navegação entre seções
- Tema toggle

### Testes End-to-End

**Ferramenta:** Playwright (recomendado) ou Cypress

**Escopo:**

- Fluxo completo de navegação
- Envio de formulário
- Links externos
- Responsividade

### Testes Contratuais

**NÃO APLICÁVEL** — Sem backend.

### Testes de Carga

**NÃO APLICÁVEL** — Site estático.

**Alternativa:** Lighthouse Performance audit.

### Testes de Stress

**NÃO APLICÁVEL** — Site estático.

### Testes de Segurança

**Ferramenta:** npm audit + Snyk

**Escopo:**

- Dependências com vulnerabilidades
- Headers de segurança
- HTTPS

### Testes de Regressão

**Ferramenta:** Visual Regression Testing (opcional)

**Escopo:**

- Screenshots de componentes
- Comparação visual

### Critérios Mínimos de Cobertura

| Métrica    | Mínimo |
| ---------- | ------ |
| Statements | 80%    |
| Branches   | 75%    |
| Functions  | 80%    |
| Lines      | 80%    |
| Components | 100%   |
| Hooks      | 100%   |

---

## 14. Segurança

### OWASP Top 10

| Vulnerabilidade                | Status      | Mitigação                          |
| ------------------------------ | ----------- | ---------------------------------- |
| A01: Broken Access Control     | N/A         | Site público                       |
| A02: Cryptographic Failures    | Baixo risco | HTTPS obrigatório                  |
| A03: Injection                 | Baixo risco | Sem backend, sanitização de inputs |
| A04: Insecure Design           | Baixo risco | Arquitetura estática               |
| A05: Security Misconfiguration | Médio       | Headers de segurança               |
| A06: Vulnerable Components     | Alto        | Dependabot + npm audit             |
| A07: Auth Failures             | N/A         | Sem autenticação                   |
| A08: Data Integrity Failures   | Baixo       | SRI em scripts                     |
| A09: Logging Failures          | Baixo       | Error boundary                     |
| A10: SSRF                      | N/A         | Sem backend                        |

### Autenticação

**NÃO APLICÁVEL** — Site público sem necessidade de login.

### Autorização

**NÃO APLICÁVEL** — Todos os conteúdos são públicos.

### Rate Limiting

**NÃO APLICÁVEL** — Sem backend.

**Alternativa:** EmailJS possui rate limiting próprio.

### CSRF

**Baixo risco** — Formulário usa EmailJS (POST externo).

**Mitigação:** Honeypot field.

### XSS

**Mitigação:**

- React escapamento automático
- Sanitização de inputs no formulário
- CSP headers

### SQL Injection

**N/A** — Sem banco de dados.

### Secrets Management

**Secrets:**

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_GA_TRACKING_ID`

**Armazenamento:** Environment variables no Vercel.

**Nunca commitar:** Arquivo `.env` no `.gitignore`.

### Criptografia

**HTTPS/TLS:** Automático no Vercel.

**Dados sensíveis:** Apenas email (não criptografado localmente).

### Auditoria

**Ferramenta:** `npm audit` + Snyk

**Frequência:** Semanal via CI/CD

### Logs de Segurança

**N/A** — Sem backend.

**Alternativa:** Error tracking via Sentry.

### LGPD

**Dados coletados:**

- Nome (formulário)
- Email (formulário)
- Mensagem (formulário)

**Finalidade:** Contato profissional.

**Armazenamento:** Apenas via EmailJS (não armazenado localmente).

**Exclusão:** Dados não persistidos, automatically deleted.

**Consentimento:** Banner de cookies se analytics obrigatório.

---

## 15. Observabilidade

### Logs Estruturados

**N/A** — Site estático sem backend.

**Alternativa:** Console logs em desenvolvimento.

### Métricas

| Métrica          | Fonte            | Frequência |
| ---------------- | ---------------- | ---------- |
| Pageviews        | Google Analytics | Tempo real |
| Unique Users     | Google Analytics | Diário     |
| Scroll Depth     | Custom Event     | Por sessão |
| Click Through    | Custom Event     | Por sessão |
| Form Submissions | Custom Event     | Por envio  |
| Core Web Vitals  | GA4              | Contínuo   |
| Bounce Rate      | Google Analytics | Diário     |
| Session Duration | Google Analytics | Diário     |

### Tracing

**N/A** — Sem backend.

### Alertas

**Ferramenta:** Google Analytics Alerts

**Alertas Configurados:**

- Queda de tráfego > 50%
- Formulário com muitos erros
- Performance degradation

### Dashboards

**Ferramenta:** Google Analytics 4

**Dashboards:**

- Visão geral de tráfego
- Comportamento dos usuários
- Conversões (formulário)
- Performance do site

### SLO

| SLO             | Target           | Measurement       |
| --------------- | ---------------- | ----------------- |
| Disponibilidade | 99.9%            | Uptime monitoring |
| Performance     | Lighthouse > 90  | Lighthouse CI     |
| Formulário      | 99% success rate | EmailJS dashboard |

### SLA

**N/A** — Site pessoal, sem SLA formal.

### SLI

| SLI         | Target        | Source     |
| ----------- | ------------- | ---------- |
| Uptime      | 99.9%         | Vercel     |
| Performance | LCP < 2.5s    | Web Vitals |
| Formulário  | Success > 99% | EmailJS    |

---

## 16. CI/CD

### Pipeline Recomendado

```
Push to main
   ↓
Lint (ESLint)
   ↓
Format Check (Prettier)
   ↓
Type Check (TypeScript)
   ↓
Unit Tests (Vitest)
   ↓
Build (Vite)
   ↓
Deploy (Vercel)
   ↓
Post-deploy Tests
```

### Build

**Comando:** `npm run build`

**Resultado:** Diretório `dist/` com assets otimizados.

### Lint

**Comando:** `npm run lint`

**Ferramenta:** ESLint

**Regras:** Configuradas em `.eslintrc.cjs`

### Testes

**Comando:** `npm run test`

**Ferramenta:** Vitest

**Cobertura:** Mínimo 80%

### Análise Estática

**Ferramentas:**

- ESLint (código)
- TypeScript (tipos)
- Prettier (formatação)

### Segurança

**Ferramentas:**

- `npm audit`
- Dependabot alerts
- Snyk (opcional)

### Deploy

**Plataforma:** Vercel

**Trigger:** Push para branch `main`

**Preview:** Automático em PRs

### Rollback

**Estratégia:** Rollback manual via Vercel dashboard

**Alternativa:** Re-deploy do commit anterior

**Automático:** Vercel mantém histórico de deploys

---

## 17. Riscos Técnicos

| Risco                                 | Impacto | Probabilidade | Mitigação                                        |
| ------------------------------------- | ------- | ------------- | ------------------------------------------------ |
| Dependências com vulnerabilidades     | Alto    | Média         | Dependabot + npm audit semanal                   |
| Performance ruim em mobile            | Alto    | Média         | Otimização de imagens + lazy loading             |
| EmailJS com limites de envio          | Médio   | Baixa         | Monitorar uso + plano pago se necessário         |
| Animações causando jank               | Médio   | Média         | Usar GPU-accelerated properties + reduced motion |
| Layout quebrado em viewports          | Médio   | Baixa         | Testes em múltiplas resoluções                   |
| Google Analytics bloqueado            | Baixo   | Alta          | Alternativa: Plausible Analytics                 |
| DNS não propagado                     | Baixo   | Baixa         | Configurar com antecedência                      |
| Vercel com downtime                   | Alto    | Baixa         | Monitoramento externo + alternativa Netlify      |
| Atualização de dependências quebrando | Médio   | Média         | Testes automatizados + lock file                 |
| LGPD não comply                       | Alto    | Baixa         | Banner de cookies + política de privacidade      |

---

## 18. Débitos Técnicos Previstos

| Débito                         | Impacto | Prioridade | Mitigação                         |
| ------------------------------ | ------- | ---------- | --------------------------------- |
| Falta de testes E2E            | Média   | Alta       | Implementar Playwright            |
| Sem Storybook                  | Baixo   | Média      | Documentar componentes em README  |
| Sem PWA                        | Baixo   | Baixa      | Implementar service worker futuro |
| Sem CMS                        | Média   | Média      | Usar CMS headless futuro          |
| Sem multi-idiomas              | Baixo   | Baixa      | Implementar i18n futuro           |
| Sem visual regression tests    | Baixo   | Baixa      | Implementar Percy/Chromatic       |
| Sem error tracking em produção | Médio   | Alta       | Implementar Sentry                |
| Sem A/B testing                | Baixo   | Baixa      | Implementar Split.io futuro       |
| Sem heatmaps                   | Baixo   | Baixa      | Implementar Hotjar futuro         |

---

## 19. Critérios de Pronto (Definition of Done)

### Código

- [ ] Código escrito em TypeScript
- [ ] Código passa no ESLint sem errors
- [ ] Código passa no Prettier
- [ ] Código passa no TypeScript type check
- [ ] Componentes são reutilizáveis
- [ ] Código é acessível (WCAG 2.1 AA)
- [ ] Código funciona em mobile
- [ ] Código funciona em desktop

### Testes

- [ ] Testes unitários escritos
- [ ] Testes passam
- [ ] Cobertura mínima 80%
- [ ] Testes de integração escritos
- [ ] Testes de integração passam

### Documentação

- [ ] README atualizado
- [ ] Componentes documentados
- [ ] Decisões de arquitetura documentadas

### Deploy

- [ ] Build passa
- [ ] Deploy automático funciona
- [ ] Preview em PR funciona
- [ ] Site acessível em produção

### Qualidade

- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90

### Segurança

- [ ] npm audit sem vulnerabilities high/critical
- [ ] Headers de segurança configurados
- [ ] Secrets não commitados
- [ ] HTTPS funcionando

### Review

- [ ] Code review feito
- [ ] Feedback implementado
- [ ] Merge sem conflicts

---

## 20. Backlog Inicial

### Epic 1: Fundação do Projeto

**Feature 1.1: Configuração Inicial**

- User Story: Como desenvolvedor, quero configurar o projeto para começar a desenvolver
- Tasks:
  - [ ] Criar repositório no GitHub
  - [ ] Inicializar projeto com Vite + React + TypeScript
  - [ ] Configurar ESLint + Prettier
  - [ ] Configurar Tailwind CSS
  - [ ] Configurar Husky
  - [ ] Criar estrutura de pastas
  - [ ] Configurar CI/CD básico

**Feature 1.2: Tipos e Dados**

- User Story: Como desenvolvedor, quero definir os tipos e dados do portfólio
- Tasks:
  - [ ] Definir interfaces TypeScript
  - [ ] Criar arquivo de dados de projetos
  - [ ] Criar arquivo de dados de habilidades
  - [ ] Criar arquivo de dados de experiências
  - [ ] Criar arquivo de dados pessoais
  - [ ] Configurar validações Zod

### Epic 2: Componentes UI

**Feature 2.1: Atoms**

- User Story: Como desenvolvedor, quero criar componentes básicos reutilizáveis
- Tasks:
  - [ ] Criar componente Button
  - [ ] Criar componente Icon
  - [ ] Criar componente Input
  - [ ] Criar componente Text
  - [ ] Escrever testes unitários

**Feature 2.2: Molecules**

- User Story: Como desenvolvedor, quero criar componentes compostos
- Tasks:
  - [ ] Criar componente Card
  - [ ] Criar componente FormField
  - [ ] Criar componente MenuItem
  - [ ] Criar componente SkillBadge
  - [ ] Escrever testes unitários

### Epic 3: Layout e Design

**Feature 3.1: Header e Navegação**

- User Story: Como visitante, quero navegar entre seções
- Tasks:
  - [ ] Criar componente Header
  - [ ] Implementar menu hamburger
  - [ ] Implementar scroll suave
  - [ ] Implementar scroll spy

**Feature 3.2: Seções da Página**

- User Story: Como visitante, quero visualizar todas as seções
- Tasks:
  - [ ] Criar Hero section
  - [ ] Criar About section
  - [ ] Criar Skills section
  - [ ] Criar Projects section
  - [ ] Criar Experience section
  - [ ] Criar Contact section
  - [ ] Criar Footer

### Epic 4: Interatividade

**Feature 4.1: Animações**

- User Story: Como visitante, quero uma experiência visual fluida
- Tasks:
  - [ ] Implementar animações de entrada
  - [ ] Implementar hover effects
  - [ ] Implementar transições de tema
  - [ ] Implementar reduced motion support

**Feature 4.2: Modais e Filtros**

- User Story: Como visitante, quero interagir com projetos
- Tasks:
  - [ ] Criar modal de detalhes
  - [ ] Implementar filtros de projetos
  - [ ] Implementar tooltips
  - [ ] Implementar keyboard navigation

### Epic 5: Formulário e Integrações

**Feature 5.1: Formulário de Contato**

- User Story: Como visitante, quero entrar em contato
- Tasks:
  - [ ] Criar componente de formulário
  - [ ] Implementar validação
  - [ ] Implementar honeypot
  - [ ] Integrar com EmailJS
  - [ ] Testar envio

**Feature 5.2: Analytics e SEO**

- User Story: Como proprietário, quero rastrear访问as
- Tasks:
  - [ ] Configurar Google Analytics
  - [ ] Adicionar meta tags
  - [ ] Adicionar Open Graph
  - [ ] Criar sitemap.xml
  - [ ] Criar robots.txt

### Epic 6: Performance e Qualidade

**Feature 6.1: Otimização**

- User Story: Como visitante, quero carregamento rápido
- Tasks:
  - [ ] Otimizar imagens (WebP)
  - [ ] Implementar lazy loading
  - [ ] Configurar code splitting
  - [ ] Testar Lighthouse

**Feature 6.2: Testes**

- User Story: Como desenvolvedor, quero garantir qualidade
- Tasks:
  - [ ] Escrever testes unitários
  - [ ] Escrever testes de integração
  - [ ] Configurar testes E2E
  - [ ] Testar acessibilidade
  - [ ] Testar cross-browser

### Epic 7: Deploy e Produção

**Feature 7.1: Deploy**

- User Story: Como desenvolvedor, quero publicar o site
- Tasks:
  - [ ] Configurar Vercel
  - [ ] Configurar domínio (opcional)
  - [ ] Configurar CI/CD completo
  - [ ] Testar deploy
  - [ ] Documentar processo

---

**Fim da SPEC — Vaporwave Online Portfolio**

_Documento gerado automaticamente a partir do contexto fornecido._
_Última atualização: 05 de Julho de 2026_
