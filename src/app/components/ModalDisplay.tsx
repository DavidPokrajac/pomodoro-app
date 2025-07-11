/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
// import Image from "next/image";
// import closeIcon from "../../../public/assets/icon-close.svg";
// import arrowUp from "../../../public/assets/icon-arrow-up.svg";
// import arrowDown from "../../../public/assets/icon-arrow-down.svg";
import { useUpdateStore } from "../stores/useUpdateStore";
import { useResetStore } from "../stores/useResetStore";
import { useTimeStore } from "../stores/useTimeStore";
import { useActiveColorStore } from "../stores/useActiveColorStore";
import { useActiveFontFamilyStore } from "../stores/useActiveFontFamilyStore";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { ArrowUpIcon } from "./ArrowUpIcon";
import { TimesIcon } from "./TimesIcon";

export default function ModalDisplay() {
    const activeTimes = useUpdateStore((state) => state.times);
    const initialTimes = useTimeStore((state) => state.times);
    const [times, setTimes] = useState<any>({
        pomodoroMinutes:
            activeTimes?.pomodoroMinutes ?? initialTimes.pomodoroMinutes,
        shortBreakMinutes:
            activeTimes?.shortBreakMinutes ?? initialTimes.shortBreakMinutes,
        longBreakMinutes:
            activeTimes?.longBreakMinutes ?? initialTimes.longBreakMinutes,
    });

    const activeColor = useUpdateStore((state) => state.activeColor);
    const initialActiveColor = useActiveColorStore(
        (state) => state.activeColor
    );
    const [activeClr, setActiveColor] = useState<string>(
        activeColor ?? initialActiveColor
    );

    const activeFont = useUpdateStore((state) => state.activeFont);
    const initialActiveFontFamily = useActiveFontFamilyStore(
        (state) => state.activeFontFamily
    );
    const [activeFFamily, setActiveFont] = useState<string>(
        activeFont ?? initialActiveFontFamily
    );

    const closeModal = useUpdateStore((state: any) => state.closeModal);
    const closeModalAndReset = useResetStore(
        (state: any) => state.closeModalAndReset
    );

    return (
        <div className="modal">
            <div className="modal__head">
                <h2 className="modal__head__title">Settings</h2>
                <button onClick={() => closeModalAndReset()}>
                    <TimesIcon />
                </button>
            </div>
            <div className="modal__time-wrapper">
                <h3 className="modal__time-wrapper__title">TIME (MINUTES)</h3>
                <div className="modal__time-wrapper__options">
                    <div>
                        <label htmlFor="pomodoro">pomodoro</label>
                        <div className="input-wrapper">
                            <input
                                type="number"
                                name=""
                                id="pomodoro"
                                value={times.pomodoroMinutes}
                                readOnly
                            />
                            <button
                                className="arrow-up-btn"
                                onClick={() =>
                                    setTimes((prevValue: any) => {
                                        return {
                                            ...prevValue,
                                            pomodoroMinutes:
                                                prevValue.pomodoroMinutes + 1,
                                        };
                                    })
                                }
                            >
                                <ArrowUpIcon />
                            </button>
                            <button
                                className="arrow-down-btn"
                                onClick={() =>
                                    setTimes((prevValue: any) => {
                                        return {
                                            ...prevValue,
                                            pomodoroMinutes:
                                                prevValue.pomodoroMinutes - 1,
                                        };
                                    })
                                }
                            >
                                <ArrowDownIcon />
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="short-break">short break</label>
                        <div className="input-wrapper">
                            <input
                                type="number"
                                name=""
                                id="short-break"
                                value={times.shortBreakMinutes}
                                readOnly
                            />
                            <button
                                className="arrow-up-btn"
                                onClick={() =>
                                    setTimes((prevValue: any) => {
                                        return {
                                            ...prevValue,
                                            shortBreakMinutes:
                                                prevValue.shortBreakMinutes + 1,
                                        };
                                    })
                                }
                            >
                                <ArrowUpIcon />
                            </button>
                            <button
                                className="arrow-down-btn"
                                onClick={() =>
                                    setTimes((prevValue: any) => {
                                        return {
                                            ...prevValue,
                                            shortBreakMinutes:
                                                prevValue.shortBreakMinutes - 1,
                                        };
                                    })
                                }
                            >
                                <ArrowDownIcon />
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="long-break">long break</label>
                        <div className="input-wrapper">
                            <input
                                type="number"
                                name=""
                                id="long-break"
                                value={times.longBreakMinutes}
                                readOnly
                            />
                            <button
                                className="arrow-up-btn"
                                onClick={() =>
                                    setTimes((prevValue: any) => {
                                        return {
                                            ...prevValue,
                                            longBreakMinutes:
                                                prevValue.longBreakMinutes + 1,
                                        };
                                    })
                                }
                            >
                                <ArrowUpIcon />
                            </button>
                            <button
                                className="arrow-down-btn"
                                onClick={() =>
                                    setTimes((prevValue: any) => {
                                        return {
                                            ...prevValue,
                                            longBreakMinutes:
                                                prevValue.longBreakMinutes - 1,
                                        };
                                    })
                                }
                            >
                                <ArrowDownIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal__font-wrapper">
                <h3 className="modal__font-wrapper__title">FONT</h3>
                <div className="modal__font-wrapper__options">
                    <button
                        className={`modal__font-wrapper__options__button modal__font-wrapper__options__button--kumbh ${
                            activeFFamily.includes("kumbh") &&
                            "modal__font-wrapper__options__button--active"
                        }`}
                        onClick={() => setActiveFont("--font-kumbh-sans")}
                    >
                        Aa
                    </button>
                    <button
                        className={`modal__font-wrapper__options__button modal__font-wrapper__options__button--roboto-slab ${
                            activeFFamily.includes("roboto-slab") &&
                            "modal__font-wrapper__options__button--active"
                        }`}
                        onClick={() =>
                            setActiveFont("--font-roboto-slab-serif")
                        }
                    >
                        Aa
                    </button>
                    <button
                        className={`modal__font-wrapper__options__button modal__font-wrapper__options__button--space-mono ${
                            activeFFamily.includes("space-mono") &&
                            "modal__font-wrapper__options__button--active"
                        }`}
                        onClick={() => setActiveFont("--font-space-mono")}
                    >
                        Aa
                    </button>
                </div>
            </div>
            <div className="modal__color-wrapper">
                <h3 className="modal__color-wrapper__title">COLOR</h3>
                <div className="modal__color-wrapper__options">
                    <button
                        className={`modal__color-wrapper__options__button modal__color-wrapper__options__button--red ${
                            activeClr === "red" &&
                            "modal__color-wrapper__options__button--active"
                        }`}
                        onClick={() => setActiveColor("red")}
                    ></button>
                    <button
                        className={`modal__color-wrapper__options__button modal__color-wrapper__options__button--cyan ${
                            activeClr === "cyan" &&
                            "modal__color-wrapper__options__button--active"
                        }`}
                        onClick={() => setActiveColor("cyan")}
                    ></button>
                    <button
                        className={`modal__color-wrapper__options__button modal__color-wrapper__options__button--magenta ${
                            activeClr === "magenta" &&
                            "modal__color-wrapper__options__button--active"
                        }`}
                        onClick={() => setActiveColor("magenta")}
                    ></button>
                </div>
            </div>
            <button
                className="modal__apply-button"
                onClick={() => closeModal(activeClr, activeFFamily, times)}
            >
                Apply
            </button>
        </div>
    );
}
