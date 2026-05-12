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
    title: "Ubicación Privilegiada",
    description:
      "Ubicado en el corazón de un parque nacional, rodeado de la biodiversidad más rica del continente.",
  },
  {
    icon: "Leaf",
    title: "Turismo Responsable",
    description:
      "Modelo de turismo sostenible y comunitario reconocido internacionalmente.",
  },
  {
    icon: "Languages",
    title: "Guías Bilingües",
    description:
      "Guías naturalistas bilingües intérpretes del bosque amazónico e historia natural.",
  },
  {
    icon: "Footprints",
    title: "Senderos de Interpretación",
    description:
      "Más de 50 kilómetros de senderos cuidadosamente trazados para la exploración.",
  },
  {
    icon: "Award",
    title: "Premios Internacionales",
    description:
      "Ganadores de múltiples premios internacionales de turismo sostenible.",
  },
  {
    icon: "Clock",
    title: "Más Tiempo en la Naturaleza",
    description:
      "Itinerarios diseñados para maximizar el tiempo explorando el parque nacional.",
  },
  {
    icon: "Waves",
    title: "Lago Espectacular",
    description:
      "Un lago cristalino considerado uno de los lugares más hermosos de la región.",
  },
];
