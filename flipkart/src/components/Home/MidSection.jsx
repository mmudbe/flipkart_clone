import { Box, Grid, styled } from "@mui/material";
import { imageURL } from "../../constants/data";


const Component = styled(Grid)`
display:flex;
margin-top:10px;
justify-content:space-between;


`

const Image = styled('img')(({ theme }) => ({
    width:'100%',
    marginTop:10,
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]: {
       objectFit:'cover',
       height:120
    }
}))

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

 return(
    <Component lg={12} sm={12} md={12} xs={12} container>
     {
        imageURL.map(image => (
            <Grid item lg={4} md={4} sm={12} xs={12}  >
            <img src={image} style={{width:'100%'  }}  alt='banner' />
            </Grid>
        ))
     }
     <Image src={url} alt='covid-banner' />
    </Component>
 );
}

export default MidSection;