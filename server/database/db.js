// database is external entity
import mongoose from "mongoose" ;




export const connection = async (URL) => {
    mongoose.set('strictQuery', true);
    // const URL = `mongodb+srv://${username}:${password}@ecommerce-web.foqvudz.mongodb.net/FLIPKART?retryWrites=true&w=majority`;
    try{
await mongoose.connect(URL, {useUnifiedTopology: true , useNewUrlParser:true })
    console.log('database connected successfully');
    }catch(error){
        console.log(error.message , "error while connecting with the database");
    }
}

export default connection;
