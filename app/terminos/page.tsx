import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web y servicios turísticos.",
};

export default function TerminosPage() {
  return (
    <div className="pt-[130px] lg:pt-[140px]">
      <section className="relative h-[25vh] sm:h-[30vh] bg-dark flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white uppercase">
            Términos y Condiciones
          </h1>
          <div className="mt-4 h-1 w-16 bg-orange mx-auto rounded-full" />
        </div>
      </section>

      <section className="bg-white py-14 md:py-18 px-4">
        <div className="mx-auto max-w-3xl prose prose-sm">
          <p className="text-gray-text text-sm leading-relaxed mb-6">
            <strong>Última actualización:</strong> Enero 2025
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            1. Aceptación de los Términos
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Al acceder y utilizar este sitio web, usted acepta estos términos y condiciones en su
            totalidad. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice
            nuestro sitio web.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            2. Servicios
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Ofrecemos servicios de ecoturismo comunitario en la Amazonía boliviana. Los paquetes,
            precios y disponibilidad están sujetos a cambios sin previo aviso. La confirmación
            de reserva está sujeta a disponibilidad.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            3. Reservas y Pagos
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Las solicitudes de reserva realizadas a través de nuestro formulario web son solicitudes
            preliminares. La reserva se confirma únicamente cuando reciba confirmación por escrito
            de nuestro equipo y se haya procesado el pago correspondiente.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            4. Política de Cancelación
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Las políticas de cancelación varían según el paquete seleccionado. Consulte los
            detalles específicos en la página de cada paquete. En general, las cancelaciones
            con más de 15 días de anticipación no tienen cargo.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            5. Responsabilidad
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            El turismo de naturaleza implica riesgos inherentes. Los visitantes participan en
            las actividades bajo su propia responsabilidad y deben seguir en todo momento las
            instrucciones de los guías.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            6. Propiedad Intelectual
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Todo el contenido de este sitio web, incluyendo textos, imágenes, diseños y logotipos,
            es propiedad del albergue ecológico y está protegido por las leyes de propiedad intelectual.
          </p>

          <div className="mt-8 p-4 bg-smoke rounded-lg">
            <p className="text-xs text-gray-text italic">
              Estos términos y condiciones son un texto placeholder. Deben ser revisados y adaptados
              por un profesional legal según la legislación aplicable en su jurisdicción.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
