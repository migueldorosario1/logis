// Camadas mundiais do LOGIS — rotas ESQUEMÁTICAS autoriais (ordem Miguel 22/08: internacionalizar os geomapas).
// Coordenadas aproximadas para visualização; não são traçados oficiais. Rotas transpacíficas usam
// longitude contínua (>180) para atravessar a linha de data sem quebrar a linha no MapLibre.

export type Cat = 'naval' | 'ferrovia' | 'aerea' | 'oleoduto' | 'fibra';

export interface WorldRoute {
  nome: string;
  cat: Cat;
  obs?: string; // ex.: 'projeto', 'via Suez'
  coords: [number, number][]; // [lng, lat]
}

export const CAT_STYLE: Record<Cat, { cor: string; dash?: number[]; label: { pt: string; en: string; es: string } }> = {
  naval: { cor: '#0E3A5D', label: { pt: 'Rotas navais', en: 'Shipping lanes', es: 'Rutas navales' } },
  ferrovia: { cor: '#B45309', label: { pt: 'Ferrovias', en: 'Railways', es: 'Ferrocarriles' } },
  aerea: { cor: '#7C4DBC', dash: [2, 2], label: { pt: 'Corredores aéreos', en: 'Air corridors', es: 'Corredores aéreos' } },
  oleoduto: { cor: '#B91C1C', label: { pt: 'Oleodutos & gasodutos', en: 'Oil & gas pipelines', es: 'Oleoductos y gasoductos' } },
  fibra: { cor: '#0F766E', dash: [3, 2], label: { pt: 'Fibras ópticas submarinas', en: 'Submarine fiber-optic cables', es: 'Fibras ópticas submarinas' } },
};

export const WORLD_ROUTES: WorldRoute[] = [
  // ————— ROTAS NAVAIS —————
  {
    nome: 'Ásia–Europa (via Suez)', cat: 'naval', obs: 'Malaca · Bab el-Mandeb · Gibraltar',
    coords: [[121.5, 31.2], [114.2, 22.3], [110, 14], [103.8, 1.3], [100.3, 3.5], [95, 6], [81, 6.9], [63, 10], [48, 12.7], [43.4, 12.6], [38, 20], [32.5, 29.9], [25, 33.5], [11, 37], [-5.4, 35.9], [-1, 48.5], [4.5, 51.9]],
  },
  {
    nome: 'Transpacífica (China–América do Norte)', cat: 'naval',
    coords: [[121.5, 31.2], [139.7, 35.4], [160, 38], [185, 42], [210, 44], [230, 41], [241.8, 33.7]],
  },
  {
    nome: 'China–Chancay (Pacífico Sul)', cat: 'naval', obs: 'novo corredor do Pacífico',
    coords: [[121.5, 31.2], [140, 20], [165, 5], [185, -8], [210, -20], [240, -18], [282.9, -11.5]],
  },
  {
    nome: 'Europa–América do Sul', cat: 'naval',
    coords: [[4.5, 51.9], [0, 49], [-8, 44], [-18, 32], [-26, 22], [-30, 10], [-35, -5], [-38.5, -12.9], [-46.3, -23.9]],
  },
  {
    nome: 'América do Norte–Europa (Atlântico Norte)', cat: 'naval',
    coords: [[-74, 40.7], [-55, 42], [-30, 47], [-5, 48.8], [4.5, 51.9]],
  },
  {
    nome: 'Rota do Cabo (Ásia–Europa sem Suez)', cat: 'naval', obs: 'Cabo da Boa Esperança',
    coords: [[103.8, 1.3], [90, -15], [70, -28], [40, -35], [18.5, -34.8], [-5, -32], [-20, -20], [-25, -5], [-30, 15], [-9, 38], [4.5, 51.9]],
  },
  {
    nome: 'Petroleiros do Golfo (Hormuz–Malaca)', cat: 'naval', obs: 'Ormuz',
    coords: [[50.6, 26.6], [56.5, 26.8], [62, 22], [72, 12], [80, 6], [81, 5.5], [100.3, 3], [103.8, 1.3], [110, 15], [114.2, 22.3], [121.5, 31.2]],
  },
  {
    nome: 'Leste da América do Norte–Ásia (via Panamá)', cat: 'naval', obs: 'Canal do Panamá',
    coords: [[-74, 40.7], [-77, 33], [-80, 27], [-83, 20], [-79.9, 9.4], [-79.5, 8.9], [-95, 13], [-120, 25], [-118.2, 33.7]],
  },
  {
    nome: 'Brasil–Ásia (via Cabo)', cat: 'naval',
    coords: [[-46.3, -23.9], [-20, -30], [-5, -33], [18.5, -34.8], [45, -28], [70, -15], [90, 0], [100.3, 3], [103.8, 1.3]],
  },
  {
    nome: 'Ásia–Oceania', cat: 'naval',
    coords: [[114, 22.5], [121, 14.4], [135, 5], [142, -10.5], [153, -27.4], [151.2, -33.9]],
  },

  // ————— FERROVIAS —————
  {
    nome: 'Transiberiana', cat: 'ferrovia',
    coords: [[37.6, 55.8], [60.6, 56.8], [73.4, 55], [82.9, 55], [104.3, 52.3], [113.5, 52], [135.1, 48.5], [131.9, 43.1]],
  },
  {
    nome: 'Transmongoliana', cat: 'ferrovia',
    coords: [[107.6, 51.8], [106.9, 47.9], [111.9, 43.1], [116.4, 39.9]],
  },
  {
    nome: 'Qinghai–Tibete', cat: 'ferrovia',
    coords: [[101.8, 36.6], [94.9, 36.4], [91.1, 29.7]],
  },
  {
    nome: 'EUA transcontinental (Chicago–Oakland)', cat: 'ferrovia',
    coords: [[-87.6, 41.9], [-95.9, 41.3], [-105, 39.7], [-111.9, 40.8], [-119.8, 39.5], [-122.3, 37.8]],
  },
  {
    nome: 'Canadá transcontinental', cat: 'ferrovia',
    coords: [[-79.4, 43.7], [-80.1, 46.5], [-97.1, 49.9], [-106.7, 52.1], [-114.1, 51], [-123.1, 49.3]],
  },
  {
    nome: 'Alta velocidade Europa (oeste)', cat: 'ferrovia',
    coords: [[-0.1, 51.5], [3.1, 50.6], [2.35, 48.9], [4.85, 45.8], [5.4, 43.3], [2.2, 41.4], [-3.7, 40.4]],
  },
  {
    nome: 'Alta velocidade Europa (norte/leste)', cat: 'ferrovia',
    coords: [[2.35, 48.9], [4.35, 50.85], [6.96, 50.9], [8.7, 50.1], [13.4, 52.5], [21, 52.2], [37.6, 55.8]],
  },
  {
    nome: 'Corredor do Lobito', cat: 'ferrovia', obs: 'Angola–RDC–Zâmbia',
    coords: [[13.5, -12.4], [17, -11.8], [22.2, -11.1], [25.5, -10.7], [28.6, -13]],
  },
  {
    nome: 'Djibuti–Etiópia', cat: 'ferrovia',
    coords: [[43.15, 11.6], [38.7, 9]],
  },
  {
    nome: 'Ferrovia bioceânica (projeto)', cat: 'ferrovia', obs: 'Brasil–Bolívia–Peru',
    coords: [[-46.3, -23.9], [-54.6, -20.4], [-57.6, -19], [-63.2, -17.8], [-66.2, -17.4], [-72, -13.5], [-77.1, -12.1]],
  },
  {
    nome: 'Ferrovia Norte–Sul (Brasil)', cat: 'ferrovia',
    coords: [[-48.5, -1.5], [-48.3, -10.2], [-49.3, -16.3], [-47.9, -15.8]],
  },

  // ————— CORREDORES AÉREOS —————
  { nome: 'São Paulo–Nova York', cat: 'aerea', coords: [[-46.5, -23.4], [-73.8, 40.6]] },
  { nome: 'São Paulo–Lisboa', cat: 'aerea', coords: [[-46.5, -23.4], [-9.1, 38.8]] },
  { nome: 'Dubai–Londres', cat: 'aerea', coords: [[55.4, 25.3], [-0.5, 51.5]] },
  { nome: 'Singapura–Londres', cat: 'aerea', coords: [[103.7, 1.4], [-0.5, 51.5]] },
  { nome: 'Hong Kong–Los Angeles', cat: 'aerea', coords: [[113.9, 22.3], [180, 35], [241.6, 33.9]] },
  { nome: 'Tóquio–São Francisco', cat: 'aerea', coords: [[140.4, 35.8], [180, 40], [237.6, 37.6]] },
  { nome: 'Sydney–Los Angeles', cat: 'aerea', coords: [[151.2, -33.9], [180, -10], [241.6, 33.9]] },
  { nome: 'Pequim–Frankfurt', cat: 'aerea', coords: [[116.6, 40.1], [8.6, 50.1]] },
  { nome: 'Istambul–Nova York', cat: 'aerea', coords: [[28.8, 41], [-73.8, 40.6]] },
  { nome: 'Cidade do México–Madri', cat: 'aerea', coords: [[-99.1, 19.4], [-3.6, 40.5]] },
  { nome: 'Joanesburgo–São Paulo', cat: 'aerea', coords: [[28.2, -26.1], [-46.5, -23.4]] },

  // ————— OLEODUTOS & GASODUTOS —————
  {
    nome: 'Druzhba (petróleo)', cat: 'oleoduto', obs: 'Rússia–Bielorrússia–Europa',
    coords: [[52.3, 54.9], [49.6, 53.2], [46, 54.5], [38, 54.5], [32, 53.9], [23.6, 52.1], [14.3, 53.1]],
  },
  {
    nome: 'ESPO (petróleo)', cat: 'oleoduto', obs: 'Sibéria Oriental–Oceano Pacífico',
    coords: [[101.6, 56.2], [110, 55], [123.9, 53.9], [132.3, 42.7]],
  },
  {
    nome: 'Nord Stream (gás, submarino)', cat: 'oleoduto',
    coords: [[28.8, 60.7], [24, 59.5], [19.5, 57.5], [16, 55.8], [13.4, 54.1]],
  },
  {
    nome: 'BTC (petróleo)', cat: 'oleoduto', obs: 'Baku–Tbilisi–Ceyhan',
    coords: [[49.9, 40.4], [44.8, 41.7], [35.8, 36.9]],
  },
  {
    nome: 'Kirkuk–Ceyhan (petróleo)', cat: 'oleoduto',
    coords: [[44.4, 35.5], [35.8, 36.9]],
  },
  {
    nome: 'Oeste–Leste (gás, China)', cat: 'oleoduto',
    coords: [[84.2, 41.7], [86.2, 41.8], [103.8, 36.1], [108.9, 34.3], [113.6, 34.8], [121.5, 31.2]],
  },
  {
    nome: 'Força da Sibéria (gás)', cat: 'oleoduto', obs: 'Rússia–China',
    coords: [[104.3, 52.3], [113.5, 52], [127.5, 50.2], [126.6, 45.8], [116.4, 39.9]],
  },
  {
    nome: 'Keystone (petróleo)', cat: 'oleoduto',
    coords: [[-110, 52.3], [-104.6, 50.4], [-96.9, 36], [-93.9, 29.8]],
  },
  {
    nome: 'Transmed (gás)', cat: 'oleoduto', obs: 'Argélia–Itália',
    coords: [[3.2, 32.6], [3.1, 36.8], [8.5, 37.1], [10.5, 37.4], [12.6, 37.7]],
  },
  {
    nome: 'Gasbol (gás, Bolívia–Brasil)', cat: 'oleoduto',
    coords: [[-63.2, -17.8], [-57.6, -19], [-47.1, -22.9], [-46.6, -23.6]],
  },

  // ————— FIBRAS ÓPTICAS SUBMARINAS —————
  {
    nome: 'MAREA (EUA–Espanha)', cat: 'fibra',
    coords: [[-75.9, 36.8], [-55, 38], [-30, 42], [-15, 44], [-2.9, 43.3]],
  },
  {
    nome: 'EllaLink (Brasil–Portugal)', cat: 'fibra',
    coords: [[-38.5, -3.7], [-25, 5], [-15, 20], [-10, 32], [-8.9, 37.9]],
  },
  {
    nome: 'Monet (Brasil–EUA)', cat: 'fibra',
    coords: [[-38.5, -3.7], [-48, 12], [-65, 22], [-80.1, 26.4]],
  },
  {
    nome: 'Transpacífica (Los Angeles–Tóquio)', cat: 'fibra',
    coords: [[241.8, 33.7], [210, 35], [180, 36], [139.8, 35.6]],
  },
  {
    nome: 'SEA-ME-WE (Singapura–Europa)', cat: 'fibra',
    coords: [[103.8, 1.3], [100.3, 3], [92, 7], [81, 5.8], [64, 13], [52, 13.5], [43.4, 12.6], [38.5, 22], [32.5, 29.9], [24, 34.8], [15, 38], [9, 43.2], [5.4, 43.3]],
  },
  {
    nome: 'Costa oeste africana (Cabo do Cabo–Europa)', cat: 'fibra',
    coords: [[18.4, -33.9], [12, -15], [9.3, 0.4], [3.4, 6.4], [-8, 12], [-17.4, 14.7], [-7.6, 33.6], [-9.4, 38.7]],
  },
  {
    nome: 'Southern Cross (Austrália–EUA)', cat: 'fibra',
    coords: [[151.2, -33.9], [174.8, -36.9], [202.2, 21.3], [241.8, 33.7]],
  },
  {
    nome: 'AAE-1 (Hong Kong–Europa)', cat: 'fibra',
    coords: [[113.9, 22.3], [103.8, 1.3], [92, 10], [72.9, 19], [62, 20], [43.1, 11.6], [32.5, 29.9], [20, 34], [5.4, 43.3]],
  },
  {
    nome: 'SACS (Brasil–Angola)', cat: 'fibra', obs: 'Atlântico Sul',
    coords: [[-38.5, -3.7], [-20, -6], [13.2, -8.8]],
  },
  {
    nome: 'JGA (Japão–Guam–Austrália)', cat: 'fibra',
    coords: [[140.7, 35.6], [144.8, 13.5], [151.2, -33.9]],
  },
];
