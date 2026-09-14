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

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-[8px] border border-white/15 bg-white/5">
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
        <div className="mt-1 text-[0.92rem] font-semibold text-white">
          PT Bahran Poutra Pandawa
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-[#111111]/95 backdrop-blur-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" aria-label="Beranda PT Bahran Poutra Pandawa" className="flex items-center">
          <LogoMark />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
            >
              <span className="relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#E30613] after:transition-transform after:duration-200 hover:after:scale-x-100">
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
          aria-label="Buka menu navigasi"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-[8px] border border-white/15 bg-white/5 p-2.5 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#111111]/96 px-4 py-4 backdrop-blur-sm lg:hidden">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-[8px] border border-white/10 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:border-[#E30613]/60 hover:text-white"
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
  );
}
