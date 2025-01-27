import React from 'react'

function CalBtn({
    text,
    className,
    btnClick,
}) {
  return (
    <>
      <button onClick={() => btnClick(text)} className={`w-[60px] h-[60px] cursor-pointer mb-[6px] rounded-full text-3xl text-white ${className}`}>{text}</button>
    </>
  )
}

export default CalBtn