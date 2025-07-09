import Image from "next/image";
import closeIcon from "../../../public/assets/icon-close.svg";
import arrowUp from "../../../public/assets/icon-arrow-up.svg";
import arrowDown from "../../../public/assets/icon-arrow-down.svg";

export default function ModalDisplay() {
    return (
        <div className="modal">
            <div className="modal__head">
                <h2 className="modal__head__title">Settings</h2>
                <Image src={closeIcon} alt="Close the modal" />
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
                                value={25}
                            />
                            <button className="arrow-up-btn">
                                <Image src={arrowUp} alt="" />
                            </button>
                            <button className="arrow-down-btn">
                                <Image src={arrowDown} alt="" />
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
                                value={5}
                            />
                            <button className="arrow-up-btn">
                                <Image src={arrowUp} alt="" />
                            </button>
                            <button className="arrow-down-btn">
                                <Image src={arrowDown} alt="" />
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
                                value={15}
                            />
                            <button className="arrow-up-btn">
                                <Image src={arrowUp} alt="" />
                            </button>
                            <button className="arrow-down-btn">
                                <Image src={arrowDown} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal__font-wrapper">
                <h3 className="modal__font-wrapper__title">FONT</h3>
                <div className="modal__font-wrapper__options">
                    <button className="modal__font-wrapper__options__button modal__font-wrapper__options__button--kumbh modal__font-wrapper__options__button--active">
                        Aa
                    </button>
                    <button className="modal__font-wrapper__options__button modal__font-wrapper__options__button--roboto-slab">
                        Aa
                    </button>
                    <button className="modal__font-wrapper__options__button modal__font-wrapper__options__button--space-mono">
                        Aa
                    </button>
                </div>
            </div>
            <div className="modal__color-wrapper">
                <h3 className="modal__color-wrapper__title">COLOR</h3>
                <div className="modal__color-wrapper__options">
                    <button className="modal__color-wrapper__options__button modal__color-wrapper__options__button--red modal__color-wrapper__options__button--active"></button>
                    <button className="modal__color-wrapper__options__button modal__color-wrapper__options__button--cyan"></button>
                    <button className="modal__color-wrapper__options__button modal__color-wrapper__options__button--magenta"></button>
                </div>
            </div>
            <button className="modal__apply-button">Apply</button>
        </div>
    );
}
