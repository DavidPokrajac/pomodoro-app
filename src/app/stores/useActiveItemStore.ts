import { create } from "zustand";
import { activeItemStoreInterface } from "../types/activeItemStoreInterface";
import { useTimerStore } from "./useTimerStore";

export const useActiveItemStore = create<activeItemStoreInterface>((set) => ({
    activeItem: "pomodoro",
    changeActiveItem: (value: string) =>
        set(() => {
            useTimerStore.setState({ seconds: 59, isStarted: false });
            return {
                activeItem: value,
            };
        }),
}));
