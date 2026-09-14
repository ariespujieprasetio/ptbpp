"use client";

import { useState } from "react";
import Image from "next/image";
import { team } from "@/data/team";

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#111111] via-[#2b2b2b] to-[#E30613] text-3xl font-bold text-white">
      {initials}
    </div>
  );
}

export default function Team() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="team" className="bg-[#F6F6F4] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.2em] text-[#E30613] uppercase">
            TIM KAMI
          </p>
          <h2 className="font-display text-[clamp(2.3rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#111111]">
            Orang-Orang di Balik BPP
          </h2>
          <p className="mt-5 text-base leading-8 text-[#707070]">
            Didukung oleh tim yang bekerja untuk memberikan pelayanan terbaik bagi setiap mitra
            dan proyek.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => {
            const hasFailedImage = Boolean(failedImages[member.nip]);

            return (
              <article
                key={member.nip}
                className="group overflow-hidden rounded-[22px] border border-[#E5E5E5] bg-white shadow-[0_12px_30px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(17,17,17,0.08)]"
              >
                <div className="relative h-[290px] overflow-hidden bg-[#eeeeee]">
                  {member.image && !hasFailedImage ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      onError={() => {
                        setFailedImages((current) => ({ ...current, [member.nip]: true }));
                      }}
                    />
                  ) : (
                    <InitialsAvatar name={member.name} />
                  )}
                </div>

                <div className="border-t border-[#E5E5E5] p-5">
                  <div className="mb-2 h-0.5 w-12 rounded-full bg-[#E30613]" />
                  <h3 className="text-xl font-bold text-[#111111]">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#E30613]">{member.position}</p>
                  <p className="mt-2 text-xs tracking-[0.14em] text-[#707070] uppercase">NIP {member.nip}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
