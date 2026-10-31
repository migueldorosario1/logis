# Revista LOGIS — Manual Canônico de Operação, Conteúdo Trilíngue (PT/EN/ES), Build, Publicação e Reversão

> **Atualizado em:** 31/10/2026 (`AG-08` · Agyonor / Antigravity Desktop, em coordenação com `ZM-01` e `Milton / ZM-45`)
> **URL pública de produção:** `https://logis-magazine.vercel.app` (redireciona `/` para `/pt/`, `/en/` e `/es/`)
> **Repositório GitHub canônico:** `https://github.com/migueldorosario1/logis.git` (branch `main`)
> **Cópia local canônica no Dell:** `/home/migueldorosario/Downloads/Antigravity Google/logis/`
> **Projeto na Vercel:** `logis-magazine` (`prj_U64icaeaxRVcWIJ0ySDQZluLYLuK`) · Equipe: `team_QQzbgQTC569AoQxaur7tNLGj` (`miguel-do-rosario-s-projects` / `Miguel do Rosário's projects`)

---

## 1. Arquitetura do Portal e Estrutura Trilíngue (`pt`, `en`, `es`)

O portal da **Revista LOGIS** (Instituto de Logística e Sustentabilidade) é construído em **Astro 5 (`astro@^5.13.4`)** com geração 100% estática (`dist/`). Todas as rotas são geradas nos três idiomas definidos em `src/content/ui.ts` (`LANGS = ['pt', 'en', 'es']`).

### 1.1 Mapa de Arquivos de Conteúdo
| Arquivo | Finalidade | Idiomas / Comportamento |
|---|---|---|
| `src/data/reportagens.ts` | **Reportagens especiais e artigos de capa/destaque** (`REPORTAGENS: Reportagem[]`). | Cada item possui `slug` canônico (PT) e `slugs: { en, es }` traduzidos, além de `kicker`, `titulo`, `olho`, `corpo` e `notas` em `{ pt, en, es }`. |
| `src/pages/[lang]/index.astro` | **Página inicial (Home)** nos 3 idiomas (`/pt/`, `/en/`, `/es/`). | Renderiza a manchete principal (`REPORTAGENS[0]`), a faixa do editorial semanal, a grade de destaques com foto (`REPORTAGENS.slice(1)`), o card da Edição nº 1 da revista, os 6 blocos institucionais e o radar de fontes RSS. |
| `src/pages/[lang]/reportagens/[slug].astro` | **Página individual de reportagem** e seletor de bandeirinhas de idioma. | Gera as páginas estáticas usando `slugRep(r, lang)` e passa `paths={repPaths}` ao layout `Base.astro` para que as bandeirinhas no topo alternem diretamente entre os slugs equivalentes em PT, EN e ES. |
| `src/pages/[lang]/reportagens/[slug]/notas.astro` | **Página de notas e fontes** de cada reportagem (`/[lang]/reportagens/[slug]/notas/`). | Renderizada automaticamente quando o objeto `Reportagem` possui a propriedade `notas: { pt, en, es }`. |
| `src/data/artigos.ts` | **Artigos científicos em PDF** (`/[lang]/artigos/`). | Metadados trilíngues e links para `public/downloads/*.pdf`. |
| `src/data/noticias.ts` | **Observatório / Notas curtas** (`/[lang]/observatorio/`). | Notas analíticas setorizadas em PT, EN e ES. |
| `src/content/pages.ts` | **Textos institucionais, Editorial Semanal e cards fixos da Home**. | Contém `PAGES.home[lang]`, `PAGES.editorial[lang]`, `PAGES.revista[lang]`, `PAGES.institucional[lang]`, etc. |
| `public/imagens/` | **Imagens de capa das reportagens e da revista**. | Sempre horizontais, licenciadas/verificadas e referenciadas como `/imagens/<arquivo>.jpg`. |

---

## 2. Como Funcionam os Destaques da Página Inicial e a Inclusão de Novos Artigos

Em `src/pages/[lang]/index.astro`:
1. **Manchete Principal (Topo da Home):**
   - Lê sempre **`const rep = REPORTAGENS[0]`** (o primeiro elemento do array `REPORTAGENS` em `src/data/reportagens.ts`).
2. **Grade "Últimas notícias" (Cards de Foto abaixo da Faixa Editorial):**
   - Lê sempre **`REPORTAGENS.slice(1)`** (do segundo elemento em diante do array `REPORTAGENS`).
   - Atualmente, com 5 reportagens em `REPORTAGENS`, `REPORTAGENS[0]` ocupa a manchete principal (*A logística do crime*) e os 4 itens seguintes (`REPORTAGENS[1..4]`) formam o grid simétrico de 4 cards com foto:
     1. `selo-eletronico-fiscal` (*O passaporte da mercadoria* / *The merchandise passport* / *El pasaporte de la mercancía*)
     2. `seguranca-privada-custo-economia` (*O preço da proteção* / *The price of protection* / *El precio de la protección*)
     3. `mercado-ilegal-combustiveis-petroleo` (*A república paralela do combustível* / *The parallel republic of fuel* / *La república paralela del combustible*)
     4. `mare-liberum-corrupcao-portos` (*O porto à venda* / *The port for sale* / *El puerto en venta*)

### Checklist Obrigatório ao Inserir ou Atualizar Artigo em `src/data/reportagens.ts`
1. **Slugs por idioma:** Definir `slug` (português, imutável após publicação) e `slugs: { en: '...', es: '...' }`.
2. **Textos completos nos 3 idiomas:** Preencher `kicker`, `titulo`, `olho` e `corpo` com arrays de parágrafos completos em `pt`, `en` e `es`. Links no corpo usam sintaxe Markdown `[texto](https://...)` (apenas `https://` é convertido em `<a>` pelo helper `mdLinks`).
3. **Notas e fontes (`notas`):** Quando houver caderno de notas/fontes, preencher `notas: { pt: [...], en: [...], es: [...] }`.
4. **Imagem de capa (`foto`):** Salvar a imagem em `public/imagens/<nome>.jpg` e preencher `src`, `credito`, `licenca` e `descricao`.
5. **Posição na Home:** Definir com o Miguel se o novo artigo entra como nova manchete (`REPORTAGENS[0]`) ou como card de destaque (`REPORTAGENS.slice(1)`), cuidando do equilíbrio visual do grid.

---

## 3. Procedimento de Build e Verificação Local (Pré-Publicação)

No diretório `/home/migueldorosario/Downloads/Antigravity Google/logis`:

```bash
# 1. Compilar o site estático para dist/
npm run build

# 2. Verificar integridade das rotas PT/EN/ES e status do projeto na Vercel (SOMENTE LEITURA, sem publicar)
python3 scripts/deploy_vercel.py --check
```

### Critérios de Aprovação do Build Local
- `npm run build` deve terminar com código `0` e `0` erros de TypeScript/Astro.
- `dist/pt/index.html`, `dist/en/index.html` e `dist/es/index.html` devem existir.
- Para cada reportagem em `REPORTAGENS`, devem existir em `dist/`:
  - `dist/pt/reportagens/<slug-pt>/index.html`
  - `dist/en/reportagens/<slug-en>/index.html`
  - `dist/es/reportagens/<slug-es>/index.html`

---

## 4. Procedimento de Publicação em Produção (Somente Após Autorização Explícita de Miguel)

> **IMPORTANTE:** O projeto `logis-magazine` (`prj_U64icaeaxRVcWIJ0ySDQZluLYLuK`) na Vercel opera com upload estático direto via REST API (`framework: None`), contornando bugs de upload da CLI e desacoplado de deploy automático por push. **Fazer `git push` para `migueldorosario1/logis` atualiza o código-fonte no GitHub, mas não altera o site em produção sozinho.**

Quando o Miguel autorizar expressamente a publicação:

```bash
# 1. Garantir que o build está atualizado
npm run build

# 2. Executar o deploy estático via REST API da Vercel
python3 scripts/deploy_vercel.py

# 3. Commitar e sincronizar o repositório GitHub canônico
git add -A
git commit -m "feat: <descrição clara da atualização>"
git push origin main
```

### Verificação Pós-Publicação Obrigatória (HTTP 200 nos 3 Idiomas)
Após `scripts/deploy_vercel.py` exibir `estado: READY` e o alias `https://logis-magazine.vercel.app`:

```bash
for path in "/pt/" "/en/" "/es/"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://logis-magazine.vercel.app${path}")
  echo "GET https://logis-magazine.vercel.app${path} -> HTTP ${code}"
done
```
Conferir também as URLs específicas das novas reportagens em `/pt/reportagens/...`, `/en/reportagens/...` e `/es/reportagens/...`.

---

## 5. Procedimento de Reversão (Rollback Imediato)

Caso qualquer publicação apresente defeito visual, textual ou de rota, há dois caminhos imediatos de reversão:

### Opção A — Reversão pelo Git + Republicação Estática (Caminho Canônico)
```bash
# 1. Fazer checkout do commit anterior estável (ou reverter o commit) e recompilar
git revert HEAD --no-edit
npm run build
python3 scripts/deploy_vercel.py
git push origin main
```

### Opção B — Restauração a partir de Backup Local Verificado
Os snapshots completos `.tar.gz` (com `.sha256`) ficam preservados no Dell em:
`/home/migueldorosario/Downloads/Antigravity Google/Outros/Projeto Casa da Moeda/backups/`
- Snapshot de referência de 31/10/2026 (`commit 81f48d8`):
  `logis_backup_2026-10-31_81f48d8_pre_sync_milton.tar.gz`
  (`SHA256: 6a55c6a45e9166c03867b324a91ab96600b46a9458e7279c3fbdec497018cb99`)

### Deployments Estáveis Anteriores na Vercel (`prj_U64icaeaxRVcWIJ0ySDQZluLYLuK`)
- `dpl_22DHaaJxQ8mVuQcZa8JP7yN8v65U` (`READY` — 18/09/2026 23:13 BRT, correspondente ao commit `81f48d8` com 5 reportagens completas em PT/EN/ES e 4 cards na Home).
- `dpl_6eG8Dcu2Y9nyMGsMdoieeKK56H9e` (`READY` — 18/09/2026 22:36 BRT).
