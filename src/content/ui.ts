export const LANGS = ['pt', 'en', 'es'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'pt';

export const SITE_NAME = 'LOGIS';
export const MAGAZINE_NAME = 'Logis';

export const NAV: { slug: string; label: Record<Lang, string> }[] = [
  { slug: '', label: { pt: 'Início', en: 'Home', es: 'Inicio' } },
  { slug: 'geomapas', label: { pt: 'Geomapas', en: 'Geomaps', es: 'Geomapas' } },
  { slug: 'seguranca', label: { pt: 'Segurança Pública', en: 'Public Security', es: 'Seguridad Pública' } },
  { slug: 'sustentabilidade', label: { pt: 'Sustentabilidade', en: 'Sustainability', es: 'Sostenibilidad' } },
  { slug: 'contratos', label: { pt: 'Contratos', en: 'Contracts', es: 'Contratos' } },
  { slug: 'reguladores', label: { pt: 'Reguladores', en: 'Regulators', es: 'Reguladores' } },
  { slug: 'legal', label: { pt: 'Marco Legal', en: 'Legal Framework', es: 'Marco Legal' } },
  { slug: 'pesquisa', label: { pt: 'Pesquisa & Dados', en: 'Research & Data', es: 'Investigación' } },
  { slug: 'ideias', label: { pt: 'Ideias', en: 'Ideas', es: 'Ideas' } },
  { slug: 'revista', label: { pt: 'Revista Logis', en: 'Logis Journal', es: 'Revista Logis' } },
  { slug: 'observatorio', label: { pt: 'Observatório', en: 'Observatory', es: 'Observatorio' } },
  { slug: 'institucional', label: { pt: 'Institucional', en: 'About', es: 'Institucional' } },
];

export const UI: Record<Lang, Record<string, string>> = {
  pt: {
    tagline: 'Portal de logística sustentável',
    lerMais: 'Saiba mais',
    menu: 'Menu',
    rodape: 'LOGIS — Portal de Logística e Sustentabilidade. Conteúdo trilíngue (PT·EN·ES) sobre logística, infraestrutura, regulação e sustentabilidade.',
    creditos: 'Fontes de dados: IBGE, DNIT, ANTT, ANTAQ, Banco Mundial (LPI), Natural Earth e OpenStreetMap (contribuidores). Mapas: OpenFreeMap.',
    avisoIdeias: 'Seção dedicada a ideias e projetos em desenvolvimento para a logística brasileira.',
    atualizadoEm: 'Atualizado em agosto de 2026',
  },
  en: {
    tagline: 'Sustainable logistics portal',
    lerMais: 'Learn more',
    menu: 'Menu',
    rodape: 'LOGIS — Logistics and Sustainability Portal. Trilingual content (PT·EN·ES) on logistics, infrastructure, regulation and sustainability.',
    creditos: 'Data sources: IBGE, DNIT, ANTT, ANTAQ, World Bank (LPI), Natural Earth and OpenStreetMap contributors. Maps: OpenFreeMap.',
    avisoIdeias: 'Section dedicated to ideas and projects under development for Brazilian logistics.',
    atualizadoEm: 'Updated August 2026',
  },
  es: {
    tagline: 'Portal de logística sostenible',
    lerMais: 'Más información',
    menu: 'Menú',
    rodape: 'LOGIS — Portal de Logística y Sostenibilidad. Contenido trilingüe (PT·EN·ES) sobre logística, infraestructura, regulación y sostenibilidad.',
    creditos: 'Fuentes de datos: IBGE, DNIT, ANTT, ANTAQ, Banco Mundial (LPI), Natural Earth y colaboradores de OpenStreetMap. Mapas: OpenFreeMap.',
    avisoIdeias: 'Sección dedicada a ideas y proyectos en desarrollo para la logística brasileña.',
    atualizadoEm: 'Actualizado en agosto de 2026',
  },
};

export function langPath(lang: Lang, slug = ''): string {
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}
