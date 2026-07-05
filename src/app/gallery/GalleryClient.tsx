"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const images = [
  "/gallery8.jpeg",
  "/gallery7.jpeg",
  "/gallery6.jpeg",
  "/gallery5.jpeg",
  "/gallery9.jpeg",
  "/gallery4.jpeg",
  "/gallery2.jpeg",
  "/gallery1.jpeg",
  "/gallery10.png",
  "/gallery11.png",
  "/gallery12.png",
  "/gallery13.png",
  "/gallery14.png",
];

export function GalleryClient({ t }: { t: any }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, []);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, goToPrev, goToNext]);

  return (
    <>
      <div className="bg-background py-24 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.gallery.heroTitle}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.gallery.heroSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.05}>
                <div
                  className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer w-full"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors cursor-pointer"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 md:left-8 z-[110] bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 md:right-8 z-[110] bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <motion.div
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-[90vw] h-[80vh] max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[selectedIndex]}
                  alt={`Gallery image ${selectedIndex + 1}`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="90vw"
                  priority
                />
              </motion.div>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-wide">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

        {/* Internal Cross-Links */}
        <div className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <FadeIn direction="up" delay={0.1}>
                <Link href="/products" className="block h-full group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.gallery.viewOurProducts}</h3>
                  <p className="text-muted-foreground">{t.gallery.viewOurProductsDesc}</p>
                </Link>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <Link href="/about" className="block h-full group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.gallery.aboutCompany}</h3>
                  <p className="text-muted-foreground">{t.gallery.aboutCompanyDesc}</p>
                </Link>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <Link href="/contact" className="block h-full group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.gallery.contactUs}</h3>
                  <p className="text-muted-foreground">{t.gallery.contactUsDesc}</p>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
    </>
  );
}
