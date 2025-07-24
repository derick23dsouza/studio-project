import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Moon - Webflow Ecommerce website template",
  description: "Ecommerce website template built with Next.js and GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
