import { create } from "zustand";
import { timeStoreInterface } from "../types/timeStoreInterface";

export const useTimeStore = create<timeStoreInterface>(() => ({
    times: {
        pomodoroMinutes: 25,
        shortBreakMinutes: 5,
        longBreakMinutes: 15,
    },
}));
