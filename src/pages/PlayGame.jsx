import { Link, useLocation } from "react-router-dom";
import MaskingText from "../components/MaskingText/MaskingText";

function PlayGame() {
    const {state} = useLocation();
    return(
        <>
            <h1 className="text-4xl font-bold mb-2">Play games</h1>
            <MaskingText text={state.wordSelected} guessedLetters={['h','y']}/>
            <Link className="text-blue-500 underline" to="/start">Start game page</Link>
        </>
    )
}

export default PlayGame;