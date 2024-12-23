import React from 'react'
import '../index.css'

const HomeDicePage = ({toggle}) => {
  return (
   <div className="container flex items-center  justify-center max-w-[1180px] m-auto h-[100vh] gap-12">
   <div>
   <img src="../assets/dices2.jpg" alt="Dices" className='h-80 rounded-lg overflow-hidden' />
   </div>
    <div className='flex flex-col items-end justify-end'>
      <h2 className='font-bold text-[49px] text-nowrap'>Dice Game</h2>
      <button
      onClick={toggle}
      className='bg-black text-white px-4 py-2 min-w-[160px] rounded-lg mt-3 border-none'>Start</button>
    </div>
   </div>
  )
}

export default HomeDicePage