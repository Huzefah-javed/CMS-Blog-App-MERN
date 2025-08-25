import {Router} from "express"
import { handleUserAddToFav, handleUserDashboard, handleUserProfile } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.get("/dashboard", handleUserDashboard)
userRouter.get("/profile", handleUserProfile)

userRouter.post("/addToFav", handleUserAddToFav)

export default userRouter;