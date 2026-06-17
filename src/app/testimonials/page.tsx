import { Metadata } from "next";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials | Nutri Natural Powders",
  description: "Read what our partners and clients say about our natural powders.",
};

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Global Health Supplements",
    review: "Nutri Natural Powders has been our reliable supplier for Moringa and Beetroot powder. Their consistency in quality and timely delivery is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    company: "Organic Wellness Co.",
    review: "The vibrant color and authentic aroma of their Ginger powder perfectly suit our organic tea blends. We appreciate their transparent manufacturing process.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Spice Master Exports",
    review: "Finding a manufacturer who maintains low moisture content while keeping the nutritional profile intact is hard. Nutri Natural does it flawlessly.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-muted py-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Client Testimonials</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading food, beverage, and nutraceutical companies worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-lg mb-6 leading-relaxed italic">"{testimonial.review}"</p>
              <div>
                <h4 className="font-heading font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-muted-foreground text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
