// Fonte: ANEXO_PESQUISA_PORTAL_LOGOS_20260822.md (verificado 22/08/2026)

export const BASES: { nome: string; url: string; aberto: boolean; nota: string }[] = [
  { nome: 'TRID (TRB)', url: 'https://trid.trb.org', aberto: true, nota: 'A mais específica da área — 1,5 milhão de registros de transportes' },
  { nome: 'SciELO', url: 'https://www.scielo.br', aberto: true, nota: 'Forte em produção brasileira e latino-americana' },
  { nome: 'DOAJ', url: 'https://doaj.org', aberto: true, nota: 'Diretório de periódicos open access (filtrar Logistics/Transportation)' },
  { nome: 'Google Scholar', url: 'https://scholar.google.com', aberto: true, nota: 'Busca livre e alertas por tema' },
  { nome: 'OpenAlex', url: 'https://openalex.org', aberto: true, nota: 'Catálogo aberto com filtro de acesso aberto' },
  { nome: 'Semantic Scholar', url: 'https://www.semanticscholar.org', aberto: true, nota: 'Busca com IA e API aberta' },
  { nome: 'arXiv', url: 'https://arxiv.org', aberto: true, nota: 'Otimização e pesquisa operacional aplicada à logística' },
  { nome: 'RePEc / IDEAS', url: 'https://ideas.repec.org', aberto: true, nota: 'Economia dos transportes' },
  { nome: 'BASE', url: 'https://www.base-search.net', aberto: true, nota: 'Repositórios abertos' },
  { nome: 'SSRN', url: 'https://www.ssrn.com', aberto: true, nota: 'eJournals de negócios e economia (abstracts)' },
  { nome: 'Teses USP', url: 'https://www.teses.usp.br', aberto: true, nota: 'Engenharia de transportes — POLI' },
  { nome: 'Catálogo de Teses CAPES', url: 'https://catalogodeteses.capes.gov.br', aberto: true, nota: 'Toda a produção stricto sensu brasileira' },
  { nome: 'Scopus', url: 'https://www.scopus.com', aberto: false, nota: 'Busca avançada e citações (assinatura)' },
  { nome: 'Web of Science', url: 'https://www.webofscience.com', aberto: false, nota: 'Alto impacto (assinatura)' },
];

export const CENTROS_BR: { nome: string; url: string; foco: string }[] = [
  { nome: 'ILOS', url: 'https://www.ilos.com.br', foco: 'Custos logísticos e mercado' },
  { nome: 'COPPEAD / UFRJ', url: 'https://www.coppead.ufrj.br', foco: 'Supply chain e estratégia' },
  { nome: 'POLI-USP', url: 'https://www.poli.usp.br', foco: 'Engenharia de transportes' },
  { nome: 'ESALQ-LOG / USP', url: 'https://esalqlog.esalq.usp.br', foco: 'Logística do agro e índice de frete' },
  { nome: 'FGV Transportes', url: 'https://transportes.fgv.br', foco: 'Concessões e políticas públicas' },
  { nome: 'Fundação Dom Cabral', url: 'https://www.fdc.org.br', foco: 'Operações e infraestrutura' },
  { nome: 'LabTrans / UFSC', url: 'https://www.labtrans.ufsc.br', foco: 'Fretes e multimodalidade' },
  { nome: 'IME', url: 'https://www.ime.eb.br', foco: 'Engenharia de transportes' },
  { nome: 'Infra S.A.', url: 'https://www.infrasa.gov.br', foco: 'PNL 2025/2035/2050 e corredores logísticos' },
  { nome: 'BNDES', url: 'https://www.bndes.gov.br', foco: 'Financiamento de infraestrutura' },
  { nome: 'CNT', url: 'https://www.cnt.org.br', foco: 'Pesquisas de rodovias e ferrovias' },
];

export const CENTROS_MUNDO: { nome: string; url: string; foco: string }[] = [
  { nome: 'MIT CTL', url: 'https://ctl.mit.edu', foco: 'Rede global MIT SCALE, logística digital' },
  { nome: 'Fraunhofer IML', url: 'https://www.iml.fraunhofer.de', foco: 'Intralogística e automação' },
  { nome: 'Cranfield — Centre for Logistics and Sustainability', url: 'https://www.cranfield.ac.uk', foco: 'Logística e sustentabilidade' },
  { nome: 'Kühne Logistics University', url: 'https://www.the-klu.org', foco: 'Universidade dedicada à logística (Hamburgo)' },
  { nome: 'TU Delft', url: 'https://www.tudelft.nl', foco: 'Portos e cadeias sustentáveis' },
  { nome: 'TNO', url: 'https://www.tno.nl', foco: 'Smart freight e logística urbana' },
  { nome: 'KTH', url: 'https://www.kth.se', foco: 'Mobilidade sustentável' },
  { nome: 'St. Gallen', url: 'https://www.unisg.ch', foco: 'Supply chain executivo' },
  { nome: 'Michigan State', url: 'https://broad.msu.edu/supply-chain-management/', foco: 'Top ranking SCM (EUA)' },
  { nome: 'NUS', url: 'https://www.nus.edu.sg', foco: 'Logística portuária asiática' },
  { nome: 'Beijing Jiaotong', url: 'https://en.bjtu.edu.cn', foco: 'Ferrovias de alta velocidade' },
  { nome: 'RTRI (Japão)', url: 'https://www.rtri.or.jp', foco: 'Tecnologia ferroviária' },
  { nome: 'KOTI (Coreia)', url: 'https://www.koti.re.kr', foco: 'Políticas logísticas públicas' },
];

export const REVISTAS_ALVO: { nome: string; url: string; nota: string }[] = [
  { nome: 'EJTIR (TU Delft)', url: 'https://journals.open.tudelft.nl/index.php/ejtir', nota: 'Diamond open access — modelo editorial da Logis' },
  { nome: 'Revista Transportes (ANPET)', url: 'https://transportes.anpet.org.br', nota: 'Aberta, peer review, PT/EN — modelo OJS brasileiro' },
  { nome: 'Transportation Research A–E', url: 'https://www.sciencedirect.com/journal/transportation-research-part-e-logistics-and-transportation-review', nota: 'Referência internacional (Part D = transporte e ambiente)' },
  { nome: 'Journal of Business Logistics', url: 'https://onlinelibrary.wiley.com/journal/17383021', nota: 'Referência em SCM' },
];

export const ORGANISMOS_PESQUISA: { nome: string; url: string; produto: string }[] = [
  { nome: 'Banco Mundial (LPI)', url: 'https://lpi.worldbank.org', produto: 'Logistics Performance Index bienal' },
  { nome: 'ITF-OECD', url: 'https://www.itf-oecd.org', produto: 'Transport Outlook e descarbonização' },
  { nome: 'UNCTAD', url: 'https://unctad.org/topic/transport', produto: 'Review of Maritime Transport e conectividade' },
  { nome: 'CEPAL', url: 'https://www.cepal.org', produto: 'Integração logística latino-americana' },
  { nome: 'Smart Freight Centre', url: 'https://www.smartfreightcentre.org', produto: 'Framework GLEC de emissões de frete' },
];
