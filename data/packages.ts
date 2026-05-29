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

const commonIncludes = [
  "Transfer local coordinado para la ruta",
  "Actividades guiadas",
  "Guía nativo",
  "Transporte por el río",
  "Alimentación durante la experiencia",
  "Agua embotellada",
  "Bebidas típicas",
  "Hospedaje en cabañas comunitarias",
];

const commonExcludes = [
  "Pasajes aéreos",
  "Hotel en San Borja",
  "Ingreso a la Biosfera",
  "Otras bebidas",
  "Alimentación en San Borja",
  "Seguro de viaje, impuesto aeroportuario, propinas y seguro médico",
];

const commonRecommendations = [
  "Llevar agua suficiente para los recorridos",
  "Usar protección solar y gorra",
  "Vestir ropa adecuada para clima variable",
  "Utilizar calzado antideslizante",
  "Portar botiquín personal",
  "Llevar una bolsa para residuos",
];

const commonWhatToBring = [
  "Documento personal",
  "Mochila de día",
  "Ropa ligera de manga larga",
  "Impermeable liviano",
  "Calzado cerrado antideslizante",
  "Gorra o sombrero",
  "Protector solar",
  "Repelente",
  "Botiquín personal",
  "Bolsa para residuos",
];

const commonPolicies = [
  "La ruta tiene dificultad técnica general moderada.",
  "Los tiempos pueden variar por clima, estado de caminos rurales y nivel del río.",
  "Los recorridos internos por comunidad son aproximados y pueden ajustarse por coordinación local.",
  "La experiencia prioriza el respeto a las comunidades, sus tiempos y sus normas de convivencia.",
];

const routePrice = [{ people: "Valor por persona", price: "$980.000" }];

export const packages: Package[] = [
  {
    slug: "jochi",
    title: "Paquete Jochi",
    animalName: "Jochi",
    duration: "3 días",
    nights: "2 noches",
    image: "/assets/packages/jochi.jpg",
    shortDescription:
      "Conecta con la vida del bosque en San Antonio y Campo Bello, con traslado comunitario, actividades culturales y navegación por ríos místicos.",
    longDescription:
      "El Paquete Jochi propone una experiencia amazónica de 3 días y 2 noches para convivir con comunidades Tsimanes de San Antonio y Campo Bello. La ruta combina recepción comunitaria, hospedaje en eco-cabañas, caminatas por senderos naturales, pesca artesanal, gastronomía local, tejido tradicional y descanso en cabañas comunitarias.",
    regularPrice: routePrice,
    itinerary: [
      {
        day: 1,
        title: "Llegada a Campo Bello",
        description:
          "Recepción en San Borja y traslado hacia Campo Bello. Al llegar se realiza el registro en eco-cabañas, bienvenida comunitaria, actividades culturales y cena local.",
        meals: ["Cena"],
        activities: [
          "Recepción en San Borja",
          "Traslado a Campo Bello",
          "Registro y acomodación en eco-cabañas",
          "Muestra cultural con fogata interactiva",
          "Cena basada en pescado y productos locales",
        ],
      },
      {
        day: 2,
        title: "San Antonio, Puerto Belén y Campo Bello",
        description:
          "Jornada de recorrido comunitario entre San Antonio y Campo Bello, con caminata hacia Puerto Belén, pesca artesanal, retorno en canoa y actividades tradicionales.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Desayuno con frutas de temporada, huevos y café del lugar",
          "Traslado San Antonio - Campo Bello",
          "Caminata a Puerto Belén por senderos naturales",
          "Pesca artesanal con técnicas locales",
          "Retorno en canoa a Campo Bello",
          "Almuerzo comunitario",
          "Taller de artesanía, cocina tradicional y participación comunitaria",
        ],
      },
      {
        day: 3,
        title: "Despedida y retorno",
        description:
          "Desayuno comunitario, cierre de actividades y retorno coordinado hacia San Borja para continuar viaje.",
        meals: ["Desayuno"],
        activities: [
          "Desayuno comunitario",
          "Despedida con la comunidad",
          "Retorno Campo Bello - San Borja",
          "Coordinación para retorno San Borja - La Paz",
        ],
      },
    ],
    includes: commonIncludes,
    excludes: commonExcludes,
    recommendations: commonRecommendations,
    whatToBring: commonWhatToBring,
    policies: commonPolicies,
    ctaLabel: "Reservar Paquete Jochi",
  },
  {
    slug: "paraba-azul",
    title: "Paquete Paraba Azul",
    animalName: "Paraba Azul",
    duration: "4 días",
    nights: "3 noches",
    image: "/assets/packages/paraba-azul.jpg",
    shortDescription:
      "Vuela sobre la Amazonía en una ruta ampliada por Galilea, San Antonio, Campo Bello y Monte Rosa.",
    longDescription:
      "El Paquete Paraba Azul extiende la ruta comunitaria a 4 días y 3 noches. Incluye la visita a Galilea, convivencia en San Antonio, recorrido por Campo Bello, navegación hacia Monte Rosa, caminatas, gastronomía, danza tradicional, fogata, pesca y descanso en cabañas comunitarias.",
    regularPrice: routePrice,
    itinerary: [
      {
        day: 1,
        title: "Galilea y San Antonio",
        description:
          "Inicio en San Borja con visita a Galilea y traslado a San Antonio para recepción comunitaria, almuerzo tradicional, ruta del chocolate, danza y fogata.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Recepción y breve descanso en San Borja",
          "Visita a Galilea y desayuno tradicional",
          "Traslado a San Antonio",
          "Almuerzo tradicional con comida típica tsimane",
          "Caminata por la Ruta del Chocolate",
          "Danza tradicional, fogata y cena comunitaria",
        ],
      },
      {
        day: 2,
        title: "Campo Bello y Puerto Belén",
        description:
          "Traslado hacia Campo Bello, caminata a Puerto Belén y actividades productivas con pesca, tejidos y cocina local.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Traslado San Antonio - Campo Bello",
          "Recepción y acomodación",
          "Caminata hacia Puerto Belén",
          "Pesca tradicional en Puerto Belén",
          "Preparación de almuerzo comunitario",
          "Demostración de tejidos Maricos",
          "Fogata, cena y descanso en eco-cabañas",
        ],
      },
      {
        day: 3,
        title: "Monte Rosa",
        description:
          "Navegación en canoa hacia Monte Rosa, recepción en cabañas, caminata a laguna, pesca tradicional y convivencia comunitaria.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Preparación para traslado fluvial",
          "Viaje en canoa a Monte Rosa",
          "Recepción y acomodación en cabañas",
          "Caminata a la laguna y pesca tradicional",
          "Retorno a cabañas",
          "Fogata y cantos originarios",
        ],
      },
      {
        day: 4,
        title: "Taller y retorno",
        description:
          "Cierre de experiencia con taller artesanal, almuerzo de despedida y retorno fluvial y terrestre hacia San Borja.",
        meals: ["Desayuno", "Almuerzo"],
        activities: [
          "Desayuno regional",
          "Taller de alfarería artesanal",
          "Almuerzo de despedida",
          "Retorno fluvial hacia Campo Bello",
          "Traslado Campo Bello - San Borja",
        ],
      },
    ],
    includes: commonIncludes,
    excludes: commonExcludes,
    recommendations: commonRecommendations,
    whatToBring: commonWhatToBring,
    policies: commonPolicies,
    ctaLabel: "Reservar Paquete Paraba Azul",
  },
  {
    slug: "peta",
    title: "Paquete Peta",
    animalName: "Peta",
    duration: "5 días",
    nights: "4 noches",
    image: "/assets/packages/peta.jpg",
    shortDescription:
      "Navega la esencia del río con la experiencia integral: comunidades, Ruta del Cacao, artesanías y Monte Rosa.",
    longDescription:
      "El Paquete Peta es la experiencia integral de 5 días y 4 noches. Recorre Galilea, San Antonio, Pinar del Río, Campo Bello y Monte Rosa, combinando la Ruta del Cacao, asociaciones de mujeres artesanas, pesca tradicional, tejidos, cestería, arquería, navegación fluvial y convivencia comunitaria.",
    regularPrice: routePrice,
    itinerary: [
      {
        day: 1,
        title: "Galilea y San Antonio",
        description:
          "Recepción en San Borja, visita a Galilea, traslado a San Antonio, recepción comunitaria y primera noche con demostraciones culturales.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Visita a Galilea y desayuno tradicional",
          "Traslado a San Antonio",
          "Recepción y acomodación",
          "Almuerzo tradicional tsimane",
          "Demostración de tejidos",
          "Paseo artesanal",
          "Fogata y cena comunitaria",
        ],
      },
      {
        day: 2,
        title: "Pinar del Río y Ruta del Cacao",
        description:
          "Jornada dedicada al cacao amazónico, con recorrido ampliado, elaboración artesanal y convivencia con productores locales.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Traslado a Pinar del Río",
          "Ruta ampliada del cacao",
          "Recorrido por charcos de cacao y elaboración artesanal",
          "Almuerzo tradicional",
          "Caminata comunitaria",
          "Danza tradicional y cena",
        ],
      },
      {
        day: 3,
        title: "Campo Bello",
        description:
          "Ingreso a Campo Bello para conocer sus eco-cabañas, pesca tradicional, alimentación local, tejidos y cestería.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Traslado a Campo Bello",
          "Recepción y acomodación",
          "Pesca tradicional",
          "Almuerzo comunitario",
          "Demostración de tejidos y cestería",
          "Fogata comunitaria",
        ],
      },
      {
        day: 4,
        title: "Monte Rosa",
        description:
          "Tramo fluvial en canoa hasta Monte Rosa, con taller de arquería, elaboración de arcos y flechas, cantos tradicionales y noche en cabañas.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Viaje fluvial a Monte Rosa",
          "Recepción y acomodación",
          "Almuerzo tradicional",
          "Taller de arquería",
          "Elaboración de arcos y flechas",
          "Fogata y cantos tradicionales",
        ],
      },
      {
        day: 5,
        title: "Cierre y retorno",
        description:
          "Desayuno regional, actividad final, retorno fluvial hacia Campo Bello y traslado terrestre hacia San Borja.",
        meals: ["Desayuno", "Almuerzo"],
        activities: [
          "Desayuno regional",
          "Caminata y pesca con arco",
          "Almuerzo de despedida",
          "Retorno fluvial a Campo Bello",
          "Retorno a San Borja",
        ],
      },
    ],
    includes: commonIncludes,
    excludes: commonExcludes,
    recommendations: commonRecommendations,
    whatToBring: commonWhatToBring,
    policies: commonPolicies,
    ctaLabel: "Reservar Paquete Peta",
  },
  {
    slug: "perezoso",
    title: "Paquete Perezoso",
    animalName: "Perezoso",
    duration: "2 días",
    nights: "1 noche",
    image: "/assets/packages/perezoso.jpg",
    shortDescription:
      "Desconéctate y vive la selva en una experiencia nacional de 2 días, con opción de comunidad anfitriona.",
    longDescription:
      "El Paquete Perezoso está pensado como una visita nacional de 2 días y 1 noche. Permite vivir una experiencia breve en una comunidad anfitriona, con opciones de ruta hacia San Antonio, Campo Bello o Monte Rosa, actividades culturales, gastronomía local, descanso en cabañas y retorno coordinado a San Borja.",
    regularPrice: routePrice,
    itinerary: [
      {
        day: 1,
        title: "Llegada a la comunidad elegida",
        description:
          "Recepción en San Borja y traslado a la comunidad anfitriona. Según coordinación, la experiencia puede realizarse en San Antonio, Campo Bello o Monte Rosa.",
        meals: ["Desayuno", "Almuerzo", "Cena"],
        activities: [
          "Recepción y breve descanso en San Borja",
          "Traslado a Galilea y visita artesanal",
          "Ingreso a San Antonio, Campo Bello o Monte Rosa",
          "Recepción comunitaria y acomodación",
          "Comida típica tsimane",
          "Actividad cultural según comunidad: tejidos, pesca, arquería, fogata o cantos tradicionales",
          "Noche en eco-cabañas",
        ],
      },
      {
        day: 2,
        title: "Actividad local y retorno",
        description:
          "Desayuno comunitario, actividad práctica local, cierre con la comunidad y retorno a San Borja.",
        meals: ["Desayuno", "Almuerzo"],
        activities: [
          "Desayuno con productos tradicionales y frutas locales",
          "Demostración de tejidos, pesca o taller artesanal",
          "Tiempo de compra de productos artesanales locales",
          "Almuerzo o comida típica de despedida",
          "Fotografías y cierre de actividades",
          "Retorno a San Borja",
        ],
      },
    ],
    includes: commonIncludes,
    excludes: commonExcludes,
    recommendations: commonRecommendations,
    whatToBring: commonWhatToBring,
    policies: [
      ...commonPolicies,
      "Paquete orientado a visitantes nacionales según la ficha del PDF.",
    ],
    ctaLabel: "Reservar Paquete Perezoso",
  },
];

/** Package options for reservation form */
export const packageOptions = [
  { value: "jochi", label: "Jochi — 3 días / 2 noches" },
  { value: "paraba-azul", label: "Paraba Azul — 4 días / 3 noches" },
  { value: "peta", label: "Peta — 5 días / 4 noches" },
  { value: "perezoso", label: "Perezoso — 2 días / 1 noche" },
  { value: "medida", label: "Ruta o comunidad a coordinar" },
];

/** Room type options */
export const roomOptions = [
  "Cabaña comunitaria compartida",
  "Cabaña comunitaria privada",
  "Necesito 2 habitaciones o más",
  "A definir según disponibilidad",
];

/** People count options */
export const peopleOptions = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Más de 10",
];
