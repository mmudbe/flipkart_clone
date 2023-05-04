import React from 'react'

export default function EmptyCart() {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
   
  return (
    <div className=' h-[65vh] w-[80%] bg-white my-20 mx-36  '>
      <div className='pt-16 text-center '>
        <img src={imgurl} className='w-[15%]  inline' alt='img'/>
        <p>Your cart is empty</p>
        <p>add items now</p>
      </div>
     
    </div>
  )
}
