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
  { value: "albergue", label: "Videos del Albergue" },
  { value: "naturaleza", label: "Naturaleza y Vida Silvestre" },
  { value: "comunidad", label: "Comunidad y Cultura" },
];

export const videos: Video[] = [
  {
    id: 1,
    title: "Bienvenida al Albergue Ecológico",
    description: "Un recorrido virtual por nuestras instalaciones y el entorno natural que nos rodea.",
    youtubeId: "dQw4w9WgXcQ",
    category: "albergue",
  },
  {
    id: 2,
    title: "Amanecer en el Lago",
    description: "Contempla la magia del amanecer sobre el lago cristalino rodeado de selva amazónica.",
    youtubeId: "dQw4w9WgXcQ",
    category: "albergue",
  },
  {
    id: 3,
    title: "Fauna del Parque Nacional",
    description: "Capturas de cámaras trampa mostrando la biodiversidad del bosque amazónico.",
    youtubeId: "dQw4w9WgXcQ",
    category: "naturaleza",
  },
  {
    id: 4,
    title: "Aves de la Amazonía",
    description: "Guacamayos, tucanes y cientos de especies en su hábitat natural.",
    youtubeId: "dQw4w9WgXcQ",
    category: "naturaleza",
  },
  {
    id: 5,
    title: "Nuestra Comunidad",
    description: "Conoce a la comunidad que hace posible esta experiencia de turismo sostenible.",
    youtubeId: "dQw4w9WgXcQ",
    category: "comunidad",
  },
  {
    id: 6,
    title: "Tradiciones Ancestrales",
    description: "Las danzas, artesanías y rituales que mantienen viva la cultura indígena.",
    youtubeId: "dQw4w9WgXcQ",
    category: "comunidad",
  },
];
