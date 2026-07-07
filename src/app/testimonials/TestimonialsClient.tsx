"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function TestimonialsClient({ t }: { t: any }) {
  const testimonials = t.testimonials.items.map((item: any, index: number) => ({
    ...item,
    image: `https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${11 + index}.jpg`,
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-background my-20 relative min-h-screen overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-primary/20 bg-primary/5 text-primary py-1.5 px-4 rounded-full text-sm font-semibold tracking-wide uppercase">
              {t.testimonials.badge}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mt-4 text-foreground">
            {t.testimonials.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            {t.testimonials.heroSubtitle}
          </p>
        </motion.div>

        <div className="px-12 relative max-w-6xl mx-auto mt-16">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((item: any, index: number) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col mx-2">
                    <p className="text-muted-foreground mb-6 flex-1 italic">"{item.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Internal Cross-Links */}
      <div className="container mx-auto px-4 mt-16 mb-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Link href="/products" className="group p-8 bg-muted rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.testimonials.exploreProducts}</h3>
            <p className="text-muted-foreground">{t.testimonials.exploreProductsDesc}</p>
          </Link>
          <Link href="/contact" className="group p-8 bg-muted rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.testimonials.contactUs}</h3>
            <p className="text-muted-foreground">{t.testimonials.contactUsDesc}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
