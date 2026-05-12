"use client";

import { useState } from "react";
import { videos, videoCategories, type VideoCategory } from "@/data/videos";
import { cn } from "@/lib/utils";

export default function VideoGrid() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "all">("all");

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

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
          <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md">
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
