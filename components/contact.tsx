"use client";

import { useState } from "react";
import { company } from "@/data/company";

const emptyContact = {
  address: company.address || "Informasi akan diperbarui",
  phone: company.phone || "Informasi akan diperbarui",
  whatsapp: company.whatsapp || "Informasi akan diperbarui",
  email: company.email || "Informasi akan diperbarui",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) nextErrors.name = "Nama wajib diisi.";
    if (!form.whatsapp.trim()) nextErrors.whatsapp = "Nomor WhatsApp wajib diisi.";
    if (!form.message.trim()) nextErrors.message = "Pesan wajib diisi.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.2em] text-[#E30613] uppercase">
            KONTAK
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#111111]">
            Hubungi PT Bahran Poutra Pandawa
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#707070]">
            Kami siap membantu memberikan informasi mengenai kebutuhan pengadaan maupun
            pekerjaan konstruksi.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-[20px] border border-[#E5E5E5] bg-[#F6F6F4] p-4">
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-[#707070] uppercase">
                Alamat
              </p>
              <p className="mt-2 text-base font-medium text-[#111111]">{emptyContact.address}</p>
            </div>
            <div className="rounded-[20px] border border-[#E5E5E5] bg-[#F6F6F4] p-4">
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-[#707070] uppercase">
                Phone
              </p>
              <p className="mt-2 text-base font-medium text-[#111111]">{emptyContact.phone}</p>
            </div>
            <div className="rounded-[20px] border border-[#E5E5E5] bg-[#F6F6F4] p-4">
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-[#707070] uppercase">
                WhatsApp
              </p>
              <p className="mt-2 text-base font-medium text-[#111111]">{emptyContact.whatsapp}</p>
            </div>
            <div className="rounded-[20px] border border-[#E5E5E5] bg-[#F6F6F4] p-4">
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-[#707070] uppercase">
                Email
              </p>
              <p className="mt-2 text-base font-medium text-[#111111]">{emptyContact.email}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[26px] border border-[#E5E5E5] bg-[#F6F6F4] p-5 shadow-[0_16px_42px_rgba(17,17,17,0.04)] sm:p-7">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#111111]">Nama</label>
              <input
                value={form.name}
                onChange={(event) => handleChange("name", event.target.value)}
                className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="Masukkan nama Anda"
              />
              {errors.name ? <p className="mt-2 text-sm text-[#E30613]">{errors.name}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#111111]">Nomor WhatsApp</label>
              <input
                value={form.whatsapp}
                onChange={(event) => handleChange("whatsapp", event.target.value)}
                className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="Contoh: 0812..."
              />
              {errors.whatsapp ? <p className="mt-2 text-sm text-[#E30613]">{errors.whatsapp}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#111111]">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(event) => handleChange("email", event.target.value)}
                className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="nama@email.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#111111]">Kebutuhan / Jenis Proyek</label>
              <input
                value={form.projectType}
                onChange={(event) => handleChange("projectType", event.target.value)}
                className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="Contoh: Renovasi rumah, Supplier material, dll."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#111111]">Pesan</label>
              <textarea
                value={form.message}
                onChange={(event) => handleChange("message", event.target.value)}
                className="min-h-32 w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="Ceritakan kebutuhan proyek Anda"
              />
              {errors.message ? <p className="mt-2 text-sm text-[#E30613]">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#E30613] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c80510]"
            >
              Kirim Pesan
            </button>

            {isSubmitted ? (
              <div className="rounded-xl border border-[#d9f7e0] bg-[#ebfff1] px-4 py-3 text-sm text-[#0d6d3e]">
                Pesan Anda telah diterima. Kami akan segera menghubungi Anda kembali.
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
