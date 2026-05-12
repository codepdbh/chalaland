"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  /** Optional title overlay */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
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
  title,
  subtitle,
  backgroundImage = "/assets/hero/hero-placeholder.jpg",
  backgroundVideo,
  showArrow = true,
  variant = "full",
}: HeroProps) {
  const heightClasses = {
    full: "h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh]",
    medium: "h-[40vh] sm:h-[45vh] md:h-[50vh]",
    small: "h-[30vh] sm:h-[35vh] md:h-[40vh]",
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
      className={cn("relative w-full overflow-hidden", heightClasses[variant])}
    >
      {/* Background Video or Image */}
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={backgroundImage}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          {title && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg max-w-4xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 font-body max-w-2xl drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Bouncing Arrow */}
      {showArrow && (
        <button
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-arrow"
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
