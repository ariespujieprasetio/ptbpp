import { Boxes, Building2, ClipboardCheck, Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    icon: Boxes,
    title: "Supplier Material Bangunan",
    description:
      "Penyediaan berbagai kebutuhan material bangunan untuk mendukung pelaksanaan proyek.",
  },
  {
    icon: Building2,
    title: "Jasa Konstruksi",
    description:
      "Pelaksanaan pekerjaan pembangunan dengan proses kerja yang terencana dan profesional.",
  },
  {
    icon: Hammer,
    title: "Renovasi Bangunan",
    description:
      "Layanan renovasi dan peningkatan bangunan sesuai kebutuhan dan kondisi proyek.",
  },
  {
    icon: ClipboardCheck,
    title: "Pengadaan & Proyek",
    description:
      "Solusi pengadaan barang dan kebutuhan proyek secara efektif dan terkoordinasi.",
  },
];
