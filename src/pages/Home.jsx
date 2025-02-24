import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import DB from '../db/db.json';

function Home() {
  const [word, setWord] = useState({});

  function wordHandler() {
    const randomIndex = Math.floor(Math.random() * DB.words.length);
    setWord(DB.words[randomIndex]);
  }
  useEffect(()=> {
    wordHandler()
  },[])
  
  
  return (
    <>
        <h1 className='mb-2 text-4xl font-bold text-violet-400'>Welcome to Hangman Game</h1>
        <div className='flex flex-col gap-3 text-center w-full justify-center items-center' >
          <h3 className='text-2xl text-yellow-500 font-medium'>Select player mode type</h3>
          <Link className="" to="/play" state={{wordSelected: word.wordValue, hint: word.wordHint}}>
            <Button styleType='secondary' text='Single Player'/>
          </Link>
          
          <Link className="" to="/start">
            <Button styleType='primary' text='Multi Player'/>
          </Link>
          
        </div>
        
    </>
  )
}

export default Home;