/* ============================================
   VIDEO GALLERY DATA
   Edit video categories and entries here
   ============================================ */

export interface Video {
  id: number;
  title: string;
  description: string;
  /** YouTube embed ID or full URL */
  youtubeId: string;
  category: VideoCategory;
  thumbnail?: string;
}

export type VideoCategory = "albergue" | "naturaleza" | "comunidad";

export const videoCategories: { value: VideoCategory; label: string }[] = [
  { value: "albergue", label: "Eco-cabañas" },
  { value: "naturaleza", label: "Naturaleza y Vida Silvestre" },
  { value: "comunidad", label: "Comunidad y Cultura" },
];

export const videos: Video[] = [
  {
    id: 1,
    title: "Bienvenida a Eco-cabañas CECASEM",
    description: "Un recorrido virtual por los espacios comunitarios y la ruta San Borja - Monte Rosa.",
    youtubeId: "dQw4w9WgXcQ",
    category: "albergue",
  },
  {
    id: 2,
    title: "Tramo fluvial hacia Monte Rosa",
    description: "Navegación en canoa desde Campo Bello hacia Monte Rosa dentro de la ruta comunitaria.",
    youtubeId: "dQw4w9WgXcQ",
    category: "albergue",
  },
  {
    id: 3,
    title: "Paisajes de la ruta",
    description: "Caminos rurales, río, bosque y comunidades durante el recorrido.",
    youtubeId: "dQw4w9WgXcQ",
    category: "naturaleza",
  },
  {
    id: 4,
    title: "Naturaleza amazónica",
    description: "Guacamayos, tucanes y cientos de especies en su hábitat natural.",
    youtubeId: "dQw4w9WgXcQ",
    category: "naturaleza",
  },
  {
    id: 5,
    title: "Comunidades de la ruta",
    description: "Galilea, San Antonio, Campo Bello y Monte Rosa como anfitrionas del recorrido.",
    youtubeId: "dQw4w9WgXcQ",
    category: "comunidad",
  },
  {
    id: 6,
    title: "Tradiciones Ancestrales",
    description: "Danzas, artesanías, tejidos, cestería, arquería y saberes locales.",
    youtubeId: "dQw4w9WgXcQ",
    category: "comunidad",
  },
];
