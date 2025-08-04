import {Router} from "express"
import { handleCreatePost, handleDraftPost, handleEditPost, handlePosts, handleWriterDashboard, handleWriterProfile } from "../controller/writer.controller.js";

const writerRouter = Router();
    
    writerRouter.get("/dashboard", handleWriterDashboard) 
    writerRouter.post("/createPost", handleCreatePost)
    writerRouter.post("/draftPost", handleDraftPost)
    writerRouter.get("/edit/:id", handleEditPost)
    writerRouter.get("/posts", handlePosts)
    writerRouter.get("/profile", handleWriterProfile)

export default writerRouter;