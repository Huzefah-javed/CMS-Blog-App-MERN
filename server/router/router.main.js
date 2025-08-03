import {Router} from "express"
import { handleRegistration } from "../controller/main.controller.js";
import adminRouter from "./admin.router.js";

const mainRouter = Router();

mainRouter.use("/admin", adminRouter)
mainRouter.post("/adminRegistration", handleRegistration)
mainRouter.post("/writerRegistration", handleRegistration)
mainRouter.post("/userRegistration", handleRegistration)

export default mainRouter;