# DECISÃO — Versão definitiva da matéria de capa «A logística do crime»

**Data:** 09/09/2026 ~08:50 BRT
**Quem decidiu:** ZCode (Qwen3.8-Max), por delegação do Miguel («toma essa decisão pra mim»)
**Critério do Miguel:** de preferência uma citação bíblica E outra citação clássica; site fica com UMA versão só, sem aba/seletor de versões; as outras versões guardadas aqui para não perder (decisão PROVISÓRIA — pode ser revertida).

## ✅ Versão escolhida: V6 · «a obra e a arma»

Única das sete que mistura citação bíblica + citação clássica, exatamente o critério pedido:

1. **Neemias 4:17 (bíblica)** — «Com uma das mãos trabalhavam na obra e com a outra seguravam a arma.»
   → entra antes do parágrafo «Cada obra da nova malha logística é dupla por natureza…»
2. **Agostinho de Hipona, *A Cidade de Deus* (clássica)** — «A paz é a tranquilidade da ordem.»
   → entra antes do parágrafo «A Constituição já deu a ordem…»

**Foto da V6:** muralhas da Cidade Velha de Jerusalém — Boris Jaramazović, CC BY-SA 4.0 (Wikimedia Commons). Coerência máxima: Neemias é literalmente o reconstrutor das muralhas de Jerusalém; a imagem ilustra a própria citação. A tese «obra + arma» é a síntese da reportagem inteira (cada corredor logístico serve a quem chegar primeiro: o Estado ou o crime).

Por que não as outras: V1-V5 têm só citações clássicas; V7 tem DUAS bíblicas (Neemias 6:3 + Ezequiel 33:7) e nenhuma clássica.

## 📦 As 7 versões originais (arquivo completo)

| Versão | Rótulo | Foto (crédito/licença) | Citações (autor, obra → posição) |
|--------|--------|------------------------|----------------------------------|
| V1 | epígrafe | Navio contêiner à noite — Alf van Beem, CC0 | Cícero, *Pro Cluentio* → epígrafe |
| V2 | lei + estratégia | Grande Muralha da China — Severin.stalder, CC BY-SA 3.0 | Cícero, *Pro Cluentio* → epígrafe · Sun Tzu, *A Arte da Guerra* → antes:«Seria injusto dizer que o Brasil assiste parado» |
| V3 | rota + ordem | Ponte da Amizade (BR–PY) — Deni Williams, CC BY 2.0 | Sêneca, *Cartas a Lucílio* → antes:«O Plano Nacional de Logística promete» · Agostinho, *A Cidade de Deus* → antes:«A Constituição já deu a ordem» |
| V4 | três vozes | Patrulha de fronteira EUA (I-8) — U.S. CBP, domínio público | Públio Siro, *Sententiae* → antes:«Nesses territórios, 59,5% das pessoas» · Sun Tzu → antes:«Seria injusto…» · Agostinho → antes:«A Constituição…» |
| V5 | chamada | Estrada solitária no horizonte — Dietmar Rabich, CC BY-SA 4.0 | Lao Tsé, *Tao Te Ching* → fecho |
| **V6 ✅** | **a obra e a arma** | **Muralhas de Jerusalém — Boris Jaramazović, CC BY-SA 4.0** | **Neemias 4:17 → antes:«Cada obra da nova malha logística…» · Agostinho → antes:«A Constituição…»** |
| V7 | a sentinela | Farol ao amanhecer — Nicholas Raymond, CC BY 2.0 | Neemias 6:3 («Estou fazendo uma grande obra e não posso descer») → epígrafe · Ezequiel 33:7 («Filho do homem, eu te designei por atalaia…») → antes:«A peça que falta existe no papel» |

## Textos integrais das citações

- **Cícero, Pro Cluentio:** «Somos servos da lei para podermos ser livres.»
- **Sun Tzu, A Arte da Guerra:** «A suprema arte da guerra é subjugar o inimigo sem lutar.»
- **Sêneca, Cartas a Lucílio:** «Não existe vento favorável para o marinheiro que não sabe a que porto se dirige.»
- **Agostinho de Hipona, A Cidade de Deus:** «A paz é a tranquilidade da ordem.»
- **Públio Siro, Sententiae:** «Onde a liberdade caiu, ninguém ousa falar livremente.»
- **Lao Tsé, Tao Te Ching:** «Uma jornada de mil milhas começa com um único passo.»
- **Neemias 4:17:** «Com uma das mãos trabalhavam na obra e com a outra seguravam a arma.»
- **Neemias 6:3:** «Estou fazendo uma grande obra e não posso descer.»
- **Ezequiel 33:7:** «Filho do homem, eu te designei por atalaia para a casa de Israel.»

## Como reverter / trocar a versão (decisão provisória)

Arquivos nesta pasta:
- `reportagens_pre_decisao_20260909.ts.bak` — `src/data/reportagens.ts` INTEIRO antes da mudança (com o seletor de 7 versões).
- `[slug]_pre_decisao_20260909.astro.bak` — template `src/pages/[lang]/reportagens/[slug].astro` antes da mudança.
- `variantes_snapshot_20260909.ts.txt` — só o bloco `variantes: [...]` (linhas 41-76 do original).

Para voltar ao estado anterior: copiar os dois `.bak` de volta para `src/data/reportagens.ts` e `src/pages/[lang]/reportagens/[slug].astro`, rebuildar (`npm run build`) e redeployar (`python3 scripts/deploy_vercel.py`).
Para trocar a versão definitiva sem restaurar o seletor: editar o campo `citas` e a `foto` da reportagem em `src/data/reportagens.ts` usando os dados da tabela acima.

As 7 fotos seguem em `public/imagens/` (reportagem-crime-capa.jpg, crime-v2…crime-v7.jpg) — nenhuma foi apagada.
