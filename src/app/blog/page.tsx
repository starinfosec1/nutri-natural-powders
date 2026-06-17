import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Nutri Natural Powders",
  description: "Read the latest news, insights, and health benefits of natural powders.",
};

const posts = [
  {
    title: "The Ultimate Guide to Moringa Powder Benefits",
    excerpt: "Discover why Moringa is called the 'Miracle Tree' and how its powder can transform your daily nutrition and immune system.",
    category: "Health Benefits",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "How Low-Temperature Dehydration Preserves Nutrients",
    excerpt: "An inside look at our manufacturing process and why low-temperature drying is superior to traditional sun-drying methods.",
    category: "Manufacturing",
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1587823565977-1286c06a9284?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Trending Natural Colorants in the Food Industry",
    excerpt: "Why Beetroot and Spinach powders are replacing synthetic dyes in the modern food and beverage manufacturing sector.",
    category: "Industry Trends",
    date: "June 5, 2026",
    image: "https://images.unsplash.com/photo-1590165482156-f2eecc4735c3?auto=format&fit=crop&q=80&w=600",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background py-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Blog & Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends in natural ingredients, health benefits, and our sustainable manufacturing practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
                <h2 className="text-xl font-heading font-bold mb-3 text-foreground line-clamp-2 hover:text-primary transition-colors">
                  <Link href="#">{post.title}</Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
