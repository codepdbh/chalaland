import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, ExternalLink, MessageCircle, Compass } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getAssetPath } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="relative text-white/90" role="contentinfo">
      {/* CTA Band */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
        }}
      >
        <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">
              <Compass className="h-3.5 w-3.5 text-brand-green-hover shrink-0" />
              Ruta comunitaria
            </p>
            <h2
              className="mt-4 max-w-2xl font-heading text-2xl font-bold text-white md:text-3xl"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
            >
              Coordina tu salida por la ruta San Borja - Monte Rosa con comunidades, río y eco-cabañas.
            </h2>
          </div>
          <Link
            href="/reservas"
            className="inline-flex w-fit items-center justify-center rounded-full px-8 py-3.5 font-heading text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(36,120,181,0.5)]"
            style={{
              background: "linear-gradient(180deg, #3498DB 0%, #2478B5 100%)",
              boxShadow: "0 4px 20px rgba(36,120,181,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.15)",
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Solicitar reserva
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div
        style={{
          background: "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-14 w-24 items-center justify-center overflow-hidden rounded-xl bg-white p-2"
                  style={{
                    boxShadow: "0 4px 12px rgba(36,120,181,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src={getAssetPath("/assets/logo.png")}
                    alt="Eco-cabañas CECASEM"
                    width={240}
                    height={124}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold uppercase text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
                    {siteConfig.siteName}
                  </p>
                  <p className="text-xs text-white/55">{siteConfig.tagline}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                Cabañas eco turísticas comunitarias para recorrer Galilea, San Antonio, Campo Bello y Monte Rosa.
              </p>
            </div>

            {/* Column 1: Contact Info */}
            <div>
              <h3 className="text-white text-sm font-heading font-bold uppercase tracking-widest mb-5" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
                Información de Contacto
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{siteConfig.email}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{siteConfig.phone}</span>
                  </Link>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.address}</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Social */}
            <div>
              <h3 className="text-white text-sm font-heading font-bold uppercase tracking-widest mb-5" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
                Conéctate con Nosotros
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Payment Methods */}
            <div>
              <h3 className="text-white text-sm font-heading font-bold uppercase tracking-widest mb-5" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
                Métodos de Pago
              </h3>
              <div className="flex items-center gap-3">
                {["VISA", "MC", "CASH"].map((method) => (
                  <div
                    key={method}
                    className="w-14 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-white/70"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(0,0,0,0.12)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
            <p>{siteConfig.copyright}</p>
            <div className="flex items-center gap-4">
              <Link
                href="/politica-privacidad"
                className="hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="hover:text-white transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
