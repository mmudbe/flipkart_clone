import React from 'react'
import ActionItem from './ActionItem'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function ProductDeail({product}) {

  const date = new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    <div>
         <div className="flex   bg-white max-lg:flex-wrap ">
                <div className=" pl-12">
                    <ActionItem product={product} />
                </div>
                <div className="mt-10 pr-12 pl-12 pb-7 w-[70%] max-lg:w-[100%]">
                    <p>{product.title.longTitle}</p>
                    <p className="text-[#878787] text-sm mt-1 ">
                    5 ratings & 9 reviews
                        <img className="w-20 ml-5 inline" src= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' />
                    
                    </p>
                    <div>
                   
                    
      <span className="text-xl">₹{product.price.cost}</span>
      <span className="text-[#878787] ml-2" ><strike>₹{product.price.mrp}</strike></span>
      <span className="text-[#388e3c] ml-2">{product.price.discount}</span>
                    </div>
                    <div>
                    <p className='mt-1 text-[18px]'>Available offers</p>
                        <p className='mt-1 text-xs'><LocalOfferIcon className='text-[#00cc00]  '/>10% off on ICICI Bank Credit Cards, up to ₹1,250, on orders of ₹5,000 and aboveT&C</p>
                        <p className='mt-1 text-xs'><LocalOfferIcon className='text-[#00cc00] '/> 5% Cashback on Flipkart Axis Bank CardT&C</p>
                        <p className='mt-1 text-xs'><LocalOfferIcon className='text-[#00cc00] '/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</p>
                        <p className='mt-1 text-xs'><LocalOfferIcon className='text-[#00cc00] '/>Buy this product & Get upto ₹500 off on Furniture</p>
                    </div>
                    <table className='table-auto'>
                <tbody>
                  <tr className='font-[14px] align-baseline'>
                    <td className=' text-[#878787] font-[14px] mt-2'>Delivery</td>
                    <td className=' pl-8 font-semibold'>Delivery by {date.toDateString()} | ₹40  </td>
                  </tr>
                  <tr>
                    <td className=' text-[#878787]'>Warrenty</td>
                    <td className=' pl-8 font-semibold'>No Warrenty </td>
                  </tr>
                  <tr>
                    <td className=' text-[#878787]'>seller</td>
                    <td className=' pl-8 font-semibold'>
                    <span>supercomNET</span>
                    <p>GST invoice available</p>
                    <p>view more sellers starting from ₹{product.price.cost}</p>
                     </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className=' '>
                      <img  src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50" className='w-[300px]' />
                    </td>
                  </tr>
                  <tr >
                    <td className=' text-[#878787]'>product</td>
                    <td className=' pl-8 font-semibold '>{product.description} </td>
                  </tr>
                </tbody>
               </table>
                </div>
               </div>
              
    </div>
  )
}
