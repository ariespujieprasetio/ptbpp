import Link from "next/link";
import { Check } from "lucide-react";

const highlights = ["Profesional", "Terpercaya", "Berorientasi Kualitas"];

export default function Hero() {
  const backgroundStyle = {
    backgroundImage:
      "linear-gradient(90deg, rgba(10,10,10,.94) 0%, rgba(10,10,10,.82) 45%, rgba(10,10,10,.32) 100%), url('/images/hero-construction.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#151515] text-white">
      <div
        className="absolute inset-0"
        style={{
          ...backgroundStyle,
          backgroundColor: "#151515",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="relative mx-auto flex min-h-[760px] max-w-[1280px] items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="max-w-[760px]">
            <div className="mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.2em] text-[#E30613] uppercase">
              <span className="inline-block h-[1px] w-8 bg-[#E30613]" />
              <span>Supplier &amp; Kontraktor Bangunan</span>
            </div>

            <h1 className="text-[clamp(42px,5vw,82px)] font-bold leading-[0.98] tracking-[-0.04em] text-white">
              Solusi Terpercaya untuk
              <span className="mt-2 block">
                Kebutuhan <span className="text-[#E30613]">Supplier</span> &amp;
              </span>
              <span className="block">Konstruksi</span>
            </h1>

            <p className="mt-7 max-w-[640px] text-[17px] leading-[1.7] text-white/70">
              PT Bahran Poutra Pandawa hadir sebagai mitra dalam penyediaan material dan
              pelaksanaan pekerjaan konstruksi dengan mengutamakan kualitas, ketepatan, dan
              profesionalisme.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex h-[52px] items-center justify-center rounded-[8px] bg-[#E30613] px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#c80510]"
              >
                Konsultasikan Proyek
              </Link>
              <Link
                href="#services"
                className="inline-flex h-[52px] items-center justify-center rounded-[8px] border border-white/20 bg-transparent px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#111111]"
              >
                Lihat Layanan
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E30613]/15 text-[#E30613]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
