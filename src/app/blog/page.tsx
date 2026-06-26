import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Blog - Natural Powder Tips, Benefits & Industry News | NNP Products",
  description: "Read helpful articles about the health benefits of natural powders, manufacturing insights, and food industry trends from NNP Products.",
};

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
          {blogPosts.map((post, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <article className="bg-white h-full border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="relative overflow-hidden shrink-0 flex justify-center bg-muted/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
                  <h2 className="text-xl font-heading font-bold mb-3 text-foreground line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline inline-flex items-center gap-1 mt-auto">
                    Read Article →
                  </Link>
                </div>
              </article>
            </FadeIn>
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
