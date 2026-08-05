/* ============================================
   REASONS TO VISIT
   ============================================ */

export interface Reason {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const reasonsSectionData = {
  title: "¿Por qué reservar con nosotros?",
  subtitle:
    "Una experiencia vivencial auténtica diseñada y gestionada directamente por las comunidades tsimanes para proteger su cultura y entorno natural.",
};

export const reasons: Reason[] = [
  {
    icon: "Users",
    title: "Experiencia Auténtica",
    description:
      "Turismo vivencial genuino compartiendo la vida cotidiana, tradiciones y cultura junto a las comunidades tsimanes.",
  },
  {
    icon: "Languages",
    title: "Guías Nativos",
    description:
      "Acompañamiento por intérpretes locales que comparten el conocimiento profundo del territorio, la naturaleza y sus costumbres.",
  },
  {
    icon: "Waves",
    title: "Transporte Integral",
    description:
      "Logística coordinada con transporte terrestre y navegación en canoa por ríos amazónicos durante todo el recorrido.",
  },
  {
    icon: "Home",
    title: "Eco-cabañas Comunitarias",
    description:
      "Descanso y hospedaje acogedor en instalaciones construidas y atendidas por las familias de las comunidades.",
  },
  {
    icon: "Footprints",
    title: "Gestión Local",
    description:
      "Actividades tradicionales, talleres y senderos diseñados y administrados por los propios habitantes de la zona.",
  },
  {
    icon: "Leaf",
    title: "Turismo Responsable",
    description:
      "Impacto positivo directo que contribuye al desarrollo socioeconómico local y a la conservación del patrimonio cultural.",
  },
];
