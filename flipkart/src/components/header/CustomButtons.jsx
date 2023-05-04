// usestate is react hook where we can store the values
import React ,  { useContext, useState } from "react";

// import { Box  , Button, Typography, styled} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { DataContext } from "../../context/dataProvider";

// components
import LoginDialog from "../login/LoginDialog";
import Profile from "./profile";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

import { useSelector } from "react-redux";

// const Wrapper = styled(Box)`
// display : flex ;
// margin : 0 3% 0 auto ;
// & > button , &>p , &>div{
//     margin-right:40px;
// }
// `
// const Container = styled(Box)`
// display: flex;
// margin-top:3px;
// `
// const LoginButton = styled(Button)`
// color: #2874fe;
// background-color:#fff;
// text-transform:none;
// padding: 5px 40px;
// border-radius:2px;
// box-shadow: none ;
// font-weight: 600;
// height:32px;
// `

const CustomButtons = () => {

const [open , setOpen] = useState(false);

const {account , setAccount } = useContext(DataContext);

const {cartItems} = useSelector(state => state.cart);

const openDialog = ()=> {
  setOpen(true);
}

    return (
      <div className="flex ml-[3%] mr-auto max-xl:block max-xl:text-black ">
      {
        account ? <Profile account={account} setAccount={setAccount}/> :
          <button  onClick={openDialog} className="text-blue-500 bg-white uppercase px-10 py-2 rounded-md font-semibold h-10 mr-10 max-xl:mt-4">
    Login
  </button>
      }
       

        <p className="mt-1 w-[135px] mr-10 max-xl:pt-4" style={{marginTop:3 , width: 135}}>Become a seller</p>
        <p className="mt-1 mr-10 max-xl:pt-4" style={{marginTop:3}}>More</p>
        <Link to="/cart" className="flex mt-1 mr-10 max-xl:pt-4">
        <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon />
            </Badge>
            <p className="ml-2">Cart</p>
        </Link>
        <LoginDialog open={open} setOpen={setOpen}/>
      </div>

    );
}
 export default CustomButtons;