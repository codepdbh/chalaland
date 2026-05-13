"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="bg-dark/96 border-b border-white/10 backdrop-blur-md"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-[90px] lg:h-[100px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Inicio">
          <div className="w-[58px] h-[58px] lg:w-[66px] lg:h-[66px] rounded-full bg-orange text-white border border-white/20 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20">
            <span className="font-heading font-bold text-lg lg:text-xl leading-none">
              CH
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              {siteConfig.siteName}
            </p>
            <p className="mt-0.5 text-xs text-white/55">{siteConfig.tagline}</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {mainNavigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} item={item} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-1 py-2 text-sm font-semibold text-white/80 hover:text-white tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/reservas"
            className={cn(
              "ml-4 px-6 py-2.5 border border-orange bg-orange text-white rounded-full",
              "text-sm font-semibold tracking-wide",
              "hover:bg-orange-hover hover:border-orange-hover hover:-translate-y-0.5 transition-all duration-300"
            )}
          >
            Reservas
          </Link>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú de navegación"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
