import Product      from '../models/Schemas/Product.js';

const ProductResolver = {

    Query : {
        getAllProducts: async () => {
            const products = await Product.find()
            return products
        }, 
        getProductsByCategory: async (_, {category}) => {
            const products = await Product.find({category: {$eq: category}});
            return products
        }
    },
    
    Mutation: {
        createProduct: async(_, args)=> {
            console.log(args.item)
            const {consecutive,name,sku,price,discount,is_new,rating,salecount,offerEnd,stock,category,tag, variation,image,shortDescription,fullDescription,updateDate} = args.item
            const newProduct = new Product({consecutive,name,sku,price,discount,is_new,rating,salecount,offerEnd,stock,category,tag, variation,image,shortDescription,fullDescription,updateDate})
            await newProduct.save()
            return newProduct            
        },
        updateProduct: async(_,{id, item}) => {
            const product_updated = await Product.findByIdAndUpdate(id,{$set:item},{new:true}) // con $set le estoy diciendo que actualice los campos que trae product, puede ser uno o varios
            return product_updated
        }
    }
}

export default ProductResolver;