import { useActiveColorStore } from "../stores/useActiveColorStore";
import { useActiveItemStore } from "../stores/useActiveItemStore";
import { activeItemStoreInterface } from "../types/activeItemStoreInterface";
import { activeColorStoreInterface } from "../types/activeColorInterface";

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

    return (
        <div className="button-container">
            <button
                onClick={() => changeActiveItem("pomodoro")}
                className={`button-container__button ${
                    activeItem === "pomodoro" &&
                    "button-container__button--active"
                } ${activeColor}`}
            >
                pomodoro
            </button>
            <button
                onClick={() => changeActiveItem("short-break")}
                className={`button-container__button ${
                    activeItem === "short-break" &&
                    "button-container__button--active"
                } ${activeColor}`}
            >
                short break
            </button>
            <button
                onClick={() => changeActiveItem("long-break")}
                className={`button-container__button ${
                    activeItem === "long-break" &&
                    "button-container__button--active"
                } ${activeColor}`}
            >
                long break
            </button>
        </div>
    );
}
