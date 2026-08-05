import SectionTitle from "./SectionTitle";
import { getAssetPath } from "@/lib/utils";
import {
  Sparkles,
  Compass,
  Trees,
  Ship,
  Users,
  Sprout,
  Hammer,
  Palette,
  Utensils,
  Binoculars,
} from "lucide-react";

export default function RouteIntroSection() {
  const activities = [
    { icon: <Trees className="h-4 w-4 text-orange" />, label: "Caminatas por senderos amazónicos" },
    { icon: <Ship className="h-4 w-4 text-orange" />, label: "Navegación por río" },
    { icon: <Users className="h-4 w-4 text-orange" />, label: "Convivencia con familias tsimanes" },
    { icon: <Sprout className="h-4 w-4 text-orange" />, label: "Interpretación de plantas medicinales y saberes ancestrales" },
    { icon: <Hammer className="h-4 w-4 text-orange" />, label: "Demostración de técnicas tradicionales de subsistencia" },
    { icon: <Palette className="h-4 w-4 text-orange" />, label: "Elaboración de artesanías" },
    { icon: <Utensils className="h-4 w-4 text-orange" />, label: "Gastronomía tradicional" },
    { icon: <Binoculars className="h-4 w-4 text-orange" />, label: "Observación de flora y fauna" },
  ];

  return (
    <section className="rainforest-texture px-4 py-16 md:py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Main Grid: Invitation & Images */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-hover backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Experiencia Vivencial Tsimane
            </div>

            <h2 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              ¿Cómo te gustaría vivir una experiencia auténtica junto a las comunidades tsimanes?
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-white/85 sm:text-base">
              Adéntrate en el corazón de la Amazonía boliviana y descubre una cultura que ha conservado su identidad, conocimientos y forma de vida a través de generaciones. Comparte con familias tsimanes, conoce sus tradiciones, aprende sobre su relación con la naturaleza y participa en experiencias de turismo vivencial que pocos lugares pueden ofrecer. No es solo un destino; es una oportunidad para comprender una forma de vida única y crear recuerdos que perdurarán para siempre.
            </p>

            {/* Quick Highlight Cards */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { title: "Cultura Viva", text: "Convivencia real con comunidades indígenas originarias." },
                { title: "Guías Nativos", text: "Saberes compartidos desde la propia experiencia tsimane." },
                { title: "Naturaleza Virgen", text: "Ríos, senderos y biodiversidad en estado puro." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-sm"
                >
                  <h3 className="font-heading text-xs font-bold uppercase text-brand-green-hover">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/75 leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mosaic Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="image-frame col-span-2 aspect-[16/9]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getAssetPath("/assets/gallery/landscape-6.jpg")})`,
                }}
              />
            </div>
            <div className="image-frame aspect-[4/5]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getAssetPath("/assets/gallery/fauna-1.jpg")})`,
                }}
              />
            </div>
            <div className="image-frame aspect-[4/5] translate-y-6">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getAssetPath("/assets/gallery/community-2.jpg")})`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Activities Section (Datos Rápidos) */}
        <div className="mt-16 rounded-3xl border border-white/20 bg-white/10 p-6 md:p-10 backdrop-blur-md">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-hover">
                Datos rápidos
              </span>
              <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                Actividades principales de la experiencia
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/70">
              <Compass className="h-4 w-4 text-orange" />
              Guiadas por intérpretes locales tsimanes
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((act, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/15">
                  {act.icon}
                </div>
                <span className="text-xs font-medium leading-snug text-white/90">
                  {act.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
