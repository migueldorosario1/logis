# NOTAS PARA REVISÃO/REENSAIO DO ARTIGO — "O passaporte da mercadoria" (selo eletrônico fiscal)

**Para:** IA revisora · **De:** ZCode/GLM-5.3 (rascunho) · **Data:** 23/08/2026 · **Autor final responsável:** jornalista Miguel do Rosário
**Artigo:** `artigo_selo_eletronico_fiscal_v2.md` (mesmo diretório) · **Missão do revisor:** conferir fatos com as notas abaixo, melhorar a "música do texto" e, se necessário, reescrever trechos — sem violar as regras de estilo.

---

## 1. REGRAS DE ESTILO (decisões do Miguel — inegociáveis)

1. **O personagem principal é o SELO ELETRÔNICO FISCAL** — não a Casa da Moeda, não um órgão, não um número.
2. **A Casa da Moeda entra no MEIO do texto, como "um dos candidatos mais naturais"** a fabricar o selo (com as razões: tradição em segurança de valores, personalização inviolável, credencial pública) — **a tese NÃO pode fechar como "sem a CMB o projeto não existe"**. Outros atores (consórcios, certificadoras, fabricantes de dispositivos seguros) são mencionados como alternativa possível.
3. **Preço exato NUNCA em título nem em fecho** (é arriscado: valor de licitação muda). O custo aparece sempre como **estimativa do projeto básico: "abaixo de dois reais"**. Não reintroduzir o R$ 1,88.
4. **Título atual:** "O passaporte da mercadoria" (sem CMB, sem preço). Se trocar, manter essas proibições.
5. **Sem bibliografia numerada** e sem notas [1][2] — fontes em texto corrido; no máximo rodapé textual.
6. pt-BR; tom de grande reportagem-análise; cuidar do ritmo (frases longas alternando com curtas; metáforas só quando rendem).
7. Extensão-alvo: ~2.000 palavras (o rascunho tem ~2.000; ±10% tolerável).

## 2. FATO-À-CONFERIR (cada afirmação do artigo → fonte → status)

| # | Afirmação no artigo | Fonte | Status |
|---|---|---|---|
| F1 | Custo Brasil = 19,5% do PIB ≈ R$ 1,7 tri/ano | Apresentação CMB "MoedaLog — inovação sem tendência é invenção" (16 slides, acervo `novos edson/`) | Material institucional — **cruzar com fonte primária antes de publicar** (ex.: CNT/Banco Mundial) |
| F2 | Mercado ilegal ≈ R$ 500 bi (2025) | O Globo, citado no material CMB | **Revalidar** (link/obra da matéria original) |
| F3 | Selo passivo RFID + NFC, 10 níveis de segurança | Projeto Básico MoedaLog (`novos edson/PROJETO BÁSICO MOEDALOG.pdf`) | Material do projeto |
| F4 | Arquitetura phygital: ICP-Brasil + blockchain ("certidão de nascimento") + eFuse de uso único | Projeto Básico MoedaLog | Material do projeto |
| F5 | Custo unitário **abaixo de dois reais** (licitação + provisão do fabricante) | Projeto Básico (o doc traz a composição exata — mantê-la FORA do texto por decisão editorial) | Estimativa de projeto — tratar sempre como estimativa |
| F6 | Protótipo: ABS, níquel, aço, Data Matrix, brasão a laser, cotas de engenharia | `novos edson/PROTÓTIPO E PROJETO MOEDALOG.pdf` (pranchas CAD) | Material do projeto |
| F7 | Base legal do selo fiscal: Lei 4.502/1964 (art. 46) + Decreto 7.212/2010 (arts. 284–300) + Lei 7.798/1989 | Planalto (verificado em 22/08 pelo LOGIS) | ✅ verificado |
| F8 | CF art. 144: segurança pública protege "a incolumidade das pessoas **e do patrimônio**" | Constituição (planalto.jus.br) | ✅ verificado (texto literal) |
| F9 | CF art. 170: livre concorrência e defesa do consumidor como princípios da ordem econômica | Constituição | ✅ verificado |
| F10 | ITI regulamentou Selo Eletrônico em out/2024; transição até 2029; 7,3 mi de e-CNPJs a substituir | Slides CMB (citando ITI/ICP-Brasil) | **Conferir no iti.gov.br** antes de publicar |
| F11 | Antenas RFID previstas em orçamento da União; falta o dispositivo | `novos edson/PROJETO LACRE LOGÍSTICO PARA PRF.pdf` | Material do projeto — **verificar LOA/orçamento real** |
| F12 | Corredores: Chancay operando; bioceânica Brasil–Bolívia–Peru em agenda; PNL | Contexto público (usado também no portal LOGIS) | OK como contexto |
| F13 | Propostas de governo 2026 (TSE) incluem patrulhamento Amazônia, radares, drones, centros integrados | Print GloboNews "Propostas para as fronteiras" (acervo; propostas enviadas ao TSE) | **Conferir no TSE/divulgação oficial** se for citar nominalmente candidato |
| F14 | Modelos internacionais: OMA SAFE, C-TPAT (EUA), AEO+ICS2 (UE), NEEC (México), OEA (Colômbia) | URLs oficiais verificadas por HTTP em 22/08 (lista no portal LOGIS /pt/seguranca/) | ✅ verificado (22/08/2026) |
| F15 | Diferencial: rastreabilidade por ITEM (vs. operador/contêiner) | Tese do projeto (Blueprint + Projeto Básico) | Argumento editorial, não fato — manter como proposta |

## 3. PONTOS SENSÍVEIS / CUIDADOS DO REVISOR

- **Não endossar** o projeto como política oficial: ele é **proposta** (projeto básico/lobby institucional). O texto cuida disso ("o desenho descrito no projeto básico", "o projeto propõe") — preservar.
- **Rota Brasil**: existiu (2022) e foi revogado (2025) — o artigo v2 NÃO cita (evitamos confusão); não reintroduzir sem verificação.
- A frase "certidão de nascimento do produto" é do material do projeto — manter entre aspas implícitas ou parafrasear.
- Miguel quer **segurança pública como um dos pilares** — o artigo cumpre no bloco da PRF/corredores + CF art. 144. Não reduzir.
- Fecho atual termina em "restaurar às coisas a sua identidade… o jogo vale a pena" — música aprovada em espírito; melhorar sem mudar a nota final.

## 4. CONTEXTO DO PROJETO (para o revisor entender o terreno)

- O material vem do ecossistema do projeto Casa da Moeda/MoedaLog (`Outros/Projeto Casa da Moeda/novos edson/` — 5 documentos + prints), servindo de base ao portal LOGIS (logis-magazine.vercel.app) e à futura revista Logis.
- Versão v1 deste artigo (título com CMB) foi rejeitada; a v2 é a linha aprovada em espírito. Histórico: `portal_logos/artigo_selo_eletronico_fiscal_20260823.md` (v1, só para referência de estilo).
- Cérebro do projeto: `Cerebro/Foruns/forum_portal_logos_proposta_20260822.md` (ADENDO 20 e retificações).
