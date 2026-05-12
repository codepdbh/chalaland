"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      // Small delay for smoother page load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[100] bg-dark-soft/95 backdrop-blur-sm border-t border-dark-line",
        "transform transition-transform duration-500",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="mx-auto max-w-5xl px-4 py-4 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-white/70 text-xs sm:text-sm text-center sm:text-left flex-1">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
          Al continuar navegando, acepta nuestra{" "}
          <Link
            href="/politica-privacidad"
            className="text-orange hover:underline"
          >
            Política de Privacidad
          </Link>{" "}
          y{" "}
          <Link href="/terminos" className="text-orange hover:underline">
            Términos y Condiciones
          </Link>
          .
        </p>
        <button
          onClick={handleAccept}
          className="flex-shrink-0 px-6 py-2 bg-orange text-white text-sm font-semibold rounded-full hover:bg-orange-hover transition-colors"
        >
          Estoy de acuerdo
        </button>
      </div>
    </div>
  );
}
