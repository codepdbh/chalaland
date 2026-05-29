import Link from "next/link";
import { ArrowRight, Clock, Moon } from "lucide-react";
import { cn, getAssetPath } from "@/lib/utils";

interface PackageCardProps {
  slug: string;
  title: string;
  duration: string;
  nights: string;
  image: string;
  shortDescription?: string;
}

export default function PackageCard({
  slug,
  title,
  duration,
  nights,
  image,
  shortDescription,
}: PackageCardProps) {
  return (
    <article
      className={cn(
        "group w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-white bg-white",
        "transition-all duration-300",
        "shadow-sm hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
      )}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${getAssetPath(image)})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-dark shadow-sm">
            <Clock className="h-3.5 w-3.5 text-orange" />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-dark/75 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
            <Moon className="h-3.5 w-3.5 text-sun" />
            {nights}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-heading font-bold text-dark mb-2">
          {title}
        </h3>
        {shortDescription && (
          <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-text">
            {shortDescription}
          </p>
        )}
        <Link
          href={`/paquetes/${slug}`}
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-full",
            "transition-all duration-300",
            "hover:bg-teal-hover hover:shadow-md"
          )}
        >
          Más información
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
