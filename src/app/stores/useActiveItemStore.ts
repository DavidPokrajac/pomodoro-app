import { create } from "zustand";

export const useActiveItemStore = create((set) => ({
    activeItem: "pomodoro",
    changeActiveItem: (value: string) => set(() => ({ activeItem: value })),
}));
