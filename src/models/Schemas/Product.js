import { model, Schema } from "mongoose";

const Product =  new Schema ({
    consecutive:      { type: Number, required: true },
    name:             { type: String, required: true, index: true, unique: true, sparse: true}, // Creamos un indice simple y un indice sparse con lo cual nos aseguramos que todos los documentos a guardar en base de datos llevan este campo 
    sku:              { type: String, required: false}, 
    price:            { type: Number, required: true, index: true },
    discount:         { type: Number, required: false },
    offerEnd:         { type: String, required: false },
    is_new:           { type: Boolean, default: false},
    rating:           { type: Number, min: 1, max: 5, default: 5, required: false }, 
    salecount:        { type: Number, min: 1, default: 1, required: false},
    stock:            { type: Number, required : true },
    category:         { type: Array, required: true, index : true},
    tag:              { type:Array, required: false, index: true }, // Los tags son auxiliares a las categorias, ejemplos es un producto ropa que puede tener categoria de hombre y mujer este producto puede que solo jackets
    variation:        { type: String, required: false }, // Con arreglo puedo conocer las variaciones como tamaños o colores: Ojo: Recuerda validar si usas el tipo de Map de Mongo 
    image:            { type: Array, required: true  }, // Este es un arreglos de rutas de las imagenes que se tienen de ese producto
    shortDescription: { type: String, required: true },
    fullDescription:  { type: String, required: false },
    createDate:       { type: Date, default: Date.now() },
    updateDate:       { type: Date, required: false }
});

//Para el backend lo exporto como un modelo de datos llamado Product
//Esto es la instancia 
export default model("Product", Product);