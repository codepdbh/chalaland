/* ============================================
   PACKAGES DATA
   Edit tour packages, itineraries, prices
   ============================================ */

export interface PriceRow {
  people: string;
  price: string;
  note?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string[];
  activities: string[];
}

export interface Package {
  slug: string;
  title: string;
  animalName: string;
  duration: string;
  nights: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  regularPrice: PriceRow[];
  sharedPrice?: PriceRow[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  recommendations: string[];
  whatToBring: string[];
  policies: string[];
  ctaLabel: string;
}

export const packages: Package[] = [
  {
    slug: "jochi",
    title: "Paquete Jochi",
    animalName: "Jochi",
    duration: "3 días",
    nights: "2 noches",
    image: "/assets/packages/jochi.jpg",
    shortDescription:
      "Ideal para una primera inmersión en la selva amazónica. Explora senderos, navega por el lago y descubre la fauna local en tres días intensos.",
    longDescription:
      "El Paquete Jochi es perfecto para quienes desean una experiencia completa pero concentrada en la Amazonía. Durante tres días y dos noches, explorarás senderos de interpretación, navegarás por el lago cristalino al amanecer, observarás aves y fauna silvestre con guías expertos, y conocerás la cultura de la comunidad local. Es una aventura diseñada para maximizar cada momento en la naturaleza.",
    regularPrice: [
      { people: "1 persona", price: "$350 USD" },
      { people: "2 personas", price: "$280 USD c/u" },
      { people: "3-4 personas", price: "$240 USD c/u" },
      { people: "5+ personas", price: "$210 USD c/u" },
    ],
    sharedPrice: [
      { people: "1 persona", price: "$300 USD" },
      { people: "2 personas", price: "$240 USD c/u" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada y Exploración Inicial",
        description:
          "Recepción en Rurrenabaque y viaje en bote motorizado río arriba hasta el albergue. Al llegar, almuerzo de bienvenida con productos locales y primera caminata de reconocimiento por los senderos cercanos al lago.",
        meals: ["Almuerzo", "Cena"],
        activities: [
          "Viaje en bote por el río (5-6 horas)",
          "Almuerzo de bienvenida",
          "Caminata de reconocimiento (1.5 horas)",
          "Observación del atardecer desde el lago",
        ],
      },
      {
        day: 2,
        title: "Inmersión en la Selva",
        description:
          "Día completo de exploración. Caminata por senderos de interpretación con guía naturalista bilingüe, identificación de especies de flora y fauna, y navegación por el lago para observar caimanes y aves acuáticas al atardecer.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Caminata por senderos de interpretación (4 horas)",
          "Identificación de flora medicinal",
          "Observación de primates y aves",
          "Navegación nocturna para observar caimanes",
        ],
      },
      {
        day: 3,
        title: "Amanecer y Regreso",
        description:
          "Despertar temprano para la observación de aves al amanecer en el lago. Desayuno y preparación para el viaje de regreso a Rurrenabaque en bote.",
        meals: ["Desayuno"],
        activities: [
          "Observación de aves al amanecer (5:30 AM)",
          "Paseo en canoa por el lago",
          "Viaje de retorno a Rurrenabaque",
        ],
      },
    ],
    includes: [
      "Transporte fluvial ida y vuelta desde Rurrenabaque",
      "Alojamiento en cabaña con baño",
      "Todas las comidas durante la estadía",
      "Guía naturalista bilingüe (español/inglés)",
      "Botas de goma para caminatas",
      "Actividades según itinerario",
      "Agua purificada",
    ],
    excludes: [
      "Pasaje aéreo La Paz – Rurrenabaque",
      "Bebidas alcohólicas y gaseosas",
      "Propinas",
      "Seguro de viaje",
      "Gastos personales",
    ],
    recommendations: [
      "Llevar ropa ligera y cómoda de colores neutros",
      "Protector solar y repelente de insectos",
      "Cámara fotográfica con batería extra",
      "Linterna o frontal",
      "Medicamentos personales",
    ],
    whatToBring: [
      "Mochila pequeña para caminatas",
      "Ropa de manga larga ligera",
      "Sombrero o gorra",
      "Sandalias para el albergue",
      "Binoculares (opcional)",
      "Bolsas plásticas para proteger electrónicos",
    ],
    policies: [
      "Cancelación gratuita hasta 15 días antes de la fecha de llegada",
      "50% de cargo por cancelaciones entre 7 y 14 días antes",
      "No reembolsable si se cancela con menos de 7 días de anticipación",
      "El itinerario puede modificarse por condiciones climáticas",
    ],
    ctaLabel: "Reservar Paquete Jochi",
  },
  {
    slug: "pecari",
    title: "Paquete Pecarí",
    animalName: "Pecarí",
    duration: "4 días",
    nights: "3 noches",
    image: "/assets/packages/pecari.jpg",
    shortDescription:
      "Mayor tiempo de exploración con caminatas extendidas, observación nocturna y visita a la comunidad local.",
    longDescription:
      "El Paquete Pecarí ofrece un día adicional que permite explorar senderos más lejanos, realizar una caminata nocturna en busca de fauna, visitar la comunidad indígena y participar en actividades culturales. Con cuatro días y tres noches, tendrás tiempo para sumergirte más profundamente en el ecosistema amazónico y conectar con la cultura ancestral de la región.",
    regularPrice: [
      { people: "1 persona", price: "$450 USD" },
      { people: "2 personas", price: "$360 USD c/u" },
      { people: "3-4 personas", price: "$310 USD c/u" },
      { people: "5+ personas", price: "$275 USD c/u" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada al Albergue",
        description:
          "Viaje desde Rurrenabaque por río hasta el albergue. Bienvenida, asignación de cabañas y primera exploración del entorno cercano al lago.",
        meals: ["Almuerzo", "Cena"],
        activities: [
          "Viaje en bote por el río",
          "Check-in y bienvenida",
          "Caminata introductoria",
          "Observación del atardecer",
        ],
      },
      {
        day: 2,
        title: "Senderos y Fauna",
        description:
          "Jornada completa en los senderos principales. El guía compartirá conocimientos sobre plantas medicinales, árboles centenarios y las especies animales que habitan el bosque.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Caminata larga por senderos primarios (5 horas)",
          "Identificación de flora y fauna",
          "Baño en arroyo natural",
          "Caminata nocturna con linternas",
        ],
      },
      {
        day: 3,
        title: "Cultura y Comunidad",
        description:
          "Visita a la comunidad local para conocer sus tradiciones, artesanías y modo de vida. Por la tarde, navegación por el lago y observación de aves.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Visita a la comunidad indígena",
          "Taller de artesanías locales",
          "Navegación en canoa por el lago",
          "Observación de guacamayos y tucanes",
        ],
      },
      {
        day: 4,
        title: "Amanecer y Despedida",
        description:
          "Último amanecer en el lago con canto de aves. Desayuno de despedida y viaje de retorno a Rurrenabaque.",
        meals: ["Desayuno"],
        activities: [
          "Observación de aves al amanecer",
          "Paseo final por el lago",
          "Viaje de retorno",
        ],
      },
    ],
    includes: [
      "Transporte fluvial ida y vuelta",
      "Alojamiento 3 noches en cabaña",
      "Todas las comidas",
      "Guía naturalista bilingüe",
      "Botas de goma",
      "Visita a comunidad local",
      "Todas las actividades del itinerario",
      "Agua purificada",
    ],
    excludes: [
      "Pasaje aéreo a Rurrenabaque",
      "Bebidas alcohólicas",
      "Propinas",
      "Seguro de viaje",
      "Gastos personales",
    ],
    recommendations: [
      "Buena condición física para caminatas de 5+ horas",
      "Ropa ligera de colores neutros",
      "Protector solar biodegradable",
      "Repelente de insectos",
    ],
    whatToBring: [
      "Mochila de día",
      "Ropa ligera de manga larga",
      "Impermeable ligero",
      "Sombrero",
      "Linterna frontal",
      "Binoculares",
      "Cámara fotográfica",
    ],
    policies: [
      "Cancelación gratuita hasta 15 días antes",
      "50% cargo entre 7 y 14 días antes",
      "No reembolsable con menos de 7 días",
      "Itinerario sujeto a condiciones climáticas",
    ],
    ctaLabel: "Reservar Paquete Pecarí",
  },
  {
    slug: "capibara",
    title: "Paquete Capibara",
    animalName: "Capibara",
    duration: "5 días",
    nights: "4 noches",
    image: "/assets/packages/capibara.jpg",
    shortDescription:
      "Nuestra experiencia más popular. Cinco días para explorar a fondo la selva, el lago, la comunidad y la vida silvestre.",
    longDescription:
      "El Paquete Capibara es el favorito de nuestros visitantes. Con cinco días y cuatro noches, ofrece el equilibrio perfecto entre aventura, descanso y cultura. Incluye caminatas por todos los senderos principales, múltiples navegaciones por el lago, visita a la comunidad, talleres culturales, avistamiento de fauna nocturna y diurna, y tiempo libre para disfrutar de la tranquilidad del albergue.",
    regularPrice: [
      { people: "1 persona", price: "$560 USD" },
      { people: "2 personas", price: "$440 USD c/u" },
      { people: "3-4 personas", price: "$380 USD c/u" },
      { people: "5+ personas", price: "$340 USD c/u" },
    ],
    sharedPrice: [
      { people: "1 persona", price: "$480 USD" },
      { people: "2 personas", price: "$380 USD c/u" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Bienvenida a la Amazonía",
        description:
          "Recepción y viaje fluvial al albergue. Orientación, almuerzo y primera caminata exploratoria por los alrededores del lago.",
        meals: ["Almuerzo", "Cena"],
        activities: [
          "Viaje en bote por el río",
          "Orientación y bienvenida",
          "Caminata corta exploratoria",
          "Observación del atardecer en el lago",
        ],
      },
      {
        day: 2,
        title: "Exploración del Bosque Primario",
        description:
          "Caminata extensa por el bosque primario con el guía naturalista. Aprendizaje sobre etnobotánica, árboles medicinales y la cadena alimenticia del ecosistema.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Caminata por bosque primario (6 horas)",
          "Estudio de etnobotánica",
          "Observación de monos araña",
          "Sesión de fotografía de naturaleza",
        ],
      },
      {
        day: 3,
        title: "El Lago y la Fauna Acuática",
        description:
          "Día dedicado al lago. Navegación al amanecer para aves, kayak por la mañana, descanso al mediodía y búsqueda de caimanes al anochecer.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Observación de aves al amanecer",
          "Paseo en kayak por el lago",
          "Tiempo libre y descanso",
          "Navegación nocturna para caimanes",
        ],
      },
      {
        day: 4,
        title: "Comunidad y Cultura",
        description:
          "Visita a la comunidad indígena. Conoce sus tradiciones, participa en talleres de artesanía y disfruta de una presentación cultural. Por la tarde, caminata por sendero del mirador.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Visita a la comunidad",
          "Taller de artesanías",
          "Presentación cultural",
          "Caminata al mirador panorámico",
        ],
      },
      {
        day: 5,
        title: "Último Amanecer y Regreso",
        description:
          "Amanecer contemplativo en el lago. Desayuno de despedida con la comunidad y viaje de retorno a Rurrenabaque.",
        meals: ["Desayuno"],
        activities: [
          "Amanecer en el lago",
          "Paseo final en canoa",
          "Despedida y viaje de retorno",
        ],
      },
    ],
    includes: [
      "Transporte fluvial ida y vuelta",
      "Alojamiento 4 noches",
      "Todas las comidas",
      "Guía naturalista bilingüe",
      "Botas de goma",
      "Kayak en el lago",
      "Visita a la comunidad",
      "Caminata nocturna",
      "Todas las actividades del itinerario",
      "Agua purificada",
    ],
    excludes: [
      "Pasaje aéreo a Rurrenabaque",
      "Bebidas alcohólicas",
      "Propinas",
      "Seguro de viaje",
    ],
    recommendations: [
      "Llevar ropa ligera y cómoda",
      "Protector solar biodegradable",
      "Repelente de insectos",
      "Linterna frontal",
      "Binoculares para observación de aves",
    ],
    whatToBring: [
      "Mochila de día",
      "Ropa ligera manga larga",
      "Impermeable",
      "Sombrero o gorra",
      "Linterna frontal",
      "Binoculares",
      "Cámara con lente zoom",
      "Cuaderno de notas",
    ],
    policies: [
      "Cancelación gratuita hasta 15 días antes",
      "50% cargo entre 7 y 14 días antes",
      "No reembolsable con menos de 7 días",
    ],
    ctaLabel: "Reservar Paquete Capibara",
  },
  {
    slug: "anta",
    title: "Paquete Anta",
    animalName: "Anta",
    duration: "6 días",
    nights: "5 noches",
    image: "/assets/packages/anta.jpg",
    shortDescription:
      "La experiencia más completa. Seis días para explorar cada rincón del parque, la cultura local y la vida silvestre en profundidad.",
    longDescription:
      "El Paquete Anta es nuestra experiencia premium y más completa. Con seis días y cinco noches, tendrás tiempo para recorrer todos los senderos, explorar zonas remotas del parque, participar en múltiples actividades culturales, realizar observación especializada de fauna y disfrutar de momentos de contemplación en uno de los ecosistemas más biodiversos del planeta.",
    regularPrice: [
      { people: "1 persona", price: "$680 USD" },
      { people: "2 personas", price: "$540 USD c/u" },
      { people: "3-4 personas", price: "$460 USD c/u" },
      { people: "5+ personas", price: "$410 USD c/u" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada y Primer Contacto",
        description:
          "Viaje desde Rurrenabaque al albergue. Bienvenida, acomodación y primera exploración vespertina.",
        meals: ["Almuerzo", "Cena"],
        activities: [
          "Viaje en bote por el río",
          "Llegada y bienvenida",
          "Caminata introductoria",
          "Atardecer en el lago",
        ],
      },
      {
        day: 2,
        title: "Senderos del Bosque Primario",
        description:
          "Exploración profunda del bosque primario. Identificación de especies arbóreas centenarias y búsqueda de fauna mayor.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Caminata extensa (6 horas)",
          "Observación de fauna mayor",
          "Estudio de árboles centenarios",
          "Caminata nocturna",
        ],
      },
      {
        day: 3,
        title: "Exploración Acuática",
        description:
          "Día dedicado al ecosistema acuático del lago y los arroyos circundantes. Kayak, natación y observación de vida acuática.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Observación de aves al amanecer",
          "Exploración en kayak",
          "Natación en arroyo natural",
          "Navegación nocturna",
        ],
      },
      {
        day: 4,
        title: "Senderos Remotos y Mirador",
        description:
          "Caminata a las zonas más remotas del parque. Ascenso al mirador principal con vistas panorámicas de la selva.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Caminata a zonas remotas",
          "Ascenso al mirador panorámico",
          "Fotografía de paisajes",
          "Observación de atardecer desde altura",
        ],
      },
      {
        day: 5,
        title: "Comunidad y Tradiciones",
        description:
          "Día completo con la comunidad indígena. Participación en actividades tradicionales, artesanías, cocina local y danzas.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Inmersión en la comunidad",
          "Taller de cocina tradicional",
          "Artesanías y tejidos",
          "Presentación de danzas tradicionales",
        ],
      },
      {
        day: 6,
        title: "Despedida de la Selva",
        description:
          "Último amanecer mágico en el lago. Ceremonia de despedida y viaje de regreso a Rurrenabaque con el corazón lleno de recuerdos.",
        meals: ["Desayuno"],
        activities: [
          "Amanecer contemplativo",
          "Ceremonia de despedida",
          "Viaje de retorno",
        ],
      },
    ],
    includes: [
      "Transporte fluvial ida y vuelta",
      "Alojamiento 5 noches",
      "Todas las comidas",
      "Guía naturalista bilingüe exclusivo",
      "Botas de goma",
      "Kayak y canoa",
      "Visita completa a la comunidad",
      "Taller de cocina tradicional",
      "Todas las caminatas y actividades",
      "Caminatas nocturnas",
      "Agua purificada",
    ],
    excludes: [
      "Pasaje aéreo a Rurrenabaque",
      "Bebidas alcohólicas",
      "Propinas",
      "Seguro de viaje",
    ],
    recommendations: [
      "Excelente condición física para caminatas largas",
      "Ropa técnica de secado rápido",
      "Protección solar y repelente",
      "Preparación para clima tropical",
    ],
    whatToBring: [
      "Mochila de día resistente al agua",
      "Ropa técnica de secado rápido",
      "Impermeable",
      "Sombrero",
      "2 linternas (frontal + mano)",
      "Binoculares de calidad",
      "Cámara con lente zoom y macro",
      "Libreta de campo",
      "Candado pequeño",
    ],
    policies: [
      "Cancelación gratuita hasta 20 días antes",
      "50% cargo entre 10 y 19 días antes",
      "No reembolsable con menos de 10 días",
    ],
    ctaLabel: "Reservar Paquete Anta",
  },
];

/** Package options for reservation form */
export const packageOptions = [
  { value: "jochi", label: "Jochi — 3 días / 2 noches" },
  { value: "pecari", label: "Pecarí — 4 días / 3 noches" },
  { value: "capibara", label: "Capibara — 5 días / 4 noches" },
  { value: "anta", label: "Anta — 6 días / 5 noches" },
  { value: "medida", label: "Paquete a Medida" },
];

/** Room type options */
export const roomOptions = [
  "Doble con baño privado",
  "Doble con baño compartido",
  "Triple con baño privado",
  "Matrimonial con baño privado",
  "Necesito 2 habitaciones o más",
];

/** People count options */
export const peopleOptions = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Más de 10",
];
