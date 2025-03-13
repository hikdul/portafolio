import { languaje } from "@/Constants/languaje/languaje"
import { create } from "zustand"

type Store = {
  leftBarFullScreen: boolean
  toogleLeftBarFullScreen: () => void
  currentPage: string
  setCurrentPage: (v:string) => void
  languaje: languaje
  setLanguaje: (v:languaje) => void
}

const useMainStore = create<Store>()((set) => ({
  leftBarFullScreen: false,
  toogleLeftBarFullScreen: () => set((state) => ({ leftBarFullScreen: !state.leftBarFullScreen })),
  currentPage: "Home",
  setCurrentPage: (value:string) =>set((state) =>({ currentPage:value })),
  languaje: "esp",
  setLanguaje: (value:languaje)=>set((state)=>({languaje:value})),

}))



export {
  useMainStore
} 