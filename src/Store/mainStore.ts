import { languaje } from "@/Constants/languaje/languaje"
import { create } from "zustand"

type Store = {
  leftBarFullScreen: boolean
  toogleLeftBarFullScreen: () => void
  currentPage: string
  setCurrentPage: (v:string) => void
  languaje: languaje
  setLanguaje: (v:languaje) => void
  loading: boolean
  toggleLoading: () => void
  setLoading: (v:boolean) => void
}

const useMainStore = create<Store>()((set) => ({
  leftBarFullScreen: false,
  toogleLeftBarFullScreen: () => set((state) => ({ leftBarFullScreen: !state.leftBarFullScreen })),
  currentPage: "Principal",
  setCurrentPage: (value:string) =>set((state) =>({ currentPage:value })),
  languaje: "es",
  setLanguaje: (value:languaje)=>set((state)=>({languaje:value})),
  loading: false,
  toggleLoading: () => set((state)=>({loading: !state.loading})),
  setLoading: (value:boolean)=>set((state)=>({loading: value})),

}))



export {
  useMainStore
} 