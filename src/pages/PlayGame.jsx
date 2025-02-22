import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hangman from "../components/Hangman/Hangman";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import MaskingText from "../components/MaskingText/MaskingText";

function PlayGame() {
    const {state} = useLocation();
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    function handleLetterClick(letter) {
        if(state.wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            setStep(step + 1);
        }  
        setGuessedLetters([...guessedLetters, letter])
    }
    return(
        <>
            <h1 className="text-4xl font-bold mb-2">Play games, {state.wordSelected}</h1>
            <MaskingText text={state.wordSelected} guessedLetters={guessedLetters}/>
            <div>
                <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
                <Hangman step={step}/>
            </div>
            <Link className="text-blue-500 underline" to="/start">Start game page</Link>
        </>
    )
}

export default PlayGame;