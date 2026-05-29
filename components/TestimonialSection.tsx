"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn, getAssetPath } from "@/lib/utils";

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      className="relative overflow-hidden bg-dark py-16 md:py-24 px-4"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(30,41,59,.94), rgba(30,41,59,.78)), url(${getAssetPath("/assets/gallery/community-1.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-4xl relative">
        {/* Quote icon */}
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm">
            <Quote className="w-9 h-9 text-sun" />
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-[0_0_100%] px-4">
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white text-lg sm:text-xl md:text-2xl font-body leading-relaxed italic mb-6 max-w-3xl mx-auto">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Name */}
                  <p className="text-white font-heading font-semibold text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-white/70 text-sm">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  i === selectedIndex ? "bg-white scale-125" : "bg-white/40"
                )}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
