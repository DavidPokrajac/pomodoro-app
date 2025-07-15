import { create } from "zustand";
import { useTimeStore } from "./useTimeStore";
import { declareActiveTime } from "../utils/helpers";
import { useActiveItemStore } from "./useActiveItemStore";
import { useUpdateStore } from "./useUpdateStore";
import { useProgressValueStore } from "./useProgressValueStore";
import { timerStoreInterface } from "../types/timerStoreInterface";

export const useTimerStore = create<timerStoreInterface>((set) => ({
    isStarted: false,
    seconds: 59,
    status: "Start",
    decreaseSeconds: (activeTime: string) => {
        const active =
            useTimeStore.getState().times[
                activeTime as keyof {
                    pomodoroMinutes: number;
                    shortBreakMinutes: number;
                    longBreakMinutes: number;
                }
            ];
        useProgressValueStore.setState((prev) => ({
            value: prev.value + 1,
        }));
        set((prev) => {
            if (prev.seconds === 0) {
                useTimeStore.setState((prev) => {
                    return {
                        times: {
                            ...prev.times,
                            [activeTime]: active - 1,
                        },
                    };
                });
                return { seconds: 59 };
            }
            if (
                useTimeStore.getState().times[
                    activeTime as keyof {
                        pomodoroMinutes: number;
                        shortBreakMinutes: number;
                        longBreakMinutes: number;
                    }
                ] === 0 &&
                prev.seconds === 1
            ) {
                return {
                    isStarted: false,
                    seconds: 0,
                    status: "Restart",
                };
            }
            return {
                ...prev,
                seconds: prev.seconds - 1,
            };
        });
    },
    startTimer: () =>
        set((prev) => ({
            ...prev,
            isStarted: true,
            status: "Pause",
        })),
    stopTimer: () =>
        set((prev) => ({
            ...prev,
            isStarted: false,
            status: "Start",
        })),
    restartTimer: () => {
        set((prev) => {
            useProgressValueStore.setState({ value: 0 });
            useTimeStore.setState((prev) => {
                const activeItem = useActiveItemStore.getState().activeItem;
                const times = useUpdateStore.getState().times;

                return {
                    times: {
                        ...prev.times,
                        [declareActiveTime(activeItem)]:
                            times[declareActiveTime(activeItem)],
                    },
                };
            });

            return {
                ...prev,
                isStarted: true,
                seconds: 59,
                status: "Pause",
            };
        });
    },
}));
