/* ============================================
   AWARDS & RECOGNITIONS
   Edit logos and titles here
   ============================================ */

export interface Award {
  id: number;
  title: string;
  image: string;
  url?: string;
}

export const awards: Award[] = [
  {
    id: 1,
    title: "CECASEM",
    image: "/assets/awards/award-1.svg",
    url: "#",
  },
  {
    id: 2,
    title: "Agencia Asturiana de Cooperación al Desarrollo",
    image: "/assets/awards/award-2.svg",
    url: "#",
  },
  {
    id: 3,
    title: "Fundation Félix et Éliane Genève",
    image: "/assets/awards/award-3.svg",
    url: "#",
  },
  {
    id: 4,
    title: "Anteproyecto Turismo Comunitario",
    image: "/assets/awards/award-4.svg",
    url: "#",
  },
  {
    id: 5,
    title: "Eco-cabañas Comunidad Hima",
    image: "/assets/awards/award-5.svg",
    url: "#",
  },
];
