import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className=' w-full h-28 px-8 bg-slate-100 flex items-center justify-between'>
        <Link to='/'><img className='w-28 h-30' src='https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000'/></Link>
        <div className='flex gap-8'>
            <Link to='/'>Home</Link>
             <Link to='/contact'>Contact Us</Link>
            <Link to='/about'>About us</Link>
            <Link to='/cart'><div className='flex gap-3 items-center cursor-pointer'><FaCartShopping />  Cart:-{cartItems.length}</div></Link>
        </div>
      </div>
    </>
  )
}

export default Header