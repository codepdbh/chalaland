import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X as XIcon, Lightbulb, Backpack, ShieldCheck, Clock, Moon } from "lucide-react";
import type { Package } from "@/data/packages";
import SectionTitle from "./SectionTitle";
import ItineraryTimeline from "./ItineraryTimeline";
import PriceTable from "./PriceTable";
import CTAButton from "./CTAButton";
import PageHero from "./PageHero";

interface PackageDetailProps {
  pkg: Package;
}

export default function PackageDetail({ pkg }: PackageDetailProps) {
  if (!pkg) return notFound();

  return (
    <>
      <PageHero
        title={pkg.title}
        subtitle={pkg.shortDescription}
        eyebrow="Paquete amazónico"
        image={pkg.image}
        align="left"
      >
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-dark">
            <Clock className="h-4 w-4 text-orange" />
            {pkg.duration}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-dark/70 px-4 py-2 text-sm font-bold text-white">
            <Moon className="h-4 w-4 text-sun" />
            {pkg.nights}
          </span>
        </div>
      </PageHero>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Description */}
        <div className="mb-12">
          <p className="text-gray-text text-base leading-relaxed max-w-3xl">
            {pkg.longDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="#itinerario" variant="outline" size="sm">
              Ver Itinerario Completo
            </CTAButton>
            <CTAButton href="/reservas" variant="secondary" size="sm">
              {pkg.ctaLabel}
            </CTAButton>
          </div>
        </div>

        {/* Prices */}
        <div className="mb-14">
          <SectionTitle title="Precios" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PriceTable
              title="Tour Regular"
              prices={pkg.regularPrice}
              note="1 PAX = 1 persona. Precios en USD."
            />
            {pkg.sharedPrice && (
              <PriceTable
                title="Tour Compartido"
                prices={pkg.sharedPrice}
                note="Sujeto a disponibilidad."
              />
            )}
          </div>
        </div>

        {/* Special promotion */}
        <div className="mb-14 rounded-2xl border border-teal/30 bg-teal/10 p-6">
          <h3 className="font-heading font-bold text-teal text-lg mb-2">
            ¿Eres de Bolivia?
          </h3>
          <p className="text-sm text-gray-text">
            Contamos con tarifas especiales para nacionales bolivianos. 
            <Link href="/contacto" className="text-teal hover:underline ml-1">
              Contáctanos para más información
            </Link>.
          </p>
        </div>

        {/* Itinerary */}
        <div id="itinerario" className="mb-14 scroll-mt-40">
          <SectionTitle title="Itinerario" align="left" />
          <ItineraryTimeline itinerary={pkg.itinerary} />
        </div>

        {/* Includes / Excludes */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Includes */}
          <div>
            <h3 className="font-heading font-bold text-dark text-lg mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-teal" />
              Incluye
            </h3>
            <ul className="space-y-2">
              {pkg.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-text">
                  <Check className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Excludes */}
          <div>
            <h3 className="font-heading font-bold text-dark text-lg mb-4 flex items-center gap-2">
              <XIcon className="w-5 h-5 text-red-500" />
              No Incluye
            </h3>
            <ul className="space-y-2">
              {pkg.excludes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-text">
                  <XIcon className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-14">
          <h3 className="font-heading font-bold text-dark text-lg mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-orange" />
            Recomendaciones
          </h3>
          <ul className="space-y-2">
            {pkg.recommendations.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-text">
                <span className="text-orange mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What to bring */}
        <div className="mb-14">
          <h3 className="font-heading font-bold text-dark text-lg mb-4 flex items-center gap-2">
            <Backpack className="w-5 h-5 text-teal" />
            Qué Llevar
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pkg.whatToBring.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-text">
                <Check className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="mb-14">
          <h3 className="font-heading font-bold text-dark text-lg mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-dark" />
            Políticas
          </h3>
          <ul className="space-y-2">
            {pkg.policies.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-text">
                <span className="text-dark-line mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-gray-200">
          <CTAButton href="/reservas" variant="secondary" size="lg">
            {pkg.ctaLabel}
          </CTAButton>
          <CTAButton href="/contacto" variant="outline">
            Contáctanos
          </CTAButton>
          <CTAButton href="/paquetes" variant="outline" size="sm">
            Ver Todos los Paquetes
          </CTAButton>
        </div>
      </div>
    </>
  );
}
