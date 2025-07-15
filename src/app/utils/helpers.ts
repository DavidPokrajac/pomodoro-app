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

export const declareActiveFontFamily = (activeFontFamily: string): string => {
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

export const declareActiveTime = (activeItem: string) => {
    if (activeItem === "pomodoro") {
        return "pomodoroMinutes";
    }
    if (activeItem === "short-break") {
        return "shortBreakMinutes";
    }
    return "longBreakMinutes";
};

export const populateWithZero = (time: number) => {
    return time < 10 ? `0${time}` : time;
};

export const renderHandler = (
    status: string,
    restartHandler: () => void,
    stopHandler: () => void,
    startHandler: () => void
) => {
    if (status === "Restart") {
        return () => restartHandler();
    } else if (status === "Pause") {
        return () => stopHandler();
    } else if (status === "Start") {
        return () => startHandler();
    }
};

export const changeProgressbarColor = (activeColor: string) => {
    switch (activeColor) {
        case "red":
            return "rgb(248, 112, 112)";
            break;
        case "cyan":
            return "rgb(112, 243, 248)";
            break;
        case "magenta":
            return "rgb(216, 129, 248)";
            break;
    }
};
