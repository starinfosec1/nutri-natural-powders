import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { FadeIn } from "@/components/animations/FadeIn";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Our Manufacturing Process - How We Make Natural Powders | NNP Products",
  description: "See how NNP Products makes dehydrated powders using low-temperature drying, multi-stage cleaning, and strict quality checks. ISO & GMP certified facility in Sangli, Maharashtra.",
};

export default async function ManufacturingPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "mr";
  const t = getTranslations(lang);

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
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">{t.manufacturing.heroTitle}</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{t.manufacturing.heroSubtitle}</p>
          </FadeIn>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t.manufacturing.factoryTitle}</h2>
                <p className="text-lg text-muted-foreground">
                  {t.manufacturing.factoryDesc}
                </p>
                <ul className="space-y-3 pt-4">
                  {t.manufacturing.factoryPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> {point}</li>
                  ))}
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
      <ManufacturingTimeline t={t} />

      {/* Quality Control */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">{t.manufacturing.qualityTitle}</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl opacity-90 leading-relaxed">
              {t.manufacturing.qualityDesc}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Internal Cross-Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Link href="/products" className="group p-8 bg-muted rounded-2xl hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.manufacturing.browseProducts}</h3>
              <p className="text-muted-foreground">{t.manufacturing.browseProductsDesc}</p>
            </Link>
            <Link href="/about" className="group p-8 bg-muted rounded-2xl hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.manufacturing.aboutCompany}</h3>
              <p className="text-muted-foreground">{t.manufacturing.aboutCompanyDesc}</p>
            </Link>
            <Link href="/contact" className="group p-8 bg-muted rounded-2xl hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.manufacturing.requestQuote}</h3>
              <p className="text-muted-foreground">{t.manufacturing.requestQuoteDesc}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
