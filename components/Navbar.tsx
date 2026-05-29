"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn, getAssetPath } from "@/lib/utils";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="relative backdrop-blur-md"
      style={{
        background: "linear-gradient(180deg, #8ab91c 0%, #7aaa18 50%, #6d9a14 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.15)",
      }}
      role="navigation"
      aria-label="Navegación principal"
    >
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />

      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-[90px] lg:h-[100px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 flex-shrink-0 group" aria-label="Inicio">
          <div
            className="-my-4 flex h-[92px] w-[150px] items-center justify-center overflow-visible transition-transform duration-300 group-hover:scale-105 lg:-my-6 lg:h-[112px] lg:w-[190px]"
          >
            <Image
              src={getAssetPath("/assets/logo.png")}
              alt="Eco-cabañas CECASEM"
              width={320}
              height={320}
              className="h-full w-full object-contain drop-shadow-[0_5px_12px_rgba(0,0,0,0.22)]"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p
              className="font-heading text-sm font-bold uppercase tracking-wide text-white"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              {siteConfig.siteName}
            </p>
            <p className="mt-0.5 text-xs text-white/70" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
              {siteConfig.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-1">
          {mainNavigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} item={item} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap px-3 py-2 text-sm font-semibold text-white/90 hover:text-white tracking-wide transition-all duration-200 rounded-lg hover:bg-white/10"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/reservas"
            className={cn(
              "ml-3 px-6 py-2.5 text-white rounded-full",
              "text-sm font-bold tracking-wide",
              "hover:-translate-y-0.5 transition-all duration-300",
            )}
            style={{
              background: "linear-gradient(180deg, #3498DB 0%, #2478B5 100%)",
              boxShadow: "0 4px 15px rgba(36,120,181,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
              border: "1px solid rgba(255,255,255,0.15)",
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Reservas
          </Link>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="xl:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú de navegación"
        >
          <Menu className="w-6 h-6" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
