import { useTimeStore } from "../stores/useTimeStore";
import { useActiveItemStore } from "../stores/useActiveItemStore";
import { declareActiveTime } from "../utils/helpers";
import { useActiveColorStore } from "../stores/useActiveColorStore";

export default function TimerDisplay() {
    const activeItem = useActiveItemStore(
        (state: { activeItem: string }) => state.activeItem
    );
    const times = useTimeStore(
        (state: {
            times: {
                pomodoroMinutes: number;
                shortBreakMinutes: number;
                longBreakMinutes: number;
            };
        }) => state.times
    );
    const activeColor = useActiveColorStore(
        (state: { activeColor: string }) => state.activeColor
    );
    const seconds = 59;
    return (
        <div className="timer-display-container">
            <div className="timer-display-container__oval">
                <span className="timer-display-container__time">
                    {declareActiveTime(activeItem, times)}:{seconds}
                </span>
                <span
                    className={`timer-display-container__control ${activeColor}`}
                >
                    pause
                </span>
            </div>
        </div>
    );
}
