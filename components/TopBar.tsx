"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import LanguageSelector from "./LanguageSelector";

export default function TopBar() {
  return (
    <div className="relative text-white/90 text-xs" style={{
      background: "linear-gradient(180deg, #5a8a10 0%, #4a7a0d 100%)",
    }}>
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-3 px-4">
        {/* Left: Contact */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
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

        {/* Right: Availability + Language */}
        <div className="flex flex-shrink-0 items-center gap-2">
          <span className="hidden text-white/60 md:inline drop-shadow-sm">
            Cupos reducidos por salida
          </span>
          <LanguageSelector />
        </div>
      </div>
      {/* Bottom shadow line for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/15" />
    </div>
  );
}
