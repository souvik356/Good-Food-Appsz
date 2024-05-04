import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Menu from './Menu';
import CartItems from './Items';
import Items from './Items';
import Modal from './Modal';

const Cart = () => {
  const[buy,setBuy] = useState(false);
  console.log(buy);
    const cartItems = useSelector((store)=>store.cart.items);
    //console.log(cartItems);
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.card.info.price, 0);
  };
  const handleHide = ()=>{
    setBuy(false);
  }
    return (
        
        <>
          <h1 className='mt-4 mb-4 text-2xl font-bold text-center'>Cart</h1>

        <div className='w-full h-screen flex justify-center gap-50'>
          <div>
          {
            cartItems.map((elem,index)=>{
                return(
                    <Items data={elem} index={index}/>
                )
            })
          }
          </div>
          <div className='mt-4 text-xl font-semibold text-center bg-orange-200 p-4 w-[330px] h-[200px] rounded-lg'>
            <div className='mb-4'>
            {cartItems.length===0 &&'Add Foods in your Stomach😋'}
            </div>
            <div className='flex flex-col gap-2 items-center'>
            Total Price: ₹ {calculateTotalPrice() / 100}
                <button onClick={()=>{
                  setBuy(!buy);
                }} className='p-2 rounded-lg bg-zinc-200 mt-6'>Proceed to buy</button>
            </div>
            </div>
        </div>
        {
          buy ? (<Modal data={handleHide}/>):null
        }
        </>
    );
};

export default Cart;
