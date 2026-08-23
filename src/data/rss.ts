// Fontes RSS de portais de logística do mundo — URLs verificadas por HTTP em 22/08/2026.
// Próxima fase (ideia do Miguel): tradução automática dos feeds para a língua do usuário.
export interface FonteRSS { nome: string; pais: string; url: string; feed: string }

export const FONTES: FonteRSS[] = [
  { nome: 'FreightWaves', pais: 'EUA', url: 'https://www.freightwaves.com', feed: 'https://www.freightwaves.com/feed' },
  { nome: 'The Loadstar', pais: 'Reino Unido', url: 'https://theloadstar.com', feed: 'https://theloadstar.com/feed/' },
  { nome: 'Splash247', pais: 'Reino Unido', url: 'https://splash247.com', feed: 'https://splash247.com/feed/' },
  { nome: 'Supply Chain Dive', pais: 'EUA', url: 'https://www.supplychaindive.com', feed: 'https://www.supplychaindive.com/feeds/news/' },
  { nome: 'RailFreight.com', pais: 'Países Baixos', url: 'https://www.railfreight.com', feed: 'https://www.railfreight.com/feed/' },
  { nome: 'JOC.com (Journal of Commerce)', pais: 'EUA', url: 'https://www.joc.com', feed: 'https://www.joc.com/rss' },
  { nome: 'SupplyChainBrain', pais: 'EUA', url: 'https://www.supplychainbrain.com', feed: 'https://www.supplychainbrain.com/rss' },
  { nome: 'gCaptain', pais: 'EUA', url: 'https://www.gcaptain.com', feed: 'https://www.gcaptain.com/feed/' },
];
