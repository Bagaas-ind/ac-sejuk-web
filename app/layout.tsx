import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import font
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // Gunakan font Inter

export const metadata: Metadata = {
  title: "AC Sejuk TITL",
  description: "Layanan Service AC SMKN 1 Kab. Tangerang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}