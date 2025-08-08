import { draftingPost, insertingPost, latestPost, LikeAndCommentOnPost, totalApprovedCount, totalDeclineCount, totalPendingCount, totalPostCounts, updatingPost, writerPosts, writerProfile } from "../model/writer.model.js";

export const handleWriterDashboard =async(req, res)=>{
    
    if (req.user.role !== "writer")  return res.status(500).send("You are allowed to get this route access")
    try {
            
            const resTotalPosts = await totalPostCounts(req.user.id); 
            const resTotalPendingPosts = await totalPendingCount(req.user.id);
            const resTotalApprovedPosts = await totalApprovedCount(req.user.id);
            const resTotalDeclinePosts = await totalDeclineCount(req.user.id);
            const resTotalLikesAndComments = await LikeAndCommentOnPost(req.user.id);
            const resLatestPost = await latestPost();
            if (
                resTotalPosts.status === 201&&
                resTotalPendingPosts.status === 201&&
                resTotalApprovedPosts.status === 201&&
                resTotalDeclinePosts.status === 201&&
                resTotalLikesAndComments.status === 201&&
                resLatestPost.status === 201
            ) {
                res.status(201).json({

                    status: 201,
                    cardData:[
                    {totalPosts: resTotalPosts.data},
                    {totalApprovedPosts:  resTotalApprovedPosts.data},
                    {totalPendingPosts:  resTotalPendingPosts.data},
                    {totalDeclinePosts:  resTotalDeclinePosts.data}
                    ],
                    totalLikesAndCommentsOnPosts:  resTotalLikesAndComments.data,
                    latestPost:  resLatestPost.data,
             
                                    })
            }else{
              res.status(500).json({
                  status: 500,
                  message: "Error occurred",  
                })
            }
        } catch (error) {
                res.status(500).json({
                  status: 500,
                  message: error.message,
                })
            
        }
}

export const handleCreatePost =async(req, res)=> {
    
    if (req.user.role !== "writer") return res.status(500).send("You are allowed to get this route access")
    try {
        const {title, post, draftPostId} = req.body
        const finalTitle = title.trim();
        const finalPost = post.trim();

        const resInsertPost = await  insertingPost(finalTitle, finalPost, req.user.id, req.user.name, draftPostId)
        if (resInsertPost.status === 201) {
            res.status(201).json({
                status: 201,
                message: resInsertPost.data
                                })
        }else{
            res.status(500).json({
                status: 500,
                message: resInsertPost.data
            })
        }
    } catch (error) {
             res.status(500).json({
                status: 500,
                message: error.message
            })
    }
}

export const handleDraftPost =async(req, res)=> {
    
    if (req.user.role !== "writer") return res.status(500).send("You are allowed to get this route access")
    try {
        const {title, post } = req.body
        const finalTitle = title.trim();
        const finalPost = post.trim();

        const resInsertPost = await  draftingPost(finalTitle, finalPost, req.user.id)
         if (resInsertPost.status === 201) {
            res.status(201).json({
                status: 201,
                message: resInsertPost.data
                                })
        }else{
            res.status(500).json({
                status: 500,
                message: resInsertPost.data
            })
        }
    } catch (error) {
             res.status(500).json({
                status: 500,
                message: error.message
            })
    }
}

export const handleEditPost =async(req, res)=>{
    
    if (req.user.role !== "writer") return res.status(500).send("You are allowed to get this route access")
    try {
        const {title, post}= req.body
        const {id} = req.params
        const resUpdatePost = await updatingPost(title, post, id)
        if (resUpdatePost.status === 201) {
            res.status(201).json({
                status: 201,
                message: resUpdatePost.data
                                })
        }else{
            res.status(500).json({
                status: 500,
                message: resUpdatePost.data
            })
        }
    } catch (error) {
          res.status(500).json({
                status: 500,
                message: error.message
            })       
    }
}

export const handlePosts =async (req, res)=>{
    
    if (req.user.role !== "writer")  return res.status(500).send("You are allowed to get this route access")
    try {
        const resPosts = await writerPosts(req.user.id) // id needs here by jwt
         if (resPosts.status === 201) {
            res.status(201).json({
                status: 201,
                message: resPosts.data
                                })
        }else{
            res.status(500).json({
                status: 500,
                message: resPosts.data
                                })
        }
    } catch (error) {
        res.status(500).json({
                status: 500,
                message: error.message
                             })
    }
}

export const handleWriterProfile =async(req, res)=>{
    
    if (req.user.role !== "writer") return res.status(500).send("You are allowed to get this route access")
    try {
        const resProfile = await writerProfile(req.user.id) // id needs here by jwt
         if (resProfile.status === 201) {
            res.status(201).json({
                status: 201,
                message: resProfile.data
                                })
        }else{
            res.status(500).json({
                status: 500,
                message: resProfile.data
                                })
        }
    } catch (error) {
        res.status(500).json({
                status: 500,
                message: error.message
                             })
    }
}