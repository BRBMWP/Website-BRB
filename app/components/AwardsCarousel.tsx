"use client";

import { useState } from "react";
import Image from "next/image";
import award33 from "@photo/Awards/33.jpg";
import award15 from "@photo/Awards/15.png";
import award5 from "@photo/Awards/5.png";

const awards = [award33, award15, award5];

export default function AwardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) {
      setCurrentIndex(awards.length - 1);
      return;
    }
    if (index >= awards.length) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(index);
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  return (
    <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto">
      <div className="overflow-hidden rounded-md border">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {awards.map((img, index) => (
            <div key={index} className="min-w-full">
              <div className="relative w-full pb-[133%] bg-white">
                <Image
                  src={img}
                  alt={`Award ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 800px, 100vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-outline px-3 py-1"
        onClick={goPrev}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-outline px-3 py-1"
        onClick={goNext}
      >
        ›
      </button>

      <div className="mt-3 flex items-center justify-center gap-2">
        {awards.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-[var(--navy)]" : "bg-[var(--card-border)]"}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}


