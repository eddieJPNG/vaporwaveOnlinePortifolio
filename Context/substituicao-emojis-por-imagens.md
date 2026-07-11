# Implementação — Substituição de Emojis por Imagens Reais

**Data:** 07/07/2026
**Fase:** Assets — Substituição de Emojis
**Status:** Concluída

---

## Resumo

Implementação do sistema de importação dinâmica de imagens e substituição de emojis por imagens reais nos componentes do portfólio, permitindo que o usuário coloque imagens nas pastas de assets e elas sejam automaticamente utilizadas.

---

## Arquivos Criados

### 1. `src/utils/iconImports.ts`

Utilitário de importação dinâmica usando `import.meta.glob` do Vite.

**Funções exportadas:**

- `getSkillIcon(skillId: string)` → Retorna URL da imagem da skill ou `undefined`
- `getProfileImage()` → Retorna URL da foto de perfil ou `undefined`
- `getProjectImage(projectId: string)` → Retorna URL da imagem do projeto ou `undefined`

**Como funciona:**

- Usa `import.meta.glob` com `eager: true` para importar todas as imagens das pastas
- Resolve o caminho baseado no ID (nome do arquivo sem extensão)
- Retorna `undefined` se nenhum arquivo for encontrado (fallback para emoji)

### 2. `src/assets/README.md`

Documentação completa da estrutura de assets, incluindo:

- Estrutura de pastas para ícones de skills
- Estrutura para foto de perfil
- Estrutura para imagens de projetos
- Formatos suportados
- Explicação de como o sistema funciona

---

## Arquivos Modificados

### 3. `src/types/index.ts`

**Alterações:**

- Adicionado campo `iconePath?: string` ao interface `Skill`
- Adicionado campo `imagem?: string` ao interface `PersonalInfo`

### 4. `src/data/skills.ts`

**Alterações:**

- Importada função `getSkillIcon` de `iconImports.ts`
- Adicionado campo `iconePath` para cada uma das 21 skills
- Cada skill agora tenta carregar imagem baseada no seu ID

**Mapeamento de IDs:**

| Skill ID   | Caminho esperado              |
| ---------- | ----------------------------- |
| python     | icons/backend/python.png      |
| nodejs     | icons/backend/nodejs.png      |
| typescript | icons/backend/typescript.png  |
| fastapi    | icons/backend/fastapi.png     |
| nestjs     | icons/backend/nestjs.png      |
| mysql      | icons/database/mysql.png      |
| sqlite     | icons/database/sqlite.png     |
| git        | icons/tools/git.png           |
| github     | icons/tools/github.png        |
| html5      | icons/frontend/html5.png      |
| css3       | icons/frontend/css3.png       |
| react      | icons/frontend/react.png      |
| bootstrap  | icons/frontend/bootstrap.png  |
| javascript | icons/frontend/javascript.png |
| solidity   | icons/blockchain/solidity.png |
| move       | icons/blockchain/move.png     |
| metamask   | icons/blockchain/metamask.png |
| remix      | icons/blockchain/remix.png    |
| office     | icons/tools/office.png        |
| canva      | icons/tools/canva.png         |
| wix        | icons/tools/wix.png           |

### 5. `src/data/projects.ts`

**Alterações:**

- Importada função `getProjectImage` de `iconImports.ts`
- Adicionado campo `imagem` para cada um dos 3 projetos

**Mapeamento:**

| Projeto ID  | Caminho esperado                |
| ----------- | ------------------------------- |
| webbb3      | images/projects/webbb3.png      |
| nft-hub     | images/projects/nft-hub.png     |
| convmonitor | images/projects/convmonitor.png |

### 6. `src/data/personal.ts`

**Alterações:**

- Importada função `getProfileImage` de `iconImports.ts`
- Adicionado campo `imagem` com o resultado da função

### 7. `src/components/molecules/SkillBadge/SkillBadge.tsx`

**Alterações:**

- Adicionada prop `iconPath?: string` ao interface `SkillBadgeProps`
- Lógica de renderização atualizada:
  - Se `iconPath` existir → renderiza `<img>` com `alt={name}`
  - Caso contrário → renderiza emoji (comportamento anterior)
- Imagem usa classes `w-5 h-5 object-contain` para tamanho consistente

### 8. `src/components/molecules/SkillBadge/SkillBadge.test.tsx`

**Testes adicionados:**

- `renders with iconPath as img` — Verifica renderização de imagem
- `prefers iconPath over icon` — Verifica prioridade de imagem sobre emoji

### 9. `src/components/organisms/Skills/Skills.tsx`

**Alterações:**

- Passa prop `iconPath={skill.iconePath}` para o componente `SkillBadge`

### 10. `src/components/organisms/About/About.tsx`

**Alterações:**

- Adicionada renderização condicional de foto de perfil
- Se `personalInfo.imagem` existir, renderiza `<img>` com:
  - Classe `rounded-full` para borda circular
  - Borda `border-4 border-vaporwave-purple`
  - Tamanho `w-32 h-32`
  - `object-cover` para preencher o espaço

### 11. `src/components/organisms/Projects/Projects.tsx`

**Alterações:**

- Adicionada renderização condicional de imagem no card do projeto
- Se `project.imagem` existir, renderiza `<img>` no topo do card com:
  - Largura total do card
  - Altura fixa `h-40`
  - `object-cover` para preencher o espaço

### 12. `src/components/molecules/ProjectModal/ProjectModal.tsx`

**Alterações:**

- Adicionada renderização condicional de imagem no modal
- Se `project.imagem` existir, renderiza `<img>` no topo do modal com:
  - Largura total do modal
  - Altura fixa `h-48`
  - `object-cover` para preencher o espaço

---

## Verificação

### Comandos executados:

```bash
npx vite build    ✅ Build de produção sem erros (536 modules)
npm run lint      ✅ Linting sem erros
```

### Bundle resultante:

```
dist/index.html                             3.64 kB │ gzip:  1.27 kB
dist/assets/mysql-BLECB_lm.svg              4.33 kB │ gzip:  2.02 kB
dist/assets/sqlite-original-BmD6cN0v.svg    5.17 kB │ gzip:  2.52 kB
dist/assets/move-CPl-OZFQ.png               5.55 kB
dist/assets/nestjs-B79ttyQB.svg             5.57 kB │ gzip:  2.15 kB
dist/assets/car-BGKTIWaM.png                6.02 kB
dist/assets/bootstrap-ywri9njD.svg          6.56 kB │ gzip:  2.69 kB
dist/assets/matrix-DBXncKAW.png             8.15 kB
dist/assets/Microsoft_365-DJ_y2BlE.webp     8.45 kB
dist/assets/remixIDE-BM1xScd1.png           9.36 kB
dist/assets/metamask-DDTyTwxu.webp         11.46 kB
dist/assets/hero-saturn-BB3IiYgO.png       15.83 kB
dist/assets/chat-D5oLRvj5.png              19.22 kB
dist/assets/wix-hYnw-N2u.png               22.88 kB
dist/assets/roman-Csxj_3Dr.webp            26.76 kB
dist/assets/hero-trees-5pKKTaMM.gif       548.93 kB
dist/assets/index-CjInbxYt.css             43.73 kB │ gzip:  7.19 kB
dist/assets/index-B_MQN3ST.js              42.69 kB │ gzip: 17.46 kB
dist/assets/vendor-forms-CfrCs6nW.js       60.78 kB │ gzip: 14.64 kB
dist/assets/vendor-motion-wYESwXjV.js     136.18 kB │ gzip: 45.63 kB
dist/assets/vendor-react-dom-Djxgu6wF.js  182.95 kB │ gzip: 58.02 kB
```

---

## Conformidade com o Plano

### Itens implementados:

- [x] Criar `src/utils/iconImports.ts` (utilitário base)
- [x] Atualizar `src/types/index.ts` (tipos)
- [x] Atualizar `src/data/skills.ts` (dados com caminhos)
- [x] Atualizar `src/data/projects.ts` (dados com caminhos)
- [x] Atualizar `src/data/personal.ts` (dados com caminho)
- [x] Atualizar `SkillBadge.tsx` (renderização de img)
- [x] Atualizar `SkillBadge.test.tsx` (testes para iconPath)
- [x] Atualizar `Skills.tsx` (passar iconPath)
- [x] Atualizar `About.tsx` (foto perfil)
- [x] Atualizar `Projects.tsx` (imagem nos cards)
- [x] Atualizar `ProjectModal.tsx` (imagem no modal)
- [x] Criar `src/assets/README.md` (documentação)

### Itens já implementados anteriormente:

- [x] Hero.tsx (background decorativo)

### Sistema de fallback:

- Se nenhuma imagem for encontrada → usa emoji (comportamento original)
- Imagens são carregadas via `import.meta.glob` com `eager: true`
- Nenhuma chamada assíncrona necessária

---

## Como Usar

### Para adicionar ícones de skills:

1. Coloque o arquivo na pasta correspondente:
   - `src/assets/icons/backend/python.png`
   - `src/assets/icons/frontend/react.png`
   - etc.

2. O nome do arquivo (sem extensão) deve corresponder ao `id` da skill

3. As imagens serão carregadas automaticamente

### Para adicionar foto de perfil:

1. Coloque o arquivo em: `src/assets/images/profile/profile.png`

2. A foto será exibida automaticamente na seção "Sobre Mim"

### Para adicionar imagens de projetos:

1. Coloque o arquivo na pasta: `src/assets/images/projects/webbb3.png`

2. O nome do arquivo (sem extensão) deve corresponder ao `id` do projeto

3. A imagem será exibida automaticamente nos cards e no modal

---

## Notas

- Todos os componentes usam renderização condicional (`{imagem && <img>}`)
- Se nenhuma imagem for encontrada, o componente funciona normalmente com emoji
- Imagens de projetos e skills usam `object-cover` ou `object-contain` para melhor ajuste
- Foto de perfil usa `rounded-full` para borda circular
- Acessibilidade mantida com `alt` text em todas as imagens

---

_Implementado conforme plano de substituição de emojis por imagens reais_
