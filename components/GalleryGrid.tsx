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
      <div className="flex flex-wrap justify-center gap-2 mb-8">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            aria-label={`Ver imagen: ${image.alt}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${getAssetPath(image.src)})` }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs bg-black/50 px-2 py-1 rounded">
                {image.alt}
              </p>
            </div>
          </button>
        ))}
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
