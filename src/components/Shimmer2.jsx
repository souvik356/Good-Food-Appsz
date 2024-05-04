import React from 'react'

const Shimmer2 = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='w-[500px] h-[300px] bg-zinc-300 rounded-lg'></div>
        <div className='flex flex-wrap gap-3 p-3'>
            <h1 className='text-center text-xl font-bold'>Your Food is here....😋🤭</h1>
            <div className='w[700px] h-[300px] bg-zinc-800'></div>
            <div className='w[700px] h-[300px] bg-zinc-800'></div>
            <div className='w[700px] h-[300px] bg-zinc-800'></div>
            <div className='w[700px] h-[300px] bg-zinc-800'></div>
        </div>
    </div>
  )
}

export default Shimmer2