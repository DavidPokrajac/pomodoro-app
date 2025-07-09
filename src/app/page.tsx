import Image from "next/image";
import pomodoro from "../../public/assets/logo.svg";
import settingsIcon from "../../public/assets/icon-settings.svg";
import ButtonContainer from "./components/ButtonContainer";
import TimerDisplay from "./components/TimerDisplay";
import ModalDisplay from "./components/ModalDisplay";

export default function Page() {
    return (
        <>
            <div className="first-part">
                <Image src={pomodoro} alt="pomodoro logo" />
                <ButtonContainer />
            </div>
            <div className="second-part">
                <TimerDisplay />
                <Image src={settingsIcon} alt="click to modify" />
                start pause restart Settings Time (minutes) pomodoro short break
                long break Font Color Apply
            </div>
            <ModalDisplay />
        </>
    );
}
