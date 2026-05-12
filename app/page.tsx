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

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        backgroundImage="/assets/hero/hero-placeholder.jpg"
        backgroundVideo="/assets/hero/hero-video.mp4"
        showArrow={true}
      />

      {/* Promo Bar */}
      <PromoBar text={siteConfig.promoText} />

      {/* Intro Title Block */}
      <section className="bg-dark py-14 md:py-18 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Naturaleza y Cultura en la Amazonía"
            subtitle="Experiencias inolvidables en un albergue ecológico comunitario rodeado de la biodiversidad más rica del continente"
            variant="white"
          />
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
