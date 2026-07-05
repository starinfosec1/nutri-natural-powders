import { GalleryClient } from "./GalleryClient";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/translations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - NNP Products",
  description: "See photos of our factory, our farm partners, and our finished products.",
};

export default async function GalleryPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "mr";
  const t = getTranslations(lang);

  return <GalleryClient t={t} />;
}
