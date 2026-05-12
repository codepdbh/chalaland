/* ============================================
   BLOG DATA
   Edit blog posts here
   ============================================ */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "importancia-turismo-comunitario",
    title: "La Importancia del Turismo Comunitario en la Amazonía",
    excerpt:
      "Descubre cómo el turismo comunitario transforma vidas y protege la biodiversidad en la región amazónica de Bolivia.",
    content: `
El turismo comunitario representa una de las herramientas más poderosas para la conservación ambiental y el desarrollo sostenible en la Amazonía. A diferencia del turismo convencional, este modelo coloca a las comunidades locales como protagonistas y principales beneficiarias de la actividad turística.

## ¿Qué es el turismo comunitario?

El turismo comunitario es una forma de turismo donde la comunidad local tiene un control significativo sobre las actividades turísticas, participa activamente en su desarrollo y recibe una proporción justa de los beneficios económicos generados.

## Beneficios para la conservación

Cuando las comunidades locales se benefician directamente del turismo, tienen un incentivo económico real para proteger su entorno natural. Los bosques, ríos y lagos dejan de ser solo recursos para explotar y se convierten en activos valiosos que generan ingresos de manera sostenible.

## Preservación cultural

El turismo comunitario también contribuye a la preservación de tradiciones culturales, lenguas indígenas y conocimientos ancestrales que de otro modo podrían perderse con la globalización.

## El modelo en nuestro albergue

Nuestro albergue ecológico es un ejemplo exitoso de este modelo. La comunidad local participa en la gestión, operación y toma de decisiones, asegurando que los beneficios se distribuyan equitativamente y que la actividad turística respete tanto la naturaleza como la cultura local.
    `.trim(),
    image: "/assets/gallery/community-1.jpg",
    category: "Turismo Sostenible",
    author: "Equipo Editorial",
    date: "2024-11-15",
    readTime: "5 min",
  },
  {
    slug: "guia-observacion-aves-amazonia",
    title: "Guía Completa para la Observación de Aves en la Amazonía",
    excerpt:
      "Todo lo que necesitas saber para una experiencia inolvidable de birdwatching en el bosque amazónico.",
    content: `
La Amazonía boliviana alberga más de 1,000 especies de aves, convirtiéndola en uno de los destinos más codiciados para los observadores de aves de todo el mundo.

## Mejores épocas para la observación

La mejor época para observar aves en la Amazonía es durante la estación seca, de mayo a octubre. Las aves son más activas al amanecer (5:30 - 7:00 AM) y al atardecer (4:30 - 6:00 PM).

## Especies emblemáticas

Entre las especies más buscadas se encuentran los guacamayos azules y rojos, tucanes de pecho amarillo, águilas harpía, y el hoatzín, conocido como el "ave prehistórica".

## Equipamiento recomendado

- Binoculares de 8x42 o 10x42
- Cámara con lente zoom de al menos 300mm
- Guía de campo de aves de Bolivia
- Ropa de colores neutros
- Cuaderno de campo

## Nuestros senderos para birdwatching

En nuestro albergue contamos con senderos específicos diseñados para la observación de aves, incluyendo torres de observación que permiten ver las copas de los árboles donde habitan las especies más coloridas.
    `.trim(),
    image: "/assets/gallery/fauna-1.jpg",
    category: "Naturaleza",
    author: "Equipo Editorial",
    date: "2024-10-08",
    readTime: "7 min",
  },
  {
    slug: "plantas-medicinales-bosque-amazonico",
    title: "Plantas Medicinales del Bosque Amazónico: Sabiduría Ancestral",
    excerpt:
      "Un recorrido por el fascinante mundo de la etnobotánica amazónica y sus aplicaciones en la medicina tradicional.",
    content: `
El bosque amazónico es la farmacia natural más grande del planeta. Durante miles de años, las comunidades indígenas han desarrollado un profundo conocimiento sobre las propiedades medicinales de las plantas que los rodean.

## La etnobotánica amazónica

La etnobotánica es la ciencia que estudia la relación entre las plantas y las culturas humanas. En la Amazonía, esta disciplina revela un conocimiento extraordinario sobre el uso de plantas para tratar enfermedades, aliviar dolores y mantener la salud.

## Plantas destacadas

### Uña de gato
Utilizada tradicionalmente para fortalecer el sistema inmunológico y tratar inflamaciones.

### Sangre de drago
La savia roja de este árbol se usa como cicatrizante natural y para tratar problemas digestivos.

### Copaiba
El aceite de este árbol amazónico tiene propiedades antiinflamatorias y antimicrobianas.

## Nuestros senderos etnobotánicos

En nuestras caminatas por el bosque, los guías locales comparten su conocimiento ancestral sobre las plantas medicinales, enseñando a identificar especies y explicando sus usos tradicionales.
    `.trim(),
    image: "/assets/gallery/flora-1.jpg",
    category: "Naturaleza",
    author: "Equipo Editorial",
    date: "2024-09-20",
    readTime: "6 min",
  },
  {
    slug: "consejos-viaje-amazonia-boliviana",
    title: "10 Consejos Esenciales para tu Viaje a la Amazonía Boliviana",
    excerpt:
      "Prepárate para una aventura segura y memorable con estos consejos prácticos de nuestros guías expertos.",
    content: `
Visitar la Amazonía boliviana es una experiencia transformadora. Para que tu viaje sea lo más placentero y seguro posible, nuestros guías con años de experiencia comparten estos consejos esenciales.

## 1. Elige la época correcta
La estación seca (mayo-octubre) ofrece mejores condiciones para caminatas, mientras que la época de lluvias (noviembre-abril) permite navegar por ríos más caudalosos.

## 2. Vacúnate con anticipación
Se recomienda la vacuna contra la fiebre amarilla al menos 10 días antes del viaje.

## 3. Lleva el equipo adecuado
Ropa ligera de manga larga, botas de trekking, sombrero, protector solar biodegradable y repelente de insectos son esenciales.

## 4. Hidrátate constantemente
El clima tropical exige una hidratación constante. Bebe al menos 3 litros de agua al día.

## 5. Respeta la naturaleza
No dejes basura, no alimentes a los animales y sigue siempre las indicaciones de tu guía.

## 6. Prepárate físicamente
Las caminatas pueden ser exigentes. Realiza actividad física regular semanas antes del viaje.

## 7. Lleva efectivo
En zonas rurales de Bolivia, el efectivo (bolivianos y dólares) es la forma de pago más aceptada.

## 8. Protege tu equipaje
Usa bolsas impermeables para proteger tus pertenencias de la humedad y la lluvia.

## 9. Sé paciente con la fauna
Los animales se muestran cuando se sienten seguros. La paciencia y el silencio son tus mejores aliados.

## 10. Disfruta el momento
Desconéctate de la tecnología y conecta con la naturaleza. Será una de las mejores decisiones de tu vida.
    `.trim(),
    image: "/assets/gallery/landscape-1.jpg",
    category: "Consejos de Viaje",
    author: "Equipo Editorial",
    date: "2024-08-05",
    readTime: "8 min",
  },
];
