import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = localFont({
  src: "./plus-jakarta-sans-variable.ttf",
  variable: "--font-sans",
  weight: "200 800",
  style: "normal",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Shonzawa Ventures Limited | Hardware. Systems. Possibilities.",
  description:
    "Explore VR headsets, ICT equipment, networking, CCTV installation, servers and backup solutions from Shonzawa Ventures Limited, Nairobi, Kenya.",
  openGraph: {
    title: "Shonzawa Ventures Limited",
    description:
      "Hardware and systems for a connected business. Based in Nairobi, Kenya.",
    type: "website",
    locale: "en_KE",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
