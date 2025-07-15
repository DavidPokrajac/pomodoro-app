import { create } from "zustand";
import { activeItemStoreInterface } from "../types/activeItemStoreInterface";
import { useTimerStore } from "./useTimerStore";
import { useProgressValueStore } from "./useProgressValueStore";

export const useActiveItemStore = create<activeItemStoreInterface>((set) => ({
    activeItem: "pomodoro",
    changeActiveItem: (value: string) =>
        set(() => {
            useTimerStore.setState({ seconds: 59, isStarted: false });
            useProgressValueStore.setState({ value: 0 });
            return {
                activeItem: value,
            };
        }),
}));
