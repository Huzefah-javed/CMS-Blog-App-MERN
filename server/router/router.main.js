import {Router} from "express"
import { handleLogin, handleRegistration } from "../controller/main.controller.js";
import adminRouter from "./admin.router.js";
import writerRouter from "./writer.router.js";
import { cookieVerifying } from "../Jwt/cookie.js";
import userRouter from "./user.router.js";

const mainRouter = Router();



mainRouter.use("/admin",adminRouter)
mainRouter.use("/writer", cookieVerifying,writerRouter)
mainRouter.use("/user", cookieVerifying,userRouter)
mainRouter.post("/adminRegistration", handleRegistration)
mainRouter.post("/writerRegistration", handleRegistration)
mainRouter.post("/userRegistration", handleRegistration)
mainRouter.post("/login", handleLogin)

export default mainRouter;