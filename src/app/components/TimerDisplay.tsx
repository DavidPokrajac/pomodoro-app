/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTimeStore } from "../stores/useTimeStore";
import { useActiveItemStore } from "../stores/useActiveItemStore";
import { declareActiveTime } from "../utils/helpers";
import { useActiveColorStore } from "../stores/useActiveColorStore";

export default function TimerDisplay() {
    const activeItem = useActiveItemStore((state: any) => state.activeItem);
    const times = useTimeStore((state: any) => state.times);
    const activeColor = useActiveColorStore((state: any) => state.activeColor);
    return (
        <div className="timer-display-container">
            <div className="timer-display-container__oval">
                <span className="timer-display-container__time">
                    {declareActiveTime(activeItem, times)}:59
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
