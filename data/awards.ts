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
    title: "Premio de Turismo Sostenible",
    image: "/assets/awards/award-1.svg",
    url: "#",
  },
  {
    id: 2,
    title: "Certificación Ecológica",
    image: "/assets/awards/award-2.svg",
    url: "#",
  },
  {
    id: 3,
    title: "Reconocimiento Comunitario",
    image: "/assets/awards/award-3.svg",
    url: "#",
  },
  {
    id: 4,
    title: "Premio Responsabilidad Ambiental",
    image: "/assets/awards/award-4.svg",
    url: "#",
  },
  {
    id: 5,
    title: "Excelencia en Ecoturismo",
    image: "/assets/awards/award-5.svg",
    url: "#",
  },
];
