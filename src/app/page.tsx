"use client"

import { LeftBar } from "@/components";
import { cn } from "@/lib/utils";
import { useMainStore } from "@/Store/mainStore";

export default function Home() {

  const { leftBarFullScreen } = useMainStore()

  return (
    <div className={cn("w-[100vw] h-[100vh]", leftBarFullScreen ? "h-[100vh]" : "h-[95vh] ")}>
      <LeftBar />
      <div className={cn("opacity-0 duration-300", !leftBarFullScreen && "opacity-100 w-full h-full absolute left-96 top-3 bg-slate-500 z-10 text-red-700 overflow-hidden p-5 pl-10 -ml-16 max-w-6xl rounded")}>
        <p>
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
          hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias minima iusto sunt libero quidem praesentium inventore, doloribus deserunt provident ut perspiciatis nulla enim ea dolor rerum autem, maxime necessitatibus.
        </p>
      </div>
    </div>
  );
}
