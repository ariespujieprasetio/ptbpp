import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "@/components/section-heading";

export default function Services() {
  return (
    <section id="services" className="bg-[#F6F6F4] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="LAYANAN KAMI"
          title="Solusi untuk Kebutuhan Proyek Anda"
          description="Dari kebutuhan material hingga pelaksanaan pekerjaan konstruksi, kami siap menjadi mitra dalam mendukung proyek Anda."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-[22px] border border-[#E5E5E5] bg-white p-6 shadow-[0_14px_35px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E30613]/50 hover:shadow-[0_18px_28px_rgba(227,6,19,0.08)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E30613] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#111111]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#707070]">{description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#E30613]">
                Selengkapnya
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#111111] bg-transparent px-6 py-3 text-sm font-semibold text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E30613] hover:text-[#E30613]"
          >
            Konsultasikan Kebutuhan
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
