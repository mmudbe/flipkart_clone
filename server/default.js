import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";


const DefaultData = async() => {
try {
    
   await Product.insertMany(products);

    console.log('default-data added successfully');
} catch (error) {
    console.log('error while inserting default data', error.message);
}

}

export default DefaultData;