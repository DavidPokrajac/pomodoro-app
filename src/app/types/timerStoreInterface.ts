export interface timerStoreInterface {
    isStarted: boolean;
    seconds: number;
    status: string;
    decreaseSeconds: (
        activeTime: "pomodoroMinutes" | "shortBreakMinutes" | "longBreakMinutes"
    ) => void;
    startTimer: () => void;
    stopTimer: () => void;
    restartTimer: () => void;
}
