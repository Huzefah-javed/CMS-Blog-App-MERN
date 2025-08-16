import {Router} from "express"
import { handleAdminDashboard, handleAdminProfile, handleApprovingPost, handleApprovingUser, handleApprovingWriter, handleDeclineUser, handleDeclineWriter, handleDecliningPost, handlePendingPost, handlePendingUser, handlePendingWriter } from "../controller/admin.controller.js";

const adminRouter = Router();
    
    adminRouter.get("/dashboard", handleAdminDashboard)
    adminRouter.get("/pendingUsers", handlePendingUser)
    adminRouter.get("/approvingUser/:id", handleApprovingUser)
    adminRouter.get("/decliningUser/:id", handleDeclineUser)
    adminRouter.get("/pendingWriters", handlePendingWriter)
    adminRouter.get("/approvingWriter/:id", handleApprovingWriter)
    adminRouter.get("/decliningWriter/:id", handleDeclineWriter)
    adminRouter.get("/pendingPosts", handlePendingPost)
    adminRouter.get("/pendingPosts/:id", handleApprovingPost)
    adminRouter.get("/decliningPosts/:id", handleDecliningPost)
    adminRouter.get("/profile", handleAdminProfile)  
    
export default adminRouter;