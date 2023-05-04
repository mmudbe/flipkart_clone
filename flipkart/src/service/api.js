// try fetch in javascript we are using axios
import axios from 'axios';
const URL = 'https://flipkart-clone-api.vercel.app/';
// asyncronous request
export const authenticateSignup =async (data) => {
    try {
    return await  axios.post(`${URL}/signup` , data)  ;
    } catch (error) {
        console.log('error while calling signup api' , error);
    }
}

export const authenticateLogin =async (data) => {
    try {
        return await axios.post(`${URL}/Login` , data);
    } catch (error) {
        console.log('error while calling login api' , error);
        // in case of 400 error it breakes from try it comes to catch statement 
        // for showimg error message
        return error.response;
    }
}

export const payWithPaytm = async(data) => {
    try {
      let response =  await axios.post(`${URL}/payment` ,data);
      return response.data ;
      
    } catch (error) {
        console.log("error while paying through paytm" , error);
        console.log("it's frontend error");
    }
}