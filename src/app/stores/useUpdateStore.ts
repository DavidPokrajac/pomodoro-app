/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { useActiveFontFamilyStore } from "./useActiveFontFamilyStore";
import { useActiveColorStore } from "./useActiveColorStore";
import { useModalOpenStore } from "./useModalOpenStore";
import { useTimeStore } from "./useTimeStore";

export const useUpdateStore = create<any>((set) => ({
    activeFontFamily: useActiveFontFamilyStore.getState().activeFontFamily,
    activeColor: useActiveColorStore.getState().activeColor,
    closeModal: (activeColor: string, activeFont: string, times: any) =>
        set(() => {
            useModalOpenStore.setState({ isModalOpen: false });
            useActiveColorStore.setState({ activeColor: activeColor });
            useActiveFontFamilyStore.setState({ activeFontFamily: activeFont });
            useTimeStore.setState({ times: times });
            return {
                activeFontFamily:
                    useActiveFontFamilyStore.getState().activeFontFamily,
                activeColor: useActiveColorStore.getState().activeColor,
            };
        }),
}));
