import { create } from "zustand";
import { useActiveFontFamilyStore } from "./useActiveFontFamilyStore";
import { useActiveColorStore } from "./useActiveColorStore";
import { useModalOpenStore } from "./useModalOpenStore";
import { useTimeStore } from "./useTimeStore";
import { updateStoreInterface } from "../types/updateStoreInterface";
import { useTimerStore } from "./useTimerStore";
import { useProgressValueStore } from "./useProgressValueStore";

export const useUpdateStore = create<updateStoreInterface>((set) => ({
    activeFontFamily: useActiveFontFamilyStore.getState().activeFontFamily,
    activeColor: useActiveColorStore.getState().activeColor,
    times: useTimeStore.getState().times,
    closeModal: (
        activeColor: string,
        activeFont: string,
        times: {
            pomodoroMinutes: number;
            shortBreakMinutes: number;
            longBreakMinutes: number;
        }
    ) =>
        set(() => {
            useModalOpenStore.setState({ isModalOpen: false });
            useActiveColorStore.setState({ activeColor: activeColor });
            useActiveFontFamilyStore.setState({ activeFontFamily: activeFont });
            useTimeStore.setState({ times: times });
            useTimerStore.setState({ seconds: 59 });
            useProgressValueStore.setState({ value: 0 });
            return {
                activeFontFamily:
                    useActiveFontFamilyStore.getState().activeFontFamily,
                activeColor: useActiveColorStore.getState().activeColor,
                times: useTimeStore.getState().times,
            };
        }),
}));
