import { create } from "zustand"

type Store = {
  leftBarFullScreen: boolean
  toogleLeftBarFullScreen: () => void
  currentPage: string
  setCurrentPage: (v:string) => void
}

const useMainStore = create<Store>()((set) => ({
  leftBarFullScreen: false,
  toogleLeftBarFullScreen: () => set((state) => ({ leftBarFullScreen: !state.leftBarFullScreen })),
  currentPage: "Home",
  setCurrentPage: (value:string) =>set((state) =>({ currentPage:value })),

}))


export {
  useMainStore
} 