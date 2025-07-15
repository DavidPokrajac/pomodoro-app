import { create } from "zustand";
import { progressValueStoreInterface } from "../types/progressValueStoreInterface";

export const useProgressValueStore = create<progressValueStoreInterface>(
    () => ({
        value: 0,
    })
);
