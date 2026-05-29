import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <PageHero
        title="Política de Privacidad"
        eyebrow="Transparencia"
        subtitle="Cómo tratamos la información que compartes al contactarnos o solicitar una reserva."
        image="/assets/gallery/landscape-3.jpg"
        compact
      />

      <section className="canopy-section px-4 py-14 md:py-18">
        <div className="prose prose-sm mx-auto max-w-3xl rounded-2xl border border-white bg-white p-6 shadow-sm md:p-8">
          <p className="mb-6 text-sm leading-relaxed text-gray-text">
            <strong>Última actualización:</strong> Mayo 2026
          </p>

          {[
            {
              title: "1. Información que Recopilamos",
              text: "Recopilamos información personal que usted nos proporciona voluntariamente al utilizar nuestros formularios de contacto y reservas, incluyendo nombre, apellido, correo electrónico, teléfono, nacionalidad y preferencias de viaje.",
            },
            {
              title: "2. Uso de la Información",
              text: "Utilizamos su información personal exclusivamente para procesar solicitudes de reserva, responder consultas, enviar información sobre la ruta turística comunitaria y coordinar logística de viaje.",
            },
            {
              title: "3. Cookies",
              text: "Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos de texto almacenados en su dispositivo que nos ayudan a recordar sus preferencias y analizar el uso del sitio.",
            },
            {
              title: "4. Protección de Datos",
              text: "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, pérdida o destrucción.",
            },
            {
              title: "5. Derechos del Usuario",
              text: "Usted tiene derecho a acceder, rectificar, eliminar y limitar el procesamiento de sus datos personales. Para ejercer estos derechos, contáctenos a través de nuestro formulario de contacto o correo electrónico.",
            },
            {
              title: "6. Contacto",
              text: "Para cualquier consulta relacionada con esta política de privacidad, puede contactarnos a través de nuestro correo electrónico o formulario de contacto.",
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
              Esta política de privacidad es una base informativa y debe ser revisada por el equipo responsable antes de su publicación definitiva.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
