"use client";

import Link from "next/link";
import { Globe, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function TopBar() {
  return (
    <div className="bg-dark-soft text-white/75 text-xs border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-9">
        {/* Left: Contact */}
        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="Enviar correo electrónico"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Contáctanos</span>
          </Link>
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden md:inline">WhatsApp</span>
          </Link>
          <Link
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-1.5 hover:text-white transition-colors sm:flex"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{siteConfig.phone}</span>
          </Link>
        </div>

        {/* Right: Social + Language */}
        <div className="flex items-center gap-4">
          <span className="hidden text-white/55 md:inline">
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
    </div>
  );
}
