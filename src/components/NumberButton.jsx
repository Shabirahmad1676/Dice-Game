import React from 'react'

const NumberButton = ({selectedNumber,setSelectedNumber}) => {
  const MyArr = [1, 2, 3, 4, 5, 6]

  return (
  <div className='flex flex-col'>
    <div className='flex gap-2'>
    {MyArr.map((val, idx) => (
      <button
        key={idx}
        onClick={() => setSelectedNumber(val)}
        className={`border-[1px] border-blue-950 p-6 rounded-lg 
          ${selectedNumber === val ? 'bg-emerald-500 text-white font-semibold' : 'hover:bg-pink-400 hover:text-white hover:font-semibold'}`}
      >
          {val}
      </button>
    ))}
    </div>
    <p className={`${!selectedNumber ? 'text-right text-red-700 font-bold ': 'opacity-0'}`}>Select Number</p>
  </div>
  )
}

export default NumberButton