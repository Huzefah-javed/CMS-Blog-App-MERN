import {Router} from "express"
import { handleRegistration } from "../controller/main.controller.js";

const mainRouter = Router();

// mainRouter.use("/admin", adminRouter)
mainRouter.post("/AdminRegistration", handleRegistration)
mainRouter.post("/writerRegistration", handleRegistration)
mainRouter.post("/userRegistration", handleRegistration)

export default mainRouter;