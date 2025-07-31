import mongoose from "mongoose";

const connDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    if(conn){
        console.log("MongoDB Connected");
    }else{
        console.log("MongoDB not Connected");
    }
}

export default connDB;