import Link from "next/link";
import { Leaf, ShieldCheck, Users } from "lucide-react";
import CTAButton from "./CTAButton";

export default function ImportantInfoSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="mx-auto max-w-4xl text-center">
        {/* Orange Pill Button */}
        <Link
          href="/terminos"
          className="inline-block px-8 py-3 bg-orange text-white text-sm font-heading font-bold uppercase tracking-widest rounded-full hover:bg-orange-hover transition-colors mb-8"
        >
          Información antes de viajar
        </Link>

        {/* Separator */}
        <div className="w-full h-px bg-dark-line/30 mb-10" />

        <p className="text-gray-text text-sm mb-8">
          La experiencia se sostiene en tres compromisos visibles durante toda la estadía.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { icon: <ShieldCheck className="h-6 w-6" />, title: "Viaje responsable" },
            { icon: <Users className="h-6 w-6" />, title: "Beneficio comunitario" },
            { icon: <Leaf className="h-6 w-6" />, title: "Bosque protegido" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-smoke p-5 text-center shadow-sm"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
                {item.icon}
              </div>
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-dark">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-10">
          <CTAButton href="/contacto" variant="outline" size="sm">
            Contáctanos para más información
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
