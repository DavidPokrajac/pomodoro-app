/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export const useTimeStore = create<any>(() => ({
    times: {
        pomodoroMinutes: 25,
        shortBreakMinutes: 5,
        longBreakMinutes: 15,
    },
}));
