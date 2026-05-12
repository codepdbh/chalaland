import Link from "next/link";
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
}: PackageCardProps) {
  return (
    <div
      className={cn(
        "group border border-dark-line rounded-lg overflow-hidden bg-white",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
      )}
    >
      {/* Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${getAssetPath(image)})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-heading font-bold text-dark mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-text mb-4">
          {duration} – {nights}
        </p>
        <Link
          href={`/paquetes/${slug}`}
          className={cn(
            "inline-block px-6 py-2.5 bg-teal text-white text-sm font-semibold rounded-full",
            "transition-all duration-300",
            "hover:bg-teal-hover hover:shadow-md"
          )}
        >
          Más información
        </Link>
      </div>
    </div>
  );
}
