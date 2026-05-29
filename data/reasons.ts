/* ============================================
   REASONS TO VISIT
   Edit reasons displayed on the home page
   ============================================ */

export interface Reason {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    icon: "MapPin",
    title: "Ruta San Borja - Monte Rosa",
    description:
      "Recorrido comunitario por Galilea, San Antonio, Campo Bello y Monte Rosa, combinando transporte terrestre, canoa y caminatas locales.",
  },
  {
    icon: "Leaf",
    title: "Turismo Comunitario Solidario",
    description:
      "Una propuesta que integra conservación ambiental, beneficio social y revalorización de recursos naturales y culturales.",
  },
  {
    icon: "Languages",
    title: "Guía Nativo",
    description:
      "Acompañamiento local para interpretar senderos, ríos, historia comunitaria, gastronomía y saberes tradicionales.",
  },
  {
    icon: "Footprints",
    title: "Recorridos Internos",
    description:
      "Caminatas comunitarias de dificultad media, con recorridos aproximados de 3 horas de ida y 3 horas de vuelta.",
  },
  {
    icon: "Award",
    title: "Comunidades Tsimanes",
    description:
      "Convivencia con San Antonio, Campo Bello y Monte Rosa, donde se encuentran espacios de hospedaje y cultura local.",
  },
  {
    icon: "Clock",
    title: "Experiencias por Duración",
    description:
      "Paquetes de 2 a 5 días para elegir entre visita a una comunidad, recorrido ampliado, experiencia integral o ruta extendida.",
  },
];
