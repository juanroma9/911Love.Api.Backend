import {Schema, model} from 'mongoose';

const HeroSliderSchema = new Schema({
    consecutive: {
        type: String, 
        required: true
    },
    title : String,
    subtitle : String,
    image : String,  
    url: String
});

//Para el backend lo exporto como un modelo de datos llamado HeroSliderSchema
export default model('HeroSliderSchema',HeroSliderSchema);