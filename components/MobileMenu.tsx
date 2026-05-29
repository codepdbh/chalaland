"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-dvh bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-dvh w-[300px] max-w-[85vw] transition-transform duration-300 xl:hidden",
          "flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          background: "linear-gradient(180deg, #4a7a0d 0%, #3d6a0a 50%, #2d5507 100%)",
          boxShadow: "-8px 0 30px rgba(0,0,0,0.3)",
        }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label="Menú de navegación"
      >
        {/* Close Button */}
        <div
          className="flex items-center justify-between p-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full font-heading font-bold text-white"
              style={{
                background: "linear-gradient(180deg, #3498DB 0%, #2478B5 100%)",
                boxShadow: "0 3px 10px rgba(36,120,181,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              CH
            </div>
            <div>
              <p className="font-heading text-sm font-bold uppercase text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
                {siteConfig.siteName}
              </p>
              <p className="text-xs text-white/55">Menú principal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 pb-6">
          <ul className="space-y-1 mt-2">
            {mainNavigation.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="flex items-center justify-between w-full px-3 py-3 text-white/90 hover:text-white text-sm font-semibold transition-all rounded-lg hover:bg-white/8"
                    >
                      {item.label}
                      {openSubmenu === item.label ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        openSubmenu === item.label
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <ul className="pl-4 pb-2 space-y-0.5">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-3 py-2.5 text-white/60 hover:text-white text-sm transition-colors rounded-lg hover:bg-white/5"
                              onClick={onClose}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-white/90 hover:text-white text-sm font-semibold transition-all rounded-lg hover:bg-white/8"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Reservas Button */}
          <div className="mt-6 px-3">
            <Link
              href="/reservas"
              className="block w-full text-center py-3.5 text-white rounded-full text-sm font-bold hover:-translate-y-0.5 transition-all duration-300"
              style={{
                background: "linear-gradient(180deg, #3498DB 0%, #2478B5 100%)",
                boxShadow: "0 4px 15px rgba(36,120,181,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.15)",
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
              onClick={onClose}
            >
              Reservas
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
