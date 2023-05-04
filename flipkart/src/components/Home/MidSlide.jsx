import { Box, styled } from "@mui/material";
import Slide from "./Slide";


const Component = styled(Box)`
display:flex;
`
const  LeftComponetnt = styled(Box)(({theme})=>({
  width:'83%',
  [theme.breakpoints.down('md')]:{
    width:'100%'
  }
}))



const RightComponent = styled(Box)(({theme}) => ({

width:'17%',
padding:5,
marginTop:10,
background:'#fff',
textAlign:'center',
marginLeft:15,
[theme.breakpoints.down('md')]:{
  display:'none'
}

}));

const MidSlide = ({products , title , timer}) => {
 return(
      <Component>
        <LeftComponetnt>
          <Slide products={products} title={title} timer={timer} />
        </LeftComponetnt>
        <RightComponent>
           <img src='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70' alt='ad' style={{width:217}} />
        </RightComponent>
      </Component>
 );    
}

export default MidSlide;