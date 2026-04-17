import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tristan Bihler",
  description: "Personal portfolio of Tristan Bihler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--cream)] text-[var(--foreground)]">
        <Navbar />
        <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-[var(--cream-dark)]">
          <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Tristan Bihler
          </div>
        </footer>
      </body>
    </html>
  );
}
