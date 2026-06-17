"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  { title: "Farm", desc: "Direct sourcing from partnered farmers", icon: "🌱" },
  { title: "Selection", desc: "Rigorous quality check and sorting", icon: "🔍" },
  { title: "Cleaning", desc: "Multi-stage hygienic washing process", icon: "💧" },
  { title: "Dehydration", desc: "Low-temperature nutrient preservation", icon: "☀️" },
  { title: "Grinding", desc: "Fine milling into premium powders", icon: "⚙️" },
  { title: "Packaging", desc: "Moisture-proof, secure packing", icon: "📦" },
  { title: "Delivery", desc: "Dispatch to global partners", icon: "🚚" },
];

export function ManufacturingTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    stepsRef.current.forEach((step, i) => {
      if (!step) return;
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Our Manufacturing Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From farm to powder, we maintain the highest standards of quality, purity, and nutrient preservation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:-translate-x-1/2 rounded-full"></div>

          {timelineSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => { stepsRef.current[index] = el; }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center border-4 border-white shadow-md z-10"></div>

              {/* Content */}
              <div className="w-full pl-20 md:pl-0 md:w-1/2 flex flex-col justify-center">
                <div className={`bg-muted p-6 rounded-2xl shadow-sm ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"}`}>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
