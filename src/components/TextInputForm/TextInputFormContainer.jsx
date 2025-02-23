import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInputForm from './TextInputForm';

function TextInputFormContainer() {
    let navigate = useNavigate();
    const [inputTyped, setInputTyped] = useState("password");
    const [value, setValue] = useState('');
    const [hint, setHint] = useState('No hint');

    function handleFormSubmit(event) {
        event.preventDefault();
        if(value) {
            navigate(`/play`, {state: {wordSelected: value, hint: hint}});
        }
        
    }
    function handleTextInputChange(event) {
        setValue(event.target.value);
        
    }
    function handleHintInputChange(event) {
        setHint(event.target.value);
        
    }
    function isShowPasswordHandler() {
        if(inputTyped === 'password') {
            setInputTyped('text')
        }else {
            setInputTyped('password')
        }
        
    }
    return (
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleHintInputChange={handleHintInputChange}
            isShowPasswordHandler={isShowPasswordHandler}
            inputTyped={inputTyped}
        />
    )
}

export default TextInputFormContainer