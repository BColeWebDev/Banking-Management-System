import dotenv from "dotenv";
dotenv.config();

export const config ={
    server:{
        port: process.env.PORT,
        mongo_url: process.env.MONGO_URL

    }
}