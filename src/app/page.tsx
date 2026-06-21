import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FloatingProductShowcase } from "@/components/FloatingProductShowcase";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { Leaf, ShieldCheck, Factory, Droplets, Users, Globe2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

import { HeroAnimation } from "@/components/animations/HeroAnimation";
import { HeroCarousel } from "@/components/animations/HeroCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <HeroCarousel />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center pt-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Nature's Nutrition, Simply Powerful.
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
            Premium Dehydrated Fruit, Vegetable & Herbal Powders Manufactured with Purity, Quality & Sustainability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className={buttonVariants({ size: "lg", className: "text-lg px-8 py-6 rounded-full" })}>
              View Products
            </Link>
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline", className: "text-lg px-8 py-6 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary border-white" })}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Product Showcase */}
      <FloatingProductShowcase />

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1508595165502-3e2652e5a405?auto=format&fit=crop&q=80&w=1000"
                  alt="Premium Quality Powders"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-heading font-bold text-2xl">Uncompromising Quality</p>
                  <p className="opacity-90">From farm to fine powder.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                  Purity From Nature,<br /><span className="text-primary">Power For You.</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  At NNP Products, we bridge the gap between pure agricultural produce and high-quality industrial ingredients. Our state-of-the-art dehydration facilities ensure that every gram of powder retains its natural color, aroma, and nutritional profile.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "100% Natural & Adulteration Free",
                    "Direct partnerships with local farmers",
                    "Advanced low-temperature dehydration",
                    "Global export quality standards"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/about" className={buttonVariants({ className: "mt-8", size: "lg" })}>
                  Discover Our Story
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive powder manufacturing and supply solutions tailored for your industry needs.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Dehydrated Fruit Powders", desc: "Premium-quality fruit powders processed to preserve natural flavor, color, and nutritional value for food, beverage, and wellness applications.", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800" },
              { title: "Dehydrated Vegetable Powders", desc: "Manufacturing a wide range of vegetable powders including tomato, onion, beetroot, spinach, and other value-added ingredients for food processing industries.", image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&q=80&w=800" },
              { title: "Herbal & Nutritional Powders", desc: "Specialized production of natural herbal powders such as moringa, ginger, curry leaf, methi, and other plant-based ingredients for health and wellness products.", image: "https://images.unsplash.com/photo-1508595165502-3e2652e5a405?auto=format&fit=crop&q=80&w=800" },
              { title: "Bulk Supply Solutions", desc: "Reliable supply of high-quality powders for food manufacturers, nutraceutical companies, wholesalers, exporters, and industrial buyers.", image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&q=80&w=800" }
            ].map((service, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="border border-border rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all group h-full flex flex-col">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex-1 bg-white">
                    <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-lg">{service.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                Why Choose Us?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver uncompromising quality through sustainable practices and advanced technology.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { title: "Carefully Selected Raw Materials", icon: ShieldCheck, desc: "Sourced from quality agricultural produce to ensure superior product performance and nutritional value.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600" },
              { title: "Preservation of Natural Goodness", icon: Droplets, desc: "Our processing methods are designed to retain the natural color, aroma, taste, and nutritional properties of the original ingredients.", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=600" },
              { title: "Customized Product Solutions", icon: Factory, desc: "Tailored specifications, particle sizes, blends, and packaging options to meet unique customer requirements.", image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=600" },
              { title: "Bulk Production Capability", icon: Users, desc: "Efficient manufacturing infrastructure capable of fulfilling both small and large-volume orders.", image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=600" },
              { title: "Reliable Supply & Timely Delivery", icon: Leaf, desc: "A strong commitment to on-time order fulfillment and uninterrupted supply.", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600" },
              { title: "Customer-Centric Approach", icon: Globe2, desc: "Building long-term partnerships through responsive service, transparency, and dependable support.", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=600" },
            ].map((feature, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all h-full overflow-hidden flex flex-col group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={feature.image} alt={feature.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <feature.icon className="w-10 h-10 text-white absolute bottom-4 left-6 drop-shadow-md" />
                  </div>
                  <div className="p-8 pt-6 flex-1">
                    <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Cards Section */}
      <section className="py-16 bg-white border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Free Delivery</h3>
                <p className="text-muted-foreground">On all bulk orders across India.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="p-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Shop with Confidence</h3>
                <p className="text-muted-foreground">100% secure payments and quality guarantee.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="p-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Detailed Help Centre</h3>
                <p className="text-muted-foreground">24/7 dedicated support for our partners.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-16 bg-muted border-b border-border overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">Certifications & Standards</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['FSSAI', 'ISO 9001', 'GMP', 'FDA', 'APEDA', 'SPICE BOARD'].map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xs">
                  {cert}
                </div>
                <span className="font-bold text-foreground">{cert} Certified</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Timeline */}
      <ManufacturingTimeline />

      {/* Best Sellers Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Best Sellers</h2>
                <p className="mt-4 text-lg text-muted-foreground">Our most requested premium powders.</p>
              </div>
              <Link href="/products" className="hidden md:inline-flex text-primary font-medium hover:underline">
                View all products →
              </Link>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { name: "Moringa Powder", image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=400", slug: "moringa-powder" },
              { name: "Beetroot Powder", image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&q=80&w=400", slug: "beetroot-powder" },
              { name: "Ginger Powder", image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&q=80&w=400", slug: "ginger-powder" },
              { name: "Onion Powder", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400", slug: "onion-powder" }
            ].map((product, i) => (
              <FadeIn key={product.slug} direction="up" delay={i * 0.1}>
                <Link href={`/products/${product.slug}`} className="group block">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-xl group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground mt-1">100% Pure & Natural</p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/products" className={buttonVariants({ variant: "outline" })}>
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000"
            alt="Background Texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Source Premium Natural Powders?
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Contact us today for bulk inquiries, custom formulations, or sample requests.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary", className: "text-lg px-8 py-6 rounded-full text-primary hover:text-primary/90" })}>
                Contact Our Team
              </Link>
              <Link href="/products" className={buttonVariants({ size: "lg", variant: "outline", className: "text-lg px-8 py-6 rounded-full border-white text-primary hover:bg-white hover:text-primary" })}>
                Browse Catalog
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
