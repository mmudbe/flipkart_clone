import axios from "axios";

import * as actionTypes from '../constants/productConstant';

const URL = 'http://localhost:8000';

// in redux we have call api we dispatch that values . we will use hook useReducer .dispatch function  internally calls reducer. befor dispatch we will need middleware we will use thunk
// async ()=> is our middleware we have call our api through middleware.middleware gives access of dispatch.
// dispatch function calls internally our reducer. useReducer use in large-scale application.
export const getProducts =() => async (dispatch) => {
    try {
        // we don't need full response we just need data.
       const {data} = await axios.get(`${URL}/products`);
    //    console.log(response);
    //    it will internally call getProductReducer 
    //    dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS ,value:''});
    // i will not take value bacause response from backend come in payload.
       dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS ,payload:data});

    } catch (error) {
        // console.log('error while calling getproducts api',error.message);
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL , payload:error.message})
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});

        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS , payload:data});
    } catch (error) {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL , payload:error.message});
    }
    
}

// object destructuring concept
// this is our data comes we only need data from obj so we will object destructuring concept
// we will destructure object like this 
// {data} = obj ; same as obj.data. 
// let obj = {
//     config:{},
//     data:[],
//     header:[],
//     status:200,
//     message:''
// }