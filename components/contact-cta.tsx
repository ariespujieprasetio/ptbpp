import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";

export default function ContactCta() {
  const whatsappHref = company.whatsapp ? `https://wa.me/${company.whatsapp}` : "#contact";

  return (
    <section className="relative overflow-hidden bg-[#E30613] py-20 text-white">
      <div className="absolute -left-12 top-10 h-44 w-44 rounded-full border border-black/20" />
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full border border-white/20" />
      <div className="absolute right-10 top-10 h-20 w-20 rotate-12 border-t-2 border-r-2 border-black/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.2em] text-white/80 uppercase">
              BUTUH MITRA UNTUK PROYEK ANDA?
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
              Mari Diskusikan Kebutuhan
              <span className="block">Proyek Anda Bersama Kami.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/85">
              Hubungi PT Bahran Poutra Pandawa untuk mendiskusikan kebutuhan supplier maupun
              pekerjaan konstruksi Anda.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5f5f5]"
            >
              Hubungi Kami
            </Link>
            <Link
              href={whatsappHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Kirim WhatsApp
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
