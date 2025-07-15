/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { useTimeStore } from "./useTimeStore";
import { declareActiveTime } from "../utils/helpers";
import { useActiveItemStore } from "./useActiveItemStore";
import { useUpdateStore } from "./useUpdateStore";
import { useProgressValueStore } from "./useProgressValueStore";

export const useTimerStore = create<any>((set) => ({
    isStarted: false,
    seconds: 59,
    status: "Start",
    decreaseSeconds: (activeTime: any) => {
        const active =
            useTimeStore.getState().times[
                activeTime as keyof {
                    pomodoroMinutes: number;
                    shortBreakMinutes: number;
                    longBreakMinutes: number;
                }
            ];
        useProgressValueStore.setState((prev: any) => ({
            value: prev.value + 1,
        }));
        set((prev: any) => {
            if (prev.seconds === 0 && activeTime !== 0) {
                useTimeStore.setState((prev: any) => {
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
        set((prev: any) => ({
            ...prev,
            isStarted: true,
            status: "Pause",
        })),
    stopTimer: () =>
        set((prev: any) => ({
            ...prev,
            isStarted: false,
            status: "Start",
        })),
    restartTimer: () => {
        set((prev: any) => {
            useProgressValueStore.setState({ value: 0 });
            useTimeStore.setState((prev: any) => {
                const activeItem = useActiveItemStore.getState().activeItem;
                const times = useUpdateStore.getState().times;
                console.log(times);
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
