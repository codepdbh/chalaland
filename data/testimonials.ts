/* ============================================
   TESTIMONIALS
   Edit visitor reviews here
   ============================================ */

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  rating: number; // 1-5
  text: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    country: "España",
    rating: 5,
    text: "Una experiencia absolutamente inolvidable. La naturaleza, la comunidad, los guías... todo fue perfecto. El amanecer en el lago es algo que llevaré en mi corazón para siempre.",
    date: "2024-08-15",
  },
  {
    id: 2,
    name: "John Mitchell",
    country: "Estados Unidos",
    rating: 5,
    text: "The best eco-tourism experience I've ever had. The local guides have an incredible knowledge of the forest and wildlife. Highly recommend the 5-day package.",
    date: "2024-06-22",
  },
  {
    id: 3,
    name: "Pierre Dumont",
    country: "Francia",
    rating: 5,
    text: "Un lieu magique au cœur de l'Amazonie. Le respect de la nature et de la communauté locale est remarquable. Une aventure que je recommande vivement.",
    date: "2024-04-10",
  },
  {
    id: 4,
    name: "Ana Ribeiro",
    country: "Brasil",
    rating: 5,
    text: "Fiquei impressionada com a organização e a beleza do lugar. Os guias locais são fantásticos e a comida é deliciosa. Voltarei com certeza!",
    date: "2024-09-01",
  },
];
