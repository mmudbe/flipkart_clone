import Product from "../model/product-schema.js"


export const getProducts = async(request , response) => {
try {
    // we can add conditions by adding {id:'product1', we add many conditions like this} to find condition based data . 
    // otherwise keep empty object
 const products = await Product.find({}); 
  response.status(200).json(products); 
} catch (error) {
    response.status(500).json({message:error.message});
}
}

export const getProductById = async(request,response) => {
    try {
        const id = await request.params.id;
       const product = await Product.findOne({"id":id});
       response.status(200).json(product);
    } catch (error) {
        response.status(500).json({message:error.message});
    }
}