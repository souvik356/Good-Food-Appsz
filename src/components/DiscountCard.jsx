import React from 'react'

function DiscountCard({data}) {
    const {meta} =data;
  return (
    <div className='p-3 rounded-xl cursor-pointer w-[200px] h-[100px] bg-zinc-200'>
        <h2>{meta}</h2>
    </div>
  )
}

export default DiscountCard