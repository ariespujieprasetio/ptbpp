"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/company";

const emptyContact = {
  address: company.address || "Informasi akan diperbarui",
  phone: company.phone || "Informasi akan diperbarui",
  whatsapp: company.whatsapp || "Informasi akan diperbarui",
  email: company.email || "Informasi akan diperbarui",
};

export default function Contact() {
  const hasContactChannel = Boolean(company.whatsapp || company.email);
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
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Format email belum valid.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    const message = [
      "Halo PT Bahran Poutra Pandawa,",
      "",
      `Nama: ${form.name}`,
      `WhatsApp: ${form.whatsapp}`,
      form.email ? `Email: ${form.email}` : "",
      form.projectType ? `Kebutuhan: ${form.projectType}` : "",
      "",
      form.message,
    ].filter(Boolean).join("\n");

    setErrors({});

    if (company.whatsapp) {
      window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      setIsSubmitted(true);
      return;
    }

    if (company.email) {
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Permintaan proyek dari ${form.name}`)}&body=${encodeURIComponent(message)}`;
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-[#F6F6F4] py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[#111111] p-6 text-white sm:p-8 lg:p-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#E30613]/10 blur-2xl" />
          <div className="relative">
          <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.2em] text-[#ff6a6a] uppercase">
            KONTAK
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
            Hubungi PT Bahran Poutra Pandawa
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
            Kami siap membantu memberikan informasi mengenai kebutuhan pengadaan maupun
            pekerjaan konstruksi.
          </p>

          <dl className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
              <MapPin size={19} className="mb-4 text-[#E30613]" aria-hidden="true" />
              <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/45 uppercase">
                Alamat
              </dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-white/85">{emptyContact.address}</dd>
            </div>
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
              <Phone size={19} className="mb-4 text-[#E30613]" aria-hidden="true" />
              <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/45 uppercase">Telepon</dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-white/85">{emptyContact.phone}</dd>
            </div>
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
              <MessageCircle size={19} className="mb-4 text-[#E30613]" aria-hidden="true" />
              <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/45 uppercase">
                WhatsApp
              </dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-white/85">{emptyContact.whatsapp}</dd>
            </div>
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
              <Mail size={19} className="mb-4 text-[#E30613]" aria-hidden="true" />
              <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/45 uppercase">
                Email
              </dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-white/85 break-words">{emptyContact.email}</dd>
            </div>
          </dl>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#E5E5E5] bg-white p-5 shadow-[0_18px_55px_rgba(17,17,17,0.06)] sm:p-8 lg:p-10">
          <div className="mb-7">
            <p className="text-xs font-bold tracking-[0.18em] text-[#E30613] uppercase">Formulir Konsultasi</p>
            <h3 className="mt-2 text-2xl font-extrabold text-[#111111]">Ceritakan kebutuhan proyek Anda</h3>
          </div>
          <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[#111111]">Nama</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                value={form.name}
                onChange={(event) => handleChange("name", event.target.value)}
                className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="Masukkan nama Anda"
              />
              {errors.name ? <p id="contact-name-error" className="mt-2 text-sm text-[#E30613]">{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="contact-whatsapp" className="mb-2 block text-sm font-medium text-[#111111]">Nomor WhatsApp</label>
              <input
                id="contact-whatsapp"
                name="whatsapp"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={errors.whatsapp ? "contact-whatsapp-error" : undefined}
                value={form.whatsapp}
                onChange={(event) => handleChange("whatsapp", event.target.value)}
                className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="Contoh: 0812..."
              />
              {errors.whatsapp ? <p id="contact-whatsapp-error" className="mt-2 text-sm text-[#E30613]">{errors.whatsapp}</p> : null}
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[#111111]">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                value={form.email}
                onChange={(event) => handleChange("email", event.target.value)}
                className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="nama@email.com"
              />
              {errors.email ? <p id="contact-email-error" className="mt-2 text-sm text-[#E30613]">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="contact-project" className="mb-2 block text-sm font-medium text-[#111111]">Kebutuhan / Jenis Proyek</label>
              <input
                id="contact-project"
                name="projectType"
                value={form.projectType}
                onChange={(event) => handleChange("projectType", event.target.value)}
                className="w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="Contoh: Renovasi rumah, Supplier material, dll."
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[#111111]">Pesan</label>
              <textarea
                id="contact-message"
                name="message"
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                value={form.message}
                onChange={(event) => handleChange("message", event.target.value)}
                className="min-h-32 w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-base text-[#111111] outline-none transition-colors focus:border-[#E30613]"
                placeholder="Ceritakan kebutuhan proyek Anda"
              />
              {errors.message ? <p id="contact-message-error" className="mt-2 text-sm text-[#E30613]">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              disabled={!hasContactChannel}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#E30613] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c80510] disabled:cursor-not-allowed disabled:bg-[#9a9a9a] disabled:hover:translate-y-0 sm:col-span-2"
            >
              {company.whatsapp ? "Kirim via WhatsApp" : "Kirim Pesan"}
            </button>

            {!hasContactChannel ? (
              <p role="status" className="text-center text-sm leading-6 text-[#707070] sm:col-span-2">
                Kanal pengiriman belum tersedia. Lengkapi data kontak perusahaan untuk mengaktifkan formulir.
              </p>
            ) : null}

            {isSubmitted ? (
              <div role="status" className="rounded-xl border border-[#d9f7e0] bg-[#ebfff1] px-4 py-3 text-sm text-[#0d6d3e] sm:col-span-2">
                Pesan siap dikirim melalui kanal kontak perusahaan.
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
