import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { styled } from "@mui/material";

import { bannerData } from "../../constants/data";

const Image = styled('img')(({theme}) => ({
    width:'100%',
    height: 280,
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:180
    }
}));

const responsive = {
 
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = ()=> {
    return(
<Carousel 
responsive={responsive}
swipeable={false}
  draggable={false}
//   infinite starts again after ending last element
  infinite={true}
//   autoplay swipes automatically with autoplay speed 1000 means 1s . 
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
//   in 1 time how many slides we want to slide
  slidesToSlide={1}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  containerClass="carousel-container">
{
    bannerData.map(data =>(
        <Image key={data.id} src={data.url} alt="banner" />
    ))
}
    
</Carousel>
    );

}

export default Banner ; 