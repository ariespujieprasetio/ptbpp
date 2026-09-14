import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

const navigation = {
  perusahaan: [
    { label: "Tentang Kami", href: "#about" },
    { label: "Tim Kami", href: "#team" },
    { label: "Proyek", href: "#projects" },
  ],
  layanan: [
    { label: "Supplier Material", href: "#services" },
    { label: "Jasa Konstruksi", href: "#services" },
    { label: "Renovasi", href: "#services" },
    { label: "Pengadaan", href: "#services" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <Image
                  src="/images/logo-bpp.jpeg"
                  alt="Logo PT Bahran Poutra Pandawa"
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#d6d6d6] uppercase">
                  BPP
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  PT Bahran Poutra Pandawa
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold text-[#E30613]">Jasa Supplier &amp; Contractor</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#d6d6d6]">
              Mitra untuk kebutuhan pengadaan material dan pekerjaan konstruksi.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.18em] text-[#d6d6d6] uppercase">
              Perusahaan
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#d6d6d6]">
              {navigation.perusahaan.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.18em] text-[#d6d6d6] uppercase">
              Layanan
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#d6d6d6]">
              {navigation.layanan.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.18em] text-[#d6d6d6] uppercase">
              Kontak
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#d6d6d6]">
              <li>{company.address || "Informasi akan diperbarui"}</li>
              <li>{company.phone || "Informasi akan diperbarui"}</li>
              <li>{company.whatsapp || "Informasi akan diperbarui"}</li>
              <li>{company.email || "Informasi akan diperbarui"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#d6d6d6] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} PT Bahran Poutra Pandawa. All Rights Reserved.</p>
          <p>Supplier &amp; Building Contractor</p>
        </div>
      </div>
    </footer>
  );
}
