"use client"

import { BodyPlate, LeftBar } from "@/components";
import { cn } from "@/lib/utils";
import { useMainStore } from "@/Store/mainStore";

export default function Home() {

  const { leftBarFullScreen } = useMainStore()

  return (
    <div className={cn("max-h-[100vh]",!leftBarFullScreen && " max-h-[100vh] grid grid-cols-1 lg:grid-cols-4 gap-0 ")}>
      <LeftBar />
      <BodyPlate  />
    </div>
  );
}
