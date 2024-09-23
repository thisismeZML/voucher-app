import { create } from "zustand";

export const useVoucherStore = create((set) => ({
    isOpen: false,
    toggleDrawer: () => set((state) => ({isOpen: !state.isOpen}))
}))