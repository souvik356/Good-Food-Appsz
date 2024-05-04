import React from 'react'
import { img_url } from '../../utils/Constants'
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function Card({data}) {
    const{info} = data;
    const{cloudinaryImageId,name,avgRating,costForTwo,cuisines,locality} = info;
  return (
    <div  className='mb-6 p-1.5 w-72 h-78 bg-zinc-100 rounded-lg hover:scale-105 transform transition-transform hover:border-black hover:border-solid'>
      <img src={img_url+cloudinaryImageId} className='w-72 h-56 rounded-lg'/>
      <h2>{name}</h2>
      <div className='flex items-center gap-3 mt-2'>
         <div className='flex items-center gap-2'><FaStar />{avgRating}</div><GoDotFill />
         {costForTwo}
      </div>
      <p className='mt-2 overflow-hidden font-bold mb-2'>{cuisines.join(',')}</p>
      <h2>{locality}</h2>
    </div>
  )
}

export default Card