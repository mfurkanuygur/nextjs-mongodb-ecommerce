import { create } from "zustand"

export const useLoginState = create((set) => ({
    loginState: false,
    updateLoginState: (newState) => set({ loginState: newState })
}))