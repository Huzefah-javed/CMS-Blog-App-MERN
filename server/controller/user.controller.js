import { gettingFeed, gettingSinglePost, gettingUserProfile, userAddToFav, userComment, userDetail, userLike } from "../model/user.model.js"


export const handleUserDashboard =async(req, res)=>{
    if (req.user.role !== "user") return res.status(500).send("You are allowed to get this route access")
        try {
             const dashboardDetail = await userDetail(req.user.id)
             if (dashboardDetail.status === 201) {
                res.status(201).json({status:201, message: dashboardDetail.data})
            }else{
                res.status(500).json({status:500, message: dashboardDetail.data})
            }               
        } catch (error) {
            res.status(500).json({status:500, message: error.message})
            
        }
}

export const handleUserFeed =async(req, res)=>{
        try {
            const {skip} = req.query
            const resFeed = await gettingFeed(skip)
            if (resFeed.status === 201) {
                res.status(201).json({status:201, message: resFeed.data})
            }else{
                res.status(500).json({status:500, message: resFeed.data})
            }
                
        } catch (error) {
            res.status(500).json({status:500, message: error.message})
            
        }
}

export const handleUserProfile =async(req, res)=>{
    if (req.user.role !== "user") return res.status(500).send("You are allowed to get this route access")
        try {
                const userProfile = await gettingUserProfile(req.user.id)
            if (userProfile.status === 201) {
                res.status(201).json({status:201, message: userProfile.data})
            }else{
                res.status(500).json({status:500, message: userProfile.data})
            }
                
        } catch (error) {
            res.status(500).json({status:500, message: error.message})
            
        }
}

export const handleUserPostDetail =async(req, res)=>{
        try {
            const {id} = req.params
                const singlePostDetail = await gettingSinglePost(id)
            if (singlePostDetail.status === 201) {
                res.status(201).json({status:201, message: singlePostDetail.data})
            }else{
                res.status(500).json({status:500, message: singlePostDetail.data})
            }
                
        } catch (error) {
            res.status(500).json({status:500, message: error.message})
            
        }
}

export const handleUserComment =async(req, res)=>{
        try {
                const {postId, comment} = req.body
                console.log(req.body)
                console.log(comment, postId)
                const addComment = await userComment(comment, postId, req.user.id, req.user.name)
            if (addComment.status === 201) {
                res.status(201).json({status:201, message: addComment.data})
            }else{
                res.status(500).json({status:500, message: addComment.data})
            }
                
        } catch (error) {
            res.status(500).json({status:500, message: error.message})
            
        }
}

export const handleUserLike =async(req, res)=>{
        try {
                const {postId} = req.body
                console.log(postId," ------------  ",req.user.id)
                const addLike = await userLike(postId, req.user.id)
            if (addLike.status === 201) {
                res.status(201).json({status:201, message: addLike.data})
            }else{
                res.status(500).json({status:500, message: addLike.data})
            }
                
        } catch (error) {
            res.status(500).json({status:500, message: error.message})
        }
}

export const handleUserAddToFav =async(req, res)=>{
    if (req.user.role !== "user") return res.status(500).send("You are allowed to get this route access")
        try {
                const {postId} = req.body
                const addComment = await userAddToFav(postId, req.user.id)
            if (addComment.status === 201) {
                res.status(201).json({status:201, message: addComment.data})
            }else{
                res.status(500).json({status:500, message: addComment.data})
            }
                
        } catch (error) {
            res.status(500).json({status:500, message: error.message})
            
        }
}