import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FloatingProductShowcase } from "@/components/FloatingProductShowcase";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { Leaf, ShieldCheck, Factory, Droplets, Users, Globe2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

import { HeroAnimation } from "@/components/animations/HeroAnimation";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover object-center pointer-events-none"
          >
            <source src="/videos/nnpv.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
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


      {/* Health Benefits Section */}
      <section className="py-24 bg-muted/40 border-t border-b border-border/40">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                Health Benefits of Our Powders
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our 100% natural, nutrient-dense dehydrated powders are packed with vitamins, minerals, and bioactive compounds to support daily health and vitality.
              </p>
            </div>
          </FadeIn>

          {/* Stacking Cards Container */}
          <div className="relative max-w-4xl mx-auto flex flex-col gap-12 pb-24">
            {[
              {
                title: "Moringa Powder",
                benefit: "Boosts Immunity & Energy",
                desc: "Known as the 'Miracle Tree', moringa is rich in iron, calcium, vitamin A, and antioxidants that enhance energy, support healthy immune function, and combat cell damage.",
                image: "/moringa.png",
                color: "bg-emerald-50 text-emerald-800 border-emerald-100"
              },
              {
                title: "Beetroot Powder",
                benefit: "Improves Blood Flow & Stamina",
                desc: "High in dietary nitrates, beetroot helps dilate blood vessels to improve circulation, optimize oxygen delivery, support cardiovascular health, and increase stamina.",
                image: "/beetroot-powders.png",
                color: "bg-red-50 text-red-800 border-red-100"
              },
              {
                title: "Ginger Powder",
                benefit: "Supports Digestion & Joint Health",
                desc: "Contains gingerol, a powerful bioactive compound that aids digestion, relieves stomach upset, reduces muscle soreness, and offers strong anti-inflammatory properties.",
                image: "/ginger-powders.png",
                color: "bg-amber-50 text-amber-800 border-amber-100"
              },
              {
                title: "Curry Leaf Powder",
                benefit: "Promotes Hair & Gut Vitality",
                desc: "Rich in antioxidants, iron, and fiber, curry leaves help maintain healthy digestion, regulate cholesterol levels, and nourish hair follicles to promote hair health.",
                image: "/curry-leaves.png",
                color: "bg-green-50 text-green-800 border-green-100"
              },
              {
                title: "Onion Powder",
                benefit: "Supports Heart Health & Immunity",
                desc: "Rich in vitamin C, potassium, and phytochemicals, onion powder helps maintain healthy blood pressure levels, supports cardiovascular health, and strengthens immune defenses.",
                image: "/Onion-Powders.png",
                color: "bg-slate-50 text-slate-800 border-slate-100"
              },
              {
                title: "Methi (Fenugreek) Powder",
                benefit: "Regulates Blood Sugar & Metabolism",
                desc: "Highly nutritious and rich in soluble fiber, methi powder supports healthy glucose levels, boosts digestive function, enhances metabolism, and promotes skin and hair vitality.",
                image: "/methi.png",
                color: "bg-yellow-50 text-yellow-800 border-yellow-100"
              },
              {
                title: "Tomato Powder",
                benefit: "Heart Health & Lycopene Boost",
                desc: "Packed with lycopene, vitamin C, and potassium, tomato powder acts as a strong antioxidant shield, supporting cardiovascular health and protecting cells from oxidative stress.",
                image: "/tomato-powders.png",
                color: "bg-rose-50 text-rose-800 border-rose-100"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="sticky bg-white border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group min-h-[350px] md:h-[320px]"
                style={{
                  top: `calc(100px + ${i * 32}px)`,
                  zIndex: i + 1
                }}
              >
                <FadeIn direction="up" delay={0.1} className="flex flex-col md:flex-row h-full">
                  {/* Image side */}
                  <div className="relative w-full md:w-2/5 h-48 md:h-full bg-muted overflow-hidden shrink-0">
                    <Image
                      src={card.image}
                      alt={`${card.title} benefits`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
                  {/* Content side */}
                  <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase mb-4 ${card.color}`}>
                        {card.benefit}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4 group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/powder-image.jpg"
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
                  We turn fresh fruits, vegetables, and herbs into pure, natural powders. Our advanced drying process keeps the natural color, taste, and nutrition in every product we make.
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
                We make four types of natural powders to meet the needs of food, health, and wellness businesses.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Dehydrated Fruit Powders", desc: "We dry fresh fruits at low temperatures to make fine powders. These powders keep the natural taste, color, and vitamins of the original fruit. Used in drinks, snacks, and health products.", image: "/fruit-powder.png" },
              { title: "Dehydrated Vegetable Powders", desc: "Our vegetable powders include tomato, onion, beetroot, spinach, and more. They are perfect for soups, sauces, ready-to-eat meals, and food processing companies.", image: "/vegetable-powder.png" },
              { title: "Green Leaf Powders", desc: "Made from fresh moringa, curry leaf, spinach, and mint leaves. These powders are rich in vitamins and minerals, ideal for health supplements and natural food products.", image: "/green-leaf.png" },
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
                Here is what makes NNP Products different from other powder suppliers.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { title: "Best Raw Materials", icon: ShieldCheck, desc: "We pick only the best fruits, vegetables, and herbs so our powders are always high in nutrition and quality.", image: "/why.png" },
              { title: "Natural Goodness Preserved", icon: Droplets, desc: "Our drying process keeps the real color, taste, smell, and health benefits of every ingredient.", image: "/why1.png" },
              { title: "Custom Orders Available", icon: Factory, desc: "Need a specific powder size, blend, or packaging? We can customize products to match your exact needs.", image: "/why2.png" },
              { title: "Small & Large Orders", icon: Users, desc: "Whether you need 10 kg or 10 tons, our factory can handle orders of any size with the same quality.", image: "/why3.png" },
              { title: "On-Time Delivery", icon: Leaf, desc: "We take deadlines seriously. Your orders will arrive on time, every time, with no delays.", image: "/why4.png" },
              { title: "Friendly & Helpful Team", icon: Globe2, desc: "Our team is always ready to help. From your first inquiry to after-sales support, we are here for you.", image: "/why5.png" },
            ].map((feature, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all h-full overflow-hidden flex flex-col group">
                  <div className="relative w-full overflow-hidden flex justify-center bg-muted/10">
                    <img src={feature.image} alt={feature.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                    <feature.icon className="w-10 h-10 text-white absolute bottom-4 left-6 drop-shadow-md z-10" />
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
                <p className="text-muted-foreground">Free shipping on all bulk orders across India.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="p-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">Every product is tested and certified for purity and safety.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="p-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground">Our team is available to help you with any questions or orders.</p>
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
            {['FSSAI', 'ISE'].map((cert, index) => (
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
              { name: "Moringa Powder", image: "/moringa.png", slug: "moringa-powder" },
              { name: "Beetroot Powder", image: "/beetroot-powders.png", slug: "beetroot-powder" },
              { name: "Ginger Powder", image: "/ginger-powders.png", slug: "ginger-powder" },
              { name: "Onion Powder", image: "/Onion-Powders.png", slug: "onion-powder" }
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
              Looking for Natural Powder Supplier?
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Get in touch with us for bulk orders, custom blends, or free product samples. We are happy to help.
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
