import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nutri Natural Powders",
  description: "Learn about our mission, vision, and commitment to manufacturing premium natural powders.",
};

export default function AboutPage() {
  const stats = [
    { label: "Farmers Connected", value: "500+" },
    { label: "Products Manufactured", value: "50+" },
    { label: "Industries Served", value: "15+" },
    { label: "Years of Expertise", value: "10+" },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1508595165502-3e2652e5a405?auto=format&fit=crop&q=80&w=2000"
          alt="Manufacturing Facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About Nutri Natural Powders</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Pioneering the future of natural ingredients through sustainable manufacturing and direct farm sourcing.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a vision to bridge the gap between pure agricultural produce and high-quality industrial ingredients, Nutri Natural Powders has grown into a leading manufacturer of dehydrated fruit, vegetable, and herbal powders. We started with a simple belief: nature provides the best nutrition, and our job is simply to preserve it.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-muted p-6 rounded-2xl">
                  <h3 className="text-xl font-heading font-bold mb-3 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground">To manufacture and supply the purest, most nutrient-dense natural powders while empowering farmers and promoting sustainable agriculture.</p>
                </div>
                <div className="bg-muted p-6 rounded-2xl">
                  <h3 className="text-xl font-heading font-bold mb-3 text-primary">Our Vision</h3>
                  <p className="text-muted-foreground">To become the globally preferred partner for natural food ingredients, recognized for unwavering quality and ethical practices.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1595856461947-a8775fba1894?auto=format&fit=crop&q=80&w=1000"
                alt="Our Farmers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-5xl md:text-6xl font-heading font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-80 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-foreground">Our Core Values</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Uncompromising Purity</h3>
              <p className="text-muted-foreground">No additives, no preservatives. Just 100% pure natural ingredients.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Ethical Sourcing</h3>
              <p className="text-muted-foreground">Direct partnerships with farmers ensuring fair trade and community growth.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Sustainability</h3>
              <p className="text-muted-foreground">Eco-friendly manufacturing processes minimizing our carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
