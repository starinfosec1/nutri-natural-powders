"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function LanguageToggle() {
  const router = useRouter();
  const [lang, setLang] = useState<"en" | "mr">("en");

  useEffect(() => {
    // Read the current locale from cookies
    const cookies = document.cookie.split("; ");
    const localeCookie = cookies.find((row) => row.startsWith("NEXT_LOCALE="));
    if (localeCookie) {
      setLang(localeCookie.split("=")[1] as "en" | "mr");
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "mr" : "en";
    setLang(newLang);
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center bg-primary/10 hover:bg-primary/20 text-primary font-bold px-3 py-1.5 rounded-full transition-colors text-sm border border-primary/20"
      aria-label="Toggle Language"
    >
      <span className={lang === "en" ? "opacity-100" : "opacity-50"}>EN</span>
      <span className="mx-1">|</span>
      <span className={lang === "mr" ? "opacity-100" : "opacity-50"}>मराठी</span>
    </button>
  );
}
