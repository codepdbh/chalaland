import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web y servicios turísticos.",
};

export default function TerminosPage() {
  return (
    <>
      <PageHero
        title="Términos y Condiciones"
        eyebrow="Condiciones de viaje"
        subtitle="Lineamientos generales para el uso del sitio, solicitudes de reserva y servicios turísticos."
        image="/assets/gallery/lodge-1.jpg"
        compact
      />

      <section className="canopy-section px-4 py-14 md:py-18">
        <div className="prose prose-sm mx-auto max-w-3xl rounded-2xl border border-white bg-white p-6 shadow-sm md:p-8">
          <p className="mb-6 text-sm leading-relaxed text-gray-text">
            <strong>Última actualización:</strong> Enero 2025
          </p>

          {[
            {
              title: "1. Aceptación de los Términos",
              text: "Al acceder y utilizar este sitio web, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro sitio web.",
            },
            {
              title: "2. Servicios",
              text: "Ofrecemos servicios de ecoturismo comunitario en la Amazonía boliviana. Los paquetes, precios y disponibilidad están sujetos a cambios sin previo aviso. La confirmación de reserva está sujeta a disponibilidad.",
            },
            {
              title: "3. Reservas y Pagos",
              text: "Las solicitudes de reserva realizadas a través de nuestro formulario web son solicitudes preliminares. La reserva se confirma únicamente cuando reciba confirmación por escrito de nuestro equipo y se haya procesado el pago correspondiente.",
            },
            {
              title: "4. Política de Cancelación",
              text: "Las políticas de cancelación varían según el paquete seleccionado. Consulte los detalles específicos en la página de cada paquete. En general, las cancelaciones con más de 15 días de anticipación no tienen cargo.",
            },
            {
              title: "5. Responsabilidad",
              text: "El turismo de naturaleza implica riesgos inherentes. Los visitantes participan en las actividades bajo su propia responsabilidad y deben seguir en todo momento las instrucciones de los guías.",
            },
            {
              title: "6. Propiedad Intelectual",
              text: "Todo el contenido de este sitio web, incluyendo textos, imágenes, diseños y logotipos, es propiedad del albergue ecológico y está protegido por las leyes de propiedad intelectual.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 mt-8 font-heading text-xl font-bold text-dark">
                {section.title}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-text">
                {section.text}
              </p>
            </div>
          ))}

          <div className="mt-8 rounded-2xl bg-smoke p-4">
            <p className="text-xs italic text-gray-text">
              Estos términos y condiciones son un texto placeholder. Deben ser revisados y adaptados por un profesional legal según la legislación aplicable en su jurisdicción.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
