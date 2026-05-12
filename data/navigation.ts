/* ============================================
   NAVIGATION CONFIGURATION
   Edit menus, links, and dropdowns here
   ============================================ */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Sobre Nosotros",
    href: "/sobre-nosotros/sobre",
    children: [
      { label: "Sobre el Proyecto", href: "/sobre-nosotros/sobre" },
      { label: "Nuestra Historia", href: "/sobre-nosotros/historia" },
      { label: "Nuestras Instalaciones", href: "/sobre-nosotros/instalaciones" },
      { label: "Nuestra Comunidad", href: "/sobre-nosotros/comunidad" },
    ],
  },
  {
    label: "Nuestros Paquetes",
    href: "/paquetes",
    children: [
      { label: "Paquete Jochi", href: "/paquetes/jochi" },
      { label: "Paquete Pecarí", href: "/paquetes/pecari" },
      { label: "Paquete Capibara", href: "/paquetes/capibara" },
      { label: "Paquete Anta", href: "/paquetes/anta" },
      { label: "Paquetes a Medida", href: "/paquetes#medida" },
      { label: "Lo Mejor de la Región", href: "/paquetes#region" },
      { label: "Tour Especial para Nacionales", href: "/paquetes#nacionales" },
    ],
  },
  {
    label: "Galería",
    href: "/galeria/fotos",
    children: [
      { label: "Fotos", href: "/galeria/fotos" },
      { label: "Videos", href: "/galeria/videos" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contáctanos",
    href: "/contacto",
  },
];
