import { useEffect, useRef } from "react";
import { useActiveItemStore } from "../stores/useActiveItemStore";
import {
    changeProgressbarColor,
    declareActiveTime,
    populateWithZero,
} from "../utils/helpers";
import { useActiveColorStore } from "../stores/useActiveColorStore";
import { useTimerStore } from "../stores/useTimerStore";
import { renderHandler } from "../utils/helpers";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useProgressValueStore } from "../stores/useProgressValueStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useUpdateStore } from "../stores/useUpdateStore";
import { useTimeStore } from "../stores/useTimeStore";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText);

export default function TimerDisplay() {
    const activeItem = useActiveItemStore(
        (state: { activeItem: string }) => state.activeItem
    );
    const times = useUpdateStore(
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
    const status = useTimerStore((state) => state.status);
    const value = useProgressValueStore((state) => state.value);
    const isStarted = useTimerStore((state) => state.isStarted);
    const startTimer = useTimerStore((state) => state.startTimer);
    const stopTimer = useTimerStore((state) => state.stopTimer);
    const restartTimer = useTimerStore((state) => state.restartTimer);
    const seconds = useTimerStore((state) => state.seconds);
    const decreaseSeconds = useTimerStore((state) => state.decreaseSeconds);
    const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

    const activeTime = declareActiveTime(activeItem);
    const overall = times[activeTime] * 60 + 59;

    useEffect(() => {
        if (isStarted) {
            intervalRef.current = setInterval(() => {
                decreaseSeconds(activeTime);
            }, 1000);
        }
        if (!isStarted) {
            clearInterval(intervalRef.current);
        }
    }, [isStarted, decreaseSeconds, activeTime, activeItem]);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector<HTMLSpanElement>(
                ".timer-display-container__control"
            )!.innerText = status;
        }, 500);
    }, [status]);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(".timer-display-container__control", {
            y: 50,
            opacity: 0,
            duration: 0.25,
        });
        tl.to(".timer-display-container__control", {
            y: -50,
            opacity: 0,
            duration: 0.25,
        });
        tl.to(".timer-display-container__control", {
            y: 0,
            opacity: 1,
            duration: 0.25,
        });
    }, [status]);

    return (
        <div className="timer-display-container">
            <div className="timer-display-container__oval">
                <CircularProgressbarWithChildren
                    value={Math.floor((value / overall) * 100)}
                    minValue={0}
                    maxValue={100}
                    styles={{
                        path: {
                            stroke: changeProgressbarColor(activeColor),
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            transition: "stroke-dashoffset 0.5s ease-in-out",
                        },
                    }}
                >
                    <span className="timer-display-container__time">
                        {populateWithZero(
                            useTimeStore.getState().times[activeTime]
                        )}
                        :{populateWithZero(seconds)}
                    </span>
                    <span
                        className={`timer-display-container__control ${activeColor}`}
                        onClick={renderHandler(
                            status,
                            restartTimer,
                            stopTimer,
                            startTimer
                        )}
                    >
                        <span>{status}</span>
                    </span>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}
