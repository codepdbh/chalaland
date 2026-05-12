import { contactInfo } from "@/data/contact";
import SectionTitle from "./SectionTitle";

export default function MapSection() {
  return (
    <section className="bg-smoke py-16 md:py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Nuestra Ubicación"
          subtitle="Encuéntranos en el corazón de la Amazonía boliviana"
        />

        {/* Map Embed */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-lg overflow-hidden shadow-lg border border-dark-line/20">
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

        {/* Address info below map */}
        <p className="mt-4 text-center text-sm text-gray-text">
          {contactInfo.address}
        </p>
      </div>
    </section>
  );
}
