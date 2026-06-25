"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    title: "Step 1: Harvesting or Bulk Buying",
    icon: "🌱",
    process: "Fresh vegetables and fruits are harvested at the proper maturity stage. Alternatively, produce is procured from trusted farmers in bulk.",
    objective: "Ensure freshness, quality, nutrition, and traceability."
  },
  {
    title: "Step 2: Washing and Cleaning",
    icon: "💧",
    process: "The produce is thoroughly washed using clean water. Dirt, dust, soil particles, pesticides, and impurities are removed.",
    objective: "Maintain hygiene and food safety standards."
  },
  {
    title: "Step 3: Cutting and Slicing",
    icon: "🔪",
    process: "Cleaned produce is trimmed. Vegetables and fruits are cut into uniform pieces or slices.",
    objective: "Achieve consistent and even drying. Improve drying efficiency and product quality."
  },
  {
    title: "Step 4: Drying (Sun or Tray)",
    icon: "☀️",
    methods: [
      { name: "Sun Drying", desc: "Natural sunlight is used. Cost-effective and traditional." },
      { name: "Tray Drying", desc: "Controlled-temperature drying chambers or dehydrators are used. Better consistency and hygiene." }
    ],
    objective: "Remove moisture. Preserve nutrients, natural color, flavor, and aroma. Extend shelf life naturally without preservatives."
  },
  {
    title: "Step 5: Powder Making Process",
    icon: "⚙️",
    process: "Dried slices are fed into food-grade grinders or pulverizers. Fine and smooth powders are produced.",
    note: "No additives, fillers, colors, or preservatives are mixed."
  },
  {
    title: "Step 6: Packaging",
    icon: "📦",
    process: "Powders are packed in hygienic, food-grade, air-tight pouches.",
    objective: "Lock in freshness. Protect flavor and nutrients. Prevent moisture absorption. Increase shelf life naturally."
  }
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Our Manufacturing Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here is how we make our powders, step by step. Every stage is designed to keep the natural goodness of the ingredients.
          </p>

          {/* Core Principles */}
          <div className="mt-8 flex flex-col items-center">
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-3">Core Principles</span>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-green-50 border border-green-100 text-green-700 rounded-full font-medium text-sm shadow-sm hover:scale-105 transition-transform">
                <span>🌿</span> No Preservatives
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-amber-50 border border-amber-100 text-amber-700 rounded-full font-medium text-sm shadow-sm hover:scale-105 transition-transform">
                <span>⚗️</span> No Additives
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full font-medium text-sm shadow-sm hover:scale-105 transition-transform">
                <span>✅</span> 100% Natural
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:-translate-x-1/2 rounded-full"></div>

          {timelineSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => { stepsRef.current[index] = el; }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center border-4 border-white shadow-md z-10"></div>

              {/* Content */}
              <div className="w-full pl-20 md:pl-0 md:w-1/2 flex flex-col justify-center">
                <div className={`bg-muted p-6 md:p-8 rounded-3xl shadow-sm border border-border/40 ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{step.icon}</span>
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm text-muted-foreground">
                    {step.process && (
                      <div>
                        <span className="font-semibold text-foreground block mb-1">Process:</span>
                        <p className="leading-relaxed">{step.process}</p>
                      </div>
                    )}

                    {step.methods && (
                      <div>
                        <span className="font-semibold text-foreground block mb-1.5">Methods:</span>
                        <ul className="space-y-2 pl-1">
                          {step.methods.map((method, mIdx) => (
                            <li key={mIdx} className="leading-relaxed">
                              <strong className="text-foreground">{method.name}:</strong> {method.desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.objective && (
                      <div className="pt-2 border-t border-border/65">
                        <span className="font-semibold text-foreground block mb-1">Objective:</span>
                        <p className="leading-relaxed text-foreground/80">{step.objective}</p>
                      </div>
                    )}

                    {step.note && (
                      <div className="pt-2 border-t border-border/65">
                        <span className="font-semibold text-foreground block mb-1">Note:</span>
                        <p className="leading-relaxed text-foreground/80 font-medium italic">{step.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
