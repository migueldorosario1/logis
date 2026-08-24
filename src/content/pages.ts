import type { Lang } from './ui';

export interface KP { v: string; l: string; fonte?: string }
export interface TI { t: string; x: string; slug?: string }
export interface TL { ano: string; t: string }
export interface PROG { pais: string; prog: string; como: string; url: string }
export interface ART { n: string; x: string }
export interface CAP { cap: string; arts: ART[] }
export interface MANCHETE { kicker: string; titulo: string; tese: string; slug: string; data: string }

interface PageContent {
  hero: { kicker: string; title: string; sub: string };
  manchete?: MANCHETE;
  blocos?: TI[];
  kpis?: KP[];
  timeline?: TL[];
  paragrafos?: string[];
  programas?: PROG[];
  capitulos?: CAP[];
  nota?: string;
  cta?: { label: string; slug: string };
}

type Pages = Record<string, Record<Lang, PageContent>>;

export const PAGES: Pages = {
  home: {
    pt: {
      hero: {
        kicker: '',
        title: 'LOGIS',
        sub: '',
      },
      manchete: {
        kicker: 'Editorial semanal · Nº 1 · Brasil',
        titulo: 'Abrir o corredor, vigiar a porta',
        tese: 'A mesma infraestrutura que integra o Brasil ao mundo integra também o contrabando. A agenda logística de 2026 só se completa quando a obra e a vigilância forem assinadas juntas.',
        slug: 'editorial',
        data: '23 de agosto de 2026',
      },
      blocos: [
        { t: 'Mapas & Dados', slug: 'geomapas', x: 'Mapa-múndi interativo com rotas navais, ferrovias, corredores aéreos, oleodutos e fibras ópticas submarinas — além do observatório de indicadores e da pesquisa.' },
        { t: 'Regulação & Mercados', slug: 'reguladores', x: 'Reguladores do Brasil e do mundo, marco legal nacional e internacional e contratos.' },
        { t: 'Sustentabilidade & Segurança', slug: 'sustentabilidade', x: 'Logística reversa e economia circular, segurança pública e controle das fronteiras, e ideias de desenvolvimento como o selo eletrônico fiscal.' },
        { t: 'Revista Logis', slug: 'revista', x: 'Revista trimestral de logística sustentável — acesso aberto diamante e trilíngue, com edição demonstrativa para download.' },
        { t: 'Institucional', slug: 'institucional', x: 'Sobre o portal LOGIS, metodologia e contato.' },
      ],
      cta: { label: 'Explorar os geomapas', slug: 'geomapas' },
    },
    en: {
      hero: {
        kicker: '',
        title: 'LOGIS',
        sub: '',
      },
      manchete: {
        kicker: 'Weekly editorial · No. 1 · Brazil',
        titulo: 'Open the corridor, watch the door',
        tese: 'The same infrastructure that connects Brazil to the world also connects the smuggler. Brazil’s 2026 logistics agenda is only complete when the works and the watchfulness are signed together.',
        slug: 'editorial',
        data: 'August 23, 2026',
      },
      blocos: [
        { t: 'Maps & Data', slug: 'geomapas', x: 'Interactive world map with shipping lanes, railways, air corridors, oil pipelines and submarine fiber-optic cables — plus the indicators observatory and research.' },
        { t: 'Regulation & Markets', slug: 'reguladores', x: 'Regulators from Brazil and the world, national and international legal frameworks and contracts.' },
        { t: 'Sustainability & Security', slug: 'sustentabilidade', x: 'Reverse logistics and circular economy, public security and border control, and development ideas such as the electronic fiscal seal.' },
        { t: 'Logis Journal', slug: 'revista', x: 'Quarterly journal of sustainable logistics — diamond open access and trilingual, with a demo edition available for download.' },
        { t: 'About', slug: 'institucional', x: 'About the LOGIS portal, methodology and contact.' },
      ],
      cta: { label: 'Explore the geomaps', slug: 'geomapas' },
    },
    es: {
      hero: {
        kicker: '',
        title: 'LOGIS',
        sub: '',
      },
      manchete: {
        kicker: 'Editorial semanal · Nº 1 · Brasil',
        titulo: 'Abrir el corredor, vigilar la puerta',
        tese: 'La misma infraestructura que integra a Brasil con el mundo también integra al contrabando. La agenda logística de 2026 solo se completa cuando la obra y la vigilancia se firman juntas.',
        slug: 'editorial',
        data: '23 de agosto de 2026',
      },
      blocos: [
        { t: 'Mapas y Datos', slug: 'geomapas', x: 'Mapamundi interactivo con rutas navales, ferrocarriles, corredores aéreos, oleoductos y fibras ópticas submarinas — además del observatorio de indicadores y la investigación.' },
        { t: 'Regulación y Mercados', slug: 'reguladores', x: 'Reguladores de Brasil y del mundo, marco legal nacional e internacional y contratos.' },
        { t: 'Sostenibilidad y Seguridad', slug: 'sustentabilidade', x: 'Logística inversa y economía circular, seguridad pública y control de fronteras, e ideas de desarrollo como el sello electrónico fiscal.' },
        { t: 'Revista Logis', slug: 'revista', x: 'Revista trimestral de logística sostenible — acceso abierto diamante y trilingüe, con edición demostrativa para descargar.' },
        { t: 'Institucional', slug: 'institucional', x: 'Sobre el portal LOGIS, metodología y contacto.' },
      ],
      cta: { label: 'Explorar los geomapas', slug: 'geomapas' },
    },
  },

  geomapas: {
    pt: {
      hero: {
        kicker: 'O mundo em movimento',
        title: 'Geomapas do mundo',
        sub: 'Rotas navais, ferrovias, corredores aéreos, oleodutos e gasodutos, fibras ópticas submarinas — e a malha logística brasileira — em mapas interativos e abertos.',
      },
      blocos: [
        { t: 'Rotas navais', x: 'As grandes rotas do comércio marítimo: Ásia–Europa via Suez, transpacíficas, o novo corredor China–Chancay, o Atlântico Norte, a rota do Cabo e o estreito de Ormuz.' },
        { t: 'Ferrovias do mundo', x: 'Transiberiana, transcontinentais da América do Norte, alta velocidade europeia, corredor do Lobito, Djibuti–Etiópia e a bioceânica Brasil–Bolívia–Peru (projeto).' },
        { t: 'Aéreos, dutos e fibras', x: 'Corredores aéreos de carga, oleodutos e gasodutos (Druzhba, ESPO, BTC, Keystone, Gasbol) e os cabos submarinos que conectam os continentes (MAREA, EllaLink, SEA-ME-WE).' },
        { t: 'Brasil', x: 'Malha das 27 UFs (IBGE), os grandes portos e hubs de carga, nós ferroviários e fluxos de referência — incluindo o corredor bioceânico Ilhéus–Chancay.' },
      ],
      paragrafos: [
        'Camadas de traçado completo de rodovias federais (DNIT), ferrovias (ANTT) e dutos chegam nas próximas fases do portal, com dados públicos atualizados no build.',
        'Mapas abertos e gratuitos: OpenFreeMap + OpenStreetMap (contribuidores). Sem chaves de API, sem custo. Rotas mundiais em traçado esquemático.',
      ],
    },
    en: {
      hero: {
        kicker: 'The world in motion',
        title: 'World geomaps',
        sub: 'Shipping lanes, railways, air corridors, oil and gas pipelines, submarine fiber-optic cables — and the Brazilian logistics mesh — on interactive, open maps.',
      },
      blocos: [
        { t: 'Shipping lanes', x: 'The great maritime trade routes: Asia–Europe via Suez, transpacific lanes, the new China–Chancay corridor, the North Atlantic, the Cape route and the Strait of Hormuz.' },
        { t: 'World railways', x: 'Trans-Siberian, North American transcontinentals, European high-speed rail, the Lobito corridor, Djibouti–Ethiopia and the Brazil–Bolivia–Peru bioceanic railway (project).' },
        { t: 'Air, pipelines and fiber', x: 'Air cargo corridors, oil and gas pipelines (Druzhba, ESPO, BTC, Keystone, Gasbol) and the submarine cables linking the continents (MAREA, EllaLink, SEA-ME-WE).' },
        { t: 'Brazil', x: 'All 27 state boundaries (IBGE), the great ports and cargo hubs, railway nodes and reference flows — including the Ilhéus–Chancay bioceanic corridor.' },
      ],
      paragrafos: [
        'Full alignment layers for federal highways (DNIT), railways (ANTT) and pipelines arrive in the next phases, with public data refreshed at build time.',
        'Free, open maps: OpenFreeMap + OpenStreetMap contributors. No API keys, no cost. World routes shown as schematic tracings.',
      ],
    },
    es: {
      hero: {
        kicker: 'El mundo en movimiento',
        title: 'Geomapas del mundo',
        sub: 'Rutas navales, ferrocarriles, corredores aéreos, oleoductos y gasoductos, fibras ópticas submarinas — y la malla logística brasileña — en mapas interactivos y abiertos.',
      },
      blocos: [
        { t: 'Rutas navales', x: 'Las grandes rutas del comercio marítimo: Asia–Europa vía Suez, transpacíficas, el nuevo corredor China–Chancay, el Atlántico Norte, la ruta del Cabo y el estrecho de Ormuz.' },
        { t: 'Ferrocarriles del mundo', x: 'Transiberiano, transcontinentales de Norteamérica, alta velocidad europea, corredor del Lobito, Yibuti–Etiopía y el bioceánico Brasil–Bolivia–Perú (proyecto).' },
        { t: 'Aéreos, ductos y fibras', x: 'Corredores aéreos de carga, oleoductos y gasoductos (Druzhba, ESPO, BTC, Keystone, Gasbol) y los cables submarinos que conectan los continentes (MAREA, EllaLink, SEA-ME-WE).' },
        { t: 'Brasil', x: 'Malla de las 27 UF (IBGE), los grandes puertos y hubs de carga, nodos ferroviarios y flujos de referencia — incluido el corredor bioceánico Ilhéus–Chancay.' },
      ],
      paragrafos: [
        'Las capas de trazado completo de carreteras federales (DNIT), ferrocarriles (ANTT) y ductos llegan en las próximas fases, con datos públicos actualizados en el build.',
        'Mapas abiertos y gratuitos: OpenFreeMap + colaboradores de OpenStreetMap. Sin claves de API, sin costo. Rutas mundiales en trazado esquemático.',
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
        { v: 'Valor mínimo', l: 'Custo unitário estimado do selo' },
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
        { v: 'Minimum value', l: 'Estimated unit cost of the seal' },
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
        { v: 'Valor mínimo', l: 'Costo unitario estimado del sello' },
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

  editorial: {
    pt: {
      hero: {
        kicker: 'Editorial semanal · Nº 1 · Brasil · 23/08/2026',
        title: 'Abrir o corredor, vigiar a porta',
        sub: 'A tese do LOGIS nesta semana: a mesma infraestrutura que integra o Brasil ao mundo integra também o contrabando — e a agenda logística de 2026 só se completa quando a obra e a vigilância forem assinadas juntas.',
      },
      paragrafos: [
        'A semana confirma o que o mapa já mostrava. O Peru consolida o corredor do Pacífico com o terminal de Chancay em operação comercial, a ferrovia bioceânica volta ao centro das conversas entre Brasil, Bolívia e Peru, e o Plano Nacional de Logística reaparece no noticiário como promessa de integração continental. É a maior virada de geografia econômica do país em uma geração.',
        'Toda virada dessa escala tem duas faces. A rota que encurta o caminho da soja e da manufatura encurta também o caminho da mercadoria irregular. O corredor que reduz o custo do container reduz o custo do contrabando — é a mesma estrada, o mesmo porto, o mesmo manifesto de carga. Não existe obra que escolha o que vai circular por ela.',
        'É por isso que este editorial defende uma tese simples: no Brasil de 2026, discutir logística sem discutir controle logístico é discutir metade do problema. O custo de não fazer isso já é conhecido — um mercado ilegal estimado em R$ 500 bilhões, sonegação em toda a cadeia e fronteiras que fiscalizam com a tecnologia do século passado.',
        'O debate eleitoral chegou antes. Na semana em que as propostas de governo foram parar na tela, o controle das fronteiras virou consenso: patrulhamento fluvial e aéreo na Amazônia, cooperação com os vizinhos, radares, drones, sensores e centros integrados de comando. A pauta existe — o que ainda não existe é a ponte entre vigiar o território e rastrear a carga.',
        'Essa ponte tem nome: controle logístico de Estado, item a item, da origem ao destino. O mundo pratica a versão aduaneira dela há vinte anos — C-TPAT nos Estados Unidos, operadores econômicos autorizados na Europa, o padrão SAFE das alfândegas do mundo inteiro. O Brasil tem a oportunidade de dar o passo seguinte: a rastreabilidade embarcada no próprio produto, com o selo eletrônico fiscal — chip passivo, barato, impossível de falsificar em escala.',
        'A matemática favorece. Um selo de valor mínimo por item contra bilhões em sonegação; um alerta automático de violação contra a inspeção a olho nu; um banco de dados de origem contra a nota fria. Quem paga o preço da ausência dessa camada não é o contrabandista — é o industrial que compete com o pirata e o Estado que financia a obra duas vezes.',
        'Contraponham-se os riscos, com honestidade: tecnologia não substitui instituição. Selo sem integração entre Receita, PRF e aduanas vizinhas vira colecionador de dados; dado sem punição vira relatório. O programa precisa virar política de Estado — com prazo, orçamento e métrica pública de redução do mercado ilegal.',
        'A decisão da semana, portanto, não é se o Brasil abre seus corredores — eles já estão abrindo, com ou sem plano. A decisão é se cada nova rota nasce com o seu gêmeo: o sistema de vigilância que a acompanha. Obra sem vigilância é dívida; obra com vigilância é ganho líquido.',
        'O LOGIS vai acompanhar essa pauta semana a semana — alternando o olhar sobre o Brasil e sobre o mundo. É a nossa primeira edição, e esta é a nossa tese de partida.',
      ],
      nota: 'Editorial do Instituto de Logística e Sustentabilidade · jornalista Miguel do Rosário · 23/08/2026. Fontes da semana: operação comercial do terminal de Chancay (Peru), agenda da ferrovia bioceânica, Propostas para as fronteiras (GloboNews — propostas enviadas ao TSE, eleições 2026), estimativas do mercado ilegal citadas em material institucional (O Globo, 2025).',
      cta: { label: 'Ver a seção Segurança Pública', slug: 'seguranca' },
    },
    en: {
      hero: {
        kicker: 'Weekly editorial · No. 1 · Brazil · Aug 23, 2026',
        title: 'Open the corridor, watch the door',
        sub: 'This week’s thesis at LOGIS: the infrastructure that connects Brazil to the world also connects the smuggler — and the 2026 logistics agenda is only complete when the works and the watchfulness are signed together.',
      },
      paragrafos: [
        'The week confirms what the map already showed. Peru consolidates the Pacific corridor with Chancay in commercial operation, the bioceanic railway returns to the center of Brazil–Bolivia–Peru talks, and the National Logistics Plan reappears in the news as a promise of continental integration. It is the biggest shift in the country’s economic geography in a generation.',
        'A shift of this scale has two faces. The route that shortens the path of soy and manufactured goods also shortens the path of irregular goods. The corridor that cuts container costs cuts smuggling costs — same road, same port, same cargo manifest. No infrastructure chooses what travels on it.',
        'That is why this editorial defends a simple thesis: in the Brazil of 2026, discussing logistics without discussing logistics control means discussing half the problem. The cost of not doing it is well known — an illegal market estimated at BRL 500 billion, tax evasion across the chain, and borders inspected with last-century technology.',
        'The electoral debate got there first. As government proposals hit the screen, border control became consensus: river and air patrols in the Amazon, cooperation with neighbors, radars, drones, sensors and integrated command centers. The agenda exists — what does not exist yet is the bridge between watching the territory and tracking the cargo.',
        'That bridge has a name: state logistics control, item by item, from origin to destination. The world has practiced its customs version for twenty years — C-TPAT in the United States, authorized economic operators in Europe, the SAFE standard of the world’s customs administrations. Brazil has the chance to take the next step: traceability embedded in the product itself, with the electronic fiscal seal — a passive chip, cheap, impossible to counterfeit at scale.',
        'The math favors it. A minimum-value seal per item against billions in evasion; an automatic tamper alert against inspection by the naked eye; an origin database against the phantom invoice. Those who pay for the absence of this layer are not smugglers — they are the manufacturers competing with pirates and the State financing the work twice.',
        'Let the risks be stated honestly: technology does not replace institution. A seal without integration among the tax authority, highway police and neighboring customs becomes a data hoarder; data without enforcement becomes a report. The program must become state policy — with deadlines, budget and a public metric for reducing the illegal market.',
        'The decision of the week, therefore, is not whether Brazil opens its corridors — they are already opening, with or without a plan. The decision is whether each new route is born with its twin: the surveillance system that accompanies it. Works without watchfulness are debt; works with watchfulness are net gain.',
        'LOGIS will follow this agenda week by week — alternating the view on Brazil and on the world. This is our first edition, and this is our starting thesis.',
      ],
      nota: 'Editorial by the Institute of Logistics and Sustainability · journalist Miguel do Rosário · Aug 23, 2026. Week’s sources: commercial operation of the Chancay terminal (Peru), bioceanic railway agenda, border proposals (GloboNews — proposals filed with the TSE, 2026 elections), illegal-market estimates cited in institutional material (O Globo, 2025).',
      cta: { label: 'See the Public Security section', slug: 'seguranca' },
    },
    es: {
      hero: {
        kicker: 'Editorial semanal · Nº 1 · Brasil · 23/08/2026',
        title: 'Abrir el corredor, vigilar la puerta',
        sub: 'La tesis de LOGIS esta semana: la infraestructura que integra a Brasil con el mundo también integra al contrabando — y la agenda logística de 2026 solo se completa cuando la obra y la vigilancia se firman juntas.',
      },
      paragrafos: [
        'La semana confirma lo que el mapa ya mostraba. Perú consolida el corredor del Pacífico con Chancay en operación comercial, el ferrocarril bioceánico vuelve al centro de las conversaciones entre Brasil, Bolivia y Perú, y el Plan Nacional de Logística reaparece en las noticias como promesa de integración continental. Es el mayor giro geoeconómico del país en una generación.',
        'Un giro de esta escala tiene dos caras. La ruta que acorta el camino de la soya y de la manufactura acorta también el camino de la mercancía irregular. El corredor que reduce el costo del contenedor reduce el costo del contrabando — misma carretera, mismo puerto, mismo manifiesto. Ninguna obra elige lo que circula por ella.',
        'Por eso este editorial defiende una tesis simple: en el Brasil de 2026, discutir logística sin discutir control logístico es discutir la mitad del problema. El costo de no hacerlo es conocido — un mercado ilegal estimado en R$ 500 mil millones, evasión en toda la cadena y fronteras fiscalizadas con tecnología del siglo pasado.',
        'El debate electoral llegó antes. Cuando las propuestas de gobierno llegaron a la pantalla, el control de fronteras se volvió consenso: patrullaje fluvial y aéreo en el Amazonas, cooperación con los vecinos, radares, drones, sensores y centros integrados de mando. La agenda existe — lo que aún no existe es el puente entre vigilar el territorio y rastrear la carga.',
        'Ese puente tiene nombre: control logístico de Estado, ítem por ítem, del origen al destino. El mundo practica su versión aduanera desde hace veinte años — C-TPAT en Estados Unidos, operadores económicos autorizados en Europa, el estándar SAFE de las aduanas del mundo. Brasil tiene la oportunidad de dar el paso siguiente: la trazabilidad embebida en el propio producto, con el sello electrónico fiscal — chip pasivo, barato, imposible de falsificar a escala.',
        'La matemática acompaña. Un sello de valor mínimo por ítem contra miles de millones en evasión; una alerta automática de violación contra la inspección a ojo desnudo; una base de datos de origen contra la factura fantasma. Quien paga el precio de la ausencia de esta capa no es el contrabandista — es el industrial que compite con el pirata y el Estado que financia la obra dos veces.',
        'Digamos los riesgos con honestidad: la tecnología no sustituye a la institución. Un sello sin integración entre hacienda, la policía de carreteras y las aduanas vecinas se vuelve acumulador de datos; el dato sin castigo se vuelve informe. El programa necesita convertirse en política de Estado — con plazo, presupuesto y métrica pública de reducción del mercado ilegal.',
        'La decisión de la semana, por lo tanto, no es si Brasil abre sus corredores — ya se están abriendo, con o sin plan. La decisión es si cada ruta nueva nace con su gemelo: el sistema de vigilancia que la acompaña. Obra sin vigilancia es deuda; obra con vigilancia es ganancia neta.',
        'LOGIS va a seguir esta agenda semana a semana — alternando la mirada sobre Brasil y sobre el mundo. Esta es nuestra primera edición, y esta es nuestra tesis de partida.',
      ],
      nota: 'Editorial del Instituto de Logística y Sostenibilidad · periodista Miguel do Rosário · 23/08/2026. Fuentes de la semana: operación comercial del terminal de Chancay (Perú), agenda del ferrocarril bioceánico, propuestas para las fronteras (GloboNews — propuestas presentadas al TSE, elecciones 2026), estimaciones del mercado ilegal citadas en material institucional (O Globo, 2025).',
      cta: { label: 'Ver la sección Seguridad Pública', slug: 'seguranca' },
    },
  },

  objetivos: {
    pt: {
      hero: {
        kicker: 'Quem Somos',
        title: 'Objetivos do Instituto',
        sub: 'O que o Instituto de Logística e Sustentabilidade existe para fazer — os fins estatutários em linguagem direta.',
      },
      blocos: [
        { t: 'Estudar os corredores', x: 'Pesquisar e analisar os corredores logísticos do Brasil e do mundo — portos, ferrovias, rotas marítimas, dutos e fibras — e o que eles mudam na economia real.' },
        { t: 'Vigiar a porta aberta', x: 'Colocar a segurança pública dentro da pauta logística: contrabando, pirataria e fluxos ilegais como problemas de cadeia, com respostas de tecnologia, regulação e Estado.' },
        { t: 'Sustentabilidade como centro', x: 'Logística reversa, economia circular e baixo carbono no coração da análise — não como anexo.' },
        { t: 'Publicar em acesso aberto', x: 'Manter o portal LOGIS trilíngue e a revista trimestral Logis em acesso aberto diamante — grátis para ler e grátis para publicar.' },
        { t: 'Alimentar políticas públicas', x: 'Oferecer aos poderes públicos estudos, dados e propostas — como o selo eletrônico fiscal — com independência e fonte citada.' },
        { t: 'Cooperar com o mundo', x: 'Dialogar com centros de pesquisa, organismos e institutos congêneres internacionais, traduzindo o debate global para o português (e o nosso para o mundo).' },
      ],
      cta: { label: 'Ver a Linha Editorial', slug: 'linha-editorial' },
    },
    en: {
      hero: {
        kicker: 'Who We Are',
        title: 'Objectives of the Institute',
        sub: 'What the Institute of Logistics and Sustainability exists to do — the statutory purposes in plain language.',
      },
      blocos: [
        { t: 'Study the corridors', x: 'Research and analyze logistics corridors in Brazil and worldwide — ports, railways, shipping lanes, pipelines and fiber — and what they change in the real economy.' },
        { t: 'Watch the open door', x: 'Bring public security into the logistics agenda: smuggling, piracy and illegal flows as supply-chain problems, answered with technology, regulation and state capacity.' },
        { t: 'Sustainability at the center', x: 'Reverse logistics, circular economy and low carbon at the heart of the analysis — not as an annex.' },
        { t: 'Publish in open access', x: 'Maintain the trilingual LOGIS portal and the quarterly diamond-open-access journal Logis — free to read and free to publish.' },
        { t: 'Feed public policy', x: 'Offer governments studies, data and proposals — such as the electronic fiscal seal — with independence and cited sources.' },
        { t: 'Cooperate with the world', x: 'Engage research centers, international organizations and peer institutes, translating the global debate into Portuguese (and ours to the world).' },
      ],
      cta: { label: 'See the Editorial Line', slug: 'linha-editorial' },
    },
    es: {
      hero: {
        kicker: 'Quiénes Somos',
        title: 'Objetivos del Instituto',
        sub: 'Lo que el Instituto de Logística y Sostenibilidad existe para hacer — los fines estatutarios en lenguaje directo.',
      },
      blocos: [
        { t: 'Estudiar los corredores', x: 'Investigar y analizar los corredores logísticos de Brasil y del mundo — puertos, ferrocarriles, rutas marítimas, ductos y fibras — y lo que cambian en la economía real.' },
        { t: 'Vigilar la puerta abierta', x: 'Poner la seguridad pública dentro de la agenda logística: contrabando, piratería y flujos ilegales como problemas de cadena, con respuestas de tecnología, regulación y Estado.' },
        { t: 'Sostenibilidad en el centro', x: 'Logística inversa, economía circular y bajo carbono en el corazón del análisis — no como anexo.' },
        { t: 'Publicar en acceso abierto', x: 'Mantener el portal LOGIS trilingüe y la revista trimestral Logis en acceso abierto diamante — gratis para leer y gratis para publicar.' },
        { t: 'Alimentar políticas públicas', x: 'Ofrecer a los poderes públicos estudios, datos y propuestas — como el sello electrónico fiscal — con independencia y fuente citada.' },
        { t: 'Cooperar con el mundo', x: 'Dialogar con centros de investigación, organismos e institutos congéneres internacionales, traduciendo el debate global al portugués (y el nuestro al mundo).' },
      ],
      cta: { label: 'Ver la Línea Editorial', slug: 'linha-editorial' },
    },
  },

  endereco: {
    pt: {
      hero: {
        kicker: 'Quem Somos',
        title: 'Endereço',
        sub: 'Onde nos encontrar.',
      },
      blocos: [
        { t: 'Sede', x: 'A sede do Instituto será registrada no Estatuto (art. 2º) pela Assembleia de Fundação — o endereço oficial será publicado nesta página logo após o registro no cartório.' },
        { t: 'Endereço digital', x: 'Enquanto a sede física não é definida, o Instituto vive aqui: portal LOGIS em logis-magazine.vercel.app, com editorial semanal, geomapas do mundo, revista Logis e Instituto completo.' },
      ],
      nota: 'Esta página é atualizada automaticamente assim que a sede for registrada.',
      cta: { label: 'Ver o Estatuto', slug: 'estatuto' },
    },
    en: {
      hero: {
        kicker: 'Who We Are',
        title: 'Address',
        sub: 'Where to find us.',
      },
      blocos: [
        { t: 'Headquarters', x: 'The Institute’s seat will be recorded in the Statutes (art. 2) by the Founding Assembly — the official address will be published on this page right after the registry.' },
        { t: 'Digital address', x: 'Until the physical seat is set, the Institute lives here: the LOGIS portal at logis-magazine.vercel.app, with the weekly editorial, world geomaps, the Logis journal and the full Institute.' },
      ],
      nota: 'This page updates automatically as soon as the seat is registered.',
      cta: { label: 'See the Statutes', slug: 'estatuto' },
    },
    es: {
      hero: {
        kicker: 'Quiénes Somos',
        title: 'Dirección',
        sub: 'Dónde encontrarnos.',
      },
      blocos: [
        { t: 'Sede', x: 'La sede del Instituto será registrada en los Estatutos (art. 2º) por la Asamblea Fundadora — la dirección oficial se publicará en esta página justo después del registro.' },
        { t: 'Dirección digital', x: 'Mientras la sede física no se define, el Instituto vive aquí: el portal LOGIS en logis-magazine.vercel.app, con editorial semanal, geomapas del mundo, la revista Logis y el Instituto completo.' },
      ],
      nota: 'Esta página se actualiza automáticamente en cuanto la sede sea registrada.',
      cta: { label: 'Ver los Estatutos', slug: 'estatuto' },
    },
  },

  contato: {
    pt: {
      hero: {
        kicker: 'Quem Somos',
        title: 'Contato',
        sub: 'Fale com o Instituto de Logística e Sustentabilidade.',
      },
      blocos: [
        { t: 'Imprensa e entrevistas', x: 'Para entrevistas e informações à imprensa sobre editoriais, estudos e a revista Logis, o canal é a assessoria do Instituto — contato oficial em publicação.' },
        { t: 'Submissão de artigos', x: 'Cientistas e profissionais interessados em publicar na revista Logis acompanhem a chamada de trabalhos na página da revista — submissões abrem com a edição nº 1.' },
        { t: 'Parcerias e cooperação', x: 'Instituições de pesquisa, organismos e empresas podem propor cooperação nos termos do Estatuto (art. 3º) — canal oficial em publicação.' },
      ],
      nota: 'Os canais oficiais (e-mail e telefone) do Instituto serão publicados nesta página logo após a constituição formal. Até lá, tudo passa pelo portal.',
      cta: { label: 'Ver a Revista Logis', slug: 'revista' },
    },
    en: {
      hero: {
        kicker: 'Who We Are',
        title: 'Contact',
        sub: 'Talk to the Institute of Logistics and Sustainability.',
      },
      blocos: [
        { t: 'Press and interviews', x: 'For interviews and press information on editorials, studies and the Logis journal, the channel is the Institute’s office — official contact to be published.' },
        { t: 'Article submissions', x: 'Researchers and professionals interested in publishing in Logis should follow the call for papers on the journal page — submissions open with issue no. 1.' },
        { t: 'Partnerships and cooperation', x: 'Research institutions, organizations and companies may propose cooperation under the Statutes (art. 3) — official channel to be published.' },
      ],
      nota: 'The Institute’s official channels (e-mail and phone) will be published on this page right after formal incorporation. Until then, everything goes through the portal.',
      cta: { label: 'See the Logis Journal', slug: 'revista' },
    },
    es: {
      hero: {
        kicker: 'Quiénes Somos',
        title: 'Contacto',
        sub: 'Hable con el Instituto de Logística y Sostenibilidad.',
      },
      blocos: [
        { t: 'Prensa y entrevistas', x: 'Para entrevistas e información de prensa sobre editoriales, estudios y la revista Logis, el canal es la asesoría del Instituto — contacto oficial en publicación.' },
        { t: 'Envío de artículos', x: 'Investigadores y profesionales interesados en publicar en Logis deben seguir la convocatoria en la página de la revista — los envíos abren con la edición nº 1.' },
        { t: 'Alianzas y cooperación', x: 'Instituciones de investigación, organismos y empresas pueden proponer cooperación según los Estatutos (art. 3º) — canal oficial en publicación.' },
      ],
      nota: 'Los canales oficiales (correo y teléfono) del Instituto se publicarán en esta página justo después de la constitución formal. Hasta entonces, todo pasa por el portal.',
      cta: { label: 'Ver la Revista Logis', slug: 'revista' },
    },
  },

  quemsomos: {
    pt: {
      hero: {
        kicker: 'Quem Somos',
        title: 'Instituto de Logística e Sustentabilidade',
        sub: 'Entidade civil sem fins lucrativos dedicada a produzir e difundir conhecimento sobre logística, sustentabilidade e segurança pública — editora do portal LOGIS e da revista Logis.',
      },
      blocos: [
        { t: 'Fundador e presidente', x: 'O Instituto foi fundado pelo jornalista Miguel do Rosário, que o preside e assina a linha editorial. É também o responsável editorial da revista Logis.' },
        { t: 'O que fazemos', x: 'Estudos e pesquisas aplicadas sobre corredores logísticos, controle de fronteiras, logística reversa e economia circular; observação regulatória; e publicação científica em acesso aberto.' },
        { t: 'Estrutura', x: 'Portal LOGIS (conhecimento trilíngue PT·EN·ES), revista trimestral Logis (acesso aberto diamante) e programa próprio de estudos — hoje com foco no dossiê corredores de escoamento × controle logístico.' },
        { t: 'Por que existe', x: 'Porque a abertura dos novos canais de escoamento do Brasil e da América do Sul exige um programa de controle logístico à altura — e porque essa pauta precisa de uma casa independente de estudos.' },
      ],
      nota: 'O Instituto está em processo de constituição formal. A minuta do estatuto fundador está publicada neste portal, no submenu Estatuto.',
      cta: { label: 'Ler o Estatuto', slug: 'estatuto' },
    },
    en: {
      hero: {
        kicker: 'Who We Are',
        title: 'Institute of Logistics and Sustainability',
        sub: 'A civil non-profit organization dedicated to producing and disseminating knowledge on logistics, sustainability and public security — publisher of the LOGIS portal and the Logis journal.',
      },
      blocos: [
        { t: 'Founder and president', x: 'The Institute was founded by journalist Miguel do Rosário, who presides over it and signs the editorial line. He is also the journal Logis’s responsible editor.' },
        { t: 'What we do', x: 'Applied studies and research on logistics corridors, border control, reverse logistics and circular economy; regulatory observation; and open-access scholarly publishing.' },
        { t: 'Structure', x: 'The LOGIS portal (trilingual knowledge PT·EN·ES), the quarterly journal Logis (diamond open access) and our own study program — currently focused on the export corridors × logistics control dossier.' },
        { t: 'Why it exists', x: 'Because the opening of Brazil’s and South America’s new trade corridors demands a logistics-control program to match — and because this agenda needs an independent home of studies.' },
      ],
      nota: 'The Institute is in the process of formal incorporation. The founding statutes draft is published on this portal, under the Statutes submenu.',
      cta: { label: 'Read the Statutes', slug: 'estatuto' },
    },
    es: {
      hero: {
        kicker: 'Quiénes Somos',
        title: 'Instituto de Logística y Sostenibilidad',
        sub: 'Entidad civil sin fines de lucro dedicada a producir y difundir conocimiento sobre logística, sostenibilidad y seguridad pública — editora del portal LOGIS y de la revista Logis.',
      },
      blocos: [
        { t: 'Fundador y presidente', x: 'El Instituto fue fundado por el periodista Miguel do Rosário, quien lo preside y firma la línea editorial. Es también el editor responsable de la revista Logis.' },
        { t: 'Qué hacemos', x: 'Estudios e investigaciones aplicadas sobre corredores logísticos, control de fronteras, logística inversa y economía circular; observación regulatoria; y publicación científica en acceso abierto.' },
        { t: 'Estructura', x: 'Portal LOGIS (conocimiento trilingüe PT·EN·ES), revista trimestral Logis (acceso abierto diamante) y programa propio de estudios — hoy centrado en el dosier corredores de escoamiento × control logístico.' },
        { t: 'Por qué existe', x: 'Porque la apertura de los nuevos canales de escoamiento de Brasil y de Sudamérica exige un programa de control logístico a la altura — y porque esta agenda necesita una casa independiente de estudios.' },
      ],
      nota: 'El Instituto está en proceso de constitución formal. La minuta de los estatutos fundadores está publicada en este portal, en el submenú Estatutos.',
      cta: { label: 'Leer los Estatutos', slug: 'estatuto' },
    },
  },

  linhaeditorial: {
    pt: {
      hero: {
        kicker: 'Linha Editorial',
        title: 'Nossa linha editorial',
        sub: 'Os princípios que guiam tudo o que o Instituto publica — no portal LOGIS e na revista Logis.',
      },
      blocos: [
        { t: 'Abertura com controle', x: 'Desenvolvimento logístico e segurança pública caminham juntos: nenhum corredor novo é analisado sem a pergunta de quem vigia a porta que ele abre.' },
        { t: 'Sustentabilidade não é anexo', x: 'Economia circular, logística reversa e baixo carbono são centro da análise de logística — não capítulo final.' },
        { t: 'Ciência aberta', x: 'Tudo em acesso aberto diamante: grátis para ler, grátis para publicar. Trilíngue por princípio — PT·EN·ES.' },
        { t: 'Dado com fonte', x: 'Todo número tem origem citada; todo dado fictício ou demonstrativo está explicitamente marcado como tal.' },
        { t: 'Independência', x: 'Nenhum financiamento que condicione conclusões. Erros são corrigidos publicamente.' },
        { t: 'A segurança pública é pauta logística', x: 'Contrabando, pirataria e fluxos ilegais são tratados como problemas de cadeia logística — com solução de tecnologia, regulação e Estado.' },
      ],
    },
    en: {
      hero: {
        kicker: 'Editorial Line',
        title: 'Our editorial line',
        sub: 'The principles that guide everything the Institute publishes — on the LOGIS portal and in the Logis journal.',
      },
      blocos: [
        { t: 'Openness with control', x: 'Logistics development and public security go together: no new corridor is analyzed without asking who watches the door it opens.' },
        { t: 'Sustainability is not an annex', x: 'Circular economy, reverse logistics and low carbon sit at the center of logistics analysis — not in a final chapter.' },
        { t: 'Open science', x: 'Everything in diamond open access: free to read, free to publish. Trilingual by principle — PT·EN·ES.' },
        { t: 'Data with a source', x: 'Every number has a cited origin; every fictional or demo item is explicitly marked as such.' },
        { t: 'Independence', x: 'No funding that conditions conclusions. Errors are publicly corrected.' },
        { t: 'Public security is a logistics agenda', x: 'Smuggling, piracy and illegal flows are treated as supply-chain problems — with technology, regulation and state capacity.' },
      ],
    },
    es: {
      hero: {
        kicker: 'Línea Editorial',
        title: 'Nuestra línea editorial',
        sub: 'Los principios que guían todo lo que publica el Instituto — en el portal LOGIS y en la revista Logis.',
      },
      blocos: [
        { t: 'Apertura con control', x: 'El desarrollo logístico y la seguridad pública van juntos: ningún corredor nuevo se analiza sin preguntar quién vigila la puerta que abre.' },
        { t: 'La sostenibilidad no es anexo', x: 'Economía circular, logística inversa y bajo carbono son el centro del análisis logístico — no el capítulo final.' },
        { t: 'Ciencia abierta', x: 'Todo en acceso abierto diamante: gratis para leer, gratis para publicar. Trilingüe por principio — PT·EN·ES.' },
        { t: 'Dato con fuente', x: 'Todo número tiene origen citado; todo dato ficticio o demostrativo está explícitamente marcado como tal.' },
        { t: 'Independencia', x: 'Ningún financiamiento que condicione conclusiones. Los errores se corrigen públicamente.' },
        { t: 'La seguridad pública es agenda logística', x: 'Contrabando, piratería y flujos ilegales se tratan como problemas de cadena logística — con tecnología, regulación y Estado.' },
      ],
    },
  },

  estatuto: {
    pt: {
      hero: {
        kicker: 'Documento fundador',
        title: 'Estatuto do Instituto de Logística e Sustentabilidade',
        sub: 'Minuta fundadora, publicada em 22 de agosto de 2026. O Instituto está em processo de constituição formal; os dados do registro serão complementados nesta página.',
      },
      capitulos: [
        {
          cap: 'Capítulo I — Da Denominação, Sede, Foro e Prazo',
          arts: [
            { n: 'Art. 1º', x: 'O Instituto de Logística e Sustentabilidade — ILS é uma associação civil, sem fins lucrativos, com atuação nos campos da pesquisa, do estudo e da difusão de conhecimento em logística e sustentabilidade, regida por este estatuto e pela legislação brasileira vigente.' },
            { n: 'Art. 2º', x: 'O Instituto tem sede e foro na cidade de Niterói, Estado do Rio de Janeiro, com prazo de duração indeterminado, e atuação em todo o território nacional.' },
          ],
        },
        {
          cap: 'Capítulo II — Dos Fins',
          arts: [
            { n: 'Art. 3º', x: 'São fins do Instituto: (I) promover estudos e pesquisas sobre logística, infraestrutura, sustentabilidade, economia circular e segurança pública; (II) analisar corredores logísticos nacionais e internacionais e suas implicações de controle e fiscalização; (III) editar e publicar a revista científica Logis e manter o portal LOGIS; (IV) fomentar o debate público e a formulação de políticas públicas em suas áreas; (V) celebrar convênios, parcerias e receber doações, subvenções e financiamentos nacionais e internacionais, vedada qualquer finalidade lucrativa.' },
            { n: 'Art. 4º', x: 'O Instituto não distribui lucros, bonificações ou vantagens a dirigentes, associados ou terceiros, aplicando integralmente seus recursos no desenvolvimento de suas finalidades estatutárias.' },
          ],
        },
        {
          cap: 'Capítulo III — Do Patrimônio e das Receitas',
          arts: [
            { n: 'Art. 5º', x: 'Constituem receitas do Instituto: as contribuições de associados; doações, legados e subvenções; rendas de projetos, cursos e publicações; e rendimentos de patrimônio próprio.' },
            { n: 'Art. 6º', x: 'A escrituração contábil observará os princípios fundamentais de contabilidade e as normas aplicáveis a entidades do terceiro setor, com prestação de contas anual à Assembleia Geral.' },
          ],
        },
        {
          cap: 'Capítulo IV — Dos Associados',
          arts: [
            { n: 'Art. 7º', x: 'O Instituto admite associados fundadores, efetivos e colaboradores, sem distinção de nacionalidade, sexo, raça, religião ou convicção política, vedadas condições de admissão que violem a lei.' },
            { n: 'Art. 8º', x: 'São direitos dos associados em pleno gozo estatutário: participar das assembleias com voz e voto, eleger e ser eleito, e requerer, na forma da lei, a dissolução da associação.' },
            { n: 'Art. 9º', x: 'São deveres dos associados: cumprir o estatuto, zelar pelo nome do Instituto e contribuir, conforme o caso, com as receitas definidas em assembleia.' },
          ],
        },
        {
          cap: 'Capítulo V — Da Administração',
          arts: [
            { n: 'Art. 10', x: 'O Instituto é administrado por uma Diretoria composta de Presidente, Vice-Presidente, Secretário e Tesoureiro, eleita pela Assembleia Geral para mandato de três anos, permitida uma recondução.' },
            { n: 'Art. 11', x: 'Compete à Presidência: representar o Instituto ativa e passivamente; definir, com a Diretoria, o plano anual de atividades; e assinar, com o Tesoureiro, os atos que obriguem o patrimônio.' },
            { n: 'Art. 12', x: 'Haverá um Conselho Fiscal de três membros titulares, com mandato de três anos, incumbido de opinar sobre as contas e o orçamento anuais.' },
            { n: 'Art. 13', x: 'O exercício dos cargos é gratuito, sendo permitido o ressarcimento de despesas comprovadas realizadas em nome do Instituto.' },
          ],
        },
        {
          cap: 'Capítulo VI — Da Assembleia Geral',
          arts: [
            { n: 'Art. 14', x: 'A Assembleia Geral, órgão soberano da associação, instala-se em primeira convocação com a maioria dos associados e em segunda com qualquer número, deliberando por maioria simples de votos, salvo os quóruns legais para alteração estatutária e destituição de dirigentes.' },
          ],
        },
        {
          cap: 'Capítulo VII — Das Disposições Gerais',
          arts: [
            { n: 'Art. 15', x: 'Este estatuto só pode ser alterado por deliberação de Assembleia Geral especificamente convocada, na forma da lei.' },
            { n: 'Art. 16', x: 'Em caso de dissolução, o patrimônio líquido do Instituto será destinado a entidade pública ou privada sem fins lucrativos com fins congêneres, vedada qualquer partilha entre associados.' },
            { n: 'Art. 17', x: 'Os casos omissos serão resolvidos pela Assembleia Geral, com base na legislação civil brasileira.' },
          ],
        },
        {
          cap: 'Capítulo VIII — Das Disposições Transitórias',
          arts: [
            { n: 'Art. 18', x: 'Fica eleita a primeira Diretoria, com mandato até a realização da primeira Assembleia Geral Ordinária subsequente ao registro do Instituto, assim composta: Presidente — jornalista Miguel do Rosário; os demais cargos serão definidos na Assembleia de Fundação.' },
            { n: 'Art. 19', x: 'Este estatuto entra em vigor na data de seu registro no competente Cartório de Registro Civil das Pessoas Jurídicas.' },
          ],
        },
      ],
    },
    en: {
      hero: {
        kicker: 'Founding document',
        title: 'Statutes of the Institute of Logistics and Sustainability',
        sub: 'Founding draft, published on August 22, 2026. The Institute is in the process of formal incorporation; registration details will be added to this page. The binding text is the Portuguese version.',
      },
      capitulos: [
        { cap: 'Chapter I — Name, Seat and Term', arts: [ { n: 'Art. 1', x: 'The Institute of Logistics and Sustainability (ILS) is a civil non-profit association for research, study and knowledge dissemination in logistics and sustainability.' }, { n: 'Art. 2', x: 'Seat and forum in the city of Niterói, State of Rio de Janeiro, Brazil; indefinite term, nationwide scope.' } ] },
        { cap: 'Chapter II — Purposes', arts: [ { n: 'Art. 3', x: 'Purposes: studies and research on logistics, infrastructure, sustainability, circular economy and public security; analysis of logistics corridors and their control implications; publishing the Logis journal and the LOGIS portal; public debate and policy; and receiving donations, grants and partnerships, with no profit purpose.' }, { n: 'Art. 4', x: 'No profits, bonuses or advantages are distributed to officers, members or third parties; all resources fund the statutory purposes.' } ] },
        { cap: 'Chapter III — Assets and Revenue', arts: [ { n: 'Art. 5', x: 'Revenue: member contributions; donations, legacies and grants; project, course and publication income; and returns on own assets.' }, { n: 'Art. 6', x: 'Accounting follows Brazilian third-sector standards, with annual accountability to the General Assembly.' } ] },
        { cap: 'Chapter IV — Members', arts: [ { n: 'Art. 7', x: 'Founding, full and collaborating members are admitted, with no discrimination.' }, { n: 'Art. 8', x: 'Rights: to take part and vote in assemblies, to elect and be elected, under the statute and the law.' }, { n: 'Art. 9', x: 'Duties: to comply with the statute, safeguard the Institute’s name and contribute as set by the assembly.' } ] },
        { cap: 'Chapter V — Governance', arts: [ { n: 'Art. 10', x: 'Governed by a Board (President, Vice-President, Secretary, Treasurer) elected for a three-year term, one re-election allowed.' }, { n: 'Art. 11', x: 'The President represents the Institute, leads the annual plan and co-signs acts binding its assets.' }, { n: 'Art. 12', x: 'A three-member Fiscal Council reviews the annual accounts and budget.' }, { n: 'Art. 13', x: 'Offices are unpaid; verified expenses may be reimbursed.' } ] },
        { cap: 'Chapter VI — General Assembly', arts: [ { n: 'Art. 14', x: 'The General Assembly is the sovereign body, deciding by simple majority, subject to legal quorums for statute amendments.' } ] },
        { cap: 'Chapter VII — General Provisions', arts: [ { n: 'Art. 15', x: 'Amendments require a specially convened General Assembly.' }, { n: 'Art. 16', x: 'Upon dissolution, net assets go to a public or non-profit entity with similar purposes; no distribution among members.' }, { n: 'Art. 17', x: 'Omitted cases are resolved by the General Assembly under Brazilian civil law.' } ] },
        { cap: 'Chapter VIII — Transitional Provisions', arts: [ { n: 'Art. 18', x: 'First Board elected: President — journalist Miguel do Rosário; other offices to be set by the Founding Assembly.' }, { n: 'Art. 19', x: 'These statutes take effect upon registration with the competent Civil Registry of Legal Entities.' } ] },
      ],
    },
    es: {
      hero: {
        kicker: 'Documento fundador',
        title: 'Estatutos del Instituto de Logística y Sostenibilidad',
        sub: 'Minuta fundadora, publicada el 22 de agosto de 2026. El Instituto está en proceso de constitución formal; los datos del registro se completarán en esta página. El texto vinculante es la versión en portugués.',
      },
      capitulos: [
        { cap: 'Capítulo I — Denominación, Sede y Plazo', arts: [ { n: 'Art. 1º', x: 'El Instituto de Logística y Sostenibilidad (ILS) es una asociación civil sin fines de lucro dedicada a la investigación, el estudio y la difusión de conocimiento en logística y sostenibilidad.' }, { n: 'Art. 2º', x: 'Sede y foro en la ciudad de Niterói, Estado de Río de Janeiro, Brasil; plazo indeterminado, ámbito de actuación nacional.' } ] },
        { cap: 'Capítulo II — De los Fines', arts: [ { n: 'Art. 3º', x: 'Fines: estudios e investigaciones sobre logística, infraestructura, sostenibilidad, economía circular y seguridad pública; análisis de corredores logísticos y sus implicaciones de control; edición de la revista Logis y del portal LOGIS; debate público y políticas; y recepción de donaciones, subvenciones y convenios, sin fin lucrativo.' }, { n: 'Art. 4º', x: 'No se distribuyen lucros ni ventajas a dirigentes, asociados o terceros; todos los recursos se aplican a los fines estatutarios.' } ] },
        { cap: 'Capítulo III — Patrimonio y Recursos', arts: [ { n: 'Art. 5º', x: 'Recursos: contribuciones de asociados; donaciones, legados y subvenciones; ingresos de proyectos, cursos y publicaciones; y rendimientos del patrimonio propio.' }, { n: 'Art. 6º', x: 'La contabilidad sigue las normas brasileñas del tercer sector, con rendición anual de cuentas a la Asamblea General.' } ] },
        { cap: 'Capítulo IV — De los Asociados', arts: [ { n: 'Art. 7º', x: 'Se admiten asociados fundadores, efectivos y colaboradores, sin distinción.' }, { n: 'Art. 8º', x: 'Derechos: participar y votar en las asambleas, elegir y ser elegido, conforme al estatuto y la ley.' }, { n: 'Art. 9º', x: 'Deberes: cumplir el estatuto, cuidar el nombre del Instituto y contribuir según lo defina la asamblea.' } ] },
        { cap: 'Capítulo V — De la Administración', arts: [ { n: 'Art. 10', x: 'Administrado por una Directiva (Presidente, Vicepresidente, Secretario y Tesorero) elegida por tres años, con una reelección permitida.' }, { n: 'Art. 11', x: 'El Presidente representa al Instituto, conduce el plan anual y firma junto al Tesorero los actos que obliguen al patrimonio.' }, { n: 'Art. 12', x: 'Un Consejo Fiscal de tres miembros revisa las cuentas y el presupuesto anuales.' }, { n: 'Art. 13', x: 'Los cargos no son remunerados; se reembolsan gastos comprobados.' } ] },
        { cap: 'Capítulo VI — De la Asamblea General', arts: [ { n: 'Art. 14', x: 'La Asamblea General es el órgano soberano, decidiendo por mayoría simple, salvo quórums legales para reformas estatutarias.' } ] },
        { cap: 'Capítulo VII — Disposiciones Generales', arts: [ { n: 'Art. 15', x: 'Las reformas exigen Asamblea General específicamente convocada.' }, { n: 'Art. 16', x: 'En caso de disolución, el patrimonio líquido se destina a entidad pública o sin fines de lucro con fines congéneres; sin reparto entre asociados.' }, { n: 'Art. 17', x: 'Los casos omisos los resuelve la Asamblea General según la ley civil brasileña.' } ] },
        { cap: 'Capítulo VIII — Disposiciones Transitorias', arts: [ { n: 'Art. 18', x: 'Primera Directiva electa: Presidente — periodista Miguel do Rosário; demás cargos definidos en la Asamblea Fundadora.' }, { n: 'Art. 19', x: 'Estos estatutos entran en vigor con su registro en el Registro Civil de Personas Jurídicas competente.' } ] },
      ],
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
        { t: 'Edições', x: 'A edição nº 1 está prevista para o 4º trimestre de 2026, com dossiê sobre corredores de escoamento e controle logístico — Chancay, a ferrovia bioceânica e o desafio das fronteiras abertas. Cada edição reúne artigos revisados por pares, estudos de caso e o observatório regulatório do trimestre.' },
        { t: 'Submissões', x: 'A chamada de trabalhos será publicada no portal. Pesquisadores, profissionais e centros de pesquisa poderão submeter artigos completos (6.000–10.000 palavras), estudos de caso (4.000–6.000) e notas de dados (2.000–4.000), em português, inglês ou espanhol.' },
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
        { t: 'Issues', x: 'Issue #1 is planned for Q4 2026, with a dossier on export corridors and logistics control — Chancay, the bioceanic railway and the challenge of open borders. Each issue brings together peer-reviewed articles, case studies and the quarter’s regulatory observatory.' },
        { t: 'Submissions', x: 'The call for papers will be published on the portal. Researchers, practitioners and research centers may submit full articles (6,000–10,000 words), case studies (4,000–6,000) and data notes (2,000–4,000), in Portuguese, English or Spanish.' },
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
        { t: 'Ediciones', x: 'La edición nº 1 está prevista para el 4º trimestre de 2026, con un dossier sobre corredores de escoamiento y control logístico — Chancay, el ferrocarril bioceánico y el desafío de las fronteras abiertas. Cada edición reúne artículos revisados por pares, estudios de caso y el observatorio regulatorio del trimestre.' },
        { t: 'Envíos', x: 'La convocatoria de trabajos será publicada en el portal. Investigadores, profesionales y centros de investigación podrán enviar artículos completos (6.000–10.000 palabras), estudios de caso (4.000–6.000) y notas de datos (2.000–4.000), en portugués, inglés o español.' },
        { t: 'Indexación', x: 'Nacer indexable: DOAJ, Latindex, Redalyc y SciELO como metas de corto plazo; TRID y OpenAlex como espejos de metadatos.' },
      ],
      nota: 'Edición nº 1 prevista para el 4º trimestre de 2026. Convocatoria de trabajos en preparación — siga el portal.',
    },
  },

  seguranca: {
    pt: {
      hero: {
        kicker: 'Um dos centros do portal',
        title: 'Segurança pública & controle logístico',
        sub: 'Cada novo corredor de escoamento é também uma nova porta. Abrir sem controlar é abrir caminho para o contrabando, a pirataria, as drogas e as armas.',
      },
      kpis: [
        { v: 'R$ 500 bi', l: 'mercado ilegal no Brasil em 2025', fonte: 'O Globo' },
        { v: 'Valor mínimo', l: 'custo do selo eletrônico fiscal por unidade', fonte: 'Projeto Básico MoedaLog' },
        { v: '10', l: 'níveis de segurança do selo RFID/NFC', fonte: 'Projeto Básico MoedaLog' },
      ],
      blocos: [
        { t: 'A tese: abertura sem controle é convite ao crime', x: 'O Plano Nacional de Logística, o Porto de Chancay e a ferrovia transoceânica (bioceânica) criam rotas inéditas de desenvolvimento — e também de fluxo ilegal. Sem um programa de controle logístico de Estado, os novos canais ampliam a entrada de produtos pirateados, contrabando, drogas e armas. A abertura precisa vir acompanhada do controle.' },
        { t: 'Fronteiras na agenda de 2026', x: 'O controle das fronteiras é consenso entre os principais candidatos (GloboNews — propostas enviadas ao TSE). A proposta do presidente Lula: Forças Armadas nas fronteiras amazônicas com patrulhamento fluvial e aéreo; cooperação com os países da OTCA; e investimento em radares, drones, sensores, imagens de satélite e centros integrados de comando e controle. É exatamente nesse comando e controle que entra o rastreamento logístico de cargas e contêineres.' },
        { t: 'Como o mundo controla', x: 'Os grandes blocos certificam operadores e rastreiam cargas — C-TPAT nos EUA, AEO+ICS2 na União Europeia, NEEC no México, OEA na Colômbia, STP em Singapura, AEO no Japão — todos sob o guarda-chuva do Framework SAFE da OMA. O Brasil tem a oportunidade de dar o passo seguinte: controle por item, com tecnologia embarcada na própria mercadoria.' },
        { t: 'A resposta tecnológica brasileira', x: 'O selo eletrônico fiscal (MoedaLog/e-SFI): chip passivo RFID/NFC com 10 níveis de segurança e custo mínimo por unidade, ancorado em ICP-Brasil, blockchain e eFuse de uso único — rastreabilidade da origem ao destino, alerta automático de violação (caso PRF) e integração com fronteiras, Mercosul e Chancay.' },
      ],
      programas: [
        { pais: 'Mundo (OMA/WCO)', prog: 'Framework SAFE', como: 'Padrão global de operador econômico autorizado e segurança da cadeia, adotado por mais de 100 aduanas', url: 'https://www.wcoomd.org/' },
        { pais: 'Estados Unidos', prog: 'C-TPAT', como: 'Parceria alfândega–empresa: carga certificada, inspeções reduzidas e critérios mínimos de segurança', url: 'https://www.cbp.gov/border-security/ports-entry/cargo-security/ctpat' },
        { pais: 'União Europeia', prog: 'AEO + ICS2', como: 'Operador econômico autorizado + dados prévios de carga antes da chegada ao bloco', url: 'https://taxation-customs.ec.europa.eu/index_en' },
        { pais: 'México', prog: 'NEEC', como: 'Novo Esquema de Empresas Certificadas, em alinhamento com o C-TPAT dos EUA', url: 'https://www.sat.gob.mx/portal/public/tramites/aduanas/nuevo-esquema-de-empresas-certificadas-neec' },
        { pais: 'Colômbia', prog: 'OEA (DIAN)', como: 'Operador Econômico Autorizado com benefícios de facilitação do comércio', url: 'https://www.dian.gov.co/aduanas/oea/Paginas/default.aspx' },
        { pais: 'Singapura', prog: 'Secure Trade Partnership', como: 'Certificação de segurança da cadeia logística portuária e aérea', url: 'https://www.customs.gov.sg/' },
        { pais: 'Japão', prog: 'AEO Japão', como: 'Certificação de operadores conforme o padrão SAFE da OMA', url: 'https://www.customs.go.jp/english/' },
      ],
      nota: 'Agenda eleitoral: GloboNews — “Propostas para as fronteiras”, propostas enviadas ao TSE (eleições de 2026). Programas internacionais verificados por HTTP em 22/08/2026.',
      cta: { label: 'Conhecer o MoedaLog na seção Ideias', slug: 'ideias' },
    },
    en: {
      hero: {
        kicker: 'One of the cores of the portal',
        title: 'Public security & logistics control',
        sub: 'Every new export corridor is also a new door. Opening it without control opens the way to smuggling, piracy, drugs and weapons.',
      },
      kpis: [
        { v: 'BRL 500 bn', l: 'illegal market in Brazil in 2025', fonte: 'O Globo' },
        { v: 'Minimum value', l: 'cost per unit of the electronic fiscal seal', fonte: 'MoedaLog basic project' },
        { v: '10', l: 'security levels of the RFID/NFC seal', fonte: 'MoedaLog basic project' },
      ],
      blocos: [
        { t: 'The thesis: opening without control invites crime', x: 'The National Logistics Plan, the Port of Chancay and the transoceanic (bioceanic) railway create unprecedented routes for development — and for illegal flows as well. Without a state logistics-control program, the new corridors widen the entry of pirated goods, smuggling, drugs and weapons. Opening must come together with control.' },
        { t: 'Borders on the 2026 agenda', x: 'Border control is a consensus among the leading candidates (GloboNews — proposals filed with the TSE). President Lula’s proposal: Armed Forces on the Amazonian borders with river and air patrols; cooperation with OTCA countries; and investment in radars, drones, sensors, satellite imagery and integrated command-and-control centers. That command and control is exactly where cargo and container tracking comes in.' },
        { t: 'How the world controls', x: 'Major blocs certify operators and track cargo — C-TPAT in the US, AEO+ICS2 in the European Union, NEEC in Mexico, OEA in Colombia, STP in Singapore, AEO in Japan — all under the WCO SAFE Framework umbrella. Brazil has the opportunity to take the next step: item-level control, with technology embedded in the goods themselves.' },
        { t: 'The Brazilian technological answer', x: 'The electronic fiscal seal (MoedaLog/e-SFI): a passive RFID/NFC chip with 10 security levels and minimum unit cost, anchored in ICP-Brasil, blockchain and single-use eFuse — traceability from origin to destination, automatic tamper alerts (PRF case) and integration with borders, Mercosur and Chancay.' },
      ],
      programas: [
        { pais: 'World (WCO)', prog: 'SAFE Framework', como: 'Global standard for authorized economic operators and supply-chain security, adopted by 100+ customs administrations', url: 'https://www.wcoomd.org/' },
        { pais: 'United States', prog: 'C-TPAT', como: 'Customs–trade partnership: certified cargo, reduced inspections and minimum security criteria', url: 'https://www.cbp.gov/border-security/ports-entry/cargo-security/ctpat' },
        { pais: 'European Union', prog: 'AEO + ICS2', como: 'Authorized economic operator + advance cargo data before arrival in the bloc', url: 'https://taxation-customs.ec.europa.eu/index_en' },
        { pais: 'Mexico', prog: 'NEEC', como: 'New Scheme of Certified Companies, aligned with US C-TPAT', url: 'https://www.sat.gob.mx/portal/public/tramites/aduanas/nuevo-esquema-de-empresas-certificadas-neec' },
        { pais: 'Colombia', prog: 'OEA (DIAN)', como: 'Authorized economic operator with trade-facilitation benefits', url: 'https://www.dian.gov.co/aduanas/oea/Paginas/default.aspx' },
        { pais: 'Singapore', prog: 'Secure Trade Partnership', como: 'Security certification for the port and air logistics chain', url: 'https://www.customs.gov.sg/' },
        { pais: 'Japan', prog: 'AEO Japan', como: 'Operator certification under the WCO SAFE standard', url: 'https://www.customs.go.jp/english/' },
      ],
      nota: 'Electoral agenda: GloboNews — “Proposals for the borders”, proposals filed with the TSE (2026 elections). International programs verified over HTTP on 22/08/2026.',
      cta: { label: 'See MoedaLog in the Ideas section', slug: 'ideias' },
    },
    es: {
      hero: {
        kicker: 'Uno de los centros del portal',
        title: 'Seguridad pública y control logístico',
        sub: 'Cada nuevo corredor de escoamiento es también una nueva puerta. Abrir sin controlar es abrir camino al contrabando, la piratería, las drogas y las armas.',
      },
      kpis: [
        { v: 'R$ 500 mil M', l: 'mercado ilegal en Brasil en 2025', fonte: 'O Globo' },
        { v: 'Valor mínimo', l: 'costo del sello electrónico fiscal por unidad', fonte: 'Proyecto básico MoedaLog' },
        { v: '10', l: 'niveles de seguridad del sello RFID/NFC', fonte: 'Proyecto básico MoedaLog' },
      ],
      blocos: [
        { t: 'La tesis: apertura sin control es invitación al crimen', x: 'El Plan Nacional de Logística, el Puerto de Chancay y el ferrocarril transoceánico (bioceánico) crean rutas inéditas de desarrollo — y también de flujo ilegal. Sin un programa estatal de control logístico, los nuevos canales amplían la entrada de productos pirateados, contrabando, drogas y armas. La apertura debe venir acompañada del control.' },
        { t: 'Fronteras en la agenda de 2026', x: 'El control de fronteras es consenso entre los principales candidatos (GloboNews — propuestas enviadas al TSE). La propuesta del presidente Lula: Fuerzas Armadas en las fronteras amazónicas con patrullaje fluvial y aéreo; cooperación con los países de la OTCA; e inversión en radares, drones, sensores, imágenes satelitales y centros integrados de comando y control. Es exactamente en ese comando y control donde entra el rastreo logístico de cargas y contenedores.' },
        { t: 'Cómo controla el mundo', x: 'Los grandes bloques certifican operadores y rastrean cargas — C-TPAT en EE. UU., AEO+ICS2 en la Unión Europea, NEEC en México, OEA en Colombia, STP en Singapur, AEO en Japón — todos bajo el paraguas del Marco SAFE de la OMA. Brasil tiene la oportunidad de dar el siguiente paso: control por ítem, con tecnología embebida en la propia mercancía.' },
        { t: 'La respuesta tecnológica brasileña', x: 'El sello electrónico fiscal (MoedaLog/e-SFI): chip pasivo RFID/NFC con 10 niveles de seguridad y costo mínimo por unidad, anclado en ICP-Brasil, blockchain y eFuse de uso único — rastreabilidad del origen al destino, alerta automática de violación (caso PRF) e integración con fronteras, Mercosur y Chancay.' },
      ],
      programas: [
        { pais: 'Mundo (OMA)', prog: 'Marco SAFE', como: 'Estándar global de operador económico autorizado y seguridad de la cadena, adoptado por más de 100 aduanas', url: 'https://www.wcoomd.org/' },
        { pais: 'Estados Unidos', prog: 'C-TPAT', como: 'Alianza aduana–empresa: carga certificada, inspecciones reducidas y criterios mínimos de seguridad', url: 'https://www.cbp.gov/border-security/ports-entry/cargo-security/ctpat' },
        { pais: 'Unión Europea', prog: 'AEO + ICS2', como: 'Operador económico autorizado + datos previos de carga antes de la llegada al bloque', url: 'https://taxation-customs.ec.europa.eu/index_en' },
        { pais: 'México', prog: 'NEEC', como: 'Nuevo Esquema de Empresas Certificadas, alineado con el C-TPAT de EE. UU.', url: 'https://www.sat.gob.mx/portal/public/tramites/aduanas/nuevo-esquema-de-empresas-certificadas-neec' },
        { pais: 'Colombia', prog: 'OEA (DIAN)', como: 'Operador Económico Autorizado con beneficios de facilitación del comercio', url: 'https://www.dian.gov.co/aduanas/oea/Paginas/default.aspx' },
        { pais: 'Singapur', prog: 'Secure Trade Partnership', como: 'Certificación de seguridad de la cadena logística portuaria y aérea', url: 'https://www.customs.gov.sg/' },
        { pais: 'Japón', prog: 'AEO Japón', como: 'Certificación de operadores conforme al estándar SAFE de la OMA', url: 'https://www.customs.go.jp/english/' },
      ],
      nota: 'Agenda electoral: GloboNews — “Propuestas para las fronteras”, propuestas enviadas al TSE (elecciones de 2026). Programas internacionales verificados por HTTP el 22/08/2026.',
      cta: { label: 'Conocer MoedaLog en la sección Ideas', slug: 'ideias' },
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
        title: 'LOGIS',
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
        title: 'LOGIS',
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
        title: 'LOGIS',
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
