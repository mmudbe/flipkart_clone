import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';


export default function Cart() {
  const {cartItems} = useSelector(state => state.cart);
  return (
    <>
      {
        cartItems.length ?
        <div className='grid grid-cols-2 max-md:grid-cols-1 px-32 py-7 max-sm:px-1 max-sm:py-4'>
            <div className='pr-5 max-md:mb-4'>
               <div className='py-4 px-5 bg-white'>
                <p>My Cart ({cartItems.length})</p>
               </div>
               {
                cartItems.map(item => (
                    <CartItem item={item}/>
                ))
               }
               <div className='px-4 py-6 bg-white drop-shadow-2xl border-t-2 border-solid border-white'>
                <button className='flex ml-auto bg-[#fb641b] text-white h-12 w-[250px] justify-center  items-center rounded-sm'>Place Order</button>
               </div>
            </div>
            <div className=''>
              <TotalView cartItems={cartItems} />
            </div>
        </div>
        : <EmptyCart/>
      }
    </>
  )
}
