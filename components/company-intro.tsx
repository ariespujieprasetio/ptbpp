import Image from "next/image";
import Link from "next/link";

const advantages = [
  "Pengadaan Material",
  "Jasa Konstruksi",
  "Tim Profesional",
  "Pelayanan Responsif",
];

export default function CompanyIntro() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-[#E5E5E5] bg-[#F6F6F4] shadow-[0_24px_60px_rgba(17,17,17,0.08)]">
            <div className="relative h-[520px] w-full">
              <Image
                src="/images/about-construction.png"
                alt="Pekerjaan konstruksi bangunan"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 rounded-2xl border border-[#E30613]/20 bg-[#E30613] px-4 py-3 shadow-lg">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-white/80 uppercase">
              Mitra Supplier &amp; Konstruksi
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.2em] text-[#E30613] uppercase">
            TENTANG KAMI
          </p>
          <h2 className="max-w-xl font-display text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#111111]">
            Membangun dengan Kualitas,
            <span className="block">Melayani dengan Integritas.</span>
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-[#707070]">
            <p>
              PT Bahran Poutra Pandawa merupakan perusahaan yang bergerak di bidang jasa
              supplier dan kontraktor bangunan. Kami berkomitmen memberikan solusi yang
              efektif dan tepat sesuai kebutuhan setiap proyek.
            </p>
            <p>
              Dengan dukungan tim yang profesional, kami berupaya menjaga kualitas pekerjaan,
              ketepatan proses, serta hubungan kerja yang baik dengan setiap mitra.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {advantages.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-[#E5E5E5] bg-[#F6F6F4] px-4 py-3 text-sm font-medium text-[#111111]">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#E30613]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#111111] bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E30613] hover:text-[#E30613]"
            >
              Selengkapnya Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
