import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Natural Powder Tips, Benefits & Industry News | NNP Products",
  description: "Read helpful articles about the health benefits of natural powders, manufacturing insights, and food industry trends from NNP Products.",
};

const posts = [
  {
    title: "The Ultimate Guide to Moringa Powder Benefits",
    excerpt: "Moringa is called the 'Miracle Tree' for a reason. Learn about its amazing health benefits and how moringa powder can boost your daily nutrition.",
    category: "Health Benefits",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "How Low-Temperature Dehydration Preserves Nutrients",
    excerpt: "Find out why low-temperature drying is better than sun drying. It keeps more vitamins, color, and flavor in the final powder.",
    category: "Manufacturing",
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Trending Natural Colorants in the Food Industry",
    excerpt: "More food companies are choosing beetroot and spinach powders instead of artificial colors. Learn why natural colorants are the future.",
    category: "Industry Trends",
    date: "June 5, 2026",
    image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&q=80&w=600",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background py-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Blog & Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about the health benefits of natural powders, how they are made, and what is happening in the food industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  <Link href="/products">{post.title}</Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <Link href="/products" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Internal Cross-Links */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Link href="/products" className="group p-8 bg-white border border-border rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Explore Our Products</h3>
            <p className="text-muted-foreground">See the full range of powders we manufacture.</p>
          </Link>
          <Link href="/manufacturing" className="group p-8 bg-white border border-border rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Our Manufacturing Process</h3>
            <p className="text-muted-foreground">Learn how we make our powders from farm to packaging.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
