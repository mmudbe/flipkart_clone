
import user from "../model/user-schema.js";


export const userSignup = async (request,response) => {
try {
    const exist = await user.findOne({email:request.body.email});
    if(exist){
        // check if reurn needed here because we are using response return means function ends?
       return  response.status(401).json({message:'email already exists'});
    }

    // console.log(request.body);
    const User = request.body;
    const newUser = new user(User);
    await newUser.save();

    response.status(200).json({message: User});
} catch (error) {
    response.status(500).json({message:error.message});
}
}

export const userLogin =async (request , response) => {
    try {
        const  email = request.body.email;
        const password = request.body.password;
        
        let User = await user.findOne({email:email , password:password});
        if (User) {
            return response.status(200).json({data:user});
        } else {
            return response.status(401).json('invalid login');
        }
    } catch (error) {
        response.status(500).json('error',error.message);
    }
}