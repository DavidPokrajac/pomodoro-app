import { create } from "zustand";
import { activeFontFamilyStoreInterface } from "../types/activeFontFamilyInterface";

export const useActiveFontFamilyStore = create<activeFontFamilyStoreInterface>(
    (set) => ({
        activeFontFamily: "--font-kumbh-sans",
        changeActiveFont: (value: string) =>
            set(() => ({ activeFontFamily: value })),
    })
);
