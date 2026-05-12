import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="pt-[130px] lg:pt-[140px]">
      <section className="relative h-[25vh] sm:h-[30vh] bg-dark flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white uppercase">
            Política de Privacidad
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
            1. Información que Recopilamos
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Recopilamos información personal que usted nos proporciona voluntariamente al utilizar
            nuestros formularios de contacto y reservas, incluyendo: nombre, apellido, correo
            electrónico, teléfono, nacionalidad y preferencias de viaje.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            2. Uso de la Información
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Utilizamos su información personal exclusivamente para: procesar solicitudes de reserva,
            responder consultas, enviar información solicitada sobre nuestros servicios y mejorar
            la experiencia del usuario en nuestro sitio web.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            3. Cookies
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Las cookies
            son pequeños archivos de texto almacenados en su dispositivo que nos ayudan a recordar
            sus preferencias y analizar el uso del sitio.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            4. Protección de Datos
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger
            su información personal contra acceso no autorizado, pérdida o destrucción.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            5. Derechos del Usuario
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Usted tiene derecho a acceder, rectificar, eliminar y limitar el procesamiento de
            sus datos personales. Para ejercer estos derechos, contáctenos a través de nuestro
            formulario de contacto o correo electrónico.
          </p>

          <h2 className="font-heading font-bold text-dark text-xl mt-8 mb-3">
            6. Contacto
          </h2>
          <p className="text-gray-text text-sm leading-relaxed mb-4">
            Para cualquier consulta relacionada con esta política de privacidad, puede
            contactarnos a través de nuestro correo electrónico o formulario de contacto.
          </p>

          <div className="mt-8 p-4 bg-smoke rounded-lg">
            <p className="text-xs text-gray-text italic">
              Esta política de privacidad es un texto placeholder. Debe ser revisada y adaptada
              por un profesional legal según la legislación aplicable en su jurisdicción.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
