// fragment dont create extra node
// faster than html tag
// we can even use empty brackets 
// import { Fragment } from "react";
// 
import { Box , styled } from "@mui/material";
// components 
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

// when we reload our website we want to call redux api for that we use react lifecycle methods. 
// in react lifecycle method there is a function called component-deadmon .
// component-dedmon calls when our component renders,when our component insert in componentDOM .
// but we are using function components , we don't use react lifecycle methods ,we use react hook useEffect use as component-dedmon , component-didupdate , component-willamount made by using 3 lifecycle hooks of react. 
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector} from 'react-redux';
const Component = styled(Box)`
padding: 10px;
background-color:#f2f2f2;
`

const Home = () => {
    // useSelector is use to take datafrom redux (extension ) database or store , getProducts is not function here. 
    // getProducts is from store where all values are store.
        //  const {products} = getProducts.products; using destructuring method.
const {products} = useSelector(state => state.getProducts);
console.log(products);
// useEffect takes two arguments first is callback function , secon is when we want to call it,
// we want to call it component did-mount  pass enpty array , for component did-update pass values
const dispatch = useDispatch(); 
    useEffect(()=> {
        // we need to use dispatch because we cannot call it as a normal function otherwise it will pass as undefined.
     dispatch(getProducts());
    },[dispatch])

    return (
    //    <Fragment>
    <>
        <NavBar />
        <Component>
          <Banner />
          <MidSlide  products={products} title='deal of the day' timer={true}/>
          <MidSection />
          <Slide  products={products} title='Top Deals on Fashion' timer={false}/>
          <Slide  products={products} title='fashion best selling' timer={false}/>
          <Slide  products={products} title='best selling products' timer={false}/>
          <Slide  products={products} titlle="customer's choice" timer={false}/>
          <Slide  products={products} title="product's of the year" timer={false}/>
          <Slide  products={products} title="Top Deals on Brand" timer={false}/>

          </Component>
    </>
        
    //    </Fragment>
   
     
    )
}

export  default Home;