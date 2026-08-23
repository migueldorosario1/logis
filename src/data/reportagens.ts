// Reportagens do LOGIS — a capa roda matérias jornalísticas (ordem Miguel 23/08 ~11:00);
// o editorial semanal fica na faixa discreta. Foto: SEMPRE licenciada, vista e creditada.
export interface Reportagem {
  slug: string;
  kicker: Record<string, string>;
  titulo: Record<string, string>;
  olho: Record<string, string>;
  data: string;
  autor: string;
  assinatura: { linha1: string; linha2: string };
  foto: { src: string; credito: string; licenca: string; descricao: string };
  corpo: Record<string, string[]>; // pt = texto integral; en/es = resumo + apontamento
}

export const REPORTAGENS: Reportagem[] = [
  {
    slug: 'selo-eletronico-fiscal',
    kicker: { pt: 'Reportagem · Especial', en: 'Feature story', es: 'Reportaje · Especial' },
    titulo: { pt: 'O passaporte da mercadoria', en: 'The merchandise passport', es: 'El pasaporte de la mercancía' },
    olho: {
      pt: "O selo eletrônico fiscal — um projeto para dar a cada produto legal uma identidade verificável da fábrica ao consumidor — pode ser a infraestrutura invisível de que a reindustrialização brasileira precisa.",
      en: 'The electronic fiscal seal — a project to give every legal product a verifiable identity from factory to consumer — may be the invisible infrastructure Brazilian reindustrialization needs.',
      es: 'El sello electrónico fiscal — un proyecto para dar a cada producto legal una identidad verificable de la fábrica al consumidor — puede ser la infraestructura invisible que necesita la reindustrialización brasileña.',
    },
    data: '23/08/2026',
    autor: 'Miguel do Rosário',
    assinatura: { linha1: 'Miguel do Rosário', linha2: 'Jornalista · Fundador e Presidente do Instituto de Logística e Sustentabilidade' },
    foto: {
      src: '/imagens/reportagem-selo-capa.jpg',
      credito: 'Samory Pereira Santos',
      licenca: 'CC BY-SA 4.0',
      descricao: 'Guindastes e contêineres no Terminal de Cargas do Porto de Salvador (BA)',
    },
    corpo: {
      pt: [
        "Existe um objeto que o Brasil ainda não fabrica em escala e de que cada vez mais vai precisar: uma etiqueta que funciona como passaporte. Presa à mercadoria na fábrica, ela passa a dizer, para quem quiser conferir, que aquele produto existe, de onde veio e se ninguém o violou pelo caminho.",
        "Chama-se selo eletrônico fiscal. Não é um enfeite tecnológico: é uma tentativa de resolver, na ponta mais fina da economia, o problema mais grosso que o país tem.",
        "O problema é não saber distinguir, dentro do mesmo mercado, o que foi produzido dentro da lei e o que veio do contrabando, da pirataria e da sonegação. Os números já circularam tanto que quase perdem a capacidade de assustar.",
        "Gasta-se cerca de 19,5% do PIB — algo como R$ 1,7 trilhão por ano — só para mover mercadorias pelo Brasil, segundo estimativas do próprio setor produtivo. Dentro dessa conta existe uma economia ilegal estimada em cerca de R$ 500 bilhões em 2025, calculada por fóruns de combate à pirataria.",
        "Há quem trate esse número como estatística de competitividade. Para quem fabrica, é concorrência desleal todos os dias; para quem fiscaliza, é fronteira sem rádio; para quem consome, é peça sem garantia chegando à prateleira.",
        "E há um cálculo que o contribuinte raramente faz: cada real sonegado é um real que deixa de virar hospital, escola ou asfalto. O mercado ilegal não é apenas um problema do fabricante enganado — é um problema de orçamento público.",
        "Cada real dessa soma disputou com uma fábrica que paga imposto, cumpre a lei e responde por defeitos. Quando a fábrica perde essa disputa muitas vezes, ela fecha — e o país perde emprego, fornecedor, conhecimento e arrecadação.",
        "Reindustrializar sobre esse chão é construir sem fundação. Nenhum plano de política industrial sobrevive competindo com quem não paga nada a ninguém.",
        "O selo eletrônico fiscal é a resposta de engenharia a essa pergunta. E a resposta é mais simples do que o nome sugere.",
        "No desenho do projeto, trata-se de uma etiqueta sem bateria, de vida longa, que conversa de dois jeitos. De longe, com as antenas instaladas em portos, postos fiscais e centros de distribuição; de perto, com o celular de qualquer pessoa, na gôndola da loja.",
        "A proteção vem em camadas — dez, do material ao código. Algumas são físicas: materiais caros de copiar, gravações a laser, marcas aleatórias que nunca se repetem entre unidades.",
        "Outras são digitais: o selo carrega uma certificação do governo, deixa registro num cadastro digital imutável que funciona como a certidão de nascimento do produto e tem um pequeno circuito que se destrói se alguém tentar arrombá-lo.",
        "Quem tenta abrir, desliga. Quem clona, não consegue validar; quem valida, deixa rastro.",
        "Na prática, isso muda o jogo do falsificador. Hoje, copiar é barato e seguro; com o selo, copiar continua barato, mas passa a deixar prova.",
        "Do lado do fisco, o efeito é multiplicador. Um agente com leitor de bolso passa a enxergar, em segundos, o que hoje exigiria abrir caixa, conferir nota e torcer.",
        "Do lado da indústria, é blindagem de margem. O produto legal deixa de competir com a cópia que não paga imposto, não testa qualidade e não responde na justiça.",
        "O projeto também já tem corpo de fábrica. As pranchas de engenharia do protótipo mostram uma peça do tamanho de uma moeda, feita para aguentar chuva de estrada, empilhamento de contêiner e mão de descarregador.",
        "O custo por unidade, pela estimativa do projeto básico, fica abaixo de dois reais. É a relação de milhares para um entre o tamanho do problema e o preço da ferramenta.",
        "A ideia, aliás, é mais velha do que parece. O selo fiscal é figura clássica do direito tributário brasileiro: a Lei 4.502, de 1964, e o regulamento do IPI, o Decreto 7.212 de 2010, já previam controle de mercadoria por selo e timbre.",
        "O que mudou não é a ideia — é a capacidade dela. O selo de papel provava, no melhor dos casos, que um imposto fora pago; o selo eletrônico atesta a própria mercadoria, em tempo real.",
        "O fundamento também está na Constituição, ainda que o país o leia pela metade. O artigo 144 diz que a segurança pública existe para proteger \"a incolumidade das pessoas e do patrimônio\".",
        "Lida por esse ângulo, a pirataria deixa de ser um mero desvio comercial e revela sua verdadeira face: um ataque continuado ao patrimônio do industrial, do consumidor e do Estado.",
        "O artigo 170, por sua vez, só faz sentido com todos no mesmo jogo. Livre concorrência e defesa do consumidor pressupõem que todos paguem o mesmo preço institucional para competir.",
        "A defesa do consumidor costuma ser lida como norma de etiqueta comercial. Ela é mais que isso: é a promessa de que a prateleia não é loteria.",
        "Quando o comprador não tem como distinguir o original da cópia, o mercado inteiro rebaixa o preço da confiança. O selo devolve ao consumidor algo que a pirataria rouba silenciosamente: a escolha informada.",
        "Quando o contrabando disputa com vantagem tributária integral, não há mercado livre — há quem cumpre a Constituição brigando com quem a ignora. Fechar essa distorção não é protecionismo; é fazer a Constituição funcionar.",
        "O Estado, aos poucos, já caminha nessa direção. Em 2024, o governo regulamentou o selo eletrônico para os documentos digitais das empresas, com transição até o fim da década.",
        "A transição é longa por uma razão simples: trocar a identidade digital de milhões de empresas exige prazo, cuidado e treinamento. Com as mercadorias ocorrerá o mesmo — por isso a urgência de começar.",
        "O salto que falta é fazer com as mercadorias o que já se fez com os documentos. Trocar o carimbo pela criptografia também nas coisas.",
        "Quem fabricaria essa etiqueta em massa? A pergunta é menos óbvia do que parece, e a resposta não é um nome único.",
        "Exigem-se do fabricante três coisas raras juntas: tradição em segurança de valores, domínio de processos impossíveis de copiar e credencial pública — porque o selo vale pelo que tem atrás, não pelo que tem dentro.",
        "Um dos candidatos mais naturais é a Casa da Moeda do Brasil, a estatal que há três séculos cunha o dinheiro e imprime os documentos em que o país confia sem pensar. Quem sabe blindar uma cédula contra o falsificador sabe blindar uma etiqueta; quem opera sob os ritos do Estado conhece licitação, auditoria e sigilo; e quem carrega três séculos de reputação entrega ao selo, de graça, seu ingrediente mais caro: a fé pública.",
        "Mas a arquitetura do projeto não depende de exclusividade. Consórcios de automação, certificadoras e fabricantes de dispositivos seguros podem compor o papel, desde que chip, código e dado fiquem sob governança brasileira.",
        "O personagem central da história não é quem carimba o passaporte. É o passaporte.",
        "É esse passaporte que falta à reindustrialização em curso. A Nova Indústria Brasil organiza centenas de bilhões em crédito e incentivos em seis missões — e todas terminam numa fábrica que precisará vender contra o produto clandestino.",
        "Nenhuma política industrial se sustenta sem infraestrutura de confiança. O selo é exatamente isso: uma peça invisível, barata e transversal, que atravessa todos os setores atacados pela pirataria — de autopeça a agrotóxico, de eletrônico a remédio.",
        "Os setores mais atacados pela pirataria são justamente os que o país quer reconstruir. Eletrônica, autopeça, cosmético, farmacêutico: cada um deles volta a ser viável quando o produto ilegal perde o esconderijo.",
        "Na estrada, o projeto ganha corpo de operação. O estudo de lacre logístico feito para a Polícia Rodoviária Federal descreve a mecânica: carga lacrada na origem, antenas de leitura nos postos e alerta automático quando a rota muda ou o lacre não confere.",
        "Para a PRF, isso troca a antiga busca por amostragem pela fiscalização cirúrgica. O sistema identifica a inconsistência e aponta o veículo irregular antes mesmo da abordagem no acostamento.",
        "A urgência é de geografia. O novo Porto de Chancay, no Peru, encurtou o Pacífico; a ferrovia bioceânica voltou à pauta de Brasil, Bolívia e Peru; o Plano Nacional de Logística promete integrar modais como nunca.",
        "Cada corredor novo que escoa produto legítimo é também um canal potencial de contrabando, arma e droga. O debate eleitoral de 2026 já reconhece isso: as propostas registradas no TSE trazem, com consenso raro, radares, drones e patrulhamento das fronteiras.",
        "O calendário também ajuda, pela primeira vez em anos. Reindustrialização na agenda, corredores novos no mapa, segurança pública no debate eleitoral e um projeto de engenharia pronto no papel — raro o Brasil ver esses quatro planetas alinhados.",
        "Perder essa janela significaria assistir aos corredores abrir sem o respectivo controle. E reequipar depois custa sempre mais caro do que nascer junto.",
        "Falta a ponte entre vigiar o território e rastrear a carga. O selo é essa ponte — a segurança pública deixando de ser discurso para virar pilar da produção.",
        "O mundo, nesse terreno, já tem vocabulário. As alfândegas mais avançadas já operam programas que certificam empresas de confiança e monitoram a carga — dos Estados Unidos à União Europeia, do México à Colômbia.",
        "A diferença do desenho brasileiro está na escala: os modelos internacionais certificam a empresa e monitoram o contêiner. O selo propõe descer até o item — cada produto com identidade própria, legível por qualquer autoridade ao longo da cadeia.",
        "Se der certo, o Brasil deixa de importar o padrão e passa a exportá-lo. É uma especificação mais fina que a das aduanas mais avançadas do mundo, a um custo que nenhuma delas apresenta.",
        "Há quem veja nisso soberania em sentido literal: o país que não depende de plataforma estrangeira para provar o que produz decide sozinho as regras do próprio mercado. Confiança, como dinheiro, é algo que se fabrica em casa.",
        "E há o personagem que os projetos de fiscalização sempre esquecem: o cidadão. Como o selo conversa com celular comum, qualquer um dos mais de 160 milhões de aparelhos do país vira um leitor de autenticidade no balcão.",
        "O gesto que hoje paga uma conta por aproximação pode, amanhã, terminar com a pergunta que o vendedor pirata não quer ouvir: por que este não lê? Cada ponto de venda vira posto de controle; cada compra, auditoria espontânea.",
        "Para o consumidor, a mudança é silenciosa, mas profunda. A garantia de que o remédio é remédio e a peça é peça deixa de ser ato de fé e passa a ser um toque de dedo.",
        "O caminho até lá não é automático — e convém dizer. Tecnologia não substitui instituição: selo sem integração entre Receita, polícias e aduanas vizinhas vira acervo de dados; dado sem punição vira relatório.",
        "O programa precisa nascer com adesão dos setores mais atacados, antenas onde a PRF já as indicou, integração com a nota fiscal eletrônica e uma meta pública e auditável de redução do mercado ilegal. E precisa de um guardião à altura — uma entidade com capacidade fabril e fé pública para cuidar da autenticidade do país.",
        "Nenhuma dessas peças, isolada, faz diferença. É o conjunto — etiqueta, antena, lei e instituição — que transforma fiscalização em infraestrutura.",
        "Aí, talvez, o Brasil consiga fazer com as mercadorias o que já fez com o dinheiro: dar a cada uma um rosto impossível de imitar, apresentado em toda fronteira. País que reindustrializa sem blindar a indústria constrói na areia; país que abre corredores sem vigiar as portas entrega com uma mão o que rouba com a outra.",
        "Ao selo eletrônico fiscal cabe a tarefa mais simples e mais difícil da economia: restituir às coisas a sua identidade. E devolver a quem produz dentro da lei a certeza de que o jogo vale a pena.",
      ],
      en: [
        'Full text available in Portuguese. Summary: this feature argues that the electronic fiscal seal — a passive RFID/NFC device with ten security layers, estimated by the project to cost under two reais per unit — is the missing trust infrastructure for Brazilian reindustrialization.',
        'The text traces the legal roots of the fiscal seal (Law 4,502/1964 and Decree 7,212/2010), reads the Constitution through articles 144 and 170 (public security protects property; free competition), and frames piracy — an illegal market estimated at BRL 500 billion — as the competitor no industrial policy can ignore.',
        'It also examines the border dimension: new corridors such as Chancay and the bioceanic railway multiply both trade and smuggling routes, and describes international models (WCO SAFE, C-TPAT, AEO) against which the Brazilian item-level proposal stands out. The Casa da Moeda do Brasil appears as one of the natural candidates to manufacture the seal — not as the only one.',
      ],
      es: [
        'Texto integral disponible en portugués. Resumen: esta edición sostiene que el sello electrónico fiscal — dispositivo pasivo RFID/NFC con diez niveles de seguridad y costo estimado por debajo de dos reales por unidad — es la infraestructura de confianza que falta a la reindustrialización brasileña.',
        'El texto recorre la base legal (Ley 4.502/1964 y Decreto 7.212/2010), lee la Constitución por los artículos 144 y 170, y trata la piratería — mercado ilegal estimado en R$ 500 mil millones — como el competidor que ninguna política industrial puede ignorar.',
        'También examina la dimensión fronteriza (Chancay, ferrocarril bioceánico) y los modelos internacionales (SAFE/OMA, C-TPAT, AEO), ante los cuales la propuesta brasileña de rastreabilidad por ítem se destaca. La Casa da Moeda aparece como una de las candidatas naturales a fabricar el sello — no la única.',
      ],
    },
  },
];
