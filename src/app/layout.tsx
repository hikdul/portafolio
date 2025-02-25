"use client"

//import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LeftBar, NavBar } from "@/components";
import { cn } from "@/lib/utils";
import { useMainStore } from "@/Store/mainStore";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//export const metadata: Metadata = {
//  title: "hikdul",
//  description: "Hector Luis Contreras Di Girolamo - Portafolio",
//};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { leftBarFullScreen } = useMainStore()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={cn("max-h-[100vh]", !leftBarFullScreen && " max-h-[100vh] grid grid-cols-1 lg:grid-cols-4 gap-0 ")}>
          <LeftBar />
          <div className={cn("opacity-0 duration-300 max-h-[100vh] top-0", !leftBarFullScreen && " opacity-100 col-span-3 w-full h-[90hv] bg-[#333] z-10  overflow-hidden p-5 pl-10 mt-3 -ml-12 rounded border-undido-oscuro-unmutable")}>
            <NavBar />
            <div className="mt-[5.5rem]">
              <div className="bg-[#ffffff36] p-5 rounded-xl min-h-[80vh] backdrop-blur-sm border-2">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
