import React from 'react';
import { getMaskedCharacters } from './MaskingUtility';

function MaskingText({ text, guessedLetters }) {
    const maskedCharecter = getMaskedCharacters(text, guessedLetters)
    return (
        <>
            {console.log()}
            {                
                maskedCharecter.map((letter, index) => {
                    return (
                        <span key={index} className='mx-1'>
                            {letter}
                        </span>
                    )                    
                })
            }
        </>
    )
}

export default MaskingText;