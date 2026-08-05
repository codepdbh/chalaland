import type { Metadata } from "next";
import { packages } from "@/data/packages";
import SectionTitle from "@/components/SectionTitle";
import PackageCard from "@/components/PackageCard";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Paquetes de la Ruta",
  description:
    "Paquetes Jochi, Paraba Azul y Amarillo, Peta y Perezoso para la ruta turística comunitaria San Borja - Monte Rosa.",
};

export default function PaquetesPage() {
  return (
    <>
      <PageHero
        title="Paquetes de la Ruta"
        eyebrow="San Borja - Monte Rosa"
        subtitle="Elige tu paquete comunitario."
        image="/assets/gallery/landscape-2.jpg"
      />

      {/* Packages Grid */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.slug}
                slug={pkg.slug}
                title={pkg.title}
                duration={pkg.duration}
                nights={pkg.nights}
                image={pkg.image}
                shortDescription={pkg.shortDescription}
              />
            ))}
          </div>

          {/* Route Data */}
          <div id="ruta" className="mt-16 scroll-mt-40">
            <SectionTitle
              title="Datos de la Ruta"
              subtitle="La ficha técnica describe una ruta moderada con tramos terrestres, navegación fluvial y recorridos internos por comunidad."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Distancia total", value: "58,16 km", detail: "29,08 km x 2" },
                { label: "Dificultad", value: "Moderada", detail: "3 de 5 según ficha" },
                { label: "Recorridos internos", value: "3 h + 3 h", detail: "ida y vuelta por comunidad" },
                { label: "Tramo fluvial", value: "7,29 km", detail: "Campo Bello - Monte Rosa" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-orange">
                    {item.label}
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold text-dark">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-text">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Communities Section */}
          <div id="comunidades" className="mt-16 scroll-mt-40">
            <SectionTitle
              title="Comunidades de la Ruta"
              subtitle="El recorrido articula espacios productivos, culturales y de hospedaje comunitario."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  name: "Galilea - Artegal",
                  text: "Punto de ingreso con visita artesanal y vínculos con la producción local.",
                },
                {
                  name: "San Antonio",
                  text: "Comunidad tsimane con recorridos culturales, danza, tejidos y convivencia tradicional.",
                },
                {
                  name: "Campo Bello",
                  text: "Espacio de eco-cabañas, pesca artesanal, tejidos, cestería y conexión hacia Puerto Belén.",
                },
                {
                  name: "Monte Rosa",
                  text: "Tramo fluvial por canoa, cabañas principales de hospedaje, arquería y cantos tradicionales.",
                },
              ].map((community) => (
                <div key={community.name} className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-dark">{community.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-text">{community.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div id="recomendaciones" className="mt-16 scroll-mt-40">
            <div className="dark-card rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-xl">
              <h3 className="font-heading font-bold text-teal text-xl mb-3">
                Recomendaciones para el recorrido
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Lleva agua suficiente, protección solar, gorra, ropa para clima variable,
                calzado antideslizante, botiquín personal y una bolsa para residuos.
              </p>
              <CTAButton href="/contacto" variant="primary">
                Coordinar salida
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
