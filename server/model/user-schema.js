import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        // it will trim out spaces given by user before and after name
        trim:true,
        // minimum characters
        min : 5,
        max : 20
    },
    lastname:{
       type: String ,
       required:true,
       trim:true,
       min:5,max:20 
    },
    email:{
        type: String ,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        index:true
     }, 
     password:{
        type:String,
        required:true
     } ,
     phone:{
        type:String,
        required:true
     }
});
 
const user = mongoose.model('user', userSchema);

export  default user;