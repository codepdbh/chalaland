import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ExternalLink, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1: Contact Info */}
          <div>
            <h3 className="text-white text-sm font-heading font-bold uppercase tracking-widest mb-5">
              Información de Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm hover:text-orange transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-sm hover:text-orange transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </Link>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Social */}
          <div>
            <h3 className="text-white text-sm font-heading font-bold uppercase tracking-widest mb-5">
              Conéctate con Nosotros
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-orange transition-colors"
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
                  className="flex items-center gap-3 text-sm hover:text-orange transition-colors"
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
                  className="flex items-center gap-3 text-sm hover:text-orange transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Payment Methods */}
          <div>
            <h3 className="text-white text-sm font-heading font-bold uppercase tracking-widest mb-5">
              Métodos de Pago
            </h3>
            <div className="flex items-center gap-4">
              {/* Visa placeholder */}
              <div className="w-14 h-9 bg-white/10 rounded flex items-center justify-center text-xs font-bold text-white/60 border border-white/20">
                VISA
              </div>
              {/* Mastercard placeholder */}
              <div className="w-14 h-9 bg-white/10 rounded flex items-center justify-center text-xs font-bold text-white/60 border border-white/20">
                MC
              </div>
              {/* Cash */}
              <div className="w-14 h-9 bg-white/10 rounded flex items-center justify-center text-xs font-bold text-white/60 border border-white/20">
                CASH
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-line">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-privacidad"
              className="hover:text-orange transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="hover:text-orange transition-colors"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
