import type { Metadata } from "next";
import { ContactFloat, Footer, Header, Reveal } from "@/components/site-shell";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shonzawa-ventures.infovr62.chatgpt.site"),
  title: { default: "Shonzawa Ventures — ICT Equipment, Networking & Technology", template: "%s | Shonzawa Ventures" },
  description: "VR headsets, ICT equipment supply, networking, CCTV installation, server supply and backup solutions from Shonzawa Ventures.",
  openGraph: { title: "Shonzawa Ventures", description: "Your technology. Connected. ICT equipment, VR, networking, CCTV, servers and backups.", type: "website" },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/><ContactFloat/><Reveal/></body></html>;
}
