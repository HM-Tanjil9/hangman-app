import React from 'react';
import { getMaskedCharacters } from './MaskingUtility';

function MaskingText({ text, guessedLetters }) {
    const maskedCharecter = getMaskedCharacters(text, guessedLetters);    
    return (
        <>
            {                   
                maskedCharecter.map((letter, index) => {
                    return (
                        <span key={index} className='text-4xl text-gray-800 tracking-widest mx-1'>
                            {letter}
                        </span>
                    )                    
                })
            }
        </>
    )
}

export default MaskingText;