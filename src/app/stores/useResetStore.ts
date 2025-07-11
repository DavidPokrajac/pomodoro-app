/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { useModalOpenStore } from "./useModalOpenStore";

export const useResetStore = create<any>(() => ({
    closeModalAndReset: () =>
        useModalOpenStore.setState({ isModalOpen: false }),
}));
