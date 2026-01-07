# Portfólio — Felipe Jovino

Portfólio pessoal desenvolvido com **Next.js**, **React**, **TypeScript**, **TailwindCSS** e **Zustand**, com foco em performance, responsividade e uma base de código bem organizada para evoluir com facilidade.

A ideia aqui é simples: uma vitrine direta e rápida de navegar, com seções claras, componentes reaproveitáveis e um visual consistente em **tema claro/escuro**.

---

## Stack

- **Next.js** (App Router)
- **React + TypeScript**
- **TailwindCSS**
- **Zustand** (estado global, incluindo sincronização do tema)
- **Assets centralizados** via `assets.ts` (imagens/ícones do projeto)

---

## O que você encontra aqui

- Layout **mobile-first** e responsivo
- **Navbar componentizado**
- **Tema claro/escuro** sincronizado por estado global (Zustand)
- Organização por componentes e páginas para manter o projeto escalável
- Estrutura simples para adicionar/remover projetos, skills e links sem quebrar o layout

---

## Como rodar localmente

1. Clone o repositório:

```bash
git clone <URL_DO_SEU_REPO>
cd <PASTA_DO_PROJETO>
```

2. Instale as dependências:

```bash
npm install
# ou
pnpm install
# ou
yarn
```

3. Rode em modo desenvolvimento:

```bash
npm run dev
# ou equivalente no seu gerenciador
```

Acesse: `http://localhost:3000`

---

## Estrutura do projeto (visão geral)

A estrutura pode variar, mas a lógica geral é:

- `src/app/` — rotas e páginas (App Router)
- `src/components/` — componentes reutilizáveis (ex.: Navbar)
- `src/store/` — stores do Zustand (ex.: tema)
- `src/assets.ts` — catálogo central de imagens/ícones usados na UI
- `public/` — arquivos estáticos (quando aplicável)

---

## Customização rápida

### Conteúdo (textos, links e seções)

Procure pelas páginas em `src/app/` e pelos componentes em `src/components/`. Normalmente você consegue ajustar:

- nome/título principal
- descrição/bio
- links sociais
- lista de projetos
- tecnologias/skills exibidas

### Imagens e ícones

Se você mantém tudo no `assets.ts`, a manutenção fica mais fácil: você troca a fonte do asset uma vez e o projeto inteiro reflete a mudança.

> Dica: se você estiver reduzindo tamanho do projeto, uma boa estratégia é migrar ícones de assets para **react-icons** e manter no `assets.ts` apenas imagens “reais” (foto, banners, thumbnails de projetos).

---

## Deploy

Esse projeto é compatível com deploy em:

- **Vercel** (recomendado para Next.js)
- Netlify / Render / VPS (dependendo do seu setup)

Em geral, basta apontar o repositório e manter o build padrão do Next.js.

---

## Autor

**Felipe Jovino**
Desenvolvedor Full Stack — Next.js, Node.js, AdonisJS, PostgreSQL, ESP32, Python e IA.
