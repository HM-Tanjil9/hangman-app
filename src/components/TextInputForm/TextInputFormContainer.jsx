import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInputForm from './TextInputForm';

function TextInputFormContainer() {
    let navigate = useNavigate();
    const [inputTyped, setInputTyped] = useState("password");
    const [value, setValue] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Thank you for submit.", value);
        if(value) {
            navigate('/play');
        }
        
    }
    function handleTextInputChange(event) {
        console.log('input change');
        
        console.log(event.target.value);
        setValue(event.target.value);
        
    }
    function isShowPasswordHandler() {
        console.log('show/hide clicked');
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
            isShowPasswordHandler={isShowPasswordHandler}
            inputTyped={inputTyped}
        />
    )
}

export default TextInputFormContainer