const features = [
  {
    number: "01",
    title: "Profesional",
    description: "Setiap pekerjaan dilaksanakan dengan proses yang terstruktur.",
  },
  {
    number: "02",
    title: "Berorientasi Kualitas",
    description: "Kualitas menjadi salah satu prioritas dalam setiap pekerjaan.",
  },
  {
    number: "03",
    title: "Responsif",
    description: "Komunikasi yang cepat untuk mendukung kebutuhan proyek.",
  },
  {
    number: "04",
    title: "Komitmen",
    description: "Menjaga kepercayaan dan hubungan kerja dengan setiap mitra.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#111111] py-24 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div data-reveal="left">
          <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.2em] text-[#ff6a6a] uppercase">
            MENGAPA BPP
          </p>
          <h2 className="font-display text-[clamp(2.3rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
            Mitra yang Dapat Diandalkan
            <span className="block">untuk Setiap Pekerjaan.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#b7b7b7]">
            Kami memahami bahwa setiap proyek membutuhkan komunikasi yang baik, kualitas
            pekerjaan, dan komitmen terhadap waktu.
          </p>
        </div>

        <div className="space-y-4" data-reveal-grid>
          {features.map(({ number, title, description }) => (
            <article
              key={number}
              data-reveal="right"
              className="group rounded-[20px] border border-[#2a2a2a] bg-[#171717] p-5 transition-all duration-300 hover:border-[#E30613]/70 hover:bg-[#1b1b1b]"
            >
              <div className="flex gap-5">
                <div className="flex min-w-12 items-start pt-1 text-sm font-semibold text-[#E30613]">
                  {number}
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.2rem] font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#b7b7b7]">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
