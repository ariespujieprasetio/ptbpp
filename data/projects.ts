export type ProjectItem = {
  category: string;
  title: string;
  description: string;
  image: string;
};

export const projects: ProjectItem[] = [
  {
    category: "Konstruksi",
    title: "Proyek Konstruksi",
    description: "Pelaksanaan pekerjaan pembangunan.",
    image: "/images/project-1.webp",
  },
  {
    category: "Material",
    title: "Pengadaan Material",
    description: "Penyediaan kebutuhan material proyek.",
    image: "/images/project-2.jpeg",
  },
  {
    category: "Renovasi",
    title: "Renovasi Bangunan",
    description: "Pekerjaan renovasi dan perbaikan bangunan.",
    image: "/images/project-30.jpg",
  },
  {
    category: "Infrastruktur",
    title: "Pekerjaan Infrastruktur",
    description: "Dukungan pekerjaan konstruksi dan infrastruktur.",
    image: "/images/project-4.webp",
  },
];
