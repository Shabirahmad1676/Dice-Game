import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div className='max-w-[220px]  text-center'>
      <h1 className='text-[100px] font-semibold'>{score}</h1>
      <p className='text-[24px] font-semibold'>Total Score:{score} </p>
    </div>
  )
}

export default TotalScore