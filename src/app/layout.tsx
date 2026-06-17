import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nutri Natural Powders | Nature's Nutrition, Simply Powerful",
  description:
    "Premium Dehydrated Fruit, Vegetable & Herbal Powders Manufactured with Purity, Quality & Sustainability. Your trusted natural powder supplier.",
  keywords: [
    "Natural Powder Manufacturer",
    "Moringa Powder Manufacturer",
    "Ginger Powder Supplier",
    "Beetroot Powder Supplier",
    "Tomato Powder Manufacturer",
    "Herbal Powder Manufacturer",
    "Vegetable Powder Supplier",
    "Fruit Powder Manufacturer",
    "Natural Food Ingredients",
    "Dehydrated Powder Manufacturer India",
  ],
  openGraph: {
    title: "Nutri Natural Powders | Premium Dehydrated Powders",
    description: "Your trusted supplier of high-quality dehydrated fruit, vegetable, and herbal powders.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LenisProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
