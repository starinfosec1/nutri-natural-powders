import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { Counter } from "@/components/animations/Counter";

export const metadata: Metadata = {
  title: "About NNP Products - Trusted Natural Powder Manufacturer Since 2015",
  description: "Learn about NNP Products, a leading dehydrated powder manufacturer based in Sangli, Maharashtra. We work directly with farmers to deliver pure, high-quality natural powders.",
};

export default function AboutPage() {
  const stats = [
    { label: "Farmers Connected", value: 50, suffix: "+" },
    { label: "Products Manufactured", value: 15, suffix: "+" },
    { label: "Industries Served", value: 15, suffix: "+" },
    { label: "Years of Expertise", value: 5, suffix: "+" },
  ];

  const values = [
    { title: "Quality Without Compromise", desc: "Every batch of powder we make is tested for purity, consistency, and safety before it leaves our facility." },
    { title: "Respect for Nature", desc: "We protect the natural goodness of every ingredient and follow eco-friendly manufacturing practices." },
    { title: "Integrity & Trust", desc: "We believe in honest business. Our customers trust us because we deliver what we promise, every time." },
    { title: "Innovation & Growth", desc: "We keep improving our methods and products to give our customers the best possible ingredients." },
    { title: "Customer Success", desc: "When our customers grow, we grow. We are here to help your business succeed with reliable, high-quality powders." }
  ];

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
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About NNP Products</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Turning fresh farm produce into pure, natural powders since 2015.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story & About */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">About the Company</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p className="text-foreground font-medium">
                    NNP Products is a natural powder manufacturing company based in Sangli, Maharashtra. We take fresh fruits, vegetables, and herbs from local farms and turn them into fine, pure powders using modern drying technology. Our goal is simple: keep the natural taste, color, and nutrition in every product we make.
                  </p>

                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>Our factory is located in Ishwarpur MIDC, Taluka Walwa, District Sangli, Maharashtra. We buy raw materials directly from local farmers, which helps us get the freshest ingredients and supports the farming community.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>We use low-temperature drying methods to remove moisture from fruits, vegetables, and herbs. This keeps the natural color, flavor, and vitamins intact, so our powders are as close to the real thing as possible.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>Every powder we make connects the farmer who grows the crop, our team who processes it, and the businesses who use it in their products. We take pride in this chain of trust.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>Our powders are used in many industries — from food and beverages to health supplements and beauty products. No matter where they are used, our commitment to purity and quality stays the same.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>For us, good manufacturing means more than just making products. It means supporting farmers, reducing food waste, using sustainable methods, and treating the environment with care.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>We work hard to improve every day, keep our promises, and build long-term relationships with our customers. Together, we are making a healthier future.</p>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <p className="font-heading text-xl font-bold text-primary italic">
                      "At NNP Products, every ingredient tells a story of nature, nutrition, and trust."
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
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="up">
              <div className="bg-white p-12 rounded-3xl shadow-sm h-full">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a globally trusted name in natural dehydrated powders. We want to be the company that food makers, health brands, and wellness businesses think of first when they need pure, natural ingredients.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-12 rounded-3xl shadow-sm h-full">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make the best natural powders by working directly with farmers, using modern drying technology, and following strict quality standards. Every product we deliver must be pure, safe, and exactly what our customers need.
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-foreground">Our Values</h2>
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
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-foreground">Our Commitment</h2>
                <div className="bg-muted p-8 rounded-3xl h-full">
                  <ul className="space-y-6">
                    {[
                      "Make natural powders that keep their original taste, color, and health benefits.",
                      "Support local farmers by buying directly from them and building long-term partnerships.",
                      "Follow strict hygiene and quality checks at every step of production.",
                      "Deliver safe, consistent products that our customers can always rely on.",
                      "Help build a healthier future by bringing nature's goodness to industries and consumers everywhere."
                    ].map((item, i) => (
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
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Link href="/products" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Explore Our Products</h3>
              <p className="text-muted-foreground">See our full range of natural dehydrated powders.</p>
            </Link>
            <Link href="/manufacturing" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">See Our Process</h3>
              <p className="text-muted-foreground">Learn how we make our powders step by step.</p>
            </Link>
            <Link href="/contact" className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Get in Touch</h3>
              <p className="text-muted-foreground">Contact us for bulk orders or free samples.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
