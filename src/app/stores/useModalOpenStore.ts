/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export const useModalOpenStore = create<any>((set) => ({
    isModalOpen: false,
    modalHandler: () =>
        set(() => ({ isModalOpen: !useModalOpenStore.getState().isModalOpen })),
}));
