import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://example.com"),
  title: "PT Bahran Poutra Pandawa | Supplier & Kontraktor Bangunan",
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
    url: "https://example.com",
    siteName: "PT Bahran Poutra Pandawa",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F6F6F4] text-[#111111]">{children}</body>
    </html>
  );
}
