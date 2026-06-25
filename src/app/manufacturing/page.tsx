import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Our Manufacturing Process - How We Make Natural Powders | NNP Products",
  description: "See how NNP Products makes dehydrated powders using low-temperature drying, multi-stage cleaning, and strict quality checks. ISO & GMP certified facility in Sangli, Maharashtra.",
};

export default function ManufacturingPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <Image
          src="/manufacturing.png"
          alt="Advanced Manufacturing"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Advanced Manufacturing</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">See how we turn fresh farm produce into pure, natural powders.</p>
          </FadeIn>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Factory</h2>
                <p className="text-lg text-muted-foreground">
                  Our manufacturing unit in Sangli, Maharashtra is built to meet international food safety standards. We use modern low-temperature drying machines that remove moisture without destroying the natural color, flavor, or vitamins of the raw ingredients.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> ISO & GMP Certified Facility</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Low-Temperature Dehydration</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Multi-stage Sorting & Cleaning</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Zero Contamination Processing</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=600" alt="Machinery" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden mt-12">
                  <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Lab Testing" fill className="object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <ManufacturingTimeline />

      {/* Quality Control */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Rigorous Quality Control</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl opacity-90 leading-relaxed">
              Quality is part of everything we do. We test the soil at our partner farms, check every batch during production, and run final lab tests before packing. Every product that leaves our factory has passed strict safety and quality checks.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Internal Cross-Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Link href="/products" className="group p-8 bg-muted rounded-2xl hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Browse Our Products</h3>
              <p className="text-muted-foreground">See all the natural powders we manufacture.</p>
            </Link>
            <Link href="/about" className="group p-8 bg-muted rounded-2xl hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">About Our Company</h3>
              <p className="text-muted-foreground">Learn about our story, values, and mission.</p>
            </Link>
            <Link href="/contact" className="group p-8 bg-muted rounded-2xl hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Request a Quote</h3>
              <p className="text-muted-foreground">Contact us for pricing or custom orders.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
