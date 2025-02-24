import React from 'react';
const ALPHABET = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]

function LetterButtons({ text, guessedLetters, onLetterClick}) {
    const orginalLetters = new Set(text?.toUpperCase().split(''));
    const guessedLetterSet = new Set(guessedLetters);
    const buttonStyle = function(letter) {
        if(guessedLetterSet.has(letter)) {
            return `${orginalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`
        } else {
            return 'bg-blue-500'
        }
    }
    function handleLetterClick(event) {
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter);
    } 
    const buttons = ALPHABET.map(letter => {
        return(
            <button 
                key={`button-${letter}`}
                value={letter}
                onClick={handleLetterClick} 
                disabled={guessedLetterSet.has(letter)}
                className={`w-12 h-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        )
    });
    return (
        <>
            {buttons}
        </>
    )
}

export default LetterButtons;