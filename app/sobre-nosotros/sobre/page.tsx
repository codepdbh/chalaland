import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la ruta turística comunitaria Eco-cabañas CECASEM entre San Borja y Monte Rosa.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre Nosotros"
        eyebrow="Proyecto comunitario"
        subtitle="Una propuesta de turismo comunitario solidario para fortalecer la economía local, conservar el entorno natural y revalorizar la cultura tsimane."
        image="/assets/gallery/community-1.jpg"
      />

      {/* Content */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Intro */}
          <div className="prose max-w-none mb-14">
            <p className="text-gray-text text-base leading-relaxed mb-6">
              La ruta turística comunitaria Eco-cabañas CECASEM se desarrolla en coordinación con comunidades
              indígenas Tsimanes del departamento del Beni, conectando San Borja con Galilea, San Antonio,
              Campo Bello y Monte Rosa mediante caminos rurales, navegación fluvial y recorridos internos.
            </p>
            <p className="text-gray-text text-base leading-relaxed">
              El proyecto busca implementar turismo comunitario solidario considerando la conservación del
              entorno natural, el fortalecimiento socioeconómico de las comunidades y la revalorización de
              sus recursos naturales y culturales.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-heading font-bold text-orange text-lg mb-3">Nuestra Misión</h3>
              <p className="text-sm text-gray-text leading-relaxed">
                Desarrollar una ruta turística viable y beneficiosa para las comunidades, con hospedaje,
                alimentación, actividades guiadas, transporte por río y experiencias culturales auténticas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-heading font-bold text-teal text-lg mb-3">Nuestra Visión</h3>
              <p className="text-sm text-gray-text leading-relaxed">
                Consolidar un modelo local de turismo solidario que genere beneficios sostenibles,
                preserve el entorno amazónico y fortalezca la organización comunitaria a largo plazo.
              </p>
            </div>
          </div>

          {/* Activities */}
          <SectionTitle title="Actividades de la ruta" subtitle="Experiencias comunitarias, productivas y naturales descritas en la ficha del proyecto" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {[
              {
                title: "Caminatas Comunitarias",
                desc: "Recorridos internos de dificultad media por senderos naturales y espacios de interacción comunitaria.",
              },
              {
                title: "Navegación en Canoa",
                desc: "Tramo fluvial desde Campo Bello hacia Monte Rosa y navegación por sectores ribereños.",
              },
              {
                title: "Ruta del Cacao",
                desc: "Visita a Pinar del Río y ASPECABO para conocer el proceso tradicional del cacao amazónico.",
              },
              {
                title: "Gastronomía Local",
                desc: "Comidas típicas, pescado local, frutas de temporada, bebidas tradicionales y almuerzos comunitarios.",
              },
              {
                title: "Artesanías y Tejidos",
                desc: "Demostraciones de tejidos, cestería, productos artesanales y técnicas tradicionales.",
              },
              {
                title: "Fogata y Cultura",
                desc: "Danza tradicional, cantos originarios, relatos locales y convivencia con comunidades Tsimanes.",
              },
            ].map((activity, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-heading font-semibold text-dark text-base mb-2">{activity.title}</h4>
                <p className="text-sm text-gray-text">{activity.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/sobre-nosotros/instalaciones" variant="primary">
              Ver Eco-cabañas
            </CTAButton>
            <CTAButton href="/sobre-nosotros/comunidad" variant="outline">
              Nuestra Comunidad
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
