import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if(initialized){
        console.log('MongoDB already connected')
        return;
    }
    try {
        console.log(process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'Next-estate',
            useNewurlParser: true,
            useUnifiedTopology: true,
        });
        initialized = true;
        console.log('MongoDb connected')
    } catch (error) {
        console.log('MongoDB connection error:', error)
    }

}