import { useActiveColorStore } from "../stores/useActiveColorStore";
import { useActiveItemStore } from "../stores/useActiveItemStore";
import { activeItemStoreInterface } from "../types/activeItemStoreInterface";
import { activeColorStoreInterface } from "../types/activeColorInterface";
import { useTimerStore } from "../stores/useTimerStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ButtonContainer() {
    const activeColor = useActiveColorStore(
        (state: activeColorStoreInterface) => state.activeColor
    );
    const activeItem = useActiveItemStore(
        (state: activeItemStoreInterface) => state.activeItem
    );
    const changeActiveItem = useActiveItemStore(
        (state: activeItemStoreInterface) => state.changeActiveItem
    );
    const isStarted = useTimerStore((state) => state.isStarted);

    const changeActiveBtnHandler = (activeItem: string) => {
        changeActiveItem(activeItem);
    };

    useGSAP(() => {
        const mm = gsap.matchMedia();

        if (activeItem === "pomodoro") {
            gsap.to("span.button-container__button", {
                left: 10,
            });
        }
        if (activeItem === "short-break") {
            mm.add("(min-width: 767px)", () => {
                gsap.to("span.button-container__button", {
                    left: "35%",
                });
            });
            mm.add("(max-width: 767px)", () => {
                gsap.to("span.button-container__button", {
                    left: "32.5%",
                });
            });
        }
        if (activeItem === "long-break") {
            gsap.to("span.button-container__button", {
                left: "calc(100% - 130px)",
            });
        }
    }, [activeItem]);

    return (
        <div className="button-container">
            <span
                className={`button-container__button button-container__button--active ${activeColor}`}
            >
                {activeItem}
            </span>
            <button
                onClick={() => changeActiveBtnHandler("pomodoro")}
                className={`button-container__button ${
                    activeItem === "pomodoro" ? "text-transparent" : ""
                }`}
                disabled={isStarted ? true : false}
            >
                pomodoro
            </button>
            <button
                onClick={() => changeActiveBtnHandler("short-break")}
                className={`button-container__button ${
                    activeItem === "short-break" ? "text-transparent" : ""
                }`}
                disabled={isStarted ? true : false}
            >
                short break
            </button>
            <button
                onClick={() => changeActiveBtnHandler("long-break")}
                className={`button-container__button ${
                    activeItem === "long-break" ? "text-transparent" : ""
                }`}
                disabled={isStarted}
            >
                long break
            </button>
        </div>
    );
}
