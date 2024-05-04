import React from 'react'
import { img_url2 } from '../../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../utils/cartSlice';

const Items = ({data,index}) => {
  const cartItems = useSelector((action)=>action.cart.items);
  const dispatch = useDispatch();
  const{card}=data;
  const{info}=card;
  const{id}=info;
  const handleRemove = (index)=>{
     dispatch(removeItem(index))
  }
    return (
    <>
     <div className='p-3 w-[600px] h-[175px] shadow-md rounded-lg'>
      {/* <h1 className='text-center'>Cart</h1> */}
      <div className='flex item-center justify-between gap-4'>
        <div>
         <h1>{info.name}</h1>
         <p>₹ {info.price/100}</p>
        </div>
            <div className='flex flex-col items-center gap-2'>
              <img className='w-[120px] h-[120px] rounded-xl' src={img_url2+info.imageId}/>
              <button onClick={()=>handleRemove(index)}  className='bg-zinc-200 p-1 rounded-lg'>Remove</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Items