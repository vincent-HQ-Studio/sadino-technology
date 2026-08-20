import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

// Plus Jakarta Sans — lebih premium dari Poppins (sesuai DESIGN.md)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Sadino Technology",
    template: "%s | Sadino Technology",
  },
  description:
    "Software house specializing in web development, UI/UX design, and scalable backend solutions.",
  keywords: ["Software House", "Web Development", "UI UX Design", "Backend API", "Mobile Apps"],
  authors: [{ name: "Sadino Technology" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f7f9fb] text-gray-900 antialiased font-[var(--font-jakarta)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
