import {Router} from "express"
import adminRouter from "./admin.router.js";

const mainRouter = Router();

mainRouter.use("/admin", adminRouter)

export default mainRouter;