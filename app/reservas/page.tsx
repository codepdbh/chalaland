import type { Metadata } from "next";
import Link from "next/link";
import ReservationForm from "@/components/ReservationForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Reservas",
  description:
    "Solicita tu reserva en nuestro albergue ecológico. Elige tu paquete, fechas y tipo de habitación.",
};

export default function ReservasPage() {
  return (
    <>
      <PageHero
        title="Reservas"
        eyebrow="Cupos y disponibilidad"
        subtitle="Envíanos tu solicitud y confirmaremos fechas, logística y recomendaciones antes de cerrar la reserva."
        image="/assets/gallery/landscape-6.jpg"
      />

      {/* Content */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="glass-surface rounded-2xl p-6 md:p-8">
                <h2 className="font-heading font-bold text-dark text-xl mb-2">
                  Solicita tu Reserva
                </h2>
                <p className="text-sm text-gray-text mb-6">
                  Completa el formulario y nos pondremos en contacto para confirmar disponibilidad
                  y finalizar tu reserva. También puedes consultar nuestros{" "}
                  <Link href="/paquetes" className="text-teal hover:underline">
                    paquetes disponibles
                  </Link>
                  .
                </p>
                <ReservationForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* Logo placeholder */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6 text-center">
                <div className="w-20 h-20 rounded-full bg-orange flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange/20">
                  <span className="text-white font-heading font-bold text-xl">CH</span>
                </div>
                <h3 className="font-heading font-bold text-dark text-lg mb-2">
                  Chalalán Ecolodge
                </h3>
                <p className="text-sm text-gray-text">
                  Albergue Ecológico Comunitario
                </p>
              </div>

              {/* Trust badges */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <h3 className="font-heading font-semibold text-dark text-sm uppercase tracking-wide mb-4">
                  ¿Por qué reservar con nosotros?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Turismo comunitario certificado",
                    "Guías naturalistas bilingües",
                    "Más de 25 años de experiencia",
                    "Premios internacionales de sostenibilidad",
                    "Confirmación en 24-48 horas",
                    "Cancelación flexible",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-text">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards placeholder */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-heading font-semibold text-dark text-sm uppercase tracking-wide mb-4">
                  Reconocimientos
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-full bg-smoke border border-gray-200 flex items-center justify-center"
                    >
                      <span className="text-xs text-gray-text/60">S{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
