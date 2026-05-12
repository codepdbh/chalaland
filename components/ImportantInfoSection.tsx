import Link from "next/link";
import CTAButton from "./CTAButton";

export default function ImportantInfoSection() {
  return (
    <section className="bg-white py-14 md:py-18 px-4">
      <div className="mx-auto max-w-4xl text-center">
        {/* Orange Pill Button */}
        <Link
          href="#"
          className="inline-block px-8 py-3 bg-orange text-white text-sm font-heading font-bold uppercase tracking-widest rounded-full hover:bg-orange-hover transition-colors mb-8"
        >
          Información Importante
        </Link>

        {/* Separator */}
        <div className="w-full h-px bg-dark-line/30 mb-10" />

        {/* Partner Logos */}
        <p className="text-gray-text text-sm mb-6">
          Alianzas y colaboraciones institucionales
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Placeholder partner logos */}
          <div className="w-28 h-14 bg-smoke rounded-lg flex items-center justify-center border border-dark-line/20">
            <span className="text-xs text-gray-text font-semibold">
              Partner 1
            </span>
          </div>
          <div className="w-28 h-14 bg-smoke rounded-lg flex items-center justify-center border border-dark-line/20">
            <span className="text-xs text-gray-text font-semibold">
              Partner 2
            </span>
          </div>
          <div className="w-28 h-14 bg-smoke rounded-lg flex items-center justify-center border border-dark-line/20">
            <span className="text-xs text-gray-text font-semibold">
              Partner 3
            </span>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-10">
          <CTAButton href="/contacto" variant="outline" size="sm">
            Contáctanos para más información
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
