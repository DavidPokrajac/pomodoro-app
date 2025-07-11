/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export const useActiveColorStore = create<any>(() => ({
    activeColor: "red",
}));
