import { create } from "zustand";

export const useVoucherStore = create((set) => ({
    isOpen: false,
    records: [],
    toggleDrawer: () => set((state) => ({isOpen: !state.isOpen})),
    addRecord: (newRecord) => set((state) => ({records: [...state.records, newRecord]})),
    deleteRecord: (id) => set((state) => ({records: state.records.filter(record => record.id !== id)})),
    updateQuantity: (id, amount) => set((state) => ({records: state.records.map(record => {
        if(record.id === id ) {
            const newQuantity = parseInt(record.quantity) + parseInt(amount);
            const newCost = parseInt(record.price) * parseInt(newQuantity);
            return {...record, quantity: newQuantity, cost: newCost}
        }

        return record;
    })})),
    resetRecord: () => set({records: []})
}))