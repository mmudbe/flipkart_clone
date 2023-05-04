import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions"; 
import ActionItem from "./ActionItem";
import ProductDeail from "./ProductDeail";


const DetailView = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    const {loading , product} = useSelector(state => state.getProductDetails);
     
    useEffect(() => {
        if(product && id !== product.id)
        dispatch(getProductDetails(id))
    },[dispatch,id,product , loading])

    return(
       <div className="bg-gray-400">
       {/* if loading is true then only display data */}
        {
            
             product && Object.keys(product).length &&
             <ProductDeail product={product} />

        }
       </div>
    )

}

export default DetailView;