
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { BookOpenIcon, BriefcaseIcon, H1Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { LeftBar2 } from "@/components";
import { hIconProps } from "@/components/navBar/interface";
import { HLink } from "@/components/navBar/HLink";
import React from "react";

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


const SIZE = 25
const navElement: hIconProps[] =
  [
    { to: "/", title: "Home", icon: (<HomeIcon width={SIZE} className="z-40" height={SIZE} />), active: true },
    { to: "/Proyectos", title: "Proyectos", icon: (<BriefcaseIcon width={SIZE} className="z-40" height={SIZE} />) },
    { to: "/Hikdul", title: "hikdul", icon: (<H1Icon width={SIZE} className="z-40" height={SIZE} />) },
    { to: "/Blog", title: "blog", icon: (<BookOpenIcon width={SIZE} className="z-40" height={SIZE} />) },
  ]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-wrap lg:flex-nowrap gap-6 dark:bg-[#333] dark:text-[#F5F5DC] `}>
        <div className="md:opacity-0 lg:opacity-100">
          <LeftBar2 />
        </div>
        <div className="w-full fixed top-0 lg:w-[79vw] ">
          <div className="w-full lg:ml-72 mt-5 border-undido-oscuro-unmutable rounded-tl-2xl rounded-tr-2xl border-0 p-10 max-h-[80vh] overflow-hidden ">
            <div className="w-full">
              <div>
                rutas de despegue
              </div>
              <div>
                hijos
              </div>
            </div>
          </div>
          <div className="main-h-1 lg:min-h-1.5 xl:min-h-2 fixed left-0 bottom-5 ml-72 z-50 w-full">
            <ul className="navigation relative w-full max-w-[79vw] min-h-20 lg:min-h-24 flex justify-center items-center border-undido-oscuro-unmutable rounded-bl-none md:rounded-bl-4xl md:rounded-br-4xl rounded-tl-4xl md:rounded-tl-none rounded-tr-4xl md:rounded-tr-none">
              {navElement && navElement.map(x => <HLink {...x} key={x.title} />)}
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
