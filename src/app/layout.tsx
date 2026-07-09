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
  title: "NNP Products - Natural Dehydrated Fruit, Vegetable & Herbal Powder Manufacturer in India",
  description:
    "NNP Products manufactures 100% natural dehydrated fruit, vegetable, and herbal powders in Sangli, Maharashtra. FSSAI certified. Bulk supply for food, health & wellness industries.",
  keywords: [
    "natural powder manufacturer India",
    "dehydrated fruit powder",
    "dehydrated vegetable powder",
    "herbal powder manufacturer",
    "moringa powder manufacturer",
    "beetroot powder supplier",
    "ginger powder supplier",
    "onion powder manufacturer",
    "tomato powder supplier",
    "curry leaves powder",
    "green leaf powder",
    "spice powder manufacturer Sangli",
    "bulk powder supplier India",
    "FSSAI certified powder manufacturer",
    "natural food ingredients India",
  ],
  openGraph: {
    title: "NNP Products - Natural Dehydrated Powder Manufacturer in India",
    description: "We manufacture 100% natural dehydrated fruit, vegetable, and herbal powders. FSSAI certified facility in Sangli, Maharashtra.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: ["/logo.jpg"],
    apple: [
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
  },
};

import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <Header lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
