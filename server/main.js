import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import mainRouter from "./router/router.main.js";


const app = express();
app.use(cors())
dotenv.config()


app.use(express.urlencoded({extended: true}));

app.use("/",mainRouter)

try {
   await mongoose.connect(process.env.MONGOURI)
    console.log("db connect")
    
app.listen(process.env.PORT, ()=>{
    console.log("port ready on 5000")
})
} catch (error) {
    console.log("error occurred in the db connection")
}
