"use client";

import { useState } from "react";
import { cn, getAssetPath } from "@/lib/utils";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/data/gallery";
import Lightbox from "./Lightbox";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 rounded-2xl bg-white p-2 shadow-sm">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
            activeCategory === "all"
              ? "bg-orange text-white"
              : "bg-smoke text-gray-text hover:bg-orange/10 hover:text-orange"
          )}
        >
          Todas
        </button>
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
              activeCategory === cat.value
                ? "bg-orange text-white"
                : "bg-smoke text-gray-text hover:bg-orange/10 hover:text-orange"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((image, index) => {
          const featured = index % 9 === 0;

          return (
          <button
            key={image.id}
            onClick={() => openLightbox(index)}
            className={cn(
              "group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm",
              featured && "md:col-span-2 md:row-span-2"
            )}
            aria-label={`Ver imagen: ${image.alt}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${getAssetPath(image.src)})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-end p-4">
              <p className="rounded-full bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.alt}
              </p>
            </div>
          </button>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <p className="text-center text-gray-text py-12">
          No hay imágenes en esta categoría aún.
        </p>
      )}

      {/* Lightbox */}
      <Lightbox
        images={filteredImages.map((img) => ({ src: img.src, alt: img.alt }))}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
