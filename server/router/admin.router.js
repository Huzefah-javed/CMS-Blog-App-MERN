import {Router} from "express"

const adminRouter = Router();

adminRouter.get("/dashboard", (req, res)=>{res.send("dashboard")})
adminRouter.get("/users", (req, res)=>{res.send("users")})
adminRouter.get("/writers", (req, res)=>{res.send("writers")})
adminRouter.get("/posts", (req, res)=>{res.send("posts")})
adminRouter.get("/settings", (req, res)=>{res.send("settings")})

export default adminRouter;