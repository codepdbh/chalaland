"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-dark" role="navigation" aria-label="Navegación principal">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-[90px] lg:h-[100px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Inicio">
          <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-full bg-dark-light border-2 border-orange flex items-center justify-center overflow-hidden">
            <span className="text-orange font-heading font-bold text-lg lg:text-xl leading-none">
              ECO
            </span>
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
                className="px-1 py-2 text-sm font-semibold text-white/90 hover:text-white tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/reservas"
            className={cn(
              "ml-4 px-6 py-2.5 border border-white text-white rounded-full",
              "text-sm font-semibold tracking-wide",
              "hover:bg-white hover:text-dark transition-all duration-300"
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
