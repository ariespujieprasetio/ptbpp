import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.2em] text-[#E30613] uppercase">
            PROYEK &amp; PEKERJAAN
          </p>
          <h2 className="font-display text-[clamp(2.3rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#111111]">
            Pekerjaan yang Kami Tangani
          </h2>
          <p className="mt-5 text-base leading-8 text-[#707070]">
            Beberapa kategori pekerjaan yang dapat ditangani oleh PT Bahran Poutra Pandawa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map(({ category, title, description, image }, index) => (
            <article
              key={title}
              className={[
                "group relative overflow-hidden rounded-[24px] border border-[#E5E5E5] bg-[#F6F6F4]",
                index === 0 ? "md:col-span-2 min-h-[420px]" : "min-h-[290px]",
              ].join(" ")}
            >
              <div className="absolute inset-0">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/25 to-[#111111]/10" />
              </div>

              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <span className="mb-3 inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.62rem] font-medium tracking-[0.18em] uppercase backdrop-blur-sm">
                  {category}
                </span>
                <h3 className="text-2xl font-bold leading-tight">{title}</h3>
                <p className="mt-2 max-w-md text-sm text-[#ebebeb]">{description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Lihat detail
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
