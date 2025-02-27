
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { H1Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LeftBar2 } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hikdul",
  description: "Hector Luis Contreras Di Girolamo - Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-nowrap gap-6 dark:bg-[#333] dark:text-[#F5F5DC] no-scrollbar`}>
          <LeftBar2 />
        <div className="ml-72 mt-10 border-undido-oscuro-unmutable rounded-2xl border-0 p-10 max-h-[90vh] overflow-hidden overflow-y-scroll no-scrollbar">
          <div className="no-scrollbar overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
