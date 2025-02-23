import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function TextInputForm({handleFormSubmit, handleTextInputChange, isShowPasswordHandler, inputTyped, handleHintInputChange}) {

    return (
        <form onSubmit={handleFormSubmit} className=' gap-2 w-full flex justify-center items-center flex-col'>
            <div className="flex flex-col text-center lg:w-4/12 md:w-8/12 sm:w-full" >
                <div className='relative'>
                    <TextInput type={inputTyped} className="" label="Enter a word or phrase" placeholder="Type here ..." onChangeHandler={handleTextInputChange}/>
                    <button
                        type='button'
                        className='text-gray-400 text-xl absolute cursor-pointer bottom-3 right-3' 
                        onClick={isShowPasswordHandler}
                >
                        {(inputTyped==='password') ? <FaEye/> : <FaEyeSlash/>}
                    </button>    
                </div>
                            
                <TextInput label="Wan't give a hint" placeholder='Type your hint here' onChangeHandler={handleHintInputChange}/>
            </div>

            <Button styleType='primary' type='submit' text='Submit'/>
        </form>
    )
}

export default TextInputForm