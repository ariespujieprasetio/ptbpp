import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "PT Bahran Poutra Pandawa | Supplier & Kontraktor Bangunan",
    template: "%s | PT Bahran Poutra Pandawa",
  },
  description:
    "PT Bahran Poutra Pandawa merupakan perusahaan yang bergerak di bidang jasa supplier dan kontraktor bangunan.",
  keywords: [
    "PT Bahran Poutra Pandawa",
    "Supplier Bangunan",
    "Kontraktor Bangunan",
    "Jasa Konstruksi",
    "Supplier & Kontraktor Bangunan",
  ],
  openGraph: {
    title: "PT Bahran Poutra Pandawa | Supplier & Kontraktor Bangunan",
    description:
      "PT Bahran Poutra Pandawa merupakan perusahaan yang bergerak di bidang jasa supplier dan kontraktor bangunan.",
    url: siteUrl,
    siteName: "PT Bahran Poutra Pandawa",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [{ url: "/images/logo-bpp.jpeg", type: "image/jpeg" }],
    shortcut: "/images/logo-bpp.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F6F6F4] text-[#111111]">{children}</body>
    </html>
  );
}
