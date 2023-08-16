import db from "./db"
import {app} from "./app"
import { config } from "../config"
const PORT = config.server.port || 8000


const start = async() =>{
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))

    app.listen(PORT, () => {
        console.log(`Listening on port http://localhost:${PORT}`);
    });
}
start();