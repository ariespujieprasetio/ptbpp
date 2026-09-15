"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 700);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Kembali ke bagian atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#111111] text-white shadow-[0_12px_30px_rgba(17,17,17,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E30613] sm:bottom-7 sm:right-7",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <ChevronUp size={20} aria-hidden="true" />
    </button>
  );
}
