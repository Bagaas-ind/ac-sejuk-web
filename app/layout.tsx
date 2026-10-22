import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}