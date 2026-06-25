import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | NNP Products",
  description: "Read what food companies, supplement brands, and wellness businesses say about NNP Products' natural dehydrated powders.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
