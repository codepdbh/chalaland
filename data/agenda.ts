export const agendaYear = 2027;

export type AgendaStatus = "recommended" | "caution" | "not-recommended";

export type PackageTone =
  | "national"
  | "international-3"
  | "international-4"
  | "international-5";

export interface AgendaEvent {
  week: string;
  startDay: number;
  endDay: number;
  displayDates: string;
  packageName: string;
  duration: string;
  audience: "Nacional" | "Internacional";
  tone: PackageTone;
  tentative?: boolean;
}

export interface AgendaMonth {
  name: string;
  slug: string;
  monthNumber: number;
  status: AgendaStatus;
  guidance: string;
  recommendation: string;
  events: AgendaEvent[];
}

export const agendaLegend = [
  {
    label: "Nacionales",
    detail: "2 días / 1 noche",
    tone: "national" as const,
  },
  {
    label: "Internacional",
    detail: "3 días / 2 noches",
    tone: "international-3" as const,
  },
  {
    label: "Internacional",
    detail: "4 días / 3 noches",
    tone: "international-4" as const,
  },
  {
    label: "Internacional",
    detail: "5 días / 4 noches",
    tone: "international-5" as const,
  },
];

export const agendaSeasons = [
  {
    title: "Temporada de lluvias",
    period: "Febrero - Abril",
    status: "not-recommended" as const,
    description:
      "Época no recomendada para viajes debido a lluvias intensas, crecida del río Maniquí, inundaciones y caminos intransitables. Las actividades turísticas pueden suspenderse o reprogramarse según las condiciones climáticas.",
  },
  {
    title: "Temporada fría y seca",
    period: "Mayo - Julio",
    status: "recommended" as const,
    description:
      "Mejor época para visitar las comunidades Tsimane. Clima fresco, menor humedad y condiciones ideales para caminatas, navegación, observación de fauna y actividades culturales.",
  },
  {
    title: "Temporada de calor y sequía",
    period: "Agosto - Diciembre",
    status: "caution" as const,
    description:
      "Periodo con aumento gradual de temperaturas y fuerte radiación solar. Entre noviembre y diciembre se registran temperaturas extremas y bajos niveles de agua. Se recomienda hidratación constante, ropa ligera y protección solar.",
  },
];

export const agendaMonths: AgendaMonth[] = [
  {
    name: "Enero",
    slug: "enero",
    monthNumber: 1,
    status: "caution",
    guidance: "Disponible con flexibilidad por lluvias intensas.",
    recommendation:
      "Temporada de lluvias intensas en la Amazonía beniana. Las rutas pueden presentar barro, crecida de ríos y retrasos en los desplazamientos. Se recomienda flexibilidad en horarios y posibles ajustes de itinerario según las condiciones climáticas. Llevar impermeable, botas de goma, ropa de secado rápido y protección para equipos electrónicos.",
    events: [
      {
        week: "Semana 1",
        startDay: 2,
        endDay: 3,
        displayDates: "2 - 3",
        packageName: "Paquete Completo",
        duration: "2D / 1N",
        audience: "Internacional",
        tone: "national",
      },
      {
        week: "Semana 2",
        startDay: 5,
        endDay: 9,
        displayDates: "5 - 9",
        packageName: "Ruta Cultural San Antonio",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 3",
        startDay: 12,
        endDay: 15,
        displayDates: "12 - 15",
        packageName: "Experiencia Campo Bello",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 3",
        startDay: 16,
        endDay: 17,
        displayDates: "16 - 17",
        packageName: "Experiencia Campo Bello",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 4",
        startDay: 19,
        endDay: 21,
        displayDates: "19 - 21",
        packageName: "Escapada Monte Rosa",
        duration: "3D / 2N",
        audience: "Nacional",
        tone: "international-3",
      },
      {
        week: "Semana 4",
        startDay: 23,
        endDay: 24,
        displayDates: "23 - 24",
        packageName: "Escapada Monte Rosa",
        duration: "2D / 1N",
        audience: "Internacional",
        tone: "national",
      },
      {
        week: "Semana 5",
        startDay: 26,
        endDay: 30,
        displayDates: "26 - 30",
        packageName: "Escapada Monte Rosa",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
    ],
  },
  {
    name: "Febrero",
    slug: "febrero",
    monthNumber: 2,
    status: "not-recommended",
    guidance: "No recomendado para cerrar reservas sin confirmación previa.",
    recommendation:
      "Persisten lluvias frecuentes y alta humedad. Algunas actividades podrán modificarse por seguridad, especialmente caminatas largas o cruces fluviales. Se recomienda hidratación constante, repelente contra insectos y ropa adecuada para lluvia y calor húmedo.",
    events: [
      {
        week: "Semana 1",
        startDay: 2,
        endDay: 5,
        displayDates: "2 - 5",
        packageName: "Ruta Cultural San Antonio",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 1",
        startDay: 6,
        endDay: 7,
        displayDates: "6 - 7",
        packageName: "Ruta Cultural San Antonio",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 2",
        startDay: 10,
        endDay: 12,
        displayDates: "10 - 12",
        packageName: "Ruta Cultural San Antonio",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
      {
        week: "Semana 2",
        startDay: 13,
        endDay: 14,
        displayDates: "13 - 14",
        packageName: "Ruta Cultural San Antonio",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 3",
        startDay: 16,
        endDay: 20,
        displayDates: "16 - 20",
        packageName: "Experiencia Campo Bello",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 4",
        startDay: 23,
        endDay: 27,
        displayDates: "23 - 27",
        packageName: "Escapada Monte Rosa",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
    ],
  },
  {
    name: "Marzo",
    slug: "marzo",
    monthNumber: 3,
    status: "not-recommended",
    guidance: "Reservas tentativas y sujetas a clima.",
    recommendation:
      "Continúan precipitaciones variables y caminos con difícil acceso en ciertos sectores. Las fechas operativas están sujetas a cambios por inclemencias climáticas; confirmar disponibilidad antes de programar la reserva.",
    events: [
      {
        week: "Semana 4",
        startDay: 23,
        endDay: 25,
        displayDates: "23 - 25",
        packageName: "Ruta Completa Tsimane",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
        tentative: true,
      },
      {
        week: "Semana 4",
        startDay: 27,
        endDay: 28,
        displayDates: "27 - 28",
        packageName: "Ruta Completa Tsimane",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
        tentative: true,
      },
    ],
  },
  {
    name: "Abril",
    slug: "abril",
    monthNumber: 4,
    status: "not-recommended",
    guidance: "Reservas tentativas por transición climática.",
    recommendation:
      "Mes de transición climática. Aunque disminuyen las lluvias, aún pueden presentarse tormentas aisladas y descensos bruscos de temperatura o surazos. Se recomienda confirmar antes de reservar.",
    events: [
      {
        week: "Semana 1",
        startDay: 1,
        endDay: 3,
        displayDates: "01 - 03",
        packageName: "Escapada Monte Rosa",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
        tentative: true,
      },
      {
        week: "Semana 4",
        startDay: 27,
        endDay: 30,
        displayDates: "27 - 30",
        packageName: "Ruta Completa Tsimane",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
        tentative: true,
      },
    ],
  },
  {
    name: "Mayo",
    slug: "mayo",
    monthNumber: 5,
    status: "recommended",
    guidance: "Inicio de temporada más estable.",
    recommendation:
      "Inicio de temporada más estable; sin embargo, pueden registrarse frentes fríos ocasionales. Se recomienda llevar chaqueta impermeable ligera y ropa cómoda para caminatas prolongadas.",
    events: [
      {
        week: "Semana 1",
        startDay: 1,
        endDay: 2,
        displayDates: "1 - 2",
        packageName: "Ruta Completa Tsimane",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 2",
        startDay: 4,
        endDay: 8,
        displayDates: "4 - 8",
        packageName: "Ruta Cultural San Antonio",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 3",
        startDay: 11,
        endDay: 14,
        displayDates: "11 - 14",
        packageName: "Experiencia Campo Bello",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 3",
        startDay: 18,
        endDay: 20,
        displayDates: "18 - 20",
        packageName: "Experiencia Campo Bello",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 4",
        startDay: 27,
        endDay: 29,
        displayDates: "27 - 29",
        packageName: "Escapada Monte Rosa",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 5",
        startDay: 25,
        endDay: 27,
        displayDates: "25 - 27",
        packageName: "Escapada Monte Rosa",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
      {
        week: "Semana 5",
        startDay: 29,
        endDay: 30,
        displayDates: "29 - 30",
        packageName: "Escapada Monte Rosa",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
    ],
  },
  {
    name: "Junio",
    slug: "junio",
    monthNumber: 6,
    status: "recommended",
    guidance: "Operativo con precaución por frío moderado.",
    recommendation:
      "Época de frío moderado y posibles surazos amazónicos. Aunque las rutas permanecen habilitadas, se deben tomar recaudos ante cambios bruscos de temperatura durante la noche y madrugada. Llevar abrigo liviano, ropa térmica ligera y protección contra viento y humedad.",
    events: [
      {
        week: "Semana 1",
        startDay: 1,
        endDay: 5,
        displayDates: "01 - 05",
        packageName: "Ruta Completa Tsimane",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 2",
        startDay: 8,
        endDay: 12,
        displayDates: "08 - 12",
        packageName: "Ruta Cultural San Antonio",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 3",
        startDay: 15,
        endDay: 18,
        displayDates: "15 - 18",
        packageName: "Experiencia Campo Bello",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 3",
        startDay: 19,
        endDay: 20,
        displayDates: "19 - 20",
        packageName: "Experiencia Campo Bello",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 4",
        startDay: 22,
        endDay: 24,
        displayDates: "22 - 24",
        packageName: "Escapada Monte Rosa",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
      {
        week: "Semana 4",
        startDay: 26,
        endDay: 27,
        displayDates: "26 - 27",
        packageName: "Escapada Monte Rosa",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
    ],
  },
  {
    name: "Julio",
    slug: "julio",
    monthNumber: 7,
    status: "recommended",
    guidance: "Temporada seca parcial, operativa con abrigo.",
    recommendation:
      "Temporada seca parcial con descensos de temperatura frecuentes. Las actividades continúan operativas, pero podrían ajustarse por condiciones climáticas extremas. Se recomienda portar ropa de abrigo, especialmente para actividades matutinas y nocturnas.",
    events: [
      {
        week: "Semana 1",
        startDay: 1,
        endDay: 3,
        displayDates: "1 - 3",
        packageName: "Ruta Completa Tsimane",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
      {
        week: "Semana 2",
        startDay: 6,
        endDay: 10,
        displayDates: "6 - 10",
        packageName: "Ruta Cultural San Antonio",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 3",
        startDay: 13,
        endDay: 16,
        displayDates: "13 - 16",
        packageName: "Experiencia Campo Bello",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 3",
        startDay: 17,
        endDay: 18,
        displayDates: "17 - 18",
        packageName: "Experiencia Campo Bello",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 4",
        startDay: 20,
        endDay: 23,
        displayDates: "20 - 23",
        packageName: "Escapada Monte Rosa",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 4",
        startDay: 24,
        endDay: 25,
        displayDates: "24 - 25",
        packageName: "Escapada Monte Rosa",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 5",
        startDay: 27,
        endDay: 31,
        displayDates: "27 - 31",
        packageName: "Escapada Monte Rosa",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
    ],
  },
  {
    name: "Agosto",
    slug: "agosto",
    monthNumber: 8,
    status: "caution",
    guidance: "Operativo con precaución por calor, humo y frentes fríos.",
    recommendation:
      "Clima variable entre calor y frentes fríos. Posible presencia de humo ambiental por chaqueos en algunas zonas. Se recomienda mantenerse hidratado, usar protección solar y mascarilla en caso de sensibilidad respiratoria.",
    events: [
      {
        week: "Semana 1",
        startDay: 3,
        endDay: 5,
        displayDates: "03 - 05",
        packageName: "Ruta Completa Tsimane",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
      {
        week: "Semana 1",
        startDay: 7,
        endDay: 8,
        displayDates: "07 - 08",
        packageName: "Ruta Completa Tsimane",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 2",
        startDay: 10,
        endDay: 14,
        displayDates: "10 - 14",
        packageName: "Ruta Cultural San Antonio",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 3",
        startDay: 17,
        endDay: 20,
        displayDates: "17 - 20",
        packageName: "Experiencia Campo Bello",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 3",
        startDay: 21,
        endDay: 22,
        displayDates: "21 - 22",
        packageName: "Experiencia Campo Bello",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 4",
        startDay: 27,
        endDay: 28,
        displayDates: "27 - 28",
        packageName: "Escapada Monte Rosa",
        duration: "2D / 1N",
        audience: "Internacional",
        tone: "international-5",
      },
    ],
  },
  {
    name: "Septiembre",
    slug: "septiembre",
    monthNumber: 9,
    status: "caution",
    guidance: "Disponible con monitoreo de lluvias aisladas.",
    recommendation:
      "Incremento gradual de temperaturas y humedad. Algunas lluvias aisladas pueden afectar temporalmente accesos secundarios. Se recomienda mantenerse atento a comunicados operativos y portar protección solar e impermeable ligero.",
    events: [
      {
        week: "Semana 1",
        startDay: 1,
        endDay: 3,
        displayDates: "01 - 03",
        packageName: "Ruta Completa Tsimane",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
      {
        week: "Semana 1",
        startDay: 4,
        endDay: 5,
        displayDates: "04 - 05",
        packageName: "Ruta Completa Tsimane",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 2",
        startDay: 7,
        endDay: 11,
        displayDates: "07 - 11",
        packageName: "Ruta Cultural San Antonio",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 3",
        startDay: 14,
        endDay: 17,
        displayDates: "14 - 17",
        packageName: "Experiencia Campo Bello",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 3",
        startDay: 18,
        endDay: 19,
        displayDates: "18 - 19",
        packageName: "Experiencia Campo Bello",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 4",
        startDay: 21,
        endDay: 25,
        displayDates: "21 - 25",
        packageName: "Escapada Monte Rosa",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 5",
        startDay: 28,
        endDay: 30,
        displayDates: "28 - 30",
        packageName: "Escapada Monte Rosa",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
    ],
  },
  {
    name: "Octubre",
    slug: "octubre",
    monthNumber: 10,
    status: "caution",
    guidance: "Disponible con cambios preventivos por inicio de lluvias.",
    recommendation:
      "Inicio progresivo de lluvias en varias comunidades. Las rutas siguen habilitadas, aunque sujetas a modificaciones preventivas por seguridad climática. Se recomienda llevar botas adecuadas y ropa para ambientes húmedos.",
    events: [
      {
        week: "Semana 1",
        startDay: 1,
        endDay: 2,
        displayDates: "01 - 02",
        packageName: "Ruta Completa Tsimane",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 2",
        startDay: 5,
        endDay: 9,
        displayDates: "05 - 09",
        packageName: "Ruta Cultural San Antonio",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 3",
        startDay: 12,
        endDay: 14,
        displayDates: "12 - 14",
        packageName: "Experiencia Campo Bello",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
      {
        week: "Semana 3",
        startDay: 16,
        endDay: 17,
        displayDates: "16 - 17",
        packageName: "Experiencia Campo Bello",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 4",
        startDay: 19,
        endDay: 23,
        displayDates: "19 - 23",
        packageName: "Escapada Monte Rosa",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 5",
        startDay: 26,
        endDay: 29,
        displayDates: "26 - 29",
        packageName: "Escapada Monte Rosa",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 5",
        startDay: 30,
        endDay: 31,
        displayDates: "30 - 31",
        packageName: "Escapada Monte Rosa",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
    ],
  },
  {
    name: "Noviembre",
    slug: "noviembre",
    monthNumber: 11,
    status: "caution",
    guidance: "Temporada lluviosa en aumento; reservar con flexibilidad.",
    recommendation:
      "Temporada lluviosa en aumento. Posibles retrasos logísticos por estado de caminos y ríos. Las actividades podrán reorganizarse dependiendo de las condiciones meteorológicas. Se recomienda flexibilidad en itinerarios y protección impermeable completa.",
    events: [
      {
        week: "Semana 1",
        startDay: 3,
        endDay: 5,
        displayDates: "03 - 05",
        packageName: "Ruta Completa Tsimane",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
      {
        week: "Semana 1",
        startDay: 6,
        endDay: 7,
        displayDates: "06 - 07",
        packageName: "Ruta Completa Tsimane",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 2",
        startDay: 9,
        endDay: 13,
        displayDates: "09 - 13",
        packageName: "Ruta Cultural San Antonio",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 3",
        startDay: 16,
        endDay: 20,
        displayDates: "16 - 20",
        packageName: "Experiencia Campo Bello",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 4",
        startDay: 23,
        endDay: 26,
        displayDates: "23 - 26",
        packageName: "Escapada Monte Rosa",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 4",
        startDay: 27,
        endDay: 28,
        displayDates: "27 - 28",
        packageName: "Escapada Monte Rosa",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
    ],
  },
  {
    name: "Diciembre",
    slug: "diciembre",
    monthNumber: 12,
    status: "caution",
    guidance: "Lluvias constantes; confirmar cupos y seguridad antes de viajar.",
    recommendation:
      "Lluvias constantes y alta humedad ambiental. Aunque el ingreso a las comunidades continúa habilitado, los visitantes deberán tomar precauciones adicionales por posibles cambios climáticos repentinos. Se recomienda equipo impermeable, repelente, medicamentos personales y seguir todas las indicaciones de seguridad del equipo guía.",
    events: [
      {
        week: "Semana 1",
        startDay: 1,
        endDay: 3,
        displayDates: "01 - 03",
        packageName: "Ruta Completa Tsimane",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
      {
        week: "Semana 1",
        startDay: 4,
        endDay: 5,
        displayDates: "04 - 05",
        packageName: "Ruta Completa Tsimane",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 2",
        startDay: 7,
        endDay: 11,
        displayDates: "07 - 11",
        packageName: "Ruta Cultural San Antonio",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 3",
        startDay: 14,
        endDay: 18,
        displayDates: "14 - 18",
        packageName: "Experiencia Campo Bello",
        duration: "5D / 4N",
        audience: "Internacional",
        tone: "international-5",
      },
      {
        week: "Semana 4",
        startDay: 21,
        endDay: 24,
        displayDates: "21 - 24",
        packageName: "Escapada Monte Rosa",
        duration: "4D / 3N",
        audience: "Internacional",
        tone: "international-4",
      },
      {
        week: "Semana 4",
        startDay: 25,
        endDay: 26,
        displayDates: "25 - 26",
        packageName: "Escapada Monte Rosa",
        duration: "2D / 1N",
        audience: "Nacional",
        tone: "national",
      },
      {
        week: "Semana 4",
        startDay: 28,
        endDay: 30,
        displayDates: "28 - 30",
        packageName: "Escapada Monte Rosa",
        duration: "3D / 2N",
        audience: "Internacional",
        tone: "international-3",
      },
    ],
  },
];

export type AgendaNoticeStatus =
  | "available"
  | "caution"
  | "not-recommended"
  | "outside-window"
  | "outside-year";

export interface AgendaDateNotice {
  status: AgendaNoticeStatus;
  title: string;
  message: string;
  month?: AgendaMonth;
  event?: AgendaEvent;
}

export function getAgendaNoticeForDate(value?: string): AgendaDateNotice | null {
  if (!value) return null;

  const [year, monthNumber, day] = value.split("-").map(Number);
  if (!year || !monthNumber || !day) return null;

  if (year !== agendaYear) {
    return {
      status: "outside-year",
      title: "Agenda no publicada para ese año",
      message:
        "El cronograma cargado corresponde a 2027. Para otros años, solicita confirmación directa antes de reservar.",
    };
  }

  const month = agendaMonths.find((item) => item.monthNumber === monthNumber);
  if (!month) return null;

  const event = month.events.find(
    (item) => day >= item.startDay && day <= item.endDay
  );

  if (!event) {
    return {
      status: "outside-window",
      title: "Fecha fuera de ventanas operativas",
      message: `${month.name} tiene ventanas definidas en la agenda, pero el día ${day} no aparece como fecha operativa. Consulta disponibilidad antes de continuar.`,
      month,
    };
  }

  if (event.tentative || month.status === "not-recommended") {
    return {
      status: "not-recommended",
      title: "Fecha no recomendada o tentativa",
      message: `${month.name} está marcado como temporada no recomendada o tentativa. Evita cerrar la reserva sin confirmación del equipo.`,
      month,
      event,
    };
  }

  if (month.status === "caution") {
    return {
      status: "caution",
      title: "Fecha operativa con precaución",
      message: `${event.displayDates} de ${month.name}: ${event.packageName}, ${event.duration}. Confirmaremos clima, cupos y logística antes de cerrar la reserva.`,
      month,
      event,
    };
  }

  return {
    status: "available",
    title: "Fecha dentro de la agenda operativa",
    message: `${event.displayDates} de ${month.name}: ${event.packageName}, ${event.duration}. Aun así, la reserva queda sujeta a confirmación de cupos.`,
    month,
    event,
  };
}
