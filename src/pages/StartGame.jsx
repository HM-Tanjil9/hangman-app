import React from 'react'
import TextInputFormContainer from '../components/TextInputForm/TextInputFormContainer'

function StartGame() {
  return (
    <>
        <h1 className='mb-2 text-4xl font-bold text-amber-400 text-center'>Start the game</h1>
        <TextInputFormContainer/>
    </>
  )
}

export default StartGame