import Image from "next/image";
import { Metadata } from "next";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Manufacturing Process | Nutri Natural Powders",
  description: "Explore our state-of-the-art dehydration and processing facilities.",
};

export default function ManufacturingPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=2000"
          alt="Advanced Manufacturing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Advanced Manufacturing</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Where nature meets modern technology.</p>
          </FadeIn>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">State-of-the-Art Facility</h2>
                <p className="text-lg text-muted-foreground">
                  Our manufacturing unit is designed to meet international food safety standards. Equipped with modern low-temperature dehydration technology, we ensure that the natural color, flavor, and nutritional value of the raw materials are perfectly preserved.
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
              Quality is not an afterthought; it's integrated into every step of our process. From soil testing at our partner farms to the final microbial analysis of our powders, our in-house laboratory ensures that every batch meets stringent global standards.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
