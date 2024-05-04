import React from 'react'
import { img_url, img_url2 } from '../../utils/Constants';
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addCart } from '../../utils/cartSlice';

function Menu({data}) {
    const{card}=data;
    const{info}=card;
    const dispatch = useDispatch();
    const handleAddButton = (data)=>{
        dispatch(addCart(data));
    }
  return (
    <div className='p-3 w-[600px] h-[175px] shadow-md rounded-lg flex items-center justify-between'>
        <div className='flex flex-col gap-4'>
            <h1>{info.name}</h1>
            <p>₹{(info.price === NaN ?(info.variantsV2.pricingModels[1].price):(info.price))/100}</p>
        </div>
        <div className='flex flex-col gap-1'>
            <img src={img_url2+info.imageId} className='w-[120px] h-[120px] rounded-xl'/>
            <button onClick={()=>handleAddButton(data)} className='flex items-center bg-zinc-200 p-1.5 rounded-lg justify-center'>Add <IoIosAdd /></button>
        </div>
    </div>
  )
}

export default Menu