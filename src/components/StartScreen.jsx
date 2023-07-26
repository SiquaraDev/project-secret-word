import "./StartScreen.css";

function StartScreen({ startGame }) {
    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Click to start to play!</p>
            <button onClick={startGame}>Start</button>
        </div>
    );
}

export default StartScreen;
