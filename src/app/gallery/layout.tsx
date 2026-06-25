import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery - NNP Products Factory, Farm & Product Images",
  description: "View photos of our manufacturing facility, farm partnerships, and premium natural powder products at NNP Products.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
