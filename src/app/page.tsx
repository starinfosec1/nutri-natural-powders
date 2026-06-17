import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FloatingProductShowcase } from "@/components/FloatingProductShowcase";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { Leaf, ShieldCheck, Factory, Droplets, Users, Globe2 } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2000"
          alt="Agricultural Fields"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1508595165502-3e2652e5a405?auto=format&fit=crop&q=80&w=1000"
                alt="Manufacturing Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Excellence in Natural Ingredient Manufacturing
              </h2>
              <p className="text-lg text-muted-foreground">
                At Nutri Natural Powders, we bridge the gap between pure agricultural produce and high-quality industrial ingredients. Our state-of-the-art dehydration facilities ensure that every gram of powder retains its natural color, aroma, and nutritional profile.
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
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver uncompromising quality through sustainable practices and advanced technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Premium Quality", icon: ShieldCheck, desc: "Rigorous quality control and lab testing for every batch." },
              { title: "Sustainable Manufacturing", icon: Leaf, desc: "Eco-friendly processes with minimal environmental impact." },
              { title: "Direct Farm Sourcing", icon: Users, desc: "Empowering farmers through direct and fair partnerships." },
              { title: "Nutrient Preservation", icon: Droplets, desc: "Low-temp dehydration keeps natural nutrients intact." },
              { title: "Advanced Processing", icon: Factory, desc: "Modern machinery ensuring hygiene and consistency." },
              { title: "Trusted Partnerships", icon: Globe2, desc: "Reliable B2B supplier for global brands." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Timeline */}
      <ManufacturingTimeline />

      {/* Contact CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=2000"
            alt="Background Texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Source Premium Natural Powders?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Contact us today for bulk inquiries, custom formulations, or sample requests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary", className: "text-lg px-8 py-6 rounded-full text-primary hover:text-primary/90" })}>
              Contact Our Team
            </Link>
            <Link href="/products" className={buttonVariants({ size: "lg", variant: "outline", className: "text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white hover:text-primary" })}>
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
