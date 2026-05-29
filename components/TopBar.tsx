"use client";

import Link from "next/link";
import { Globe, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function TopBar() {
  return (
    <div className="relative text-white/90 text-xs" style={{
      background: "linear-gradient(180deg, #5a8a10 0%, #4a7a0d 100%)",
    }}>
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-9">
        {/* Left: Contact */}
        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors drop-shadow-sm"
            aria-label="Enviar correo electrónico"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Contáctanos</span>
          </Link>
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors drop-shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden md:inline">WhatsApp</span>
          </Link>
          <Link
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-1.5 hover:text-white transition-colors sm:flex drop-shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{siteConfig.phone}</span>
          </Link>
        </div>

        {/* Right: Social + Language */}
        <div className="flex items-center gap-4">
          <span className="hidden text-white/60 md:inline drop-shadow-sm">
            Cupos reducidos por salida
          </span>
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Globe className="w-3.5 h-3.5" />
          </Link>
          <div className="flex items-center gap-1 text-[11px]">
            {siteConfig.languages.map((lang, i) => (
              <span key={lang.code} className="flex items-center">
                {i > 0 && <span className="mx-1 text-white/30">/</span>}
                <Link
                  href={lang.href}
                  className={`hover:text-white transition-colors ${
                    i === 0 ? "text-white font-semibold" : ""
                  }`}
                >
                  {lang.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom shadow line for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/15" />
    </div>
  );
}
