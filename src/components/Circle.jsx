import React from 'react'
import { img_url2 } from '../../utils/Constants';

function Circle({data}) {
    const{imageId}=data;
  return (
        <img className='w-[200px] h-[200px]' src={img_url2+imageId}/>
  )
}

export default Circle