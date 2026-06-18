"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "Moringa Powder", image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=400", slug: "moringa-powder" },
  { name: "Ginger Powder", image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&q=80&w=400", slug: "ginger-powder" },
  { name: "Beetroot Powder", image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&q=80&w=400", slug: "beetroot-powder" },
  { name: "Onion Powder", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400", slug: "onion-powder" },
  { name: "Curry Leaves Powder", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400", slug: "curry-leaves-powder" },
  { name: "Methi Powder", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400", slug: "methi-powder" },
  { name: "Tomato Powder", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400", slug: "tomato-powder" },
];

export function FloatingProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    gsap.to(container, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

  }, []);

  return (
    <section className="py-12 md:py-16 bg-muted overflow-hidden relative">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground">
          Premium Powders Collection
        </h2>
      </div>
      
      <div className="w-full overflow-hidden flex whitespace-nowrap touch-pan-y">
        <div ref={containerRef} className="flex gap-4 md:gap-6 px-4 w-max touch-pan-y">
          {[...products, ...products].map((product, index) => (
            <Link 
              key={`${product.slug}-${index}`}
              href={`/products/${product.slug}`}
              className="group relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4 text-center">
                <h3 className="text-sm md:text-xl font-heading font-bold text-white drop-shadow-md whitespace-normal">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
