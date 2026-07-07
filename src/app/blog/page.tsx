import Link from "next/link";
import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/translations";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Blog - Natural Powder Tips, Benefits & Industry News | NNP Products",
  description: "Read helpful articles about the health benefits of natural powders, manufacturing insights, and food industry trends from NNP Products.",
};

export default async function BlogPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "mr";
  const t = getTranslations(lang);

  return (
    <div className="bg-background py-24 min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.blog.heroTitle}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.blog.heroSubtitle}
          </p>
        </div>

        <div className="px-12 relative max-w-7xl mx-auto">
          <Carousel
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent>
              {t.blog.posts.map((post: any, index: number) => (
                <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
                  <FadeIn direction="up" delay={index * 0.1} className="h-full">
                    <article className="bg-white h-full border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col mx-2 mb-2">
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
                          {t.blog.readArticle}
                        </Link>
                      </div>
                    </article>
                  </FadeIn>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Internal Cross-Links */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Link href="/products" className="group p-8 bg-white border border-border rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.blog.exploreProducts}</h3>
            <p className="text-muted-foreground">{t.blog.exploreProductsDesc}</p>
          </Link>
          <Link href="/manufacturing" className="group p-8 bg-white border border-border rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.blog.manufacturingProcess}</h3>
            <p className="text-muted-foreground">{t.blog.manufacturingProcessDesc}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
