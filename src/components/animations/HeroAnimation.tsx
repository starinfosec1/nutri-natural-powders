"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroAnimation({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    // Continuous float left-to-right (well, right-to-left actually like a marquee)
    gsap.to(sliderRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 60,
      repeat: -1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div ref={sliderRef} className="absolute inset-0 h-full w-max flex">
        {children}
      </div>
    </div>
  );
}
