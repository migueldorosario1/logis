export type HubType = 'porto' | 'aeroporto' | 'ferrovia' | 'internacional';

export interface Hub {
  nome: string;
  tipo: HubType;
  uf?: string;
  lon: number;
  lat: number;
}

// Hubs logísticos curados (v1) — coordenadas aproximadas
export const HUBS: Hub[] = [
  { nome: 'Porto de Santos', tipo: 'porto', uf: 'SP', lon: -46.3, lat: -23.98 },
  { nome: 'Porto de Paranaguá', tipo: 'porto', uf: 'PR', lon: -48.52, lat: -25.51 },
  { nome: 'Porto de Itaqui', tipo: 'porto', uf: 'MA', lon: -44.34, lat: -2.56 },
  { nome: 'Porto de Suape', tipo: 'porto', uf: 'PE', lon: -34.96, lat: -8.36 },
  { nome: 'Porto do Rio Grande', tipo: 'porto', uf: 'RS', lon: -52.1, lat: -32.05 },
  { nome: 'Porto de Manaus', tipo: 'porto', uf: 'AM', lon: -60.02, lat: -3.12 },
  { nome: 'Porto de Salvador', tipo: 'porto', uf: 'BA', lon: -38.52, lat: -12.97 },
  { nome: 'Porto do Pecém', tipo: 'porto', uf: 'CE', lon: -38.8, lat: -3.53 },
  { nome: 'Aeroporto de Guarulhos (GRU)', tipo: 'aeroporto', uf: 'SP', lon: -46.47, lat: -23.43 },
  { nome: 'Aeroporto de Viracopos (VCP)', tipo: 'aeroporto', uf: 'SP', lon: -47.14, lat: -23.01 },
  { nome: 'Estrada de Ferro Carajás', tipo: 'ferrovia', uf: 'PA', lon: -50.14, lat: -6.07 },
  { nome: 'Ferrovia Vitória–Minas', tipo: 'ferrovia', uf: 'MG', lon: -43.94, lat: -19.92 },
  { nome: 'Ferronorte (Rondonópolis)', tipo: 'ferrovia', uf: 'MT', lon: -54.64, lat: -16.47 },
  { nome: 'Norte-Sul (Anápolis)', tipo: 'ferrovia', uf: 'GO', lon: -48.95, lat: -16.33 },
  { nome: 'Transnordestina (Salgueiro)', tipo: 'ferrovia', uf: 'PE', lon: -39.12, lat: -8.07 },
  { nome: 'FIOL (Ilhéus)', tipo: 'ferrovia', uf: 'BA', lon: -39.05, lat: -14.79 },
  { nome: 'Porto de Chancay', tipo: 'internacional', lon: -77.19, lat: -11.81 },
  { nome: 'Porto de Roterdã', tipo: 'internacional', lon: 4.14, lat: 51.95 },
  { nome: 'Porto de Xangai', tipo: 'internacional', lon: 121.47, lat: 31.23 },
];

// Fluxos internacionais (v1): origem → destino
export const FLOWS: { de: string; para: string; nome: string }[] = [
  { de: 'Porto de Santos', para: 'Porto de Roterdã', nome: 'Santos → Roterdã' },
  { de: 'Porto de Santos', para: 'Porto de Xangai', nome: 'Santos → Xangai' },
  { de: 'Porto de Santos', para: 'Porto de Chancay', nome: 'Santos → Chancay' },
  { de: 'FIOL (Ilhéus)', para: 'Porto de Chancay', nome: 'Bioceânica (planejada): Ilhéus → Chancay' },
];

export const HUB_STYLE: Record<HubType, { cor: string; label: { pt: string; en: string; es: string } }> = {
  porto: { cor: '#0E3A5D', label: { pt: 'Porto', en: 'Port', es: 'Puerto' } },
  aeroporto: { cor: '#7C4DBC', label: { pt: 'Aeroporto', en: 'Airport', es: 'Aeropuerto' } },
  ferrovia: { cor: '#B45309', label: { pt: 'Nó ferroviário', en: 'Rail node', es: 'Nodo ferroviario' } },
  internacional: { cor: '#1E8A66', label: { pt: 'Internacional', en: 'International', es: 'Internacional' } },
};
