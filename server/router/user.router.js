import {Router} from "express"
import { handleUserComment, handleUserDashboard, handleUserFeed, handleUserPostDetail, handleUserProfile } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.get("/dashboard", handleUserDashboard)
userRouter.get("/feeds", handleUserFeed)
userRouter.get("/feeds/:id", handleUserPostDetail)
userRouter.post("/addComment", handleUserComment)
userRouter.get("/profile", handleUserProfile)

export default userRouter;