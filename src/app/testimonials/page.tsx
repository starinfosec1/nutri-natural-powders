"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import Link from "next/link";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "NNP Products has been our reliable supplier for Moringa and Beetroot powder. Their consistency in quality and timely delivery is unmatched in the industry.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Rajesh Kumar",
    role: "Global Health Supplements",
  },
  {
    text: "The vibrant color and authentic aroma of their Ginger powder perfectly suit our organic tea blends. We appreciate their transparent manufacturing process.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Sarah Williams",
    role: "Organic Wellness Co.",
  },
  {
    text: "Finding a manufacturer who maintains low moisture content while keeping the nutritional profile intact is hard. NNP Products does it flawlessly.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Amit Patel",
    role: "Spice Master Exports",
  },
  {
    text: "Their dehydrated fruit powders have revolutionized our beverage line. The natural flavor profile is so intense, we completely removed artificial additives.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Elena Rodriguez",
    role: "Beverage Innovation Lab",
  },
  {
    text: "Scaling our nutraceutical brand was effortless thanks to NNP Products' bulk supply solutions. They consistently meet our stringent quality standards.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Michael Chen",
    role: "NutriLife Pharmaceuticals",
  },
  {
    text: "We switched to their Onion and Tomato powders for our ready-to-eat meals. The shelf-life stability and flavor retention are simply outstanding.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Priya Sharma",
    role: "QuickMeals India",
  },
  {
    text: "Their customized particle sizes for herbal powders helped us solve a major formulation issue in our cosmetic line. Truly a responsive B2B partner.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Amanda Foster",
    role: "Earthly Cosmetics",
  },
  {
    text: "From farm sourcing to final delivery, the professionalism of NNP Products is evident. Our supply chain has never been more secure.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "David Okafor",
    role: "Global Ingredients Ltd.",
  },
  {
    text: "The purity of their agricultural powders is certified and verified. They are the backbone of our new immune-boosting supplement range.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Sophie Bennett",
    role: "Vitality Supplements",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsPage() {
  return (
    <section className="bg-background my-20 relative min-h-screen">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-primary/20 bg-primary/5 text-primary py-1.5 px-4 rounded-full text-sm font-semibold tracking-wide uppercase">
              Partner Testimonials
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mt-4 text-foreground">
            What our clients say
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            Food companies, supplement brands, and wellness businesses trust NNP Products for quality and reliability. Here is what they say.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden xl:block" duration={30} />
        </div>
      </div>

      {/* Internal Cross-Links */}
      <div className="container mx-auto px-4 mt-16 mb-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Link href="/products" className="group p-8 bg-muted rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Explore Our Products</h3>
            <p className="text-muted-foreground">See the natural powders our clients love.</p>
          </Link>
          <Link href="/contact" className="group p-8 bg-muted rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Contact Us</h3>
            <p className="text-muted-foreground">Ready to partner with us? Get in touch today.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
