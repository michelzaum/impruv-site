import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Impruv type system:
 * - Fraunces  → the customer's voice (display headlines, quotes)
 * - Geist     → the product's voice (body, UI)
 * - Geist Mono→ the system's voice (labels, statuses, metadata)
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impruv · Transforme feedback de clientes em melhorias no produto",
  description:
    "O Impruv é uma plataforma de gestão de feedback de clientes que ajuda times a coletar, organizar e agir sobre o que os clientes dizem, transformando insights reais em melhorias no produto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
