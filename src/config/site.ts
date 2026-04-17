export const site = {
  name: 'FLUJO TV MEXICO',
  tagline: 'Entretenimiento premium en una sola app',
  domain: 'mx.flujooficial.com',
  canonical: 'https://mx.flujooficial.com',
  url: 'https://mx.flujooficial.com',
  locale: 'es-MX',
  whatsapp: '51914326729',
  whatsappLink: 'https://wa.me/51914326729',
  downloaderCode: '7132299',
  download: {
    mobileApkHref: 'https://github.com/Cristian1828/apk-flujoTV/releases/download/v1.0/flujo-premium.apk',
  },
  videos: {
    androidTv: {
      primary: 'hq91iqqdmk',
    },
    googleTv: {
      primary: 'jfsexj7t5g',
    },
  },
  description:
    'Flujo TV Mexico oficial: mas de 3000 canales en vivo, peliculas, series y deportes en alta calidad. Compatible con Android, TV Box, Fire Stick, Google TV y Xiaomi Stick.',
};

export const stats = [
  { value: '3K+', label: 'Canales en Vivo' },
  { value: '15K+', label: 'Películas' },
  { value: '5K+', label: 'Series' },
  { value: '4K', label: 'Ultra HD' },
];

export const plans = [
  {
    id: 'mensual',
    name: '1 Mes',
    price: 9,
    period: '1 mes (~$160 MXN)',
    duration: '30 días',
    tag: '',
    popular: false,
    bonus: '',
    features: [
      'Deportes en Vivo 4K',
      'PPV Incluido',
      'VOD actualizado diario',
      'Hasta 3 pantallas',
      'Soporte Mexicano 24/7',
    ],
    cta: 'Comprar este plan',
    paypal: 'https://www.paypal.com/ncp/payment/EBMGFA4S6ALWN',
    whatsappMsg: 'Hola, quiero contratar el plan de 1 mes de Flujo TV México ($9 USD)',
  },
  {
    id: 'trimestral',
    name: '3 Meses',
    price: 27,
    period: '3 meses (~$480 MXN)',
    duration: '90 días',
    tag: 'Recomendado',
    popular: false,
    bonus: '',
    features: [
      'Deportes en Vivo 4K',
      'PPV Incluido',
      'VOD actualizado diario',
      'Hasta 3 pantallas',
      'Soporte VIP',
    ],
    cta: 'Comprar este plan',
    paypal: 'https://www.paypal.com/ncp/payment/DRDZ57GB83GAA',
    whatsappMsg: 'Hola, quiero contratar el plan de 3 meses de Flujo TV México ($27 USD)',
  },
  {
    id: 'semestral',
    name: '6 Meses',
    price: 49,
    period: '6 meses (~$860 MXN)',
    duration: '7 meses total',
    tag: 'Más Popular',
    popular: true,
    bonus: '+1 Mes Gratis',
    features: [
      'Deportes en Vivo 4K',
      'PPV Incluido',
      'VOD actualizado diario',
      'Hasta 3 pantallas',
      'Soporte VIP 24/7',
      '1 mes adicional gratis',
    ],
    cta: 'Elegir plan 6+1',
    paypal: 'https://www.paypal.com/ncp/payment/PYVG9EZ448NZA',
    whatsappMsg: 'Hola, quiero contratar el plan de 6 meses de Flujo TV México ($49 USD) con el mes extra gratis',
  },
  {
    id: 'anual',
    name: '12 Meses',
    price: 95,
    period: '12 meses (~$1650 MXN)',
    duration: '14 meses total',
    tag: 'Mejor Valor',
    popular: false,
    bonus: '+2 Meses Gratis',
    features: [
      'Deportes en Vivo 4K',
      'PPV Incluido',
      'VOD actualizado diario',
      'Hasta 3 pantallas',
      'Soporte VIP 24/7',
      '2 meses adicionales gratis',
    ],
    cta: 'Aprovechar promoción',
    paypal: 'https://www.paypal.com/ncp/payment/7AMC58FVAEFLW',
    whatsappMsg: 'Hola, quiero contratar el plan de 12 meses de Flujo TV México ($95 USD) con los 2 meses extra gratis',
  },
];

export const catalogItems = [
  {
    title: 'Películas',
    count: '+15,000 títulos',
    desc: 'Estrenos de Hollywood, cine latino, clásicos y más. Actualizado cada semana.',
    image: '/images/cat-movies.webp',
  },
  {
    title: 'Series',
    count: '+5,000 temporadas',
    desc: 'Temporadas completas de las series más populares. Sin esperar estrenos.',
    image: '/images/cat-series.webp',
  },
  {
    title: 'Canales Deportivos',
    count: 'Canales deportivos variados',
    desc: 'Todos los eventos en vivo y sin cortes. Cobertura completa.',
    image: '/images/cat-sports.webp',
  },
  {
    title: 'TV en Vivo',
    count: '+3,000 canales',
    desc: 'Canales de Mexico y del mundo con noticias, musica, entretenimiento y deportes.',
    image: '/images/cat-live.webp',
  },
];

export const testimonials = [
  {
    name: 'Carlos M.',
    location: 'Monterrey, NL',
    text: 'Llevo 4 meses con Flujo TV y no he tenido cortes. La calidad en partidos y eventos se mantiene estable.',
    image: '/images/client-01.webp',
    rating: 5,
  },
  {
    name: 'Maria S.',
    location: 'Guadalajara, JAL',
    text: 'El soporte responde rapido y me guiaron paso a paso para dejarlo funcionando en mi TV Box.',
    image: '/images/client-02.webp',
    rating: 5,
  },
  {
    name: 'Diego R.',
    location: 'Puebla, PUE',
    text: 'El plan de 6 meses me salio excelente. Se ve muy bien en Fire Stick y no se traba en vivo.',
    image: '/images/client-03.webp',
    rating: 5,
  },
  {
    name: 'Ana G.',
    location: 'Ciudad de México',
    text: 'Antes pagaba cable y tenia menos contenido. Ahora veo todo desde celular y TV Box con mejor calidad.',
    image: '/images/client-04.webp',
    rating: 5,
  },
];

export const faqItems = [
  {
    question: '¿Qué es Flujo TV?',
    answer:
      'Flujo TV es una plataforma digital con acceso a mas de 3000 canales en vivo, peliculas, series y deportes. Funciona en dispositivos Android, TV Box, Fire Stick, Google TV y Xiaomi Stick.',
  },
  {
    question: '¿Tienen activación asistida?',
    answer:
      'Brindamos activacion asistida y soporte completo desde la compra. Te acompanamos en instalacion y configuracion hasta dejarlo operativo.',
  },
  {
    question: '¿Funciona en Smart TV?',
    answer:
      'Los Smart TV con sistemas cerrados requieren un dispositivo externo compatible como TV Box, Fire Stick, Google TV o Xiaomi Stick.',
  },
  {
    question: '¿Qué velocidad ocupo para no tener trabas en 4K?',
    answer:
      'Para disfrutar los eventos en vivo sin interrupciones y en 4K real, recomendamos 20 Megas como mínimo. Conéctalo por cable ethernet a tu Android Box para mayor estabilidad en los partidos.',
  },
  {
    question: '¿Tienen los eventos deportivos de México y PPV?',
    answer:
      'Sí, todo el deporte premium y eventos especiales (PPV) están incluidos sin costo adicional. Desde peleas de box hasta la liga nacional y torneos internacionales.',
  },
  {
    question: '¿Cómo realizo el pago?',
    answer:
      'Puedes pagar por PayPal o con asistencia por WhatsApp. Una vez confirmado, activamos tu cuenta en minutos.',
  },
  {
    question: '¿Puedo cancelar cuando quiera?',
    answer:
      'Sí. No hay contratos ni permanencia. Pagas el tiempo que elijas y listo. Si no quieres renovar, simplemente no lo haces. Sin costos ocultos ni penalidades.',
  },
  {
    question: '¿En qué dispositivos funciona?',
    answer:
      'Flujo TV funciona exclusivamente en dispositivos Android: celulares, tablets, TV Box, Fire Stick, Google TV y Xiaomi Stick.',
  },
  {
    question: '¿Tienen opciones para distribuidores o negocios?',
    answer:
      'Sí, contamos con opciones especiales para distribuidores y emprendedores que deseen manejar volumen. Para más información sobre disponibilidad, condiciones y precios al por mayor, escríbenos por WhatsApp y te asesoramos.',
  },
];

export const seoKeywords = [
  'flujo tv mexico', 'flujo tv oficial mexico', 'streaming mexico',
  'flujo paneles México', 'panel flujo tv México', 'paneles flujo tv',
  'distribuidor flujo tv México', 'revender flujo tv México',
  'reseller flujo tv México', 'mayorista flujo tv México',
  'venta paneles flujo tv México', 'creditos flujo tv',
  'flujo tv distribuidor oficial', 'flujo tv mayorista',
  'comprar paneles flujo tv', 'negocio flujo tv México',

  // ── Promociones y Versiones ──
  'ultima version de flujo tv', 'flujo tv version 8.4.2', 'flujo tv 8.4.2',
  'descargar flujo tv 8.4.2', 'actualizar flujo tv', 'actualizacion flujo tv',
  'flujo tv comunidad', 'foro flujo tv', 'ayuda foro flujo tv',
  'flujo tv barato', 'promociones flujo tv', 'descuentos flujo tv',
  'oferta flujo tv', 'flujo tv economico'
];
