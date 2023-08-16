import mongoose from "mongoose";
import { config } from "../../config";


mongoose.connect(`${config.server.mongo_url}`).then(()=>{
    console.log("Connected to Database!")
}).catch((e) =>{
    console.error('Connection error', e.message);
})
const db = mongoose.connection
export default db