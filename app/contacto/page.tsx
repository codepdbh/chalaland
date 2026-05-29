import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para consultas, cotizaciones o información sobre la ruta turística comunitaria Eco-cabañas CECASEM.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Contacto"
        eyebrow="Planifica tu ruta"
        subtitle="Cuéntanos fechas, intereses y número de viajeros. Te ayudamos a elegir entre Jochi, Paraba Azul, Peta o Perezoso."
        image="/assets/gallery/lodge-4.jpg"
      />

      {/* Content */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-dark text-xl mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">Teléfono</p>
                    <Link
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm text-gray-text hover:text-orange transition-colors"
                    >
                      {contactInfo.phone}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">WhatsApp</p>
                    <Link
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-text hover:text-orange transition-colors"
                    >
                      {contactInfo.whatsappDisplay}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">Email</p>
                    <Link
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-gray-text hover:text-orange transition-colors"
                    >
                      {contactInfo.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">Dirección</p>
                    <p className="text-sm text-gray-text">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-text mb-4">{contactInfo.hours}</p>

              {/* WhatsApp CTA */}
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa obtener información sobre la ruta turística comunitaria CECASEM.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir por WhatsApp
              </Link>

              {/* Map */}
              <div className="mt-8 h-48 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <iframe
                  src={contactInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mapa de ubicación"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-surface rounded-2xl p-6 md:p-8">
                <h2 className="font-heading font-bold text-dark text-xl mb-2">
                  Envíanos un Mensaje
                </h2>
                <p className="text-sm text-gray-text mb-6">
                  Completa el formulario y te responderemos lo antes posible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
