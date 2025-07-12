import { create } from "zustand";
import { useModalOpenStore } from "./useModalOpenStore";
import { resetStoreInterface } from "../types/resetStoreInterface";

export const useResetStore = create<resetStoreInterface>(() => ({
    closeModalAndReset: () =>
        useModalOpenStore.setState({ isModalOpen: false }),
}));
