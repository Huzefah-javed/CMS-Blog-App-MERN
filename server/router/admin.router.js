import {Router} from "express"

const adminRouter = Router();

adminRouter.get("/admin/dashboard", (req, res)=>{res.send("dashboard")})
adminRouter.get("/admin/users", (req, res)=>{res.send("users")})
adminRouter.get("/admin/writers", (req, res)=>{res.send("writers")})
adminRouter.get("/admin/posts", (req, res)=>{res.send("posts")})
adminRouter.get("/admin/settings", (req, res)=>{res.send("settings")})

export default adminRouter;