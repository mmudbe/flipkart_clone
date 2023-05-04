import React, { useState ,useEffect } from 'react'

export default function TotalView({cartItems}) {

  const [price , setPrice] = useState(0);
  const [discount , setDiscount] =useState(0);

  useEffect(() => {
    totalAmount();

  },[cartItems]);

  const totalAmount = () => {
    let price = 0 ;
     let discount = 0 ;
     cartItems.map(item => {
      price += item.price.mrp ;
      discount += (item.price.mrp - item.price.cost);
     });
     setPrice(price);
     setDiscount(discount);
  }
  return (
    <div>
      <div className='bg-white py-4 px-6 border-b-2 border-solid border-[#f0f0f0]'>
        <p className='text-[#878787] '>PRICE DETAILS</p>
      </div>
      <div className='py-4 px-6 bg-[#fff] '>
      <div><p className='mb-5 text-sm inline' >price ({cartItems?.length} item)</p>
              {/* alt+ctrl+4 ₹-shortcut */}
              <span className=' float-right'>₹{price}</span></div>
              <div>
              <p className='mb-5 text-sm inline'>discount</p>
              <span className=' float-right'>-₹{discount}</span>
             
              </div>
              <div>
              <p className='mb-5 text-sm inline'>Delivery Charges</p>
              <span  className=' float-right'>₹40</span>
              </div>
              <div>
              <p className='mb-5  inline text-lg'>Total Amount</p>
              <span className=' float-right text-lg'>₹{price-discount+40}</span>
              </div>
              <p className='text-[green]'>you will save ₹{discount-40} on this order</p>
      </div>
    </div>
  )
}
