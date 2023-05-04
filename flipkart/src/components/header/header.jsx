

// import { AppBar , Toolbar, Box ,Typography,styled} from '@mui/material';

import Search from './search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

// const StyledHeader = styled(AppBar)`
// background: #2874fe;
// height: 55px;
// `
// const Component = styled(Link)`
// margin-left: 12% ;
// line-height:0 ;
// text-decoration:none;
// color:inherit;
// `

// const SubHeading = styled(Typography)`
// font-size: 10px;
// font-style: italic;
// `
// const PlusImage = styled('img')({
// width: 10,
// height:10,
// marginLeft:4
// })

// const CustomButtonWrapper =styled(Box)`
// margin: 0 5% 0 auto ;
// `

// import { useState } from 'react';
import Sidenav from './Sidenav';
const Header = () => {
    
const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

// const [open , setOpen] = useState(false); 
// const handleOpen = () => {
// setOpen(true);
// }

// const handleClose = () => {
// setOpen(false);
// }
return (
    <div className='  bg-[#2874fe] h-14 flex items-center  text-white' >
 {/* <Toolbar style={{minHeight : 55}}> */}
 <div >
 {/* <MenuIcon className=' pl-2 xl:!hidden cursor-pointer '/> */}
 </div>
 {/* <div className={`${open ? "absolute left-0 top-0 z-[1035] h-full w-60   bg-white" : "hidden"} `} > */}
 
 <Sidenav />
  {/* <Sidenav open={open} onClose={handleClose}/>
  </div> */}

  <Link className='ml-[12%] text-inherit' to='/'>
   <img src={logoURL} alt="logo" style={{width: 75}}/>
   <div className='flex items-center'>
   <p className='text-[10px] '>Explore&nbsp;
    <span className='text-[#ffe500]' >Plus</span>
    </p>
    <img className='w-[10px] h-[10px] ml-1' src={subURL} alt="subLOGO" />
   </div>
  </Link>
  <Search />
  <div className='mr-[5%] ml-auto max-xl:hidden'>
    <CustomButtons />
  </div>
{/* // </Toolbar> */}
    </div>
       
   
);
 


}
export default Header;