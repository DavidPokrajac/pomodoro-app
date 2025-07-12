import { create } from "zustand";
import { activeItemStoreInterface } from "../types/activeItemStoreInterface";

export const useActiveItemStore = create<activeItemStoreInterface>((set) => ({
    activeItem: "pomodoro",
    changeActiveItem: (value: string) => set(() => ({ activeItem: value })),
}));
