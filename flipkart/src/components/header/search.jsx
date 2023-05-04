import { InputBase , styled , Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search' ;
import { useState  , useEffect} from "react";


// const SearchContainer = styled(Box)`
// background: #fff;
// width: 38%;
// border-radius:2px;
// margin-left:10px;
// display:flex;
// `
// const InputSearchBase = styled(InputBase)`
// width:100%;
// padding-left:10%;
// font-size : unset ;
// `
// const SearchIconWrapper = styled(Box)`
// color:blue ;
// padding: 5px ;
// `
import {useSelector , useDispatch} from 'react-redux' ;
import {getProducts} from '../../redux/actions/productActions';
import { Link } from "react-router-dom";

const Search = ()=>{
    const dispatch = useDispatch();
useEffect(()=>{
dispatch(getProducts());
}, [dispatch])
    const[text,setText] = useState("");
    const {products} =useSelector(state => state.getProducts);
   
    const getText =(newtext) => {
    setText(newtext);
    console.log(newtext);
    }
    return(
       <div className="bg-white w-[38%] rounded-sm ml-2 flex " >
        <input onChange={(e)=>{getText(e.target.value)}} className=" w-[100%] pl-[10%] text-black " type="text "  placeholder="search for products, brands and more" value={text}/>
        <div className="text-[blue] p-1" >
            <SearchIcon />
        </div>
        {
            
            text && 
            <div className="absolute bg-white text-black mt-9 w-[36%] ">
                {
                    
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <Link to={`/product/${product.id}`} 
                    onClick={() => setText("")}>
                    <li className="pt-1" >
                        {product.title.longTitle}
                    </li>
                    </Link>
                    ) )
                }
            </div>
        }
       </div>
    )
}
export default Search;