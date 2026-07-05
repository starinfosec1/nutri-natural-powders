import { TestimonialsClient } from "./TestimonialsClient";
import { cookies } from "next/headers";
import { getTranslations } from "@/lib/translations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - NNP Products",
  description: "Read what our clients say about NNP Products.",
};

export default async function TestimonialsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as "en" | "mr";
  const t = getTranslations(lang);

  return <TestimonialsClient t={t} />;
}
