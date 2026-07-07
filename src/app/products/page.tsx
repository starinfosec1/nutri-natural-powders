import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
  title: "Our Products - Dehydrated Fruit, Vegetable & Herbal Powders | NNP Products",
  description: "Browse our full range of natural dehydrated powders including moringa, beetroot, ginger, onion, tomato, and curry leaves powder. 100% pure and chemical-free.",
};

export default async function ProductsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "mr";
  const t = getTranslations(lang);

  return (
    <div className="bg-muted py-24 min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {t.products.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.products.heroSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {t.products.productsList.map((product: any, index: number) => (
            <FadeIn key={product.id} direction="up" delay={index * 0.05} className="h-full">
              <Card className="group h-full overflow-hidden border-border flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-1">
                  <h2 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground line-clamp-2">
                    {product.shortDescription}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/products/${product.slug}`} className={buttonVariants({ className: "w-full" })}>{t.products.viewDetails}</Link>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Internal Cross-Links */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Link href="/contact" className="group p-8 bg-white border border-border rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.products.customBlendTitle}</h3>
            <p className="text-muted-foreground">{t.products.customBlendDesc}</p>
          </Link>
          <Link href="/manufacturing" className="group p-8 bg-white border border-border rounded-2xl text-center hover:shadow-md transition-all">
            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{t.products.howWeMakeTitle}</h3>
            <p className="text-muted-foreground">{t.products.howWeMakeDesc}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
