import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { WhatsAppInquiryButton } from "@/components/WhatsAppInquiryButton";
import { CheckCircle2, Box, Thermometer, ShieldAlert, Package } from "lucide-react";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "mr";
  const t = getTranslations(lang);

  const product = t.products.productsList.find((p: any) => p.slug === resolvedParams.slug);
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} - Natural Dehydrated Powder | NNP Products`,
    description: `Buy pure ${product.name} from NNP Products. ${product.shortDescription} FSSAI certified, bulk supply available.`,
  };
}

// Page is dynamic due to cookies

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "mr";
  const t = getTranslations(lang);

  const product = t.products.productsList.find((p: any) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-12 bg-background min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl lg:sticky lg:top-24">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {product.shortDescription}
              </p>
              {product.longDescription && (
                <div className="prose prose-lg text-muted-foreground">
                  {product.longDescription.split('\n\n').map((p: string, i: number) => (
                    <p key={i} className="mb-4">{p}</p>
                  ))}
                </div>
              )}
            </div>

            <WhatsAppInquiryButton 
              productName={product.name} 
              className="w-full sm:w-auto text-lg py-6 px-8 rounded-full"
            />

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="bg-muted p-6 rounded-2xl">
                <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                  <ShieldAlert className="text-primary w-5 h-5" /> {t.products.keyBenefits}
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="bg-muted p-6 rounded-2xl">
                <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                  <Box className="text-primary w-5 h-5" /> {t.products.applications}
                </h3>
                <ul className="space-y-3">
                  {product.applications.map((app: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How to Use Section */}
            {product.howToUse && (
              <div className="pt-6 border-t border-border">
                <h3 className="text-2xl font-heading font-bold mb-4">{t.products.howToUseTitle || `How to Use ${product.name}?`}</h3>
                <p className="text-lg text-muted-foreground mb-6">{product.howToUse}</p>
                
                {product.popularWays && (
                  <div className="bg-muted p-6 rounded-2xl mb-6">
                    <h4 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
                      <Box className="text-primary w-5 h-5" /> {t.products.popularWaysTitle || "Popular Ways to Use"}
                    </h4>
                    <ul className="space-y-4">
                      {product.popularWays.map((way: any, i: number) => (
                        <li key={i} className="text-foreground">
                          <span className="font-bold block text-primary">{way.title}</span>
                          <span className="text-muted-foreground">{way.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.recommendedUsage && (
                  <div>
                    <h4 className="text-lg font-heading font-bold mb-2">{t.products.recommendedUsageTitle || "Recommended Usage"}</h4>
                    <div className="prose text-muted-foreground">
                      {product.recommendedUsage.split('\n\n').map((p: string, i: number) => (
                        <p key={i} className="mb-2 leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">{t.products.specificationsTitle}</h3>
              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <th className="py-4 px-6 bg-muted font-medium text-foreground w-1/3">{t.products.colorLabel}</th>
                      <td className="py-4 px-6 text-muted-foreground">{product.specifications.color}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <th className="py-4 px-6 bg-muted font-medium text-foreground w-1/3">{t.products.moistureLabel}</th>
                      <td className="py-4 px-6 text-muted-foreground">{product.specifications.moisture}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <th className="py-4 px-6 bg-muted font-medium text-foreground w-1/3">{t.products.meshSizeLabel}</th>
                      <td className="py-4 px-6 text-muted-foreground">{product.specifications.meshSize}</td>
                    </tr>
                    <tr>
                      <th className="py-4 px-6 bg-muted font-medium text-foreground w-1/3">{t.products.shelfLifeLabel}</th>
                      <td className="py-4 px-6 text-muted-foreground">{product.specifications.shelfLife}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Storage & Packaging */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Thermometer className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">{t.products.storageLabel}</h4>
                  <p className="text-muted-foreground">{product.storage}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">{t.products.packagingLabel}</h4>
                  <p className="text-muted-foreground whitespace-pre-line">{product.packaging}</p>
                </div>
              </div>
            </div>

            {/* Cross-Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                {t.products.backToProducts}
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                {t.products.contactForPricing}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
