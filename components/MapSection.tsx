import { contactInfo } from "@/data/contact";
import SectionTitle from "./SectionTitle";
import CTAButton from "./CTAButton";

export default function MapSection() {
  return (
    <section className="canopy-section py-16 md:py-24 px-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionTitle
            title="Nuestra Ubicación"
            subtitle="El viaje comienza en Rurrenabaque y se adentra lentamente hacia el bosque, el río y el lago."
            align="left"
            className="mb-7"
          />
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">
              Punto de encuentro
            </p>
            <p className="mt-2 text-lg font-heading font-bold text-dark">
              {contactInfo.address}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-text">
              Coordinamos horarios, transporte fluvial y recomendaciones de llegada antes de confirmar cada reserva.
            </p>
            <div className="mt-5">
              <CTAButton href="/contacto" variant="secondary" size="sm">
                Coordinar llegada
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-white">
          <iframe
            src={contactInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del albergue ecológico"
          />
        </div>
      </div>
    </section>
  );
}
