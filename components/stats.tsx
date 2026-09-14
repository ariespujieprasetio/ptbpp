const stats = [
  { label: "Supplier", value: "Material Bangunan" },
  { label: "Contractor", value: "Jasa Konstruksi" },
  { label: "Professional", value: "Team" },
  { label: "Quality", value: "Commitment" },
];

export default function Stats() {
  return (
    <section className="border-t border-[#E5E5E5] bg-white py-6">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-[20px] border border-[#E5E5E5] bg-[#F6F6F4] px-6 py-8 text-center transition-all duration-200 hover:border-[#E30613]/40 hover:shadow-[0_12px_28px_rgba(17,17,17,0.04)]"
          >
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-[#E30613] uppercase">
              {label}
            </p>
            <p className="mt-3 text-xl font-bold text-[#111111]">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
