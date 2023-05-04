import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions/cartActions';
import { useState } from 'react';
import { payWithPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const ActionItem = ({product}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity , setQuantity] =useState(1);
    const {id} = product;

    const AddItemToCart = ()=>{
        dispatch(addToCart(id ,quantity ));
          navigate('/cart');
    }

    const buyNow =async () => {
        let response =  await payWithPaytm({amount:500 , email:'mudbemahadev0@gmail.com'});
        let information = {
            action:`https://securegw-stage.paytm.in/order/process` ,
            params:response
        }
        post(information);
    }
    return (
        <div className="pt-10 pr-20 min-w-40%">
        <div className='p-5'>
            <img className="p-5 border border-[#f0f0f0] w-11/12" src={product.detailUrl} />
            </div>
            <button onClick={() => AddItemToCart()} className=" mr-2 rounded-sm text-white bg-[#ff9f00] w-[48%] h-12"><ShoppingCartIcon /> Add to Cart</button>
            <button onClick={() => buyNow()} className=" rounded-sm text-white bg-[#fb541b] w-[48%] h-12"><FlashOnIcon /> buy now</button>
        </div>
    )
}

export default ActionItem;