"use client";

import { useEffect } from "react";
import Image from "next/image";
import pomodoro from "../../public/assets/logo.svg";
// import settingsIcon from "../../public/assets/icon-settings.svg";
import ButtonContainer from "./components/ButtonContainer";
import TimerDisplay from "./components/TimerDisplay";
import ModalDisplay from "./components/ModalDisplay";
import { useModalOpenStore } from "./stores/useModalOpenStore";
import { useUpdateStore } from "./stores/useUpdateStore";
import { declareActiveFontFamily } from "./utils/helpers";
import { SettingsIcon } from "./components/SettingsIcon";
import { modalOpenStoreInterface } from "./types/modalOpenStoreInterface";
import { updateStoreInterface } from "./types/updateStoreInterface";

export default function Page() {
    const isModalOpen = useModalOpenStore(
        (state: modalOpenStoreInterface) => state.isModalOpen
    );
    const modalHandler = useModalOpenStore(
        (state: modalOpenStoreInterface) => state.modalHandler
    );

    const activeFontFamily = useUpdateStore(
        (state: updateStoreInterface) => state.activeFontFamily
    );

    useEffect(() => {
        document.querySelector(
            "body"
        )!.style.fontFamily = `var(${declareActiveFontFamily(
            activeFontFamily
        )})`;
    }, [activeFontFamily]);

    return (
        <>
            {isModalOpen ? (
                <ModalDisplay />
            ) : (
                <>
                    <div className="first-part">
                        <Image src={pomodoro} alt="pomodoro logo" />
                        <ButtonContainer />
                    </div>
                    <div className="second-part">
                        <TimerDisplay />
                        <button onClick={() => modalHandler()}>
                            <SettingsIcon />
                        </button>
                        {/* start pause restart Settings Time (minutes) pomodoro short break
                long break Font Color Apply */}
                    </div>
                </>
            )}
        </>
    );
}
