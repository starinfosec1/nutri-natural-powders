import Image from "next/image";
import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { Counter } from "@/components/animations/Counter";

export const metadata: Metadata = {
  title: "About Us | NNP Powders",
  description: "At NNP Powders, our journey begins with a simple belief: the purest nutrition comes from nature itself. Learn about our mission, vision, and values.",
};

export default function AboutPage() {
  const stats = [
    { label: "Farmers Connected", value: 500, suffix: "+" },
    { label: "Products Manufactured", value: 50, suffix: "+" },
    { label: "Industries Served", value: 15, suffix: "+" },
    { label: "Years of Expertise", value: 10, suffix: "+" },
  ];

  const values = [
    { title: "Quality Without Compromise", desc: "We are committed to delivering products that meet the highest standards of purity, consistency, and excellence." },
    { title: "Respect for Nature", desc: "We believe in preserving the natural integrity of every ingredient and promoting environmentally responsible practices." },
    { title: "Integrity & Trust", desc: "We build lasting relationships through transparency, reliability, and ethical business practices." },
    { title: "Innovation & Growth", desc: "We continuously improve our processes and products to meet the evolving needs of our customers and industries." },
    { title: "Customer Success", desc: "Our success is measured by the success of our customers, and we are dedicated to supporting their growth with dependable ingredient solutions." }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60dvh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2000"
          alt="Agricultural Farming"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About NNP Powders</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Nature's Nutrition, Simply Powerful.
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
                    At NNP Powders, our journey begins with a simple belief: the purest nutrition comes from nature itself. Guided by our philosophy, "Nature's Nutrition, Simply Powerful.", we are dedicated to transforming fresh agricultural produce into high-quality dehydrated fruit, vegetable, and herbal powders that nourish lives and empower industries.
                  </p>
                  
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>Located in the fertile agricultural region of Ishwarpur MIDC, Taluka Walwa, District Sangli, Maharashtra, we work closely with farmers and agricultural communities to source carefully selected raw materials.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>Through advanced dehydration and processing techniques, we preserve the natural goodness, color, flavor, and nutritional value of every ingredient, ensuring that nature's benefits reach consumers in their purest form.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>Every product we manufacture represents a connection between the land, the farmer, our manufacturing expertise, and the businesses and consumers who trust our ingredients.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>Whether used in food products, health supplements, herbal formulations, nutraceuticals, or wellness applications, our powders are crafted with a commitment to quality, purity, and sustainability.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>We believe that responsible manufacturing goes beyond production. It means supporting agricultural communities, promoting sustainable practices, reducing post-harvest wastage, and creating value from nature's harvest while maintaining respect for the environment.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2.5" />
                      <p>Through innovation, consistency, and integrity, we strive to build lasting partnerships with our customers and contribute to a healthier future.</p>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <p className="font-heading text-xl font-bold text-primary italic">
                      "At NNP Powders, every ingredient tells a story of nature, nutrition, and trust."
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
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
                  To become a globally trusted leader in natural dehydrated ingredients by delivering sustainable, innovative, and high-quality nutritional solutions that enrich lives, support healthier choices, and create value across the food, wellness, and nutraceutical industries.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-12 rounded-3xl shadow-sm h-full">
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To harness the power of nature through responsible sourcing and advanced processing, delivering premium dehydrated fruit, vegetable, and herbal powders that meet the highest standards of quality, purity, and customer satisfaction.
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
            src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=2000"
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
                      "To provide premium-quality dehydrated fruit, vegetable, and herbal powders that retain their natural nutritional value, taste, and functionality.",
                      "To support farmers and agricultural communities through responsible sourcing and long-term partnerships.",
                      "To maintain hygienic manufacturing practices and rigorous quality standards at every stage of production.",
                      "To deliver consistent, safe, and reliable ingredients that help our customers create products people can trust.",
                      "To contribute to a healthier and more sustainable future by bringing the power of nature to industries and consumers worldwide."
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
    </div>
  );
}
