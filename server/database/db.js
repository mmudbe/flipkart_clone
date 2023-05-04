// database is external entity
import mongoose from "mongoose" ;




export const connection = async (username , password) => {
    mongoose.set('strictQuery', true);
    const URL = `mongodb://${username}:${password}@ac-glg1yq0-shard-00-00.foqvudz.mongodb.net:27017,ac-glg1yq0-shard-00-01.foqvudz.mongodb.net:27017,ac-glg1yq0-shard-00-02.foqvudz.mongodb.net:27017/?ssl=true&replicaSet=atlas-gry79t-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL = `mongodb+srv://${username}:${password}@ecommerce-web.foqvudz.mongodb.net/FLIPKART?retryWrites=true&w=majority`;
    try{
await mongoose.connect(URL, {useUnifiedTopology: true , useNewUrlParser:true })
    console.log('database connected successfully');
    }catch(error){
        console.log(error.message , "error while connecting with the database");
    }
}

export default connection;
