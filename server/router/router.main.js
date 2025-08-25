import {Router} from "express"
import { handleLogin, handleLogout, handleRegistration } from "../controller/main.controller.js";
import adminRouter from "./admin.router.js";
import writerRouter from "./writer.router.js";
import { cookieVerifying } from "../Jwt/cookie.js";
import userRouter from "./user.router.js";
import { handleUserComment, handleUserFeed, handleUserLike } from "../controller/user.controller.js";

const mainRouter = Router();



mainRouter.use("/admin", cookieVerifying,adminRouter)
mainRouter.use("/writer", cookieVerifying,writerRouter)
mainRouter.use("/user", cookieVerifying,userRouter)
mainRouter.post("/adminRegistration", handleRegistration)
mainRouter.post("/writerRegistration", handleRegistration)
mainRouter.post("/userRegistration", handleRegistration)
mainRouter.post("/login", handleLogin)
mainRouter.get("/feeds",cookieVerifying, handleUserFeed)
mainRouter.get("/logout",cookieVerifying, handleLogout)
mainRouter.post("/addLike",cookieVerifying, handleUserLike)
mainRouter.post("/addComment",cookieVerifying, handleUserComment)
export default mainRouter;