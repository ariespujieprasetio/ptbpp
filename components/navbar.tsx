"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Proyek", href: "#projects" },
  { label: "Tim Kami", href: "#team" },
  { label: "Kontak", href: "#contact" },
];

function LogoMark({ compact }: { compact: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={["relative overflow-hidden rounded-[8px] border border-white/15 bg-white/5 transition-all duration-300", compact ? "h-9 w-9" : "h-10 w-10"].join(" ")}>
        <Image
          src="/images/logo-bpp.jpeg"
          alt="Logo PT Bahran Poutra Pandawa"
          fill
          sizes="40px"
          className="object-contain p-1.5"
        />
      </div>
      <div className="leading-none">
        <div className="text-[0.64rem] font-semibold tracking-[0.22em] text-white/90 uppercase">
          BPP
        </div>
        <div className={["hidden font-semibold text-white transition-all duration-300 min-[430px]:block", compact ? "mt-0.5 text-[0.84rem]" : "mt-1 text-[0.92rem]"].join(" ")}>
          PT Bahran Poutra Pandawa
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
    <a href="#main-content" className="skip-link">Lewati ke konten utama</a>
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-[#111111]/95 backdrop-blur-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav aria-label="Navigasi utama" className={["mx-auto flex max-w-[1280px] items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8", isScrolled ? "h-16" : "h-[76px]"].join(" ")}>
        <Link href="#home" aria-label="Beranda PT Bahran Poutra Pandawa" className="flex items-center">
          <LogoMark compact={isScrolled} />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
              className={[
                "relative text-sm font-medium transition-colors duration-200 hover:text-white",
                activeSection === item.href.slice(1) ? "text-white" : "text-white/70",
              ].join(" ")}
            >
              <span className={["relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-[#E30613] after:transition-transform after:duration-200 hover:after:scale-x-100", activeSection === item.href.slice(1) ? "after:scale-x-100" : "after:scale-x-0"].join(" ")}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#E30613] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#c80510]"
          >
            Hubungi Kami
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-[8px] border border-white/15 bg-white/5 p-2.5 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#111111]/96 px-4 py-4 backdrop-blur-sm lg:hidden">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                className={[
                  "block rounded-[8px] border px-4 py-3 text-sm font-medium transition-colors hover:border-[#E30613]/60 hover:text-white",
                  activeSection === item.href.slice(1) ? "border-[#E30613]/60 bg-[#E30613]/10 text-white" : "border-white/10 text-white/80",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#E30613] px-5 py-3 text-sm font-semibold text-white"
            >
              Hubungi Kami
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
    </>
  );
}
