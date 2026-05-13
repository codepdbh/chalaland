import Hero from "@/components/Hero";
import PromoBar from "@/components/PromoBar";
import SectionTitle from "@/components/SectionTitle";
import ReasonsSection from "@/components/ReasonsSection";
import AwardsCarousel from "@/components/AwardsCarousel";
import PackagesSection from "@/components/PackagesSection";
import TestimonialSection from "@/components/TestimonialSection";
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
        kicker="Ecolodge comunitario en la Amazonía boliviana"
        title="Chalalán se vive lento, profundo y con la selva alrededor"
        subtitle="Paquetes diseñados con guías locales, navegación por el lago, senderos de interpretación y encuentros culturales que sostienen a la comunidad."
        primaryCta={{ href: "/reservas", label: "Consultar disponibilidad" }}
        secondaryCta={{ href: "/paquetes", label: "Explorar paquetes" }}
        stats={[
          { value: "3-6", label: "días de inmersión" },
          { value: "50 km", label: "senderos interpretativos" },
          { value: "100%", label: "gestión comunitaria" },
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
              title="Naturaleza y cultura en estado vivo"
              subtitle="Una experiencia pensada para mirar con calma: amaneceres sobre el agua, caminatas bajo dosel, sabores locales y relatos que pertenecen al territorio."
              variant="white"
              align="left"
              className="mb-8"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  icon: <Leaf className="h-5 w-5" />,
                  title: "Conservación",
                  text: "El bosque vale más vivo y protegido.",
                },
                {
                  icon: <Users className="h-5 w-5" />,
                  title: "Comunidad",
                  text: "La operación nace y vuelve a la comunidad.",
                },
                {
                  icon: <Binoculars className="h-5 w-5" />,
                  title: "Avistamiento",
                  text: "Rutas para fauna, aves, flora y lago.",
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

      {/* Testimonials */}
      <TestimonialSection />

      {/* Important Info */}
      <ImportantInfoSection />

      {/* Map */}
      <MapSection />
    </>
  );
}
