/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export const useProgressValueStore = create<any>(() => ({
    value: 0,
}));
