# EcoLodge Amazonia — Sitio Web Turístico

Sitio web turístico/ecológico tipo lodge para un albergue ecológico comunitario en la Amazonía. Construido con Next.js, TypeScript y Tailwind CSS.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar en producción
npm run start
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 📁 Estructura del Proyecto

```
/app                    → Páginas (App Router)
  /page.tsx             → Home
  /layout.tsx           → Layout global (fuentes, metadata)
  /globals.css          → Estilos globales y variables
  /sobre-nosotros/      → Páginas institucionales
  /paquetes/            → Listado y detalle de paquetes
  /galeria/             → Fotos y videos
  /blog/                → Blog con posts
  /contacto/            → Formulario de contacto
  /reservas/            → Formulario de reservas
  /api/                 → API routes (contacto, reservas)

/components             → Componentes reutilizables
/data                   → Datos centralizados (editables)
/lib                    → Utilidades y validaciones
/public/assets          → Imágenes, logos, videos
```

## ✏️ Cómo Personalizar

### Cambiar Logo
Reemplazar el componente del logo circular en `components/Navbar.tsx`. Buscar el `<div>` con texto "ECO" y sustituir por tu `<Image>` con el logo real.

### Cambiar Colores
Editar las variables en `app/globals.css` dentro de `@theme inline`:
```css
--color-orange: #ff6b00;    /* Color principal */
--color-teal: #00b39b;      /* Color secundario */
--color-dark: #202829;      /* Fondo oscuro */
```

### Cambiar Textos y Datos de Contacto
Editar `data/site.ts`:
- `siteName` — Nombre del sitio
- `phone`, `email`, `whatsapp` — Contacto
- `facebook`, `instagram` — Redes sociales
- `promoText` — Texto de la barra naranja
- `copyright` — Texto del footer

### Cambiar Paquetes Turísticos
Editar `data/packages.ts`. Cada paquete tiene:
- `slug` — URL amigable
- `title`, `duration`, `nights` — Info básica
- `image` — Ruta a la imagen
- `itinerary` — Días con actividades
- `regularPrice`, `sharedPrice` — Tablas de precios
- `includes`, `excludes` — Qué incluye/no incluye

### Agregar un Nuevo Paquete
1. Abrir `data/packages.ts`
2. Copiar un paquete existente en el array `packages`
3. Cambiar el `slug` (ej: `"tucan"`)
4. Editar todos los campos
5. Agregar imagen en `public/assets/packages/tucan.jpg`
6. Agregar al menú en `data/navigation.ts`
7. Agregar a `packageOptions` para el formulario de reservas

### Cambiar Imágenes
Reemplazar los archivos en:
- `public/assets/hero/` — Hero principal
- `public/assets/packages/` — Imágenes de paquetes
- `public/assets/gallery/` — Galería de fotos
- `public/assets/awards/` — Logos de premios

### Agregar Imagen a la Galería
1. Colocar la imagen en `public/assets/gallery/`
2. Abrir `data/gallery.ts`
3. Agregar un nuevo objeto al array:
```ts
{
  id: 31,
  src: "/assets/gallery/mi-nueva-foto.jpg",
  alt: "Descripción de la imagen",
  category: "paisajes", // paisajes | fauna | flora | albergue | comunidad
}
```

### Cambiar Mapa
Editar `data/contact.ts` → `mapEmbedUrl` con la URL de embed de Google Maps de tu ubicación.

### Cambiar Redes Sociales
Editar `data/site.ts` → `facebook`, `instagram`.

### Agregar Post al Blog
1. Abrir `data/blog.ts`
2. Agregar un nuevo objeto al array `blogPosts` con: `slug`, `title`, `excerpt`, `content`, `image`, `category`, `author`, `date`, `readTime`.

## 📧 Activar Envío Real de Formularios

Los formularios están preparados para conectar con servicios de email. Editar:

- `app/api/contact/route.ts`
- `app/api/reservas/route.ts`

Opciones recomendadas:
1. **Resend** — `npm install resend`
2. **Nodemailer** — `npm install nodemailer`
3. **SendGrid** — `npm install @sendgrid/mail`

Cada archivo tiene comentarios indicando dónde integrar el servicio.

## 🛠 Tecnologías

| Tecnología | Uso |
|---|---|
| Next.js 16 (App Router) | Framework |
| TypeScript | Tipado |
| Tailwind CSS v4 | Estilos |
| lucide-react | Íconos |
| framer-motion | Animaciones |
| embla-carousel-react | Carruseles |
| react-hook-form + zod | Formularios |
| clsx + tailwind-merge | Utilidades CSS |

## 📱 Responsive

El sitio está optimizado para:
- Móvil: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1440px+

## 🔒 SEO

Cada página incluye:
- Title y description únicos
- Open Graph tags
- Estructura semántica HTML5
- Alt text en imágenes
- Heading hierarchy correcta

## ⚡ Producción

Recomendaciones antes de desplegar:
1. Reemplazar todas las imágenes placeholder con las reales
2. Configurar el envío real de formularios
3. Actualizar los textos legales (privacidad, términos)
4. Configurar Google Analytics u otra herramienta de métricas
5. Optimizar imágenes con `next/image` (ya preparado)
6. Configurar dominio y SSL
7. Considerar CDN para assets estáticos

## 📄 Licencia

Proyecto privado. Todos los derechos reservados.
