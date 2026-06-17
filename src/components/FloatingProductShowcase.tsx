"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "Moringa Powder", image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=400", slug: "moringa-powder" },
  { name: "Ginger Powder", image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&q=80&w=400", slug: "ginger-powder" },
  { name: "Beetroot Powder", image: "https://images.unsplash.com/photo-1590165482156-f2eecc4735c3?auto=format&fit=crop&q=80&w=400", slug: "beetroot-powder" },
  { name: "Onion Powder", image: "https://images.unsplash.com/photo-1620574387735-3624d75b2df5?auto=format&fit=crop&q=80&w=400", slug: "onion-powder" },
  { name: "Curry Leaves Powder", image: "https://images.unsplash.com/photo-1634594269926-0a256df0ffcd?auto=format&fit=crop&q=80&w=400", slug: "curry-leaves-powder" },
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
    <section className="py-24 bg-muted overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground">
          Premium Powders Collection
        </h2>
      </div>
      
      <div className="w-full overflow-hidden flex whitespace-nowrap">
        <div ref={containerRef} className="flex gap-8 px-4 w-[200%]">
          {[...products, ...products].map((product, index) => (
            <Link 
              key={`${product.slug}-${index}`}
              href={`/products/${product.slug}`}
              className="group relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-heading font-bold text-white drop-shadow-md">
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
