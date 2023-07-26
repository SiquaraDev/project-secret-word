import "./EndScreen.css";

const EndScreen = ({ retry, score }) => {
    return (
        <div className="EndScreen">
            <h1>End game!</h1>
            <h2>
                Total points: <span>{score}</span>
            </h2>
            <button onClick={retry}>Restart</button>
        </div>
    );
};

export default EndScreen;
