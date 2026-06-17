import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Natural Powders | Nutri Natural Powders",
  description: "Browse our extensive catalog of high-quality dehydrated fruit, vegetable, and herbal powders.",
};

export default function ProductsPage() {
  return (
    <div className="bg-muted py-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Premium Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of 100% natural, high-quality dehydrated powders processed under stringent quality controls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border flex flex-col hover:shadow-lg transition-shadow">
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
                <Link href={`/products/${product.slug}`} className={buttonVariants({ className: "w-full" })}>View Details</Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
