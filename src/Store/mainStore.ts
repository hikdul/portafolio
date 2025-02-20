import { create } from "zustand"

type Store = {
  leftBarFullScreen: boolean
  toogleLeftBarFullScreen: () => void
}

const useMainStore = create<Store>()((set) => ({
  leftBarFullScreen: true,
  toogleLeftBarFullScreen: () => set((state) => ({ leftBarFullScreen: !state.leftBarFullScreen })),
}))


export {
  useMainStore
} 