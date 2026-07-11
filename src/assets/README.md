# Estrutura de Assets

## Ícones de Habilidades

Coloque os arquivos de imagem (PNG, SVG, WebP) nas pastas conforme a categoria:

```
src/assets/icons/
├── backend/        → python.png, nodejs.png, typescript.png, fastapi.png, nestjs.png
├── frontend/       → html5.png, css3.png, react.png, bootstrap.png, javascript.png
├── blockchain/     → solidity.png, move.png, metamask.png, remix.png
├── database/       → mysql.png, sqlite.png
└── tools/          → git.png, github.png, office.png, canva.png, wix.png
```

**Importante:** O nome do arquivo (sem extensão) deve corresponder ao `id` da skill em `src/data/skills.ts`.

Exemplo: Para a skill com `id: 'python'`, o arquivo deve ser `icons/backend/python.png`.

## Foto de Perfil

```
src/assets/images/profile/
└── profile.png     → Foto de perfil do desenvolvedor
```

A foto será exibida automaticamente na seção "Sobre Mim" quando o arquivo existir.

## Imagens de Projetos

```
src/assets/images/projects/
├── webbb3.png      → Imagem do projeto Webbb3
├── nft-hub.png     → Imagem do projeto Nft Hub
└── convmonitor.png → Imagem do projeto ConvMonitor
```

**Importante:** O nome do arquivo (sem extensão) deve corresponder ao `id` do projeto em `src/data/projects.ts`.

## Background Hero

```
src/assets/
└── hero.png        → Background da hero section (já existe)
```

## Backgrounds Decorativos

```
src/assets/backgrounds/
├── hero-saturn.png   → Planeta decorativo (já integrado no Hero)
├── hero-trees.gif    → Árvores neon animadas (já integrado no Hero)
├── matrix.png        → Efeito matrix (já integrado no Footer)
├── matrix-blue.gif   → Efeito matrix animado
├── blob.png          → Forma orgânica decorativa
├── sun.png           → Sol/logo vaporwave
├── point.png         → Ponto decorativo
└── trees.webp        → Árvores neon estáticas
```

## Elementos Decorativos

```
src/assets/decorative/
├── car.png         → Carro vaporwave (já integrado no About)
├── roman.webp      → Coluna romana (disponível para SectionDivider)
└── head.gif        → Cabeça animada
```

## Ícones Decorativos

```
src/assets/icons-decorative/
├── chat.png              → Ícone de contato (já integrado no Contact)
├── shape.png             → Ícone de skills
├── vibration.png         → Ícone de blockchain
├── iceberg.png           → Ícone decorativo
└── additive-synthesis.png → Ícone de áudio/som
```

## Formatos Suportados

- PNG
- SVG
- JPG/JPEG
- WebP
- GIF (para animações)

**Recomendação:** Máximo de 200KB por arquivo para manter performance.

## Como Funciona

O utilitário `src/utils/iconImports.ts` usa `import.meta.glob` do Vite para importar automaticamente todas as imagens das pastas de assets. As funções disponíveis são:

- `getSkillIcon(skillId: string)` → Retorna URL da imagem da skill
- `getProfileImage()` → Retorna URL da foto de perfil
- `getProjectImage(projectId: string)` → Retorna URL da imagem do projeto

Se nenhum arquivo for encontrado, o sistema usa o emoji como fallback.
