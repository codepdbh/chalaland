import { packages } from "@/data/packages";
import SectionTitle from "./SectionTitle";
import PackageCard from "./PackageCard";
import CTAButton from "./CTAButton";

export default function PackagesSection() {
  return (
    <section className="bg-smoke py-16 md:py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Nuestros Paquetes"
          subtitle="Elige la aventura que mejor se adapte a tu tiempo y estilo"
        />

        {/* Package Grid */}
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

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="/paquetes#medida" variant="outline">
            Paquetes a Medida
          </CTAButton>
          <CTAButton href="/reservas" variant="secondary">
            Reservar Ahora
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
