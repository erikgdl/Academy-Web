const media = 'https://dsenaacademia.com.br/wp-content/uploads'

export const images = {
  logo: `${media}/2025/02/logo-dsena.webp`,
  hero: `${media}/2026/01/3-2.png`,
  about: `${media}/2025/05/Sena-Pinheiro-38-1024x683.jpg`,
  strength: `${media}/2025/05/Sena-Pinheiro-19-1024x683.jpg`,
  cardio: `${media}/2025/05/Sena-Pinheiro-30-1024x683.jpg`,
  dance: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=900&q=85&fit=crop',
  jump: `${media}/2025/05/Sena-Pinheiro-14-1024x683.jpg`,
  app: `${media}/2025/10/cll.png`,
  spaceOne: `${media}/2025/05/Sena-Pinheiro-63-1024x683.jpg`,
  spaceTwo: `${media}/2025/05/Sena-Pinheiro-19-1024x683.jpg`,
  spaceThree: `${media}/2025/05/Sena-Pinheiro-30-1024x683.jpg`,
  spaceFour: `${media}/2025/05/Sena-Pinheiro-52-1024x683.jpg`,
}

export type Category = 'Todas' | 'Treino livre' | 'Aulas coletivas'

export const categories: Category[] = ['Todas', 'Treino livre', 'Aulas coletivas']

export const classes: {
  title: string
  category: Exclude<Category, 'Todas'>
  description: string
  image: string
  icon: 'dumbbell' | 'heart' | 'music' | 'bolt'
}[] = [
  {
    title: 'Musculação',
    category: 'Treino livre',
    description: 'Estrutura para você treinar com liberdade e evoluir no seu ritmo.',
    image: images.strength,
    icon: 'dumbbell',
  },
  {
    title: 'Cardio',
    category: 'Treino livre',
    description: 'Equipamentos para levar seu condicionamento mais longe.',
    image: images.cardio,
    icon: 'heart',
  },
  {
    title: 'FitDance',
    category: 'Aulas coletivas',
    description: 'Ritmo, movimento e muita energia em uma aula coletiva.',
    image: images.dance,
    icon: 'music',
  },
  {
    title: 'Jump',
    category: 'Aulas coletivas',
    description: 'Uma aula dinâmica no trampolim para sair da rotina.',
    image: images.jump,
    icon: 'bolt',
  },
]

export type Plan = {
  name: string
  description: string
  price: string
  period: string
  billing: string
  features: string[]
  checkout: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    name: 'Golden',
    description: 'O melhor custo-benefício para quem quer fazer do treino um hábito.',
    price: '119,90',
    period: '12 meses de fidelidade',
    billing: 'A partir de R$ 119,90/mês · 12x no cartão recorrente. Consulte as condições.',
    features: ['Horário livre', 'Acesso a todas as unidades', 'App de treino', 'Montagem de treino gratuita', 'Opção de trancamento'],
    checkout: 'https://dsenaacademia.com.br/carrinho-plano-gold/',
    featured: true,
  },
  {
    name: 'Silver',
    description: 'Flexibilidade para manter o treino na sua rotina.',
    price: '129,90',
    period: 'Sem fidelidade',
    billing: 'A partir de R$ 129,90/mês · recorrência no cartão. Consulte as condições.',
    features: ['Horário livre', 'Acesso a todas as unidades', 'App de treino', 'Montagem de treino gratuita', 'Opção de trancamento'],
    checkout: 'https://dsenaacademia.com.br/carrinho-plano-silver/',
  },
  {
    name: 'Mensal',
    description: 'Para começar agora, sem compromisso de longo prazo.',
    price: '139,90',
    period: 'Sem fidelidade',
    billing: 'A partir de R$ 139,90/mês · consulte as formas de pagamento.',
    features: ['Horário livre', 'Acesso a todas as unidades', 'App de treino', 'Montagem de treino gratuita', 'Opção de trancamento'],
    checkout: 'https://dsenaacademia.com.br/carrinho-plano-mensal/',
  },
]

export const units = [
  { name: 'Campos Sales', address: 'Av. Campos Sales, 1182 – Areal, Porto Velho – RO' },
  { name: 'Calama', address: 'Av. Calama, 5295 – Flodoaldo Pontes Pinto, Porto Velho – RO' },
  { name: 'Rio Madeira', address: 'Av. Prefeito Chiquilito Erse, 4750 – Rio Madeira, Porto Velho – RO' },
  { name: 'Abunã', address: 'R. Abunã, esquina com Av. Lauro Sodré – em frente ao Supermercado Taimax, Porto Velho – RO' },
  { name: 'Sul', address: 'R. Peroba, 6299 – Floresta, Porto Velho – RO' },
  { name: 'Pinheiro Machado', address: 'Av. Pinheiro Machado, 1805 – São Cristóvão, Porto Velho – RO' },
  { name: 'Amazonas', address: 'Av. Amazonas, 6873 – Cuniã, Porto Velho – RO' },
  { name: 'Guaporé', address: 'Av. Guaporé, 2275 – Lagoa, Porto Velho – RO' },
]

export const gallery = [
  { image: images.spaceOne, alt: 'Recepção e área de treinamento da D’Sena', label: 'Recepção' },
  { image: images.spaceTwo, alt: 'Equipamentos de musculação na D’Sena', label: 'Musculação' },
  { image: images.spaceThree, alt: 'Equipamentos da área de cardio da D’Sena', label: 'Cardio' },
  { image: images.spaceFour, alt: 'Visão ampla do espaço de treinamento D’Sena', label: 'Estrutura' },
]

export const faqs = [
  {
    question: 'Posso treinar em mais de uma unidade?',
    answer: 'Sim. Os planos divulgados pela D’Sena incluem acesso a todas as unidades. Confira as condições do plano escolhido antes de contratar.',
  },
  {
    question: 'Qual a diferença entre os planos?',
    answer: 'O Golden tem fidelidade de 12 meses; Silver e Mensal são anunciados sem fidelidade. Formas de pagamento e condições podem variar. Consulte os detalhes com a equipe.',
  },
  {
    question: 'Como consulto os horários do FitDance e do Jump?',
    answer: 'Os horários das aulas coletivas podem variar por unidade. Fale com a equipe pelo WhatsApp para consultar a grade atual.',
  },
  {
    question: 'A D’Sena aceita Wellhub (Gympass)?',
    answer: 'Sim. O site oficial informa parceria com Wellhub (Gympass). Consulte com a equipe os planos aceitos e as condições na unidade desejada.',
  },
]

export const contact = {
  whatsapp: '5569984492003',
  instagram: 'https://www.instagram.com/dsenaacademia/',
  facebook: 'https://www.facebook.com/Dsenaacademia',
  website: 'https://dsenaacademia.com.br/',
  jobs: 'https://dsenaacademia.com.br/trabalhe-conosco/',
  appAndroid: 'https://play.google.com/store/apps/details?id=com.pacto&pcampaignid=web_share',
  appIos: 'https://apps.apple.com/br/app/treino/id862662527',
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}
