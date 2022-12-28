import { Schema, model } from "mongoose"; 

const task_schema = new Schema ({
    title : {
        type: String, 
        required: true
    },
    description : String
})

//Para el backend lo exporto como un modelo de datos llamado Task
export default model('Task', task_schema)