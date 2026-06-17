import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white">
              Nutri Natural Powders
            </h2>
            <p className="mt-4 text-base text-primary-foreground/80">
              Nature's Nutrition, Simply Powerful. Premium dehydrated fruit, vegetable, and herbal powders manufactured with purity, quality, and sustainability.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-base text-primary-foreground/80 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="text-base text-primary-foreground/80 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/manufacturing" className="text-base text-primary-foreground/80 hover:text-white transition-colors">Manufacturing</Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-primary-foreground/80 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products/moringa-powder" className="text-base text-primary-foreground/80 hover:text-white transition-colors">Moringa Powder</Link>
              </li>
              <li>
                <Link href="/products/ginger-powder" className="text-base text-primary-foreground/80 hover:text-white transition-colors">Ginger Powder</Link>
              </li>
              <li>
                <Link href="/products/beetroot-powder" className="text-base text-primary-foreground/80 hover:text-white transition-colors">Beetroot Powder</Link>
              </li>
              <li>
                <Link href="/products" className="text-base text-primary-foreground/80 hover:text-white transition-colors">View All Products</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-base text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                <span>123 Industrial Area, Phase 1, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-base text-primary-foreground/80">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-base text-primary-foreground/80">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                <span>info@nutrinaturalpowders.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Nutri Natural Powders. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social Links */}
          </div>
        </div>
      </div>
    </footer>
  );
}
