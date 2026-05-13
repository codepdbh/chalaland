"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { awards } from "@/data/awards";
import SectionTitle from "./SectionTitle";
import { getAssetPath } from "@/lib/utils";

export default function AwardsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="bg-dark py-16 md:py-20 px-4 text-white">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Reconocimientos"
          subtitle="Una forma de viajar respaldada por conservación, organización comunitaria y hospitalidad local."
          variant="white"
        />

        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-dark/80 text-white flex items-center justify-center hover:bg-dark transition-colors"
            aria-label="Premio anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8 md:mx-12" ref={emblaRef}>
            <div className="flex">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] px-3"
                >
                  <div className="flex h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                    <Image
                      src={getAssetPath(award.image)}
                      alt={award.title}
                      width={64}
                      height={64}
                      className="mb-3 h-16 w-16 object-contain"
                    />
                    <p className="text-center text-[11px] leading-tight text-white/70">
                      {award.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-dark/80 text-white flex items-center justify-center hover:bg-dark transition-colors"
            aria-label="Premio siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
