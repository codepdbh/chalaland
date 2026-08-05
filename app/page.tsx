import Hero from "@/components/Hero";
import PromoBar from "@/components/PromoBar";
import RouteIntroSection from "@/components/RouteIntroSection";
import ReasonsSection from "@/components/ReasonsSection";
import AwardsCarousel from "@/components/AwardsCarousel";
import PackagesSection from "@/components/PackagesSection";
import ImportantInfoSection from "@/components/ImportantInfoSection";
import MapSection from "@/components/MapSection";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        kicker="Turismo vivencial en la Amazonía boliviana"
        title="Eco Cabañas CECASEM | Vive la Experiencia Tsimane"
        subtitle="Convivencia auténtica en el corazón de la Amazonía boliviana."
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
      <RouteIntroSection />

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
