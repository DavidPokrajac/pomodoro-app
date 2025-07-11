/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export const useActiveFontFamilyStore = create<any>((set) => ({
    activeFontFamily: "--font-kumbh-sans",
    changeActiveFont: (value: string) =>
        set(() => ({ activeFontFamily: value })),
}));
