import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Manu Kothari — ML Engineer & RAG Specialist",
    template: "%s — Manu Kothari",
  },
  description:
    "Notes on shipping production AI: RAG, multimodal models, and LLM systems.",
  authors: [{ name: "Manu Kothari", url: "https://github.com/ManuKothari" }],
  creator: "Manu Kothari",
  openGraph: {
    type: "website",
    siteName: "Manu Kothari",
    title: "Manu Kothari — ML Engineer & RAG Specialist",
    description:
      "Notes on shipping production AI: RAG, multimodal models, and LLM systems.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ManuKothari",
    title: "Manu Kothari — ML Engineer & RAG Specialist",
    description:
      "Notes on shipping production AI: RAG, multimodal models, and LLM systems.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
