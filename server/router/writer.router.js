import {Router} from "express"

const writerRouter = Router();

writerRouter.get("/writer/dashboard", (req, res)=>{res.send("dashboard")})
writerRouter.get("/writer/edit/:id", (req, res)=>{res.send("users")})
writerRouter.get("/writer/new-post", (req, res)=>{res.send("writers")})
writerRouter.get("/writer/posts", (req, res)=>{res.send("posts")})
writerRouter.get("/writer/profile", (req, res)=>{res.send("settings")})

export default writerRouter;