"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export function ManufacturingTimeline({ t = translations.en }: { t?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineSteps = t.manufacturing.steps;

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
            {t.manufacturing.timelineTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.manufacturing.timelineDesc}
          </p>

          {/* Core Principles */}
          <div className="mt-8 flex flex-col items-center">
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-3">{t.manufacturing.corePrinciples}</span>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-green-50 border border-green-100 text-green-700 rounded-full font-medium text-sm shadow-sm hover:scale-105 transition-transform">
                <span>🌿</span> {t.manufacturing.noPreservatives}
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-amber-50 border border-amber-100 text-amber-700 rounded-full font-medium text-sm shadow-sm hover:scale-105 transition-transform">
                <span>⚗️</span> {t.manufacturing.noAdditives}
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full font-medium text-sm shadow-sm hover:scale-105 transition-transform">
                <span>✅</span> {t.manufacturing.allNatural}
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:-translate-x-1/2 rounded-full"></div>

          {timelineSteps.map((step: any, index: number) => (
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
                        <span className="font-semibold text-foreground block mb-1">{t.manufacturing.processLabel}</span>
                        <p className="leading-relaxed">{step.process}</p>
                      </div>
                    )}

                    {step.methods && (
                      <div>
                        <span className="font-semibold text-foreground block mb-1.5">{t.manufacturing.methodsLabel}</span>
                        <ul className="space-y-2 pl-1">
                          {step.methods.map((method: any, mIdx: number) => (
                            <li key={mIdx} className="leading-relaxed">
                              <strong className="text-foreground">{method.name}:</strong> {method.desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.objective && (
                      <div className="pt-2 border-t border-border/65">
                        <span className="font-semibold text-foreground block mb-1">{t.manufacturing.objectiveLabel}</span>
                        <p className="leading-relaxed text-foreground/80">{step.objective}</p>
                      </div>
                    )}

                    {step.note && (
                      <div className="pt-2 border-t border-border/65">
                        <span className="font-semibold text-foreground block mb-1">{t.manufacturing.noteLabel}</span>
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
