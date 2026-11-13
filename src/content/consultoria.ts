export type Lang = 'pt' | 'en';

const pt = {
  eyebrow: 'Consultoria',
  title: 'Casa à Medida da Família',
  subtitle: 'A sua casa pode evoluir com a sua família.',
  lead: 'Descubra como adaptar os espaços às novas necessidades, sem ter de mudar de casa.',
  brand: 'Consultoria Casa à Medida',
  who: {
    title: 'Quem é a Casa Mãe?',
    intro: 'Ajudo famílias a adaptar a casa às necessidades reais de cada fase de vida.',
    items: [
      ['Profissional', 'Joana, designer de interiores com mais de 10 anos de experiência'],
      ['Pessoal', 'Ao longo da minha vida mudei de casa 13 vezes, o que me deu uma perspectiva sobre a criação de espaços funcionais e acolhedores.'],
      ['Maternidade', 'Como mãe de três filhos, a maternidade ensinou-me a importância de ter método e organização.'],
      ['O Atelier', 'Durante o Covid, senti a necessidade de criar um atelier que ajudasse diretamente as famílias a transformarem as suas casas em ambientes mais práticos e harmoniosos.'],
    ],
  },
  forWho: {
    title: 'Para quem é?',
    intro: 'Para famílias que estão a viver uma nova fase e sentem que a casa deixou de acompanhar o dia a dia.',
    note: 'Não é uma consultoria apenas de decoração — é uma consultoria mais focada na adaptação da casa ao ritmo da família.',
    stageLabel: 'Nova fase',
    stages: ['Chegou um bebé e a casa entrou em modo sobrevivência.', 'Dois irmãos vão passar a partilhar quarto e ninguém sabe por onde começar.', 'A escola começou e falta uma zona de estudo funcional.'],
    warnLabel: 'Sinal de alerta',
    warns: ['Precisam de mudar casa mas não será possível num futuro próximo', 'Passam o dia a arrumar e a casa continua desorganizada.', 'Gostam da casa, mas ela já não acompanha a família que são hoje.'],
  },
  process: {
    eyebrow: 'O processo',
    title: 'Como funciona',
    intro: 'Todo o processo é online e demora cerca de três semanas. Numa consultoria conseguimos tipicamente trabalhar 2 a 3 zonas prioritárias da casa — definidas em conjunto na primeira sessão.',
    steps: [
      { tag: 'Sessão 1', title: 'Conhecer', meta: '90 min · Online', text: 'Uma conversa guiada para perceber o que mudou, o que já não funciona e o que a família quer sentir em casa. No fim, definimos juntos as 2 a 3 zonas prioritárias.', extra: 'Antes da sessão, a família envia: planta ou esboço com medidas + fotografias dos espaços.' },
      { tag: 'Sessão 2 · Uma semana depois', title: 'Encontrar soluções', meta: '60 min · Online', text: 'Apresento uma proposta para cada zona: reorganização do espaço, organização, prioridades de investimento. Discutimos, ajustamos e fechamos as decisões em conjunto.' },
      { tag: 'Entrega · Até uma semana depois', title: 'Plano de ação', meta: 'PDF', text: 'A família recebe um relatório claro com tudo o que ficou decidido — pronto a pôr em prática.' },
    ],
  },
  delivery: {
    eyebrow: 'A entrega',
    title: 'O que recebem — e o que não está incluído',
    inLabel: 'Incluído',
    included: ['2 sessões online de (90+60 minutos)', 'Relatório em PDF com sugestões de layout por área', 'Referências visuais e imagens de exemplo', 'Lista de compras com links diretos', 'Plano de ação com prioridades (o que mudar já, o que pode esperar)', '1 revisão ao relatório'],
    outLabel: 'Não incluído',
    excluded: ['Visita ao Espaço', 'Desenhos técnicos', 'Acompanhamento de projeto ou obra', 'Compras e encomendas', 'Revisões adicionais'],
    note: 'Se a família quiser ir mais longe, a consultoria pode evoluir para um projeto de interiores completo — orçamentado à parte.',
  },
  terms: {
    eyebrow: 'Condições',
    title: 'Valor e marcação',
    stats: [['190€', 'valor total da consultoria'], ['100%', 'pagamento no ato de marcação'], ['MB Way', 'método de pagamento'], ['~3 sem.', 'duração total do processo']],
    note: 'A consultoria é a porta de entrada: uma família pode começar por uma consultoria e, se fizer sentido, avançar para um projeto de interiores.',
  },
  quote: ['A casa que funcionava há cinco anos, pode não ser a casa de que a sua família precisa hoje.', 'Adaptá-la é devolver-lhe funcionalidade, conforto e tranquilidade.'],
  footer: 'Consultoria Casa à Medida · marcação por mensagem direta',
  cta: 'Marcar por mensagem',
  waMessage: 'Olá Joana! Gostaria de marcar a Consultoria Casa à Medida.',
  seoTitle: 'Consultoria Casa à Medida — Atelier Casa Mãe',
  seoDesc: 'Consultoria online para adaptar a casa às novas necessidades da família, sem mudar de casa.',
};

const en: typeof pt = {
  eyebrow: 'Consultancy',
  title: 'A Home Tailored to Your Family',
  subtitle: 'Your home can grow with your family.',
  lead: 'Discover how to adapt your spaces to new needs, without having to move.',
  brand: 'Tailored Home Consultancy',
  who: {
    title: 'Who is Casa Mãe?',
    intro: 'I help families adapt their home to the real needs of each stage of life.',
    items: [
      ['Professional', 'Joana, an interior designer with more than 10 years of experience'],
      ['Personal', 'I have moved 13 times in my life, which gave me a unique perspective on creating functional, welcoming spaces.'],
      ['Motherhood', 'As a mother of three, motherhood taught me the importance of method and organization.'],
      ['The Atelier', 'During Covid, I felt the need to create an atelier that would help families directly, turning their homes into more practical and harmonious spaces.'],
    ],
  },
  forWho: {
    title: 'Who is it for?',
    intro: 'For families going through a new stage of life who feel their home no longer keeps up with their daily routine.',
    note: "It's not just a decorating consultancy — it focuses on adapting the home to the family's rhythm.",
    stageLabel: 'New stage',
    stages: ['A baby has arrived and the house has gone into survival mode.', 'Two siblings are about to share a room and nobody knows where to start.', "School has started and there's no functional study area."],
    warnLabel: 'Warning sign',
    warns: ["The family needs to move, but that won't be possible any time soon.", 'They spend all day tidying up and the house is still disorganized.', 'They love their home, but it no longer fits the family they are today.'],
  },
  process: {
    eyebrow: 'The process',
    title: 'How it works',
    intro: 'The whole process is online and takes about three weeks. A consultation typically covers 2 to 3 priority areas of the home — chosen together in the first session.',
    steps: [
      { tag: 'Session 1', title: 'Getting to know you', meta: '90 min · Online', text: 'A guided conversation to understand what has changed, what no longer works and how the family wants to feel at home. At the end, we choose the 2 to 3 priority areas together.', extra: 'Before the session, the family sends: a floor plan or sketch with measurements + photos of the spaces.' },
      { tag: 'Session 2 · One week later', title: 'Finding solutions', meta: '60 min · Online', text: 'I present a proposal for each area: space layout, organization and spending priorities. We discuss, adjust and finalize the decisions together.' },
      { tag: 'Delivery · Within one week', title: 'Action plan', meta: 'PDF', text: 'The family receives a clear report with everything that was decided — ready to put into practice.' },
    ],
  },
  delivery: {
    eyebrow: 'The deliverables',
    title: "What's included — and what isn't",
    inLabel: 'Included',
    included: ['2 online sessions of 60 minutes', 'PDF report with layout suggestions for each area', 'Visual references and example images', 'Shopping list with direct links', 'Prioritized action plan (what to change now, what can wait)', '1 report revision'],
    outLabel: 'Not included',
    excluded: ['On-site visit', 'Technical drawings', 'Project or construction management', 'Purchasing and ordering', 'Additional revisions'],
    note: 'If the family wants to go further, the consultation can grow into a full interior design project — quoted separately.',
  },
  terms: {
    eyebrow: 'Terms',
    title: 'Price and booking',
    stats: [['€190', 'total consultation fee'], ['100%', 'paid in full at booking'], ['MB Way', 'or bank transfer payment method'], ['~3 wks', 'total process length']],
    note: 'The consultation is the starting point: a family can begin with a consultation and, if it makes sense, move on to a full interior design project.',
  },
  quote: ['The home that worked five years ago may not be the home your family needs today.', 'Adapting it brings back function, comfort and peace of mind.'],
  footer: 'Tailored Home Consultancy · book by direct message',
  cta: 'Book by message',
  waMessage: "Hi Joana! I'd like to book the Tailored Home Consultancy.",
  seoTitle: 'Tailored Home Consultancy — Atelier Casa Mãe',
  seoDesc: 'Online consultancy to adapt your home to your family’s new needs, without having to move.',
};

export const consultoria = { pt, en };
