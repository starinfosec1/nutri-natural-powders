import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { Counter } from "@/components/animations/Counter";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/translations";

export const metadata: Metadata = {
  title: "About NNP Products - Trusted Natural Powder Manufacturer Since 2015",
  description: "Learn about NNP Products, a leading dehydrated powder manufacturer based in Sangli, Maharashtra. We work directly with farmers to deliver pure, high-quality natural powders.",
};

export default async function AboutPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "mr";
  const t = getTranslations(lang);

  const stats = [
    { label: t.about.stats[0].label, value: 50, suffix: t.about.stats[0].suffix },
    { label: t.about.stats[1].label, value: 15, suffix: t.about.stats[1].suffix },
    { label: t.about.stats[2].label, value: 15, suffix: t.about.stats[2].suffix },
    { label: t.about.stats[3].label, value: 5, suffix: t.about.stats[3].suffix },
  ];

  const values = t.about.values;

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60dvh] flex items-center justify-center overflow-hidden">
        <Image
          src="/aboutbg.png"
          alt="Agricultural Farming"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t.about.heroTitle}</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl font-light opacity-90">
              {t.about.heroSubtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story & About */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">{t.about.storyTitle}</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p className="text-foreground font-medium">
                    {t.about.storyText1}
                  </p>

                  <ul className="space-y-5">
                    {t.about.storyList.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <p className="font-heading text-xl font-bold text-primary italic">
                      {t.about.storyQuote}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about.png"
                  alt="Fresh produce and ingredients"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="up">
              <div className="bg-white p-12 rounded-3xl shadow-sm h-full">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">{t.about.visionTitle}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.visionDesc}
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-12 rounded-3xl shadow-sm h-full">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">{t.about.missionTitle}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.missionDesc}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/about.png"
            alt="Background Texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-5xl md:text-6xl font-heading font-bold mb-2">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg opacity-80 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Commitment */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-foreground">{t.about.valuesTitle}</h2>
                <div className="space-y-8">
                  {values.map((value, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-foreground">{t.about.commitmentTitle}</h2>
                <div className="bg-muted p-8 rounded-3xl h-full">
                  <ul className="space-y-6">
                    {t.about.commitments.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white shrink-0 mt-1">✓</div>
                        <p className="text-foreground leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Internal Cross-Links */}
      <section className="py-16 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Link href="/products" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.about.exploreProducts}</h3>
              <p className="text-muted-foreground">{t.about.exploreProductsDesc}</p>
            </Link>
            <Link href="/manufacturing" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.about.seeProcess}</h3>
              <p className="text-muted-foreground">{t.about.seeProcessDesc}</p>
            </Link>
            <Link href="/contact" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.about.getInTouch}</h3>
              <p className="text-muted-foreground">{t.about.getInTouchDesc}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
