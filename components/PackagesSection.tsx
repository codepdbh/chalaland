import { packages } from "@/data/packages";
import SectionTitle from "./SectionTitle";
import PackageCard from "./PackageCard";
import CTAButton from "./CTAButton";

export default function PackagesSection() {
  return (
    <section className="canopy-section py-16 md:py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Paquetes de la ruta"
          subtitle="Elige entre Jochi, Paraba Azul, Peta y Perezoso: experiencias de 2 a 5 días por comunidades, ríos, senderos y eco-cabañas."
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
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="/paquetes#ruta" variant="outline">
            Ver datos de ruta
          </CTAButton>
          <CTAButton href="/reservas" variant="secondary">
            Consultar disponibilidad
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
