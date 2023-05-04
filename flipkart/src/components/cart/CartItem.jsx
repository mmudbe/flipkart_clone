import React from 'react'
import { addEllipsis } from '../../utils/common-utils'
import ButtonGroup from './ButtonGroup'
import { removeFromCart } from '../../redux/actions/cartActions'
import {useDispatch} from "react-redux";

export default function CartItem({item}) {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
      dispatch(removeFromCart(id) );
  }
  return (
    <div className='border-t-[1px] border-[#f0f0f0] border-solid flex bg-white'>
   <div className='m-5'>
    <img src={item.url} alt='product-img' className='h-[110px] '/> 
    <ButtonGroup />
   </div>
   <div className='m-5'>
        <p>{addEllipsis(item.title.longTitle) }</p>
       
          <p className='inline text-[#878787] text-sm mt-2'>Seller:OmniTechRetail
          <img src={fassured} alt='f-assured logo' className='w-14 inline ml-3 '/>
        
          </p>
          <p className='my-5'>         
      <span className="font-semibold text-lg">₹{item.price.cost}</span>
      <span className="text-[#878787] ml-2" ><strike>₹{item.price.mrp}</strike></span>
      <span className="text-[#388e3c] ml-2">{item.price.discount}</span>
          </p>
         <button onClick={()=>removeItemFromCart(item.id)} className='mt-5 text-base hover:text-blue-600 font-semibold'>REMOVE</button>
   </div>
    </div>

  )
}
