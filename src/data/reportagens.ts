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
  // Links de fonte entram como [texto](https://…) no corpo — renderizados silenciosamente.
  graficos?: { apos: number; id: string }[]; // intercalar <GraficosArtigo> após o parágrafo N (0-based, só pt)
  notas?: Record<string, string[]>; // página /reportagens/[slug]/notas — markdown links permitidos
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
        "Existe um objeto que o Brasil ainda não fabrica em escala e do qual vai precisar cada vez mais. É uma etiqueta que funciona como passaporte, presa à mercadoria na fábrica para dizer, a quem quiser conferir, que aquele produto existe, de onde veio e se ninguém o violou pelo caminho.",
        "Chama-se selo eletrônico fiscal. Sob o nome burocrático mora uma ambição direta, a de resolver na ponta mais fina da economia uma das distorções mais caras do país.",
        "A distorção é a incapacidade de distinguir, dentro do mesmo mercado, o que foi produzido conforme a lei e o que chegou pelo contrabando, pela pirataria e pela sonegação. Os números já circularam tanto que quase perderam a capacidade de assustar.",
        "Gasta-se cerca de 19,5% do PIB, algo como R$ 1,7 trilhão por ano, apenas para mover mercadorias pelo Brasil, segundo [estimativas do próprio setor produtivo](https://www.cni.com.br/). Dentro dessa conta vive uma economia ilegal calculada por [fóruns de combate à pirataria](https://fncp.org.br/) em cerca de R$ 500 bilhões em 2025.",
        "Há quem leia esse número como fria estatística de competitividade. Quem fabrica lê de outro jeito, porque disputa o freguês, todos os dias, com um concorrente que não paga imposto nem responde por defeito.",
        "Existe ainda um cálculo que o contribuinte raramente faz. Cada real sonegado é um real que o hospital e a escola nunca verão, o que torna o mercado ilegal um problema de orçamento público, e não apenas do fabricante enganado.",
        "Quando a fábrica perde essa disputa vezes demais, ela fecha. Com ela vão embora o emprego, o fornecedor e a arrecadação que sustentavam um pedaço do país.",
        "Reindustrializar sobre esse chão é construir sem fundação. Nenhum plano de política industrial sobrevive competindo com quem nada paga a ninguém.",
        "O selo eletrônico fiscal é a resposta de engenharia a esse impasse. E a resposta é mais simples do que o nome sugere.",
        "No desenho do projeto, trata-se de uma etiqueta sem bateria e de vida longa, que conversa de dois jeitos. De longe, com antenas instaladas em portos, postos fiscais e centros de distribuição; de perto, com o celular de qualquer pessoa, na gôndola da loja.",
        "A proteção vem em dez camadas, do material ao código. Algumas são físicas, como matérias-primas caras de copiar, gravações a laser e marcas aleatórias que jamais se repetem entre unidades.",
        "Outras são digitais. O selo carrega uma certificação do governo, deixa registro num cadastro digital imutável que funciona como a certidão de nascimento do produto e traz um pequeno circuito que se destrói se alguém tentar arrombá-lo.",
        "Quem tenta abrir, desliga. Quem clona, não consegue validar; quem valida, deixa rastro.",
        "Na prática, isso muda o jogo do falsificador. Hoje, copiar é barato e seguro; com o selo, copiar continua barato, mas passa a deixar prova.",
        "Do lado do fisco, o efeito é multiplicador. Um agente com leitor de bolso passa a enxergar em segundos o que hoje exigiria abrir caixa, conferir nota e torcer.",
        "Do lado da indústria, é proteção de margem. O produto legal deixa de dividir o mercado com a cópia que ignora o fisco e a garantia.",
        "O projeto também já tem corpo de fábrica. As pranchas de engenharia do protótipo mostram uma peça do tamanho de uma moeda, desenhada para aguentar chuva de estrada, empilhamento de contêiner e mão de descarregador.",
        "O custo por unidade, pela estimativa do projeto básico, fica reduzido ao mínimo. Entre o tamanho do problema e o preço da ferramenta, a relação é de milhares para um.",
        "A ideia, aliás, é mais velha do que parece. O selo fiscal é figura clássica do direito tributário brasileiro, presente na [Lei 4.502, de 1964](https://www.planalto.gov.br/ccivil_03/leis/l4502.htm), e no regulamento do IPI, o [Decreto 7.212, de 2010](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/decreto/d7212.htm), que já previam o controle de mercadorias por selo e timbre.",
        "A ideia permaneceu a mesma; cresceu a sua capacidade. O selo de papel provava, no melhor dos casos, que um imposto fora pago, enquanto o eletrônico atesta a própria mercadoria, em tempo real.",
        "O fundamento também está na Constituição, ainda que o país o leia pela metade. O [artigo 144](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm) diz que a segurança pública existe para proteger a incolumidade das pessoas e do patrimônio.",
        "Lida por esse ângulo, a pirataria abandona a condição de desvio comercial e revela sua verdadeira face, a de um ataque continuado ao patrimônio do industrial, do consumidor e do Estado.",
        "O [artigo 170](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm), por sua vez, só faz sentido com todos no mesmo jogo. Livre concorrência e defesa do consumidor pressupõem que cada competidor pague o mesmo preço institucional para estar em campo.",
        "A defesa do consumidor costuma ser tratada como norma de etiqueta comercial. Ela guarda uma promessa maior, a de que a prateleira não seja loteria.",
        "Quando o comprador não distingue o original da cópia, o mercado inteiro rebaixa o preço da confiança. O selo devolve ao consumidor o que a pirataria rouba em silêncio, a escolha informada.",
        "Quando o contrabando disputa com vantagem tributária integral, não existe mercado livre, e sim quem cumpre a Constituição brigando com quem a ignora. Fechar essa brecha é simplesmente fazer a Constituição funcionar.",
        "O Estado, aos poucos, já caminha nessa direção. Em 2024, o governo regulamentou o selo eletrônico para os documentos digitais das empresas, com transição prevista até o fim da década.",
        "A transição é longa por uma razão compreensível, já que trocar a identidade digital de milhões de empresas exige prazo, cuidado e treinamento. Com as mercadorias ocorrerá o mesmo, e daí a pressa em começar.",
        "O salto que falta é fazer com as coisas o que já se fez com os papéis. Trocar o carimbo pela criptografia também na mercadoria.",
        "Quem fabricaria essa etiqueta em massa? A pergunta é menos óbvia do que parece, e a resposta não cabe num nome único.",
        "Exigem-se do fabricante três qualidades raras de encontrar juntas. Tradição em segurança de valores, domínio de processos impossíveis de copiar e credencial pública, porque o selo vale pelo que tem atrás, e não pelo que tem dentro.",
        "Um dos candidatos mais naturais é a Casa da Moeda do Brasil, a estatal que há três séculos cunha o dinheiro e imprime os documentos em que o país confia sem pensar. Quem sabe blindar uma cédula sabe blindar uma etiqueta, e a casa que opera sob licitação, auditoria e sigilo entrega ainda ao selo, de graça, seu ingrediente mais precioso, a fé pública.",
        "A arquitetura do projeto, porém, dispensa exclusividades. Consórcios de automação, certificadoras e fabricantes de dispositivos seguros podem compor o papel, desde que chip, código e dado permaneçam sob governança brasileira.",
        "O personagem central da história não é quem carimba o passaporte. É o passaporte.",
        "É esse passaporte que falta à reindustrialização em curso. A [Nova Indústria Brasil](https://www.gov.br/mdic/pt-br) organiza crédito e incentivos em torno de grandes missões, e todas elas terminam numa fábrica que precisará vender contra o produto clandestino.",
        "Nenhuma política industrial se sustenta sem infraestrutura de confiança. O selo é exatamente isso, uma peça invisível, barata e transversal, que atravessa de autopeça a agrotóxico, de eletrônico a remédio.",
        "Os setores mais atacados pela pirataria são justamente os que o país quer reconstruir. Eletrônica, autopeça, cosmético e farmacêutico voltam a ser viáveis quando o produto ilegal perde o esconderijo.",
        "Na estrada, o projeto ganha corpo de operação. O estudo de lacre logístico feito para a Polícia Rodoviária Federal descreve a mecânica, com carga lacrada na origem, antenas de leitura nos postos e alerta automático quando a rota muda ou o lacre não confere.",
        "Para a PRF, isso aposenta a antiga busca por amostragem em favor da fiscalização cirúrgica. O sistema identifica a inconsistência e aponta o veículo irregular antes mesmo da abordagem no acostamento.",
        "A urgência, por fim, é de geografia e de calendário. O novo Porto de Chancay, no Peru, encurtou o Pacífico, a ferrovia bioceânica voltou à pauta de Brasil, Bolívia e Peru, e o Plano Nacional de Logística promete integrar modais como nunca.",
        "Cada corredor novo que escoa produto legítimo é também um canal potencial de contrabando, arma e droga. A alma da tese está nesse alerta, o de que os corredores precisam nascer como rota de desenvolvimento, jamais como porta de serviço do crime.",
        "O Brasil chega a esse mapa novo num ponto de virada, com a eleição de 2026 batendo à porta. O eleitor, cansado de diagnóstico, espera do Estado soluções criativas, e um país decidido a acelerar o passo e voltar a industrializar-se não tem o luxo de adiar a escolha para a próxima década.",
        "O debate eleitoral já reconhece metade do problema. As propostas registradas no TSE trazem, com raro consenso, radares, drones e patrulhamento das fronteiras.",
        "Falta a outra metade, que é transformar vigilância em desenvolvimento. Um corredor logístico blindado desde o nascimento tem estatura de promessa de campanha capaz de sobreviver ao palanque e virar política de Estado.",
        "Raro o país ver tantos astros alinhados. Reindustrialização na agenda, corredores novos no mapa, segurança pública no centro do debate e um projeto de engenharia pronto no papel.",
        "Perder essa janela seria assistir aos corredores abrirem sem o respectivo controle. Reequipar depois custa sempre mais caro do que nascer junto.",
        "Falta a ponte entre vigiar o território e rastrear a carga. O selo é essa ponte, o ponto exato em que a segurança pública se torna pilar da produção.",
        "O mundo, nesse terreno, já tem vocabulário. As alfândegas mais avançadas, dos Estados Unidos à União Europeia, do México à Colômbia, operam programas que certificam empresas de confiança e monitoram a carga.",
        "A diferença do desenho brasileiro está na escala. Os modelos internacionais certificam a empresa e acompanham o contêiner, enquanto o selo propõe descer até o item, cada produto com identidade própria, legível por qualquer autoridade ao longo da cadeia.",
        "Se der certo, o Brasil deixa de importar o padrão e passa a exportá-lo. É uma especificação mais fina que a das aduanas mais sofisticadas do mundo, a um custo que nenhuma delas apresenta.",
        "Há quem enxergue aí soberania em sentido literal. O país que dispensa plataforma estrangeira para provar o que produz decide sozinho as regras do próprio mercado, e confiança, como dinheiro, se fabrica em casa.",
        "E existe o personagem que os projetos de fiscalização costumam esquecer, o cidadão. Como o selo conversa com celular comum, cada aparelho no bolso do brasileiro vira um leitor de autenticidade no balcão.",
        "O gesto que hoje paga uma conta por aproximação pode, amanhã, terminar na pergunta que o vendedor pirata não quer ouvir. Por que este não lê?",
        "Para o consumidor, a mudança é silenciosa e profunda. A garantia de que o remédio é remédio e a peça é peça deixa de ser ato de fé e vira toque de dedo.",
        "O caminho até lá, convém dizer, não é automático. Tecnologia não substitui instituição, e selo sem integração entre Receita, polícias e aduanas vizinhas vira acervo de dados, como dado sem punição vira relatório.",
        "O programa precisa nascer com adesão dos setores mais atacados, antenas onde a PRF já as indicou, integração com a nota fiscal eletrônica e uma meta pública e auditável de redução do mercado ilegal. Precisa, ainda, de um guardião à altura, uma entidade com capacidade fabril e fé pública para zelar pela autenticidade do país.",
        "Nenhuma dessas peças faz diferença sozinha. É o conjunto de etiqueta, antena, lei e instituição que transforma fiscalização em infraestrutura.",
        "Aí, talvez, o Brasil consiga fazer com as mercadorias o que já fez com o dinheiro, dar a cada uma um rosto impossível de imitar, apresentado em toda fronteira. País que reindustrializa sem proteger a indústria constrói na areia; país que abre corredores sem vigiar as portas entrega com uma mão o que rouba com a outra.",
        "Ao selo eletrônico fiscal cabe a tarefa mais simples e mais difícil da economia: restituir às coisas a sua identidade. E devolver a quem produz dentro da lei a certeza de que o jogo vale a pena.",
      ],
      en: [
        'Full text available in Portuguese. Summary: this feature argues that the electronic fiscal seal — a passive RFID/NFC device with ten security layers, designed for a minimal per-unit cost — is the missing trust infrastructure for Brazilian reindustrialization.',
        'The text traces the legal roots of the fiscal seal (Law 4,502/1964 and Decree 7,212/2010), reads the Constitution through articles 144 and 170 (public security protects property; free competition), and frames piracy — an illegal market estimated at BRL 500 billion — as the competitor no industrial policy can ignore.',
        'It also examines the border dimension: new corridors such as Chancay and the bioceanic railway multiply both trade and smuggling routes, and describes international models (WCO SAFE, C-TPAT, AEO) against which the Brazilian item-level proposal stands out. The Casa da Moeda do Brasil appears as one of the natural candidates to manufacture the seal — not as the only one.',
      ],
      es: [
        'Texto integral disponible en portugués. Resumen: esta edición sostiene que el sello electrónico fiscal — dispositivo pasivo RFID/NFC con diez niveles de seguridad y costo mínimo por unidad — es la infraestructura de confianza que falta a la reindustrialización brasileña.',
        'El texto recorre la base legal (Ley 4.502/1964 y Decreto 7.212/2010), lee la Constitución por los artículos 144 y 170, y trata la piratería — mercado ilegal estimado en R$ 500 mil millones — como el competidor que ninguna política industrial puede ignorar.',
        'También examina la dimensión fronteriza (Chancay, ferrocarril bioceánico) y los modelos internacionales (SAFE/OMA, C-TPAT, AEO), ante los cuales la propuesta brasileña de rastreabilidad por ítem se destaca. La Casa da Moeda aparece como una de las candidatas naturales a fabricar el sello — no la única.',
      ],
    },
    graficos: [
      { apos: 5, id: 'perdas' },
      { apos: 19, id: 'historia' },
      { apos: 52, id: 'leitores' },
    ],
    notas: {
      pt: [
        '**Custo Brasil (19,5% do PIB · ≈ R$ 1,7 trilhão/ano).** Estimativa de entidades do setor produtivo, com destaque para a [Confederação Nacional da Indústria (CNI)](https://www.cni.com.br/). Trata-se de estimativa de competitividade, não de estatística oficial.',
        '**Economia ilegal (≈ R$ 500 bilhões em 2025).** Cálculo divulgado por fóruns de combate à pirataria, como o [Fórum Nacional Contra a Pirataria e a Ilegalidade (FNCP)](https://fncp.org.br/). Não é dado produzido pelo IBGE nem pela Receita Federal.',
        '**Base legal do selo fiscal.** [Lei 4.502/1964](https://www.planalto.gov.br/ccivil_03/leis/l4502.htm) e [Decreto 7.212/2010](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/decreto/d7212.htm) (regulamento do IPI), que tratam do controle de produtos por selo e timbre.',
        '**Fundamento constitucional.** [Constituição Federal de 1988](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm), artigos 144 (segurança pública e proteção do patrimônio) e 170 (livre concorrência e defesa do consumidor).',
        '**Custo unitário do selo.** O projeto básico aponta apenas um valor mínimo por unidade (referência para licitação + provisão operacional do fabricante); por decisão editorial, a reportagem não cita cifra. O preço final depende de contratação pública.',
        '**Regulamentação de 2024 (selo eletrônico em documentos digitais).** Norma citada conforme cobertura pública do setor; a referência formal no âmbito do ITI/ICP-Brasil segue em verificação.',
        '**Antenas de leitura em postos fiscais.** Tratado no texto como componente do projeto; a dotação orçamentária específica na lei orçamentária da União ainda não foi verificada rubrica a rubrica.',
        '**Programa Nova Indústria Brasil.** Política industrial federal conduzida pelo Ministério do Desenvolvimento, Indústria, Comércio e Serviços — [gov.br/mdic](https://www.gov.br/mdic/pt-br).',
        '**Modelos internacionais.** Padrão SAFE (Organização Mundial das Aduanas), C-TPAT (Estados Unidos), AEO/ICS2 (União Europeia), NEEC (México) e OEA (Colômbia). O desenho brasileiro se distingue pela rastreabilidade por item, e não por operador ou contêiner.',
        '**Metodologia.** Reportagem produzida a partir do projeto básico de engenharia do selo, da legislação citada e de literatura pública de logística e segurança. Passou por revisão editorial assistida por mais de uma inteligência artificial, com julgamento e assinatura humanos. Os resumos em inglês e espanhol acompanham o texto integral em português.',
      ],
      en: [
        'Notes and sources are published in Portuguese on this page. Key sources: [CNI](https://www.cni.com.br/) (Brazil cost estimates), [FNCP](https://fncp.org.br/) (illegal market estimates), [Law 4,502/1964](https://www.planalto.gov.br/ccivil_03/leis/l4502.htm), [Decree 7,212/2010](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/decreto/d7212.htm) and the [1988 Federal Constitution](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm).',
        'All figures in the story are industry or forum estimates, not official statistics; the per-unit seal cost refers to the basic engineering project, subject to public procurement.',
      ],
      es: [
        'Las notas y fuentes se publican en portugués en esta página. Fuentes principales: [CNI](https://www.cni.com.br/), [FNCP](https://fncp.org.br/), [Ley 4.502/1964](https://www.planalto.gov.br/ccivil_03/leis/l4502.htm), [Decreto 7.212/2010](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/decreto/d7212.htm) y la [Constitución Federal de 1988](https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm).',
        'Todas las cifras son estimaciones del sector o de foros, no estadísticas oficiales; el costo unitario del sello remite al proyecto básico de ingeniería, sujeto a licitación pública.',
      ],
    },
  },
];
