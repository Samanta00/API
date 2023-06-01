import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI)

export const connect = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGODB_URI!, {


        })
        console.log("Banco conectado (:")
    }
    catch (err: any) {
        console.error(err)

    }
}


