import React from 'react'
import { useState } from 'react'
import TotalScore from './TotalScore'
import NumberButton from './NumberButton'
import RollDice from './RollDice'

const GameStarted = () => {
  const [currentDice, setCurrentDice] = useState(2)
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [score, setScore] = useState(null)


  const randomDice = (min,max)=>{
    return Math.floor(Math.random() * (max-min) + min)
  }


  const handleRollDice = ()=>{
  if(!selectedNumber) return;

    const randomNumber = randomDice(1,7)
    setCurrentDice(randomNumber)


  if(selectedNumber === randomNumber){
    setScore((prev)=> prev + randomNumber)
  }else{
    setScore((prev)=> prev - 2)
  }
  setSelectedNumber(undefined)

  }
  return (
   <div className='' >
     <div  className='flex items-center justify-between max-w-[1100px] m-auto pt-12'>
      <TotalScore score={score} />
     <NumberButton selectedNumber={selectedNumber}
     setSelectedNumber={setSelectedNumber}
     />
     </div>
     <RollDice currentDice={currentDice}
     handleRollDice={handleRollDice}
     />
   </div>
  )
}

export default GameStarted