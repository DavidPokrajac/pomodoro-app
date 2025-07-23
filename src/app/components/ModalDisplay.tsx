"use client";

import { useState, useEffect, useRef } from "react";
import { useUpdateStore } from "../stores/useUpdateStore";
import { useResetStore } from "../stores/useResetStore";
import { useTimeStore } from "../stores/useTimeStore";
import { useActiveColorStore } from "../stores/useActiveColorStore";
import { useActiveFontFamilyStore } from "../stores/useActiveFontFamilyStore";
import { useModalOpenStore } from "../stores/useModalOpenStore";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { ArrowUpIcon } from "./ArrowUpIcon";
import { TimesIcon } from "./TimesIcon";
import { updateStoreInterface } from "../types/updateStoreInterface";
import { resetStoreInterface } from "../types/resetStoreInterface";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface timeInterface {
    pomodoroMinutes: number;
    shortBreakMinutes: number;
    longBreakMinutes: number;
}

export default function ModalDisplay() {
    const activeTimes = useUpdateStore((state) => state.times);
    const initialTimes = useTimeStore((state) => state.times);
    const [times, setTimes] = useState<timeInterface>({
        pomodoroMinutes:
            activeTimes?.pomodoroMinutes ?? initialTimes.pomodoroMinutes,
        shortBreakMinutes:
            activeTimes?.shortBreakMinutes ?? initialTimes.shortBreakMinutes,
        longBreakMinutes:
            activeTimes?.longBreakMinutes ?? initialTimes.longBreakMinutes,
    });

    const isModalOpen = useModalOpenStore((state) => state.isModalOpen);

    const activeColor = useUpdateStore((state) => state.activeColor);
    const initialActiveColor = useActiveColorStore(
        (state) => state.activeColor
    );
    const [activeClr, setActiveColor] = useState<string>(
        activeColor ?? initialActiveColor
    );

    const activeFont = useUpdateStore((state) => state.activeFontFamily);
    const initialActiveFontFamily = useActiveFontFamilyStore(
        (state) => state.activeFontFamily
    );
    const [activeFFamily, setActiveFont] = useState<string>(
        activeFont ?? initialActiveFontFamily
    );

    const closeModal = useUpdateStore(
        (state: updateStoreInterface) => state.closeModal
    );
    const closeModalAndReset = useResetStore(
        (state: resetStoreInterface) => state.closeModalAndReset
    );

    const container = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: container });

    useEffect(() => {
        if (!isModalOpen) {
            setTimeout(() => {
                document.querySelector<HTMLDivElement>(
                    ".modal"
                )!.style.display = "none";
            }, 500);
        }
    }, [isModalOpen]);

    useGSAP(() => {
        const tl = gsap.timeline();
        if (isModalOpen) {
            tl.fromTo(
                ".modal",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.75,
                    ease: "steps(5)",
                }
            );
        }
    }, [isModalOpen]);

    const increasePomodoroMinutes = contextSafe(() => {
        setTimes((prevValue: timeInterface) => {
            return {
                ...prevValue,
                pomodoroMinutes: prevValue.pomodoroMinutes + 1,
            };
        });
        const timeline = gsap.timeline({
            defaults: { ease: "power1.out" },
        });

        timeline
            .to(".pomodoro-minutes", {
                opacity: 0,
                y: 15,
                duration: 0.1,
            })
            .to(".pomodoro-minutes", {
                y: -15,
                duration: 0.2,
            })
            .to(".pomodoro-minutes", {
                opacity: 1,
                y: 0,
                duration: 0.2,
            });
    });

    const decreasePomodoroMinutes = contextSafe(() => {
        setTimes((prevValue: timeInterface) => {
            return {
                ...prevValue,
                pomodoroMinutes: prevValue.pomodoroMinutes - 1,
            };
        });
        const timeline = gsap.timeline({
            defaults: { ease: "power1.out" },
        });

        timeline
            .to(".pomodoro-minutes", {
                opacity: 0,
                y: -15,
                duration: 0.1,
            })
            .to(".pomodoro-minutes", {
                y: 15,
                duration: 0.2,
            })
            .to(".pomodoro-minutes", {
                opacity: 1,
                y: 0,
                duration: 0.2,
            });
    });

    const increaseShortBreakMinutes = contextSafe(() => {
        setTimes((prevValue: timeInterface) => {
            return {
                ...prevValue,
                shortBreakMinutes: prevValue.shortBreakMinutes + 1,
            };
        });
        const timeline = gsap.timeline({
            defaults: { ease: "power1.out" },
        });

        timeline
            .to(".short-break-minutes", {
                opacity: 0,
                y: 15,
                duration: 0.1,
            })
            .to(".short-break-minutes", {
                y: -15,
                duration: 0.2,
            })
            .to(".short-break-minutes", {
                opacity: 1,
                y: 0,
                duration: 0.2,
            });
    });

    const decreaseShortBreakMinutes = contextSafe(() => {
        setTimes((prevValue: timeInterface) => {
            return {
                ...prevValue,
                shortBreakMinutes: prevValue.shortBreakMinutes - 1,
            };
        });
        const timeline = gsap.timeline({
            defaults: { ease: "power1.out" },
        });

        timeline
            .to(".short-break-minutes", {
                opacity: 0,
                y: -15,
                duration: 0.1,
            })
            .to(".short-break-minutes", {
                y: 15,
                duration: 0.2,
            })
            .to(".short-break-minutes", {
                opacity: 1,
                y: 0,
                duration: 0.2,
            });
    });

    const increaseLongBreakMinutes = contextSafe(() => {
        setTimes((prevValue: timeInterface) => {
            return {
                ...prevValue,
                longBreakMinutes: prevValue.longBreakMinutes + 1,
            };
        });
        const timeline = gsap.timeline({
            defaults: { ease: "power1.out" },
        });

        timeline
            .to(".long-break-minutes", {
                opacity: 0,
                y: 15,
                duration: 0.1,
            })
            .to(".long-break-minutes", {
                y: -15,
                duration: 0.2,
            })
            .to(".long-break-minutes", {
                opacity: 1,
                y: 0,
                duration: 0.2,
            });
    });

    const decreaseLongBreakMinutes = contextSafe(() => {
        setTimes((prevValue: timeInterface) => {
            return {
                ...prevValue,
                longBreakMinutes: prevValue.longBreakMinutes - 1,
            };
        });
        const timeline = gsap.timeline({
            defaults: { ease: "power1.out" },
        });

        timeline
            .to(".long-break-minutes", {
                opacity: 0,
                y: -15,
                duration: 0.1,
            })
            .to(".long-break-minutes", {
                y: 15,
                duration: 0.2,
            })
            .to(".long-break-minutes", {
                opacity: 1,
                y: 0,
                duration: 0.2,
            });
    });

    useEffect(() => {
        setTimeout(() => {
            document.querySelector<HTMLSpanElement>(
                ".short-break-minutes"
            )!.innerText = "" + times.shortBreakMinutes;
        }, 900);
    }, [times.shortBreakMinutes]);

    return (
        <div className="modal" ref={container}>
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
                            <span className="pomodoro-minutes">
                                {times.pomodoroMinutes}
                            </span>
                            <input
                                type="number"
                                name=""
                                id="pomodoro"
                                value={times.pomodoroMinutes}
                                readOnly
                                min={0}
                            />
                            <button
                                className="arrow-up-btn"
                                onClick={() => increasePomodoroMinutes()}
                            >
                                <ArrowUpIcon />
                            </button>
                            <button
                                className="arrow-down-btn"
                                onClick={() => decreasePomodoroMinutes()}
                                disabled={times.pomodoroMinutes <= 0}
                            >
                                <ArrowDownIcon />
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="short-break">short break</label>
                        <div className="input-wrapper">
                            <span className="short-break-minutes">
                                {times.shortBreakMinutes}
                            </span>
                            <input
                                type="number"
                                name=""
                                id="short-break"
                                value={times.shortBreakMinutes}
                                readOnly
                                min={0}
                            />
                            <button
                                className="arrow-up-btn"
                                onClick={() => increaseShortBreakMinutes()}
                            >
                                <ArrowUpIcon />
                            </button>
                            <button
                                className="arrow-down-btn"
                                onClick={() => decreaseShortBreakMinutes()}
                                disabled={times.shortBreakMinutes <= 0}
                            >
                                <ArrowDownIcon />
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="long-break">long break</label>
                        <div className="input-wrapper">
                            <span className="long-break-minutes">
                                {times.longBreakMinutes}
                            </span>
                            <input
                                type="number"
                                name=""
                                id="long-break"
                                value={times.longBreakMinutes}
                                readOnly
                                min={0}
                            />
                            <button
                                className="arrow-up-btn"
                                onClick={() => increaseLongBreakMinutes()}
                            >
                                <ArrowUpIcon />
                            </button>
                            <button
                                className="arrow-down-btn"
                                onClick={() => decreaseLongBreakMinutes()}
                                disabled={times.longBreakMinutes <= 0}
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
