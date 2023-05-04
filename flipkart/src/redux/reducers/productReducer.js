import * as actionType from '../constants/productConstant';

//  in reducer there are two default arguments  state and action. state is our current state or value. action is updated value.
// after dispatching value comes in action.

// we have given empty array to products so that our ui will ot get break;
export const getProductReducer = (state={products: []}, action) =>{
    // to differentiate we use switch
    // full object comes in action , we will differntiate by using type.
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            // i want to return value which comes from payload 
         return {products:action.payload};

        case actionType.GET_PRODUCTS_FAIL:
        return {error: action.payload};
        default:
            return state;
            
    } 
}

export const getProductDetailsReducer = (state ={product:{}} , action) => {
    switch (action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return { loading:true};

        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading:false , product:action.payload};

        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return {loading:false , error:action.payload};

        case actionType.GET_PRODUCT_DETAILS_RESET:
            return {product:{}};
        
        default:
            return state;
    }
}




