import { create } from "zustand";
import { modalOpenStoreInterface } from "../types/modalOpenStoreInterface";

export const useModalOpenStore = create<modalOpenStoreInterface>((set) => ({
    isModalOpen: false,
    modalHandler: () =>
        set(() => ({ isModalOpen: !useModalOpenStore.getState().isModalOpen })),
}));
