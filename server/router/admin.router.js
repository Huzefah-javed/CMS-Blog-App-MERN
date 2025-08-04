import {Router} from "express"
import { handleAdminDashboard, handleAdminProfile, handleApprovingPost, handleApprovingUser, handleApprovingWriter, handleDeclineUser, handleDeclineWriter, handleDecliningPost, handlePendingPost, handlePendingUser, handlePendingWriter } from "../controller/admin.controller.js";

const adminRouter = Router();
    
    adminRouter.get("/dashboard", handleAdminDashboard)
    adminRouter.get("/pendingUsers", handlePendingUser)
    adminRouter.post("/approvingUser/:id", handleApprovingUser)
    adminRouter.post("/decliningUser/:id", handleDeclineUser)
    adminRouter.get("/pendingWriters", handlePendingWriter)
    adminRouter.post("/approvingWriter/:id", handleApprovingWriter)
    adminRouter.post("/decliningWriter/:id", handleDeclineWriter)
    adminRouter.get("/pendingPosts", handlePendingPost)
    adminRouter.get("/pendingPosts/:id", handleApprovingPost)
    adminRouter.get("/decliningPosts/:id", handleDecliningPost)
    adminRouter.get("/profile", handleAdminProfile)  //must check it after JWT implementation
    
export default adminRouter;