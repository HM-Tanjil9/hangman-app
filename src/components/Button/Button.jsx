import React from 'react';

function Button({text, styleType, type='button', onClickHandler}) {
  return (
    <button
        type={type}
        className={`px-4 py-2 ${getButtonStyling(styleType)} text-white rounded-md cursor-pointer`}
        onClick={onClickHandler}
    >
        {text}
    </button>
  )
}

function getButtonStyling(styleType) {
    if(styleType === 'primary') {
        return "bg-blue-500";
    } else if(styleType === 'secondary') {
        return "bg-gray-500";
    } else if(styleType === 'error') {
        return "bg-red-500";
    } else if(styleType === 'success') {
        return "bg-green-500";
    } else if(styleType === 'warning') {
        return "bg-yellow-500";
    } else if(styleType === '') {
        return "";
    }
}


export default Button