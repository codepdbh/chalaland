/* ============================================
   GALLERY DATA
   Edit photos and categories here
   ============================================ */

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
  width?: number;
  height?: number;
}

export type GalleryCategory =
  | "paisajes"
  | "fauna"
  | "flora"
  | "albergue"
  | "comunidad";

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: "paisajes", label: "Paisajes y Excursiones" },
  { value: "fauna", label: "Fauna" },
  { value: "flora", label: "Flora" },
  { value: "albergue", label: "Eco-cabañas" },
  { value: "comunidad", label: "Comunidad" },
];

export const galleryImages: GalleryImage[] = [
  // Paisajes
  { id: 1, src: "/assets/gallery/landscape-1.jpg", alt: "Vista panorámica del lago al amanecer", category: "paisajes" },
  { id: 2, src: "/assets/gallery/landscape-2.jpg", alt: "Río serpenteando entre la selva", category: "paisajes" },
  { id: 3, src: "/assets/gallery/landscape-3.jpg", alt: "Atardecer dorado sobre el bosque", category: "paisajes" },
  { id: 4, src: "/assets/gallery/landscape-4.jpg", alt: "Sendero en el bosque primario", category: "paisajes" },
  { id: 5, src: "/assets/gallery/landscape-5.jpg", alt: "Vista desde el mirador principal", category: "paisajes" },
  { id: 6, src: "/assets/gallery/landscape-6.jpg", alt: "Canoa en el lago cristalino", category: "paisajes" },
  // Fauna
  { id: 7, src: "/assets/gallery/fauna-1.jpg", alt: "Guacamayo azul en vuelo", category: "fauna" },
  { id: 8, src: "/assets/gallery/fauna-2.jpg", alt: "Mono araña en las copas de los árboles", category: "fauna" },
  { id: 9, src: "/assets/gallery/fauna-3.jpg", alt: "Caimán en la orilla del lago", category: "fauna" },
  { id: 10, src: "/assets/gallery/fauna-4.jpg", alt: "Tucán posado en rama", category: "fauna" },
  { id: 11, src: "/assets/gallery/fauna-5.jpg", alt: "Capibara cerca del agua", category: "fauna" },
  { id: 12, src: "/assets/gallery/fauna-6.jpg", alt: "Mariposa morpho azul", category: "fauna" },
  // Flora
  { id: 13, src: "/assets/gallery/flora-1.jpg", alt: "Orquídea silvestre en el bosque", category: "flora" },
  { id: 14, src: "/assets/gallery/flora-2.jpg", alt: "Helechos gigantes del sotobosque", category: "flora" },
  { id: 15, src: "/assets/gallery/flora-3.jpg", alt: "Árbol centenario con raíces expuestas", category: "flora" },
  { id: 16, src: "/assets/gallery/flora-4.jpg", alt: "Victoria regia en el lago", category: "flora" },
  { id: 17, src: "/assets/gallery/flora-5.jpg", alt: "Bromelias en las ramas altas", category: "flora" },
  { id: 18, src: "/assets/gallery/flora-6.jpg", alt: "Hongos tropicales luminiscentes", category: "flora" },
  // Albergue
  { id: 19, src: "/assets/gallery/lodge-1.jpg", alt: "Vista exterior de eco-cabañas", category: "albergue" },
  { id: 20, src: "/assets/gallery/lodge-2.jpg", alt: "Interior de cabaña doble", category: "albergue" },
  { id: 21, src: "/assets/gallery/lodge-3.jpg", alt: "Comedor principal con vista al bosque", category: "albergue" },
  { id: 22, src: "/assets/gallery/lodge-4.jpg", alt: "Terraza de eco-cabañas al atardecer", category: "albergue" },
  { id: 23, src: "/assets/gallery/lodge-5.jpg", alt: "Hamacas en el área de descanso", category: "albergue" },
  { id: 24, src: "/assets/gallery/lodge-6.jpg", alt: "Muelle del albergue en el lago", category: "albergue" },
  // Comunidad
  { id: 25, src: "/assets/gallery/community-1.jpg", alt: "Familias de la comunidad local", category: "comunidad" },
  { id: 26, src: "/assets/gallery/community-2.jpg", alt: "Artesanías tradicionales", category: "comunidad" },
  { id: 27, src: "/assets/gallery/community-3.jpg", alt: "Danza tradicional comunitaria", category: "comunidad" },
  { id: 28, src: "/assets/gallery/community-4.jpg", alt: "Taller de tejido artesanal", category: "comunidad" },
  { id: 29, src: "/assets/gallery/community-5.jpg", alt: "Cocina comunitaria con productos locales", category: "comunidad" },
  { id: 30, src: "/assets/gallery/community-6.jpg", alt: "Niños de la comunidad en la escuela", category: "comunidad" },
];
