// Artigos científicos da Revista Logis — seção «Artigos Científicos» do portal
// (ordem Miguel 09/09/2026: o artigo do Controle Logístico Nacional, publicado no site
// antigo controlelogistico.vercel.app, é o 1º artigo científico da revista).
// Regra da revista: acesso aberto diamante — nada fictício, metadados do próprio PDF.
export interface ArtigoCientifico {
  numero: number;
  pdf: string;            // arquivo em public/downloads/
  titulo: Record<string, string>;
  resumo: Record<string, string>;
  autor: string;
  data: string;           // data da versão publicada
  idiomas: string;        // idiomas do documento
  paginas: number;
  palavrasChave: Record<string, string>;
}

export const ARTIGOS_CIENTIFICOS: ArtigoCientifico[] = [
  {
    numero: 1,
    pdf: '/downloads/artigo-01-controle-logistico-nacional-pt-en.pdf',
    titulo: {
      pt: 'Controle Logístico Nacional: a Casa da Moeda do Brasil como âncora pública de confiança para a circulação de mercadorias',
      en: 'National Logistics Control: the Brazilian Mint as the public trust anchor for the circulation of goods',
      es: 'Control Logístico Nacional: la Casa de la Moneda de Brasil como ancla pública de confianza para la circulación de mercancías',
    },
    resumo: {
      pt: 'O artigo apresenta e fundamenta o conceito de Controle Logístico Nacional: a capacidade estatal de identificar, autenticar e acompanhar, de forma contínua, tudo o que entra, circula e sai do território nacional. A proposta é ancorada na Casa da Moeda do Brasil — estatal com mais de três séculos na produção dos instrumentos de autenticidade do Estado — como emissora das identidades físico-digitais de produtos, cargas e lacres eletrônicos, em esquema aberto e multifornecedor. A metodologia é pesquisa documental comparativa sobre 23 países e 40 operadores de certificação; os resultados mostram que a maioria dos países que implantou controle logístico o fez por operadores estatais ou híbridos, com ganhos mensuráveis de arrecadação, tempo de trânsito e redução de desvios. O artigo quantifica a oportunidade — R$ 500 bilhões anuais de mercado exposto à informalidade — e apresenta cronograma de implantação em cinco fases.',
      en: 'The paper presents and grounds the concept of National Logistics Control: the state capacity to continuously identify, authenticate and track everything that enters, circulates through and leaves the national territory. The proposal is anchored in the Brazilian Mint — a state company with more than three centuries producing Brazil’s instruments of authenticity — as the issuer of phygital identities for products, cargoes and electronic seals, in an open, multi-vendor scheme. The methodology is comparative documentary research on 23 countries and 40 certification operators; results show that most countries that deployed logistics control did so through state or hybrid operators, with measurable gains in revenue, transit time and deviation reduction. The paper quantifies the opportunity — BRL 500 billion a year of market exposed to informality — and lays out a five-phase implementation timeline.',
      es: 'El artículo presenta y fundamenta el concepto de Control Logístico Nacional: la capacidad estatal de identificar, autenticar y acompañar, de forma continua, todo lo que entra, circula y sale del territorio nacional. La propuesta se ancla en la Casa de la Moneda de Brasil — empresa estatal con más de tres siglos produciendo los instrumentos de autenticidad del Estado — como emisora de las identidades físico-digitales de productos, cargas y precintos electrónicos, en un esquema abierto y multiproveedor. La metodología es una investigación documental comparativa sobre 23 países y 40 operadores de certificación; los resultados muestran que la mayoría de los países que implantó control logístico lo hizo mediante operadores estatales o híbridos, con ganancias medibles de recaudación, tiempo de tránsito y reducción de desvíos. El artículo cuantifica la oportunidad — R$ 500 mil millones anuales de mercado expuesto a la informalidad — y presenta un cronograma de implantación en cinco fases.',
    },
    autor: 'Miguel do Rosário',
    data: 'Agosto de 2026',
    idiomas: 'PT · EN',
    paginas: 26,
    palavrasChave: {
      pt: 'controle logístico nacional · rastreabilidade · lacres eletrônicos · cadeia de custódia · Casa da Moeda do Brasil · reindustrialização',
      en: 'national logistics control · traceability · electronic seals · chain of custody · Brazilian Mint · reindustrialization',
      es: 'control logístico nacional · trazabilidad · precintos electrónicos · cadena de custodia · Casa de la Moneda de Brasil · reindustrialización',
    },
  },
];
