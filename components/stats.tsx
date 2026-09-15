const capabilities = [
  { number: "01", label: "Pengadaan", value: "Material Bangunan" },
  { number: "02", label: "Pelaksanaan", value: "Jasa Konstruksi" },
  { number: "03", label: "Sumber Daya", value: "Tim Profesional" },
  { number: "04", label: "Prinsip Kerja", value: "Komitmen Kualitas" },
];

export default function Stats() {
  return (
    <section className="bg-[#111111] py-4 text-white" aria-label="Cakupan perusahaan">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-4 sm:px-6 md:grid-cols-2 md:divide-x md:divide-y-0 lg:px-8 xl:grid-cols-4">
        {capabilities.map(({ number, label, value }) => (
          <div
            key={label}
            className="group flex items-center gap-4 px-3 py-6 md:px-6"
          >
            <span className="font-display text-3xl font-extrabold text-[#E30613] transition-transform duration-300 group-hover:-translate-y-0.5">{number}</span>
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/50 uppercase">{label}</p>
              <p className="mt-1 text-base font-bold text-white">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
