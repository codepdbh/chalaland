import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";
import PageHero from "@/components/PageHero";
import { getAssetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Reservas",
  description:
    "Solicita información y disponibilidad para los paquetes de la ruta turística comunitaria Eco-cabañas CECASEM.",
};

export default function ReservasPage() {
  return (
    <>
      <PageHero
        title="Reservas"
        eyebrow="Cupos y disponibilidad"
        subtitle="Envíanos tu solicitud y confirmaremos fechas, logística, comunidad anfitriona y recomendaciones antes de cerrar la reserva."
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
                  y coordinar la ruta. También puedes consultar nuestros{" "}
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
                <div className="w-20 h-20 rounded-full bg-white mx-auto mb-4 shadow-lg shadow-orange/20 overflow-hidden relative p-2">
                  <Image
                    src={getAssetPath("/assets/logo.png")}
                    alt="Eco-cabañas CECASEM"
                    width={240}
                    height={124}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="font-heading font-bold text-dark text-lg mb-2">
                  Eco-cabañas CECASEM
                </h3>
                <p className="text-sm text-gray-text">
                  Ruta turística comunitaria
                </p>
              </div>

              {/* Trust badges */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
                <h3 className="font-heading font-semibold text-dark text-sm uppercase tracking-wide mb-4">
                  ¿Por qué reservar con nosotros?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Ruta San Borja - Monte Rosa",
                    "Guía nativo y actividades guiadas",
                    "Transporte terrestre y por río",
                    "Hospedaje en cabañas comunitarias",
                    "Convivencia con comunidades tsimanes",
                    "Recomendaciones previas al viaje",
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
                  Datos rápidos
                </h3>
                <ul className="space-y-2 text-sm text-gray-text">
                  <li>Distancia total: 58,16 km ida y vuelta.</li>
                  <li>Dificultad general: moderada.</li>
                  <li>Comunidades: Galilea, San Antonio, Campo Bello y Monte Rosa.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
