"use client";

import Link from "next/link";
import { CalendarCheck, ChevronDown, Compass, ArrowRight } from "lucide-react";
import { cn, getAssetPath } from "@/lib/utils";

interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  /** Small label above title */
  kicker?: string;
  /** Optional title overlay */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Primary CTA */
  primaryCta?: { href: string; label: string };
  /** Secondary CTA */
  secondaryCta?: { href: string; label: string };
  /** Compact stats shown over the hero */
  stats?: HeroStat[];
  /** Background image path */
  backgroundImage?: string;
  /** Background video path (takes precedence over image) */
  backgroundVideo?: string;
  /** Show bouncing arrow */
  showArrow?: boolean;
  /** Height variant */
  variant?: "full" | "medium" | "small";
}

export default function Hero({
  kicker,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  stats = [],
  backgroundImage = "/assets/hero/hero-placeholder.jpg",
  backgroundVideo,
  showArrow = true,
  variant = "full",
}: HeroProps) {
  const heightClasses = {
    full: "min-h-[680px] sm:min-h-[620px] md:h-[75vh] lg:h-[85vh]",
    medium: "min-h-[460px] sm:h-[45vh] md:h-[50vh]",
    small: "min-h-[360px] sm:h-[35vh] md:h-[40vh]",
  };

  const handleScrollDown = () => {
    const heroEl = document.getElementById("hero-section");
    if (heroEl) {
      const nextSection = heroEl.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero-section"
      className={cn("relative w-full overflow-hidden bg-dark", heightClasses[variant])}
    >
      {/* Background Video or Image */}
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={getAssetPath(backgroundImage)}
        >
          <source src={getAssetPath(backgroundVideo)} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${getAssetPath(backgroundImage)})` }}
        />
      )}

      {/* Layered Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/55 to-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/78 via-transparent to-dark/20" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-dark to-transparent" />

      {/* Content */}
      {(kicker || title || subtitle || primaryCta || secondaryCta || stats.length > 0) && (
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-8 px-4 pt-36 pb-16 sm:pt-32 sm:pb-24 md:grid-cols-[minmax(0,1fr)_360px] lg:pt-36">
            <div className="min-w-0 max-w-3xl">
              {kicker && (
                <span className="eyebrow max-w-full flex-wrap rounded-2xl border-white/25 bg-white/10 text-white sm:rounded-full">
                  <Compass className="h-3.5 w-3.5" />
                  <span className="min-w-0 break-words leading-snug">
                    {kicker}
                  </span>
                </span>
              )}
              {title && (
                <h1 className="mt-5 max-w-full break-words text-3xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="mt-5 max-w-2xl break-words text-base leading-relaxed text-white/85 drop-shadow sm:text-lg md:text-xl">
                  {subtitle}
                </p>
              )}
              {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {primaryCta && (
                    <Link
                      href={primaryCta.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-7 py-3 text-sm font-heading font-bold text-white shadow-xl shadow-black/20 transition-all duration-300 hover:bg-orange-hover hover:-translate-y-0.5 sm:w-auto"
                    >
                      <CalendarCheck className="h-4 w-4" />
                      {primaryCta.label}
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/55 bg-white/10 px-7 py-3 text-sm font-heading font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-dark sm:w-auto"
                    >
                      {secondaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              )}
            </div>

            {stats.length > 0 && (
              <div className="hidden rounded-2xl border border-white/20 bg-dark/50 p-4 shadow-2xl shadow-black/25 backdrop-blur-md md:block">
                <div className="grid grid-cols-1 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={`${stat.value}-${stat.label}`}
                      className="rounded-xl border border-white/15 bg-white/10 px-4 py-3"
                    >
                      <p className="font-heading text-2xl font-bold text-sun">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bouncing Arrow */}
      {showArrow && (
        <button
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce-arrow sm:block"
          aria-label="Desplazar hacia abajo"
        >
          <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center shadow-lg hover:bg-orange-hover transition-colors">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </button>
      )}
    </section>
  );
}
