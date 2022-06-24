import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill, BsFillBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils'


const Success = () => {
   const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

   useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0)
      runFireworks();
   }, []);

  return (
    <div className='success-wrapper'>
      <div className="success">
         <p className="icon">
            <BsFillBagCheckFill />
         </p>
         <h2>Thank you for your order!</h2>
         <p className="email-msg">Check your email for your receipt.</p>
         <p className="description">
             
            <a href="mailto:thomas.aurelius.widmer@gmail.com">
            If you have any questions, please email: <span className='underline'>thomas.aurelius.widmer@gmail.com</span>
            </a>
         </p>
         <Link href='/'>
            <button type='button' className='btn'>Continue Shopping</button>
         </Link>
      </div>

    </div>
  )
}

export default Success