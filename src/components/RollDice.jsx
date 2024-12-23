import React, { useState } from 'react'

const RollDice = ({currentDice,handleRollDice}) => {

  return (
    <div onClick={handleRollDice} className='flex items-center justify-center flex-col w-80 m-auto mt-4'>
      <div className=''>
      <img src={`../assets/dice_${currentDice}.png`} className='h-32 overflow-hidden w-full rounded-lg' alt="" />
      </div>
      <h3 className='font-bold mt-4'>Click Dice to Roll</h3>
      <button  className='font-semibold border-[1px] border-zinc-900 py-2 px-4 rounded-md mt-4'>Reset Score</button>
      <button className='font-semibold bg-black text-white border-[1px] border-zinc-900 p-2  rounded-md mt-4'>Show Rule</button>
    </div>
  )
}

export default RollDice



