import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import mainRouter from "./router/router.main.js";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();

const corsOptions = {
  origin: "https://cms-blog-app-mern.vercel.app",
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(cookieParser())
app.use("/",mainRouter)

try {
   await mongoose.connect(process.env.MONGOURI)
    console.log("db connect")
    
app.listen(process.env.PORT, ()=>{
    console.log("port ready on 5000")
})
} catch (error) {
    console.log(error)
    console.log("error occurred in the db connection")
}
