export interface updateStoreInterface {
    activeFontFamily: string;
    activeColor: string;
    times: {
        pomodoroMinutes: number;
        shortBreakMinutes: number;
        longBreakMinutes: number;
    };
    closeModal: (
        valueOne: string,
        valueTwo: string,
        valueThree: {
            pomodoroMinutes: number;
            shortBreakMinutes: number;
            longBreakMinutes: number;
        }
    ) => void;
}
