import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  /** Color variant */
  variant?: "orange" | "white" | "dark";
  /** Alignment */
  align?: "center" | "left";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  variant = "orange",
  align = "center",
  className,
}: SectionTitleProps) {
  const titleColors = {
    orange: "text-orange",
    white: "text-white",
    dark: "text-dark",
  };

  const subtitleColors = {
    orange: "text-gray-text",
    white: "text-white/80",
    dark: "text-gray-text",
  };

  const lineColors = {
    orange: "bg-orange",
    white: "bg-white",
    dark: "bg-orange",
  };

  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-heading font-bold uppercase tracking-wide",
          titleColors[variant]
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base sm:text-lg font-body max-w-2xl",
            subtitleColors[variant],
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full",
          lineColors[variant],
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
