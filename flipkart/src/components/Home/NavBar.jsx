
// import { Box } from "@mui/material";
// import { navData } from "../../constants/data";

import { Typography, Box, styled } from '@mui/material'; 

import { navData } from '../../constants/data';

const Component = styled(Box)(({theme}) => ({

display:'flex',
margin:'55px 130px 0px 130px',
justifyContent:'space-between' ,
// overflow:'overlay',
overflow:'hidden',
background:'#fff',
[theme.breakpoints.down('lg')]:{
    margin:0
}
}))

const Container = styled(Box)`
padding : 12px 8px;
text-align:center;
`
// typography makes margin and padding 0.
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;

`
const NavBar = () => {
    return (
        <>
       <div className='bg-white'>
    <Component>  
   {
                navData.map(temp =>(
                    <Container key={temp.id}>
                    
                        <img src={temp.url} style={{width:64}} />
                        <Text >{temp.text}</Text>
                    </Container>
                ))
            }
           
    </Component>
    </div>
    </>
    );
}

export default NavBar;