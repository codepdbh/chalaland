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
      { label: "Ruta y Comunidades", href: "/sobre-nosotros/comunidad" },
      { label: "Eco-cabañas", href: "/sobre-nosotros/instalaciones" },
      { label: "Nuestra Historia", href: "/sobre-nosotros/historia" },
    ],
  },
  {
    label: "Nuestros Paquetes",
    href: "/paquetes",
    children: [
      { label: "Paquete Jochi", href: "/paquetes/jochi" },
      { label: "Paquete Paraba Azul y Amarillo", href: "/paquetes/paraba-azul" },
      { label: "Paquete Peta", href: "/paquetes/peta" },
      { label: "Paquete Perezoso", href: "/paquetes/perezoso" },
      { label: "Ruta por comunidades", href: "/paquetes#ruta" },
      { label: "Recomendaciones", href: "/paquetes#recomendaciones" },
    ],
  },
  {
    label: "Agenda",
    href: "/agenda",
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
    label: "Contáctanos",
    href: "/contacto",
  },
];
