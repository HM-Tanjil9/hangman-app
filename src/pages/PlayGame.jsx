import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Button/Button";
import Hangman from "../components/Hangman/Hangman";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import MaskingText from "../components/MaskingText/MaskingText";
import { getMaskedCharacters } from "../components/MaskingText/MaskingUtility";

function PlayGame() {
    const {state} = useLocation();
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    function handleLetterClick(letter) {
        if(!state.wordSelected.toUpperCase().includes(letter)) {            
            setStep(step + 1);
        }  
        setGuessedLetters([...guessedLetters, letter])
    }
    let guessed = getMaskedCharacters(state.wordSelected, guessedLetters).join('');
    let original = state.wordSelected.toUpperCase();    
    if(step >= 8 ) {
        return(
            <>  
                <h1 className="text-4xl font-bold ">Game Over </h1>
                <h1 className="text-2xl text-red-500">Sorry you loose the game</h1>
                <Link className="text-blue-500 underline" to="/start">Play again.</Link>
            </>
        )
    } else if(original === guessed) {
        return(
            <>
                <h1>
                    <div>
                        <div className="my-6">
                            <h1 className='text-4xl text-green-500 font-black'>Congratulation you won</h1>
                            <p className="text-xl">Thank You 🐸</p>
                        </div>
                        <div className="flex flex-col">
                            <Link className="text-blue-500 underline" to="/start">Play again</Link>
                            <Link className="text-blue-500 underline" to="/">
                                <Button styleType='secondary' text='Home'/>
                            </Link>
                        </div>
                    </div>
                </h1>
            </>
        )
    } else return(
        <>
            <h1 className="text-5xl text-orange-400 font-semibold mb-2">Guess the word</h1>
            <p className="text-xl">Hint : ({state.hint})</p>
            <div  className="my-6">
                <MaskingText text={state.wordSelected} guessedLetters={guessedLetters}/>
            </div>
            <div className="flex flex-col justify-center items-center m-4">
                <div className="lg:w-8/12 md:h-10/12 w-full">
                    <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
                </div>
                <Hangman className="lg:w-8/12 md:h-10/12 w-full" step={step}/>
            </div>
            <Link className="text-blue-500 underline" to="/start">Restart</Link>
        </>
    )
}

export default PlayGame;