export default function ButtonContainer() {
    return (
        <div className="button-container">
            <button className="button-container__button button-container__button--active">
                pomodoro
            </button>
            <button className="button-container__button">short break</button>
            <button className="button-container__button">long break</button>
        </div>
    );
}
