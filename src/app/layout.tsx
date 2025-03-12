
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { BookOpenIcon, BriefcaseIcon, H1Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { LeftBar2, PageName } from "@/components";
import { hIconProps } from "@/components/navBar/interface";
import { HLink } from "@/components/navBar/HLink";

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
        <div className="containerPage w-full min-w-[90vw] min-h-[100vh] h-full max-w-[100vw]  no-scrollbar overflow-x-hidden p-5 gap-1 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 ">
          <div className="">
            <LeftBar2 />
          </div>
          <div className="sm:col-span-2 md:col-span-3 xl:col-span-4">
            <div className="w-full h-[90vh] mt-5 border-undido-oscuro-unmutable rounded-2xl p-0 overflow-y-hidden ">
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="hidden md:flex ml-20 items-center justify-center">
                  <PageName />
                </div>
                <div className="navigation relative w-full max-w-full min-h-24 flex justify-center items-center border-undido-oscuro-unmutable rounded-bl-none md:rounded-bl-4xl rounded-tl-2xl md:rounded-tl-none rounded-tr-2xl md:rounded-tr-none md:mt-0 md:pt-0 md:top-0">
                  {navElement && navElement.map(x => <HLink {...x} key={x.title} />)}
                </div>
              </div>
              <div className="mt-5 pl-10 pr-5 w-full overflow-hidden overflow-y-scroll h-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
