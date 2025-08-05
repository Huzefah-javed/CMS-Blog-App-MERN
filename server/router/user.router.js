import {Router} from "express"
import { handleUserAddToFav, handleUserComment, handleUserDashboard, handleUserFeed, handleUserLike, handleUserPostDetail, handleUserProfile } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.get("/dashboard", handleUserDashboard)
userRouter.get("/feeds", handleUserFeed)
userRouter.get("/feeds/:id", handleUserPostDetail)
userRouter.post("/addComment", handleUserComment)
userRouter.post("/addLike", handleUserLike)
userRouter.post("/addToFav", handleUserAddToFav)
userRouter.get("/profile", handleUserProfile)

export default userRouter;