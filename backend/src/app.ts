import express,{Request,Response} from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
// Enviorment Variables

dotenv.config();

const limit = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 20,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers

});

const app = express();

// Middleware
app.set('trust proxy', true);
app.use(limit);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// Routes


// Server heartbeat check
app.get('/api/auth/whoami',async(req:Request,res:Response) =>{
    res.json({message:"auth controller"})
})
app.get('/api/workouts/whoami',async(req:Request,res:Response) =>{
    res.json({message:"workouts controller"})
})

export {app}