import {Router} from "express"

const userRouter = Router();

userRouter.get("/user/dashboard", (req, res)=>{res.send("dashboard")})
userRouter.get("/user/post/:id", (req, res)=>{res.send("writers")})
userRouter.get("/user/posts", (req, res)=>{res.send("posts")})
userRouter.get("/user/profile", (req, res)=>{res.send("settings")})

export default userRouter;