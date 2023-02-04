import { model, Schema } from "mongoose";

const AssetsInfo = new Schema ({
    consecutive:    { type: String, required: true },// Indicará que el orden en que se debe mostrar la imagen
    image:          { type: String, required: true },
    tag:            { type: String, required: true, index : true }, //Este campo va a identificar de donde es la imagen, de que página es
    title:          { type: String, required: true, index: true, unique: true, sparse: true }, // Creamos un indice simple y un indice sparse con lo cual nos aseguramos que todos los documentos a guardar en base de datos llevan este campo
    subtitle:       { type: String, required: false },
    price:          { type: String, required: false },
    createDate:     { type: Date,   required: true, default: Date.now() },
    updateDate:     { type: Date,   required: false }
});

//Para el backend lo exporto como un modelo de datos llamado AssetsInfo
//Esto es la instancia 
export default model('AssetsInfo', AssetsInfo);