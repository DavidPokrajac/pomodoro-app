/* eslint-disable @typescript-eslint/no-explicit-any */
export const declareActiveFn = (
    object: string,
    times: {
        pomodoroMinutes?: number;
        shortBreakMinutes?: number;
        longBreakMinutes?: number;
    }
) => {
    if (object === "pomodoro") {
        return times.pomodoroMinutes;
    }
    if (object === "short-break") {
        return times.shortBreakMinutes;
    }
    if (object === "long-break") {
        return times.longBreakMinutes;
    }
};

export const declareActiveFontFamily = (activeFontFamily: any): string => {
    if (activeFontFamily === "--font-kumbh-sans") {
        return "--font-kumbh-sans";
    }
    if (activeFontFamily === "--font-roboto-slab-serif") {
        return "--font-roboto-slab-serif";
    }
    if (activeFontFamily === "--font-space-mono") {
        return "--font-space-mono";
    }
    return "";
};

export const declareActiveTime = (activeItem: any, times: any) => {
    if (activeItem === "pomodoro") {
        return times.pomodoroMinutes;
    }
    if (activeItem === "short-break") {
        return times.shortBreakMinutes;
    }
    if (activeItem === "long-break") {
        return times.longBreakMinutes;
    }
};
