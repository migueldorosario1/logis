import type { Lang } from './ui';

export interface KP { v: string; l: string; fonte?: string }
export interface TI { t: string; x: string }
export interface TL { ano: string; t: string }

interface PageContent {
  hero: { kicker: string; title: string; sub: string };
  blocos?: TI[];
  kpis?: KP[];
  timeline?: TL[];
  paragrafos?: string[];
  nota?: string;
  cta?: { label: string; slug: string };
}

type Pages = Record<string, Record<Lang, PageContent>>;

export const PAGES: Pages = {
  home: {
    pt: {
      hero: {
        kicker: 'Portal trilíngue · PT · EN · ES',
        title: 'LOGOS — a logística sustentável, do campo ao porto',
        sub: 'Informação, mapas, regulação e pesquisa sobre a logística brasileira e mundial — com foco em infraestrutura, rastreabilidade e sustentabilidade.',
      },
      kpis: [
        { v: 'R$ 1,7 tri/ano', l: 'Custo logístico do Brasil (19,5% do PIB)', fonte: 'Dados apresentados pela Casa da Moeda do Brasil' },
        { v: 'R$ 500 bi', l: 'Prejuízo do mercado ilegal (2025)', fonte: 'O Globo, citado em material institucional' },
        { v: '36º / 139', l: 'Brasil no LPI do Banco Mundial (2023)', fonte: 'World Bank — Logistics Performance Index' },
      ],
      blocos: [
        { t: 'Conhecimento', x: 'A revista trimestral Logis, bases públicas de artigos científicos e os principais centros de pesquisa do Brasil e do mundo.' },
        { t: 'Infraestrutura', x: 'Geomapas de rodovias, ferrovias, portos, hidrovias e fluxos internacionais de comércio — do Brasil para o mundo.' },
        { t: 'Confiança', x: 'Reguladores por estado, marco legal nacional e internacional, contratos e ideias de desenvolvimento para a logística brasileira.' },
      ],
      cta: { label: 'Explorar os geomapas', slug: 'geomapas' },
    },
    en: {
      hero: {
        kicker: 'Trilingual portal · PT · EN · ES',
        title: 'LOGOS — sustainable logistics, from farm to port',
        sub: 'Information, maps, regulation and research on Brazilian and global logistics — with a focus on infrastructure, traceability and sustainability.',
      },
      kpis: [
        { v: 'BRL 1.7 tn/yr', l: 'Brazilian logistics cost (19.5% of GDP)', fonte: 'Data presented by Casa da Moeda do Brasil' },
        { v: 'BRL 500 bn', l: 'Losses to the illegal market (2025)', fonte: 'O Globo, cited in institutional material' },
        { v: '36th / 139', l: 'Brazil in the World Bank LPI (2023)', fonte: 'World Bank — Logistics Performance Index' },
      ],
      blocos: [
        { t: 'Knowledge', x: 'The quarterly journal Logis, public scientific article databases and the leading research centers in Brazil and worldwide.' },
        { t: 'Infrastructure', x: 'Geomaps of highways, railways, ports, waterways and international trade flows — from Brazil to the world.' },
        { t: 'Trust', x: 'Regulators by state, national and international legal frameworks, contracts and development ideas for Brazilian logistics.' },
      ],
      cta: { label: 'Explore the geomaps', slug: 'geomapas' },
    },
    es: {
      hero: {
        kicker: 'Portal trilingüe · PT · EN · ES',
        title: 'LOGOS — logística sostenible, del campo al puerto',
        sub: 'Información, mapas, regulación e investigación sobre la logística brasileña y mundial — con foco en infraestructura, trazabilidad y sostenibilidad.',
      },
      kpis: [
        { v: 'BRL 1,7 bill./año', l: 'Costo logístico de Brasil (19,5% del PIB)', fonte: 'Datos presentados por la Casa da Moeda do Brasil' },
        { v: 'BRL 500 mil M', l: 'Pérdidas por el mercado ilegal (2025)', fonte: 'O Globo, citado en material institucional' },
        { v: '36º / 139', l: 'Brasil en el LPI del Banco Mundial (2023)', fonte: 'World Bank — Logistics Performance Index' },
      ],
      blocos: [
        { t: 'Conocimiento', x: 'La revista trimestral Logis, bases públicas de artículos científicos y los principales centros de investigación de Brasil y del mundo.' },
        { t: 'Infraestructura', x: 'Geomapas de carreteras, ferrocarriles, puertos, hidrovías y flujos internacionales de comercio — de Brasil al mundo.' },
        { t: 'Confianza', x: 'Reguladores por estado, marco legal nacional e internacional, contratos e ideas de desarrollo para la logística brasileña.' },
      ],
      cta: { label: 'Explorar los geomapas', slug: 'geomapas' },
    },
  },

  geomapas: {
    pt: {
      hero: {
        kicker: 'Infraestrutura em movimento',
        title: 'Geomapas da logística',
        sub: 'Rodovias, ferrovias, portos, aeroportos, dutos e fluxos internacionais de comércio — em mapas interativos e abertos.',
      },
      blocos: [
        { t: 'Malha estadual (IBGE)', x: 'As 27 unidades da federação, direto da API pública de malhas do IBGE.' },
        { t: 'Portos e hubs', x: 'Os grandes portos exportadores — Santos, Paranaguá, Itaqui, Suape, Rio Grande, Manaus, Salvador e Pecém — e hubs aéreos de carga.' },
        { t: 'Ferrovias', x: 'Nós das principais ferrovias: Carajás, Vitória–Minas, Ferronorte, Norte-Sul, Transnordestina e FIOL.' },
        { t: 'Fluxos internacionais', x: 'Rotas marítimas de referência: Santos–Roterdã, Santos–Xangai e Santos–Chancay, além do corredor bioceânico planejado Ilhéus–Chancay.' },
      ],
      paragrafos: [
        'Camadas de traçado completo de rodovias federais (DNIT), ferrovias (ANTT) e dutos chegam nas próximas fases do portal, com dados públicos atualizados no build.',
        'Mapas abertos e gratuitos: OpenFreeMap + OpenStreetMap (contribuidores). Sem chaves de API, sem custo.',
      ],
    },
    en: {
      hero: {
        kicker: 'Infrastructure in motion',
        title: 'Logistics geomaps',
        sub: 'Highways, railways, ports, airports, pipelines and international trade flows — on interactive, open maps.',
      },
      blocos: [
        { t: 'State boundaries (IBGE)', x: 'All 27 federative units, straight from the IBGE public boundaries API.' },
        { t: 'Ports and hubs', x: 'The great export ports — Santos, Paranaguá, Itaqui, Suape, Rio Grande, Manaus, Salvador and Pecém — and cargo airport hubs.' },
        { t: 'Railways', x: 'Nodes of the main railways: Carajás, Vitória–Minas, Ferronorte, Norte-Sul, Transnordestina and FIOL.' },
        { t: 'International flows', x: 'Reference shipping routes: Santos–Rotterdam, Santos–Shanghai and Santos–Chancay, plus the planned bioceanic corridor Ilhéus–Chancay.' },
      ],
      paragrafos: [
        'Full alignment layers for federal highways (DNIT), railways (ANTT) and pipelines arrive in the next phases, with public data refreshed at build time.',
        'Free, open maps: OpenFreeMap + OpenStreetMap contributors. No API keys, no cost.',
      ],
    },
    es: {
      hero: {
        kicker: 'Infraestructura en movimiento',
        title: 'Geomapas de la logística',
        sub: 'Carreteras, ferrocarriles, puertos, aeropuertos, ductos y flujos internacionales de comercio — en mapas interactivos y abiertos.',
      },
      blocos: [
        { t: 'Malla estadual (IBGE)', x: 'Las 27 unidades federativas, directo de la API pública de mallas del IBGE.' },
        { t: 'Puertos y hubs', x: 'Los grandes puertos exportadores — Santos, Paranaguá, Itaqui, Suape, Rio Grande, Manaus, Salvador y Pecém — y hubs aéreos de carga.' },
        { t: 'Ferrocarriles', x: 'Nodos de los principales ferrocarriles: Carajás, Vitória–Minas, Ferronorte, Norte-Sul, Transnordestina y FIOL.' },
        { t: 'Flujos internacionales', x: 'Rutas marítimas de referencia: Santos–Róterdam, Santos–Shanghái y Santos–Chancay, además del corredor bioceánico planificado Ilhéus–Chancay.' },
      ],
      paragrafos: [
        'Las capas de trazado completo de carreteras federales (DNIT), ferrocarriles (ANTT) y ductos llegan en las próximas fases, con datos públicos actualizados en el build.',
        'Mapas abiertos y gratuitos: OpenFreeMap + colaboradores de OpenStreetMap. Sin claves de API, sin costo.',
      ],
    },
  },

  sustentabilidade: {
    pt: {
      hero: {
        kicker: 'Logística verde',
        title: 'Sustentabilidade e reciclagem',
        sub: 'A logística como motor da economia circular: reaproveitamento de resíduos, papel, embalagens e energia limpa no transporte.',
      },
      blocos: [
        { t: 'Logística reversa', x: 'Papel, papelão, embalagens, pneus, eletrônicos e óleos: rotas de coleta, consolidação e retorno à indústria — com rastreabilidade de ponta a ponta.' },
        { t: 'Transição energética', x: 'Biodiesel, eletrificação de frotas urbanas, hidrogênio verde em corredores de longa distância e eficiência no modal aquaviário (BR do Mar).' },
        { t: 'Economia circular', x: 'Do resíduo ao insumo: cadeias de reciclagem que geram frete de retorno, reduzem emissões e criam valor onde hoje há descarte.' },
        { t: 'Medição e transparência', x: 'Contabilidade de emissões pelo framework GLEC (Smart Freight Centre) e indicadores ESG públicos para comparar cadeias logísticas.' },
      ],
      nota: 'A revista Logis publica trimestralmente artigos científicos e estudos de caso sobre logística sustentável.',
      cta: { label: 'Conhecer a revista Logis', slug: 'revista' },
    },
    en: {
      hero: {
        kicker: 'Green logistics',
        title: 'Sustainability and recycling',
        sub: 'Logistics as the engine of the circular economy: reuse of waste, paper, packaging and clean energy in transport.',
      },
      blocos: [
        { t: 'Reverse logistics', x: 'Paper, cardboard, packaging, tires, electronics and oils: collection, consolidation and return routes to industry — with end-to-end traceability.' },
        { t: 'Energy transition', x: 'Biodiesel, urban fleet electrification, green hydrogen on long-distance corridors and efficiency in waterway transport (BR do Mar).' },
        { t: 'Circular economy', x: 'From waste to input: recycling chains that generate backhaul freight, cut emissions and create value where today there is disposal.' },
        { t: 'Measurement and transparency', x: 'Emissions accounting under the GLEC framework (Smart Freight Centre) and public ESG indicators to compare logistics chains.' },
      ],
      nota: 'The Logis journal publishes quarterly scientific articles and case studies on sustainable logistics.',
      cta: { label: 'Meet the Logis journal', slug: 'revista' },
    },
    es: {
      hero: {
        kicker: 'Logística verde',
        title: 'Sostenibilidad y reciclaje',
        sub: 'La logística como motor de la economía circular: reaprovechamiento de residuos, papel, envases y energía limpia en el transporte.',
      },
      blocos: [
        { t: 'Logística inversa', x: 'Papel, cartón, envases, neumáticos, electrónicos y aceites: rutas de recolección, consolidación y retorno a la industria — con trazabilidad de punta a punta.' },
        { t: 'Transición energética', x: 'Biodiésel, electrificación de flotas urbanas, hidrógeno verde en corredores de larga distancia y eficiencia en el modo acuaviario (BR do Mar).' },
        { t: 'Economía circular', x: 'Del residuo al insumo: cadenas de reciclaje que generan flete de retorno, reducen emisiones y crean valor donde hoy hay descarte.' },
        { t: 'Medición y transparencia', x: 'Contabilidad de emisiones con el marco GLEC (Smart Freight Centre) e indicadores ESG públicos para comparar cadenas logísticas.' },
      ],
      nota: 'La revista Logis publica trimestralmente artículos científicos y estudios de caso sobre logística sostenible.',
      cta: { label: 'Conocer la revista Logis', slug: 'revista' },
    },
  },

  contratos: {
    pt: {
      hero: {
        kicker: 'Segurança jurídica',
        title: 'Contratos de logística',
        sub: 'Os principais tipos de contrato da cadeia logística — e o que observar em cada um à luz da legislação brasileira e internacional.',
      },
      blocos: [
        { t: 'Transporte rodoviário de cargas', x: 'Contratos de frete com transportadores autônomos (TAC) e empresas — Lei 11.442/2007, com jornada e descanso da Lei do Caminhoneiro (13.103/2015).' },
        { t: 'Transporte multimodal', x: 'Operador de transporte multimodal (OTM) com responsabilidade porta a porta — base nacional e convenções internacionais por modo.' },
        { t: 'Afretamento e transporte aquaviário', x: 'Afretamento por tempo, viagem ou casco nu; cabotagem incentivada pela BR do Mar (Lei 14.301/2022) e Lei dos Portos (12.815/2013).' },
        { t: 'Armazenagem e movimentação', x: 'Contratos de armazenagem, unitização e movimentação de cargas — SLAs, perdas e avarias, seguros e cláusulas de responsabilidade.' },
        { t: 'Distribuição de risco', x: 'Seguro de carga, gerenciamento de risco, cláusulas de força maior e resolução de disputas — inclusive arbitragem internacional.' },
      ],
      nota: 'Biblioteca de modelos de contrato (download gratuito) — em preparação para as próximas fases.',
      cta: { label: 'Ver o marco legal', slug: 'legal' },
    },
    en: {
      hero: {
        kicker: 'Legal certainty',
        title: 'Logistics contracts',
        sub: 'The main contract types in the logistics chain — and what to watch in each, under Brazilian and international law.',
      },
      blocos: [
        { t: 'Road freight', x: 'Freight contracts with independent carriers (TAC) and companies — Law 11.442/2007, with driving and rest rules of the Truck Driver Law (13.103/2015).' },
        { t: 'Multimodal transport', x: 'Multimodal transport operator (OTM) with door-to-door liability — national basis and international conventions by mode.' },
        { t: 'Chartering and waterway transport', x: 'Time, voyage or bareboat chartering; cabotage incentivized by BR do Mar (Law 14.301/2022) and the Ports Law (12.815/2013).' },
        { t: 'Warehousing and handling', x: 'Warehousing, unitization and cargo handling contracts — SLAs, loss and damage, insurance and liability clauses.' },
        { t: 'Risk allocation', x: 'Cargo insurance, risk management, force majeure clauses and dispute resolution — including international arbitration.' },
      ],
      nota: 'Contract template library (free download) — in preparation for the next phases.',
      cta: { label: 'See the legal framework', slug: 'legal' },
    },
    es: {
      hero: {
        kicker: 'Seguridad jurídica',
        title: 'Contratos de logística',
        sub: 'Los principales tipos de contrato de la cadena logística — y qué observar en cada uno a la luz de la legislación brasileña e internacional.',
      },
      blocos: [
        { t: 'Transporte carretero', x: 'Contratos de flete con transportistas autónomos (TAC) y empresas — Ley 11.442/2007, con jornada y descanso de la Ley del Camionero (13.103/2015).' },
        { t: 'Transporte multimodal', x: 'Operador de transporte multimodal (OTM) con responsabilidad puerta a puerta — base nacional y convenios internacionales por modo.' },
        { t: 'Fletamento y transporte acuaviario', x: 'Fletamento por tiempo, viaje o casco desnudo; cabotaje incentivado por la BR do Mar (Ley 14.301/2022) y la Ley de Puertos (12.815/2013).' },
        { t: 'Almacenaje y manipulación', x: 'Contratos de almacenaje, unitización y manipulación de cargas — SLA, pérdidas y averías, seguros y cláusulas de responsabilidad.' },
        { t: 'Distribución de riesgos', x: 'Seguro de carga, gerenciamiento de riesgo, cláusulas de fuerza mayor y resolución de disputas — incluido arbitraje internacional.' },
      ],
      nota: 'Biblioteca de modelos de contrato (descarga gratuita) — en preparación para las próximas fases.',
      cta: { label: 'Ver el marco legal', slug: 'legal' },
    },
  },

  reguladores: {
    pt: {
      hero: {
        kicker: 'Quem regula',
        title: 'Órgãos reguladores',
        sub: 'Agências federais, órgãos das 27 unidades da federação, reguladores de outros países e organismos internacionais.',
      },
      paragrafos: [
        'Diretório verificado em agosto de 2026. No Brasil, o transporte interestadual é regulado por agências federais (ANTT, ANTAQ, ANAC); o transporte estadual e a infraestrutura sob gestão estadual envolvem agências e departamentos de cada UF.',
      ],
    },
    en: {
      hero: {
        kicker: 'Who regulates',
        title: 'Regulatory bodies',
        sub: 'Federal agencies, bodies across all 27 federative units, regulators from other countries and international organizations.',
      },
      paragrafos: [
        'Directory verified in August 2026. In Brazil, interstate transport is regulated by federal agencies (ANTT, ANTAQ, ANAC); state transport and state-managed infrastructure involve each state’s agencies and departments.',
      ],
    },
    es: {
      hero: {
        kicker: 'Quién regula',
        title: 'Organismos reguladores',
        sub: 'Agencias federales, organismos de las 27 unidades federativas, reguladores de otros países y organismos internacionales.',
      },
      paragrafos: [
        'Directorio verificado en agosto de 2026. En Brasil, el transporte interestadual es regulado por agencias federales (ANTT, ANTAQ, ANAC); el transporte estadual y la infraestructura bajo gestión estadual involucran agencias y departamentos de cada UF.',
      ],
    },
  },

  legal: {
    pt: {
      hero: {
        kicker: 'Jurisdições e normas',
        title: 'Marco legal da logística',
        sub: 'As leis que regem o transporte no Brasil e as convenções que organizam a logística internacional — por modo e por tema.',
      },
      paragrafos: [
        'Cada país tem sua própria jurisdição sobre transporte, tributos e documentos fiscais; o comércio internacional se apoia em convenções multilaterais (marítimo, rodoviário, ferroviário, aéreo e aduaneiro). Este diretório reúne as normas centrais, com links oficiais.',
        'Destaque: a base legal do selo de controle fiscal brasileiro (IPI) está na Lei 4.502/1964 (art. 46) e no RIPI — Decreto 7.212/2010 (arts. 284–300), além da Lei 7.798/1989.',
      ],
    },
    en: {
      hero: {
        kicker: 'Jurisdictions and rules',
        title: 'The legal framework of logistics',
        sub: 'The laws governing transport in Brazil and the conventions organizing international logistics — by mode and by topic.',
      },
      paragrafos: [
        'Each country has its own jurisdiction over transport, taxes and fiscal documents; international trade relies on multilateral conventions (maritime, road, rail, air and customs). This directory gathers the core rules, with official links.',
        'Highlight: the legal basis of the Brazilian fiscal control seal (IPI) lies in Law 4.502/1964 (art. 46) and the RIPI — Decree 7.212/2010 (arts. 284–300), plus Law 7.798/1989.',
      ],
    },
    es: {
      hero: {
        kicker: 'Jurisdicciones y normas',
        title: 'Marco legal de la logística',
        sub: 'Las leyes que rigen el transporte en Brasil y los convenios que organizan la logística internacional — por modo y por tema.',
      },
      paragrafos: [
        'Cada país tiene su propia jurisdicción sobre transporte, tributos y documentos fiscales; el comercio internacional se apoya en convenios multilaterales (marítimo, carretero, ferroviario, aéreo y aduanero). Este directorio reúne las normas centrales, con enlaces oficiales.',
        'Destaque: la base legal del sello de control fiscal brasileño (IPI) está en la Ley 4.502/1964 (art. 46) y en el RIPI — Decreto 7.212/2010 (arts. 284–300), además de la Ley 7.798/1989.',
      ],
    },
  },

  pesquisa: {
    pt: {
      hero: {
        kicker: 'Ciência aberta',
        title: 'Pesquisa e dados',
        sub: 'Bancos públicos de artigos científicos, centros de pesquisa no Brasil e no mundo e os organismos que produzem os grandes dados do setor.',
      },
      paragrafos: [
        'Todo o acervo listado é de acesso público (bases pagas estão marcadas). A revista Logis nasce conectada a este ecossistema: seu objetivo é indexação no DOAJ, SciELO, Latindex e Redalyc.',
      ],
    },
    en: {
      hero: {
        kicker: 'Open science',
        title: 'Research and data',
        sub: 'Public scientific article databases, research centers in Brazil and worldwide, and the organizations producing the sector’s big data.',
      },
      paragrafos: [
        'Everything listed here is publicly accessible (paid databases are marked). The Logis journal is born connected to this ecosystem: its goal is indexing in DOAJ, SciELO, Latindex and Redalyc.',
      ],
    },
    es: {
      hero: {
        kicker: 'Ciencia abierta',
        title: 'Investigación y datos',
        sub: 'Bancos públicos de artículos científicos, centros de investigación en Brasil y el mundo, y los organismos que producen los grandes datos del sector.',
      },
      paragrafos: [
        'Todo el acervo listado es de acceso público (las bases pagas están marcadas). La revista Logis nace conectada a este ecosistema: su objetivo es la indexación en DOAJ, SciELO, Latindex y Redalyc.',
      ],
    },
  },

  ideias: {
    pt: {
      hero: {
        kicker: 'Ideias para o desenvolvimento',
        title: 'MoedaLog — o passaporte intermodal da carga brasileira',
        sub: 'Um selo fiscal inteligente (e-SFI), passivo e de uso único, para identificar, rastrear e autenticar mercadorias em circulação pelo Brasil.',
      },
      kpis: [
        { v: 'RFID + NFC', l: 'Selo passivo — sem bateria, ativado na leitura' },
        { v: '10', l: 'Níveis de segurança física e digital' },
        { v: 'R$ 1,88', l: 'Custo unitário estimado do selo' },
        { v: 'eFuse', l: 'Lacre eletrônico de uso único' },
      ],
      blocos: [
        { t: 'O problema', x: 'O Custo Brasil consome R$ 1,7 trilhão por ano (19,5% do PIB); o mercado ilegal gerou prejuízo de quase R$ 500 bilhões em 2025. Falta um elo de confiança entre a fiscalização física e a digital.' },
        { t: 'A solução', x: 'O Selo Fiscal Inteligente da Casa da Moeda do Brasil: hardware e software que garantem identificação, rastreabilidade e autenticação de mercadorias, com interoperabilidade dos órgãos fiscalizadores por uma central única de confiança do Estado.' },
        { t: 'Segurança phygital', x: 'Certificação ICP-Brasil, registro em blockchain e lacre eletrônico de rompimento irreversível. A Casa da Moeda emite a "certidão de nascimento" criptográfica de cada carga.' },
        { t: 'Caso de uso: PRF', x: 'Antenas RFID leem as cargas nas rodovias; a IA verifica lacre intacto, itinerário correto e paradas indevidas — alertas acionam a Polícia Rodoviária Federal automaticamente, combatendo roubo, contrabando e evasão fiscal.' },
        { t: 'Integração continental', x: 'Corredores bioceânicos, Mercosul e o porto de Chancay: o selo nasce preparado para a integração logística da América do Sul com o Pacífico.' },
      ],
      timeline: [
        { ano: '2022', t: 'Rota Brasil — Programa Brasileiro de Rastreabilidade Fiscal instituído pela Receita Federal' },
        { ano: '2024', t: 'ITI aprova o Selo Eletrônico ICP-Brasil (31/10), alinhado ao padrão europeu eIDAS' },
        { ano: '2025', t: 'Rota Brasil revogado — abre espaço para uma nova infraestrutura de rastreabilidade' },
        { ano: '2029', t: 'Fim da transição do Selo Eletrônico: previsão de substituição de 7,3 milhões de e-CNPJs' },
      ],
      nota: 'A Casa da Moeda do Brasil — 332 anos de história — produz cédulas, passaportes, lacres de urnas eletrônicas e selos fiscais para o Estado brasileiro.',
    },
    en: {
      hero: {
        kicker: 'Ideas for development',
        title: 'MoedaLog — the intermodal passport for Brazilian cargo',
        sub: 'A smart fiscal seal (e-SFI), passive and single-use, to identify, track and authenticate goods moving across Brazil.',
      },
      kpis: [
        { v: 'RFID + NFC', l: 'Passive seal — battery-free, activated at reading' },
        { v: '10', l: 'Levels of physical and digital security' },
        { v: 'BRL 1.88', l: 'Estimated unit cost of the seal' },
        { v: 'eFuse', l: 'Single-use electronic seal' },
      ],
      blocos: [
        { t: 'The problem', x: 'The "Custo Brasil" drains BRL 1.7 trillion a year (19.5% of GDP); the illegal market caused almost BRL 500 billion in losses in 2025. A trust link between physical and digital enforcement is missing.' },
        { t: 'The solution', x: 'The Smart Fiscal Seal by Casa da Moeda do Brasil: hardware and software ensuring identification, traceability and authentication of goods, with interoperability across enforcement agencies through a single state trust hub.' },
        { t: 'Phygital security', x: 'ICP-Brasil certification, blockchain registry and an irreversible-break electronic seal. Casa da Moeda issues the cryptographic "birth certificate" of each cargo.' },
        { t: 'Use case: PRF', x: 'RFID antennas read cargo on highways; AI verifies the intact seal, the correct itinerary and undue stops — alerts automatically dispatch the Federal Highway Police, fighting theft, smuggling and tax evasion.' },
        { t: 'Continental integration', x: 'Bioceanic corridors, Mercosur and the port of Chancay: the seal is born ready for South America’s logistics integration with the Pacific.' },
      ],
      timeline: [
        { ano: '2022', t: 'Rota Brasil — Brazilian Fiscal Traceability Program created by the Federal Revenue' },
        { ano: '2024', t: 'ITI approves the ICP-Brasil Electronic Seal (Oct 31), aligned with the European eIDAS standard' },
        { ano: '2025', t: 'Rota Brasil repealed — room opens for a new traceability infrastructure' },
        { ano: '2029', t: 'End of the Electronic Seal transition: 7.3 million e-CNPJs expected to be replaced' },
      ],
      nota: 'Casa da Moeda do Brasil — 332 years of history — produces banknotes, passports, electronic ballot-box seals and fiscal seals for the Brazilian State.',
    },
    es: {
      hero: {
        kicker: 'Ideas para el desarrollo',
        title: 'MoedaLog — el pasaporte intermodal de la carga brasileña',
        sub: 'Un sello fiscal inteligente (e-SFI), pasivo y de uso único, para identificar, rastrear y autenticar mercaderías en circulación por Brasil.',
      },
      kpis: [
        { v: 'RFID + NFC', l: 'Sello pasivo — sin batería, activado en la lectura' },
        { v: '10', l: 'Niveles de seguridad física y digital' },
        { v: 'BRL 1,88', l: 'Costo unitario estimado del sello' },
        { v: 'eFuse', l: 'Precinto electrónico de uso único' },
      ],
      blocos: [
        { t: 'El problema', x: 'El "Custo Brasil" consume BRL 1,7 billones al año (19,5% del PIB); el mercado ilegal generó pérdidas de casi BRL 500 mil millones en 2025. Falta un eslabón de confianza entre la fiscalización física y la digital.' },
        { t: 'La solución', x: 'El Sello Fiscal Inteligente de la Casa da Moeda do Brasil: hardware y software que garantizan identificación, trazabilidad y autenticación de mercaderías, con interoperabilidad de los órganos fiscalizadores mediante una central única de confianza del Estado.' },
        { t: 'Seguridad phygital', x: 'Certificación ICP-Brasil, registro en blockchain y precinto electrónico de rotura irreversible. La Casa da Moeda emite la "partida de nacimiento" criptográfica de cada carga.' },
        { t: 'Caso de uso: PRF', x: 'Antenas RFID leen las cargas en las carreteras; la IA verifica precinto intacto, itinerario correcto y paradas indebidas — las alertas movilizan automáticamente a la Policía Federal de Carreteras contra robo, contrabando y evasión fiscal.' },
        { t: 'Integración continental', x: 'Corredores bioceánicos, Mercosur y el puerto de Chancay: el sello nace preparado para la integración logística de América del Sur con el Pacífico.' },
      ],
      timeline: [
        { ano: '2022', t: 'Rota Brasil — Programa Brasileño de Rastreabilidad Fiscal instituido por la Receita Federal' },
        { ano: '2024', t: 'El ITI aprueba el Sello Electrónico ICP-Brasil (31/10), alineado al estándar europeo eIDAS' },
        { ano: '2025', t: 'Rota Brasil derogado — se abre espacio para una nueva infraestructura de rastreabilidad' },
        { ano: '2029', t: 'Fin de la transición del Sello Electrónico: se prevé sustituir 7,3 millones de e-CNPJ' },
      ],
      nota: 'La Casa da Moeda do Brasil — 332 años de historia — produce billetes, pasaportes, precintos de urnas electrónicas y sellos fiscales para el Estado brasileño.',
    },
  },

  revista: {
    pt: {
      hero: {
        kicker: 'Revista trimestral',
        title: 'Logis — Revista de Logística e Sustentabilidade',
        sub: 'Ciência aberta para a cadeia logística: artigos revisados por pares, estudos de caso e dados, em português, inglês e espanhol.',
      },
      blocos: [
        { t: 'Responsabilidade editorial', x: 'Jornalista responsável: Miguel do Rosário.' },
        { t: 'Acesso aberto diamante', x: 'Grátis para ler e grátis para publicar — o mesmo modelo da EJTIR (TU Delft), referência mundial em acesso aberto sem taxas.' },
        { t: 'Escopo', x: 'Infraestrutura e transporte, rastreabilidade e confiança, logística reversa e economia circular, regulação e marco legal, inovação tecnológica.' },
        { t: 'Seções', x: 'Artigos científicos (peer review), estudos de caso, observatório regulatório e revisões de dados — cada edição, um dossiê temático.' },
        { t: 'Indexação', x: 'Nascer indexável: DOAJ, Latindex, Redalyc e SciELO como metas de curto prazo; TRID e OpenAlex como espelhos de metadados.' },
      ],
      nota: 'Edição nº 1 prevista para o 4º trimestre de 2026. Chamada de trabalhos em preparação — acompanhe o portal.',
    },
    en: {
      hero: {
        kicker: 'Quarterly journal',
        title: 'Logis — Journal of Logistics and Sustainability',
        sub: 'Open science for the logistics chain: peer-reviewed articles, case studies and data, in Portuguese, English and Spanish.',
      },
      blocos: [
        { t: 'Editorial responsibility', x: 'Editor-in-chief: Miguel do Rosário.' },
        { t: 'Diamond open access', x: 'Free to read and free to publish — the same model as EJTIR (TU Delft), a world reference in fee-free open access.' },
        { t: 'Scope', x: 'Infrastructure and transport, traceability and trust, reverse logistics and circular economy, regulation and legal framework, technological innovation.' },
        { t: 'Sections', x: 'Scientific articles (peer review), case studies, regulatory observatory and data reviews — each issue, a thematic dossier.' },
        { t: 'Indexing', x: 'Born indexable: DOAJ, Latindex, Redalyc and SciELO as short-term goals; TRID and OpenAlex as metadata mirrors.' },
      ],
      nota: 'Issue #1 planned for Q4 2026. Call for papers in preparation — follow the portal.',
    },
    es: {
      hero: {
        kicker: 'Revista trimestral',
        title: 'Logis — Revista de Logística y Sostenibilidad',
        sub: 'Ciencia abierta para la cadena logística: artículos revisados por pares, estudios de caso y datos, en portugués, inglés y español.',
      },
      blocos: [
        { t: 'Responsabilidad editorial', x: 'Director responsable: Miguel do Rosário.' },
        { t: 'Acceso abierto diamante', x: 'Gratis para leer y gratis para publicar — el mismo modelo de EJTIR (TU Delft), referencia mundial en acceso abierto sin tasas.' },
        { t: 'Alcance', x: 'Infraestructura y transporte, trazabilidad y confianza, logística inversa y economía circular, regulación y marco legal, innovación tecnológica.' },
        { t: 'Secciones', x: 'Artículos científicos (peer review), estudios de caso, observatorio regulatorio y revisiones de datos — cada edición, un dossier temático.' },
        { t: 'Indexación', x: 'Nacer indexable: DOAJ, Latindex, Redalyc y SciELO como metas de corto plazo; TRID y OpenAlex como espejos de metadatos.' },
      ],
      nota: 'Edición nº 1 prevista para el 4º trimestre de 2026. Convocatoria de trabajos en preparación — siga el portal.',
    },
  },

  observatorio: {
    pt: {
      hero: {
        kicker: 'Dados que orientam',
        title: 'Observatório da logística',
        sub: 'Indicadores-chave da logística brasileira e mundial, com fontes públicas e atualização periódica.',
      },
      kpis: [
        { v: '19,5% do PIB', l: 'Peso do Custo Brasil por ano (R$ 1,7 trilhão)', fonte: 'Material institucional CMB' },
        { v: '36º lugar', l: 'Brasil no LPI 2023 entre 139 países', fonte: 'Banco Mundial' },
        { v: '7,3 mi', l: 'e-CNPJs a substituir até 2029 (Selo Eletrônico)', fonte: 'ITI / ICP-Brasil' },
        { v: 'R$ 500 bi', l: 'Mercado ilegal no Brasil em 2025', fonte: 'O Globo' },
      ],
      paragrafos: [
        'Próximos indicadores em preparação: LPI por dimensão (alfândega, infraestrutura, rastreabilidade, prazo), custo de frete por corredor (ESALQ-LOG), qualidade de rodovias (CNT) e emissões do frete (GLEC).',
      ],
    },
    en: {
      hero: {
        kicker: 'Data that guides',
        title: 'Logistics observatory',
        sub: 'Key indicators of Brazilian and global logistics, with public sources and periodic updates.',
      },
      kpis: [
        { v: '19.5% of GDP', l: 'Annual weight of the Custo Brasil (BRL 1.7 trillion)', fonte: 'CMB institutional material' },
        { v: '36th place', l: 'Brazil in the 2023 LPI among 139 countries', fonte: 'World Bank' },
        { v: '7.3 M', l: 'e-CNPJs to be replaced by 2029 (Electronic Seal)', fonte: 'ITI / ICP-Brasil' },
        { v: 'BRL 500 bn', l: 'Illegal market in Brazil in 2025', fonte: 'O Globo' },
      ],
      paragrafos: [
        'Next indicators in preparation: LPI by dimension (customs, infrastructure, tracking, timeliness), freight cost per corridor (ESALQ-LOG), highway quality (CNT) and freight emissions (GLEC).',
      ],
    },
    es: {
      hero: {
        kicker: 'Datos que orientan',
        title: 'Observatorio de la logística',
        sub: 'Indicadores clave de la logística brasileña y mundial, con fuentes públicas y actualización periódica.',
      },
      kpis: [
        { v: '19,5% del PIB', l: 'Peso del Custo Brasil por año (BRL 1,7 billones)', fonte: 'Material institucional CMB' },
        { v: '36º lugar', l: 'Brasil en el LPI 2023 entre 139 países', fonte: 'Banco Mundial' },
        { v: '7,3 M', l: 'e-CNPJ a sustituir hasta 2029 (Sello Electrónico)', fonte: 'ITI / ICP-Brasil' },
        { v: 'BRL 500 mil M', l: 'Mercado ilegal en Brasil en 2025', fonte: 'O Globo' },
      ],
      paragrafos: [
        'Próximos indicadores en preparación: LPI por dimensión (aduana, infraestructura, rastreabilidad, plazo), costo de flete por corredor (ESALQ-LOG), calidad de carreteras (CNT) y emisiones del flete (GLEC).',
      ],
    },
  },

  institucional: {
    pt: {
      hero: {
        kicker: 'Sobre o portal',
        title: 'LOGOS',
        sub: 'Um portal trilíngue dedicado à logística sustentável — informação aberta, dados verificáveis e ciência acessível.',
      },
      blocos: [
        { t: 'Missão', x: 'Reunir em um só lugar — em português, inglês e espanhol — o conhecimento, a infraestrutura, a regulação e as ideias que movem a logística brasileira e mundial.' },
        { t: 'Três pilares', x: 'Conhecimento (revista Logis e pesquisa), infraestrutura (geomapas) e confiança (regulação, contratos e rastreabilidade).' },
        { t: 'Compromisso', x: 'Dados com fonte citada, links oficiais verificados, correções registradas e respeito às licenças abertas (ODbL, CC BY, domínio público).' },
      ],
      nota: 'Contato e colaborações: formulário em preparação. A revista Logis receberá chamadas de trabalhos a partir do 4º trimestre de 2026.',
    },
    en: {
      hero: {
        kicker: 'About the portal',
        title: 'LOGOS',
        sub: 'A trilingual portal dedicated to sustainable logistics — open information, verifiable data and accessible science.',
      },
      blocos: [
        { t: 'Mission', x: 'To gather in one place — in Portuguese, English and Spanish — the knowledge, infrastructure, regulation and ideas that move Brazilian and global logistics.' },
        { t: 'Three pillars', x: 'Knowledge (the Logis journal and research), infrastructure (geomaps) and trust (regulation, contracts and traceability).' },
        { t: 'Commitment', x: 'Data with cited sources, verified official links, logged corrections and respect for open licenses (ODbL, CC BY, public domain).' },
      ],
      nota: 'Contact and collaborations: form in preparation. The Logis journal will open calls for papers from Q4 2026.',
    },
    es: {
      hero: {
        kicker: 'Sobre el portal',
        title: 'LOGOS',
        sub: 'Un portal trilingüe dedicado a la logística sostenible — información abierta, datos verificables y ciencia accesible.',
      },
      blocos: [
        { t: 'Misión', x: 'Reunir en un solo lugar — en portugués, inglés y español — el conocimiento, la infraestructura, la regulación y las ideas que mueven la logística brasileña y mundial.' },
        { t: 'Tres pilares', x: 'Conocimiento (revista Logis e investigación), infraestructura (geomapas) y confianza (regulación, contratos y trazabilidad).' },
        { t: 'Compromiso', x: 'Datos con fuente citada, enlaces oficiales verificados, correcciones registradas y respeto a las licencias abiertas (ODbL, CC BY, dominio público).' },
      ],
      nota: 'Contacto y colaboraciones: formulario en preparación. La revista Logis recibirá convocatorias de trabajos a partir del 4º trimestre de 2026.',
    },
  },
};
