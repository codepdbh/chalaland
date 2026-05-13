import { Compass } from "lucide-react";
import { cn, getAssetPath } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  align?: "left" | "center";
  compact?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image = "/assets/gallery/landscape-1.jpg",
  align = "center",
  compact = false,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-dark pt-[130px] lg:pt-[140px]",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${getAssetPath(image)})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/92 via-dark/68 to-dark/34" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/84 via-transparent to-dark/20" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-smoke to-transparent" />

      <div
        className={cn(
          "relative z-10 mx-auto max-w-7xl px-4",
          compact ? "py-12 md:py-16" : "py-16 md:py-24"
        )}
      >
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {eyebrow && (
            <span
              className={cn(
                "eyebrow border-white/25 bg-white/10 text-white",
                align === "center" && "mx-auto"
              )}
            >
              <Compass className="h-3.5 w-3.5" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-3xl font-bold uppercase text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "mt-4 text-base leading-relaxed text-white/80 sm:text-lg",
                align === "center" && "mx-auto max-w-2xl"
              )}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
