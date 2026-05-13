"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { videos, videoCategories, type VideoCategory } from "@/data/videos";
import { cn, getAssetPath } from "@/lib/utils";

const fallbackImages: Record<VideoCategory, string> = {
  albergue: "/assets/gallery/lodge-1.jpg",
  naturaleza: "/assets/gallery/fauna-1.jpg",
  comunidad: "/assets/gallery/community-1.jpg",
};

export default function VideoGrid() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "all">("all");

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

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
          Todos
        </button>
        {videoCategories.map((cat) => (
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

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
          >
            {video.youtubeId === "dQw4w9WgXcQ" ? (
              <div
                className="relative aspect-video bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getAssetPath(fallbackImages[video.category])})`,
                }}
              >
                <div className="absolute inset-0 bg-dark/55" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange shadow-lg shadow-black/20">
                    <Play className="h-6 w-6 fill-white" />
                  </div>
                  <p className="font-heading text-sm font-bold uppercase tracking-wide">
                    Video por publicar
                  </p>
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-heading font-semibold text-dark text-base mb-1">
                {video.title}
              </h3>
              <p className="text-sm text-gray-text">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <p className="text-center text-gray-text py-12">
          No hay videos en esta categoría aún.
        </p>
      )}
    </>
  );
}
