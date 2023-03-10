import {connect} from 'mongoose'

const connectMongoDb = async () => {
    try {
        console.log("..........Antes de sonectarse    -----------------")
        await connect(process.env.MONGODB_URI)

        console.log('..........Mongo DB Connected    -----------------');

    } catch (error) {
        console.log('..........No se logró conectar a Mongo Db    -----------------')
        console.error(error)
    }
}

export default connectMongoDb;