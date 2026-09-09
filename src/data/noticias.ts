// Bloco "Últimas notícias" da capa — CURADORIA REAL com link para a fonte
// (ordem Miguel 28/08/2026: nada fictício; notícias reais de veículos do setor,
// em vários idiomas, títulos traduzidos PT·EN·ES; renovação semanal pelo ritual
// de sábado via WebSearch — nunca publicar sem fonte e data verdadeiras).
export interface Noticia {
  tema: 'corredores' | 'ferrovias' | 'portos' | 'verde';
  fonte: string;   // nome do veículo (mostra no kicker)
  data: string;    // data da publicação original
  url: string;     // link para a matéria original
  titulo: Record<string, string>;
}

export const NOTICIAS: Noticia[] = [
  // Renovação 09/09/2026 (ZCode, ordem Miguel): 2 notícias novas, fontes e datas verificadas por HTTP.
  {
    tema: 'portos',
    fonte: 'Portogente',
    data: 'set 2026',
    url: 'https://portogente.com.br/noticias/dia-a-dia/118082-acesso-ao-porto-de-santos-dragar-o-presente-ou-construir-o-futuro',
    titulo: {
      pt: 'Acesso ao Porto de Santos: dragar o presente ou construir o futuro?',
      en: 'Access to the Port of Santos: dredge the present or build the future?',
      es: 'Acceso al puerto de Santos: ¿dragar el presente o construir el futuro?',
    },
  },
  {
    tema: 'corredores',
    fonte: 'Gazeta do Povo',
    data: 'ago 2026',
    url: 'https://www.gazetadopovo.com.br/mundo/decisao-judicial-pressao-eua-colocam-berlinda-megaporto-chines-peru/',
    titulo: {
      pt: '“Dragão de Troia”: decisão judicial e pressão dos EUA colocam na berlinda megaporto chinês no Peru',
      en: '"Trojan Dragon": court ruling and US pressure put Peru\u2019s Chinese-built megaport on the spot',
      es: '"Dragón de Troya": fallo judicial y presión de EE. UU. ponen en la mira el megapuerto chino en Perú',
    },
  },
  {
    tema: 'corredores',
    fonte: 'East Asia Forum',
    data: 'fev 2026',
    url: 'https://eastasiaforum.org/2026/02/28/peru-bets-on-chancay-to-reshape-pacific-trade/',
    titulo: {
      pt: 'Por que o Peru aposta no Porto de Chancay para redesenhar o comércio do Pacífico',
      en: 'Why Peru bets on Chancay Port to reshape Pacific trade',
      es: 'Por qué el Perú apuesta por el puerto de Chancay para redibujar el comercio del Pacífico',
    },
  },
  {
    tema: 'ferrovias',
    fonte: 'China Daily',
    data: 'mai 2025',
    url: 'https://global.chinadaily.com.cn/a/202505/13/WS6822a969a310a04af22bef26.html',
    titulo: {
      pt: 'Brasil e China avançam no estudo da ferrovia que ligará o Atlântico ao Pacífico',
      en: 'Brazil and China advance the study of a railway linking the Atlantic to the Pacific',
      es: 'Brasil y China avanzan en el estudio del ferrocarril que unirá el Atlántico con el Pacífico',
    },
  },
  {
    tema: 'portos',
    fonte: 'Container Mag',
    data: 'jun 2026',
    url: 'https://container-mag.com/update/port-of-santos-sets-new-container-throughput-records-in-may--mqpeycui',
    titulo: {
      pt: 'Porto de Santos bate recorde histórico e passa de 500 mil contêineres em um mês',
      en: 'Port of Santos breaks record with over 500,000 containers in a single month',
      es: 'El puerto de Santos bate el récord y supera los 500 mil contenedores en un mes',
    },
  },
  {
    tema: 'verde',
    fonte: 'Ship & Bunker',
    data: '2026',
    url: 'https://shipandbunker.com/news/world/689633-feature-supply-engines-and-regulation-align-as-ethanol-bunkers-turn-commercial-in-2026',
    titulo: {
      pt: 'Carteira global de navios já representa 4,4 milhões de toneladas de demanda por metanol',
      en: 'Global orderbook already represents 4.4 million tonnes of methanol demand',
      es: 'La cartera mundial de buques ya representa 4,4 millones de toneladas de demanda de metanol',
    },
  },
];
