import Hero from "@/components/Hero";
import PromoBar from "@/components/PromoBar";
import SectionTitle from "@/components/SectionTitle";
import ReasonsSection from "@/components/ReasonsSection";
import AwardsCarousel from "@/components/AwardsCarousel";
import PackagesSection from "@/components/PackagesSection";
import ImportantInfoSection from "@/components/ImportantInfoSection";
import MapSection from "@/components/MapSection";
import { siteConfig } from "@/data/site";
import { getAssetPath } from "@/lib/utils";
import { Binoculars, Leaf, Users } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        kicker="Ruta turística comunitaria en San Borja, Beni"
        title="Eco-cabañas CECASEM: de San Borja a Monte Rosa"
        subtitle="Una ruta comunitaria por Galilea, San Antonio, Campo Bello y Monte Rosa, con transporte terrestre, navegación en canoa, caminatas locales y convivencia cultural."
        primaryCta={{ href: "/reservas", label: "Consultar disponibilidad" }}
        secondaryCta={{ href: "/paquetes", label: "Ver paquetes" }}
        stats={[
          { value: "58,16 km", label: "distancia total ida y vuelta" },
          { value: "4", label: "comunidades de la ruta" },
          { value: "Moderada", label: "dificultad técnica general" },
        ]}
        backgroundImage="/assets/hero/hero-placeholder.jpg"
        backgroundVideo="/assets/hero/hero-video.mp4"
        showArrow={true}
      />

      {/* Promo Bar */}
      <PromoBar text={siteConfig.promoText} />

      {/* Intro Experience */}
      <section className="rainforest-texture px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <SectionTitle
              title="Ruta turística comunitaria"
              subtitle="El proyecto busca fortalecer el turismo comunitario solidario, proteger el entorno natural y revalorizar los recursos culturales de las comunidades tsimanes."
              variant="white"
              align="left"
              className="mb-8"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  icon: <Leaf className="h-5 w-5" />,
                  title: "Conservación",
                  text: "El entorno natural se preserva como base del desarrollo local.",
                },
                {
                  icon: <Users className="h-5 w-5" />,
                  title: "Comunidades",
                  text: "Galilea, San Antonio, Campo Bello y Monte Rosa articulan la ruta.",
                },
                {
                  icon: <Binoculars className="h-5 w-5" />,
                  title: "Recorridos",
                  text: "Caminatas, canoa, artesanías, cacao, pesca y gastronomía local.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-sm"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="image-frame col-span-2 aspect-[16/9]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getAssetPath("/assets/gallery/landscape-6.jpg")})`,
                }}
              />
            </div>
            <div className="image-frame aspect-[4/5]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getAssetPath("/assets/gallery/fauna-1.jpg")})`,
                }}
              />
            </div>
            <div className="image-frame aspect-[4/5] translate-y-8">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getAssetPath("/assets/gallery/community-2.jpg")})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <ReasonsSection />

      {/* Awards Carousel */}
      <AwardsCarousel />

      {/* Packages Section */}
      <PackagesSection />

      {/* Important Info */}
      <ImportantInfoSection />

      {/* Map */}
      <MapSection />
    </>
  );
}
