import { ClipboardList, MessageSquareText, PackageCheck, Wrench } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const steps = [
  {
    icon: MessageSquareText,
    number: "01",
    title: "Konsultasi Kebutuhan",
    description: "Kami memahami ruang lingkup, target, dan kebutuhan utama proyek Anda.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Perencanaan",
    description: "Tim menyusun kebutuhan material dan tahapan pekerjaan secara terarah.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Pelaksanaan",
    description: "Pekerjaan dan pengadaan dijalankan dengan koordinasi yang jelas.",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Serah Terima",
    description: "Hasil pekerjaan ditinjau sebelum proses penyelesaian dan serah terima.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#F6F6F4] py-24 sm:py-28" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="process-title">
          <SectionHeading
            label="CARA KAMI BEKERJA"
            title="Proses yang Jelas dari Awal"
            description="Setiap kebutuhan ditangani melalui tahapan yang terarah agar komunikasi dan pelaksanaan tetap selaras."
          />
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ icon: Icon, number, title, description }) => (
            <li key={number} className="relative overflow-hidden rounded-[22px] border border-[#E5E5E5] bg-white p-6">
              <span className="absolute right-5 top-3 font-display text-5xl font-extrabold text-[#111111]/[0.05]">{number}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E30613]/10 text-[#E30613]">
                <Icon size={22} aria-hidden="true" />
              </div>
              <p className="mt-8 text-xs font-bold tracking-[0.18em] text-[#E30613]">LANGKAH {number}</p>
              <h3 className="mt-2 text-xl font-bold text-[#111111]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#707070]">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
