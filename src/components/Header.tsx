"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="NNP Products Logo" width={60} height={60} className="object-contain" />
              <span className="font-heading text-2xl font-bold text-primary">NNP Products</span>
            </Link>
          </div>
          <div className="hidden xl:block">
            <nav className="flex items-center gap-6 xl:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden xl:block">
            <Link href="/contact" className={buttonVariants()}>
              Inquire Now
            </Link>
          </div>
          <div className="-mr-2 flex xl:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-foreground hover:bg-muted focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Link href="/contact" onClick={() => setIsOpen(false)} className={buttonVariants({ className: "w-full" })}>
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
