import { useActiveColorStore } from "../stores/useActiveColorStore";
import { useActiveItemStore } from "../stores/useActiveItemStore";
import { activeItemStoreInterface } from "../types/activeItemStoreInterface";
import { activeColorStoreInterface } from "../types/activeColorInterface";
import { useTimerStore } from "../stores/useTimerStore";

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

    return (
        <div className="button-container">
            <button
                onClick={() => changeActiveBtnHandler("pomodoro")}
                className={`button-container__button ${
                    activeItem === "pomodoro"
                        ? "button-container__button--active"
                        : ""
                } ${activeColor}`}
                disabled={isStarted ? true : false}
            >
                pomodoro
            </button>
            <button
                onClick={() => changeActiveBtnHandler("short-break")}
                className={`button-container__button ${
                    activeItem === "short-break"
                        ? "button-container__button--active"
                        : ""
                } ${activeColor}`}
                disabled={isStarted ? true : false}
            >
                short break
            </button>
            <button
                onClick={() => changeActiveBtnHandler("long-break")}
                className={`button-container__button ${
                    activeItem === "long-break"
                        ? "button-container__button--active"
                        : ""
                } ${activeColor}`}
                disabled={isStarted}
            >
                long break
            </button>
        </div>
    );
}
