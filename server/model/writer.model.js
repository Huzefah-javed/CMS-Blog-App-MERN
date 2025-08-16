import { blogs, users } from "./schema.model.js"


export const writerCounts =async()=>{
     let result={
        status: 0,
        message:"",
        data: -0
    };
    try {
        const count = await users.countDocuments({role: "writer", status: "approved"})
        result.status = 201
        result.message = "success"
        result.data = count
        
    } catch (error) {
        result.status = 500
        result.message = error.message
        result.data = error.message
        
    }
    return result;
}

export const pendingWriters =async()=>{
          let result = {
            status: 0,
            data: ""
        }
        try {
            const pendingWriters = await users.find({role: "writer", isApprove: "pending"})
            result.data = pendingWriters
            result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
    }
    
export const approveWriter =async(id)=>{
      let result = {
        status: 0,
        message: ""
    }
    try {
         await users.updateOne({_id: id},{$set: {isApprove: true}})
        result.message = "Writer Approved successfully"
        result.status = 201
    } catch (error) {
        result.status = 500
        result.message = error.message
    }
    return result;
}

export const declineWriter =async(id)=>{
    let result = {
        status: 0,
        message: ""
    }
    try {
        await users.updateOne({_id: id},{$set: {isApprove: "decline"}})
        result.message = "Writer Decline successfully"
        result.status = 201
    } catch (error) {
        result.status = 500
        result.message = error.message
    }
    return result;
}

export const totalPostCounts =async(id)=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await blogs.countDocuments({creatorId: id})
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const totalPendingCount =async(id)=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await blogs.countDocuments({creatorId: id, status: "pending"})
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const totalApprovedCount =async(id)=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await blogs.countDocuments({creatorId: id, status: "approved"})
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const totalDeclineCount =async(id)=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await blogs.countDocuments({creatorId: id, status: "decline"})
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const LikeAndCommentOnPost =async(id)=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await blogs.find({creatorId: id, status: "approved"}, {title: 1, likes:1, Comments:1})
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const latestPost =async(id)=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await blogs.find({creatorId: id, status: "approved"}).sort({createdAt: -1}).limit(1)
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const insertingPost =async(writerTitle, writerPost, writerCreatorId, writerName,draftPostId = null)=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        if (draftPostId) {
            await blogs.findByIdAndDelete(draftPostId)
        }
         await blogs.create({
                        title: writerTitle,
                        post: writerPost, 
                        creatorId: writerCreatorId,
                        creatorName: writerName,
                        status: "pending"
                            })
        result.data = "post created successfully"
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const draftingPost =async(writerTitle, writerPost, writerCreatorId)=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
         await blogs.create({
                        title: writerTitle,
                        post: writerPost, 
                        creatorId: writerCreatorId,
                        status: "drafted"
                           })
        result.data = "post drafted successfully"
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const updatingPost =async(updatedTitle, updatedPost, id)=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
         await blogs.updateOne({_id: id}, {$set:{title: updatedTitle, post: updatedPost}})
        result.data = "post updated successfully"
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const writerPosts =async(id)=>{
     let result = {
        status: 0,
        data: ""
    }
    try {
        const posts = await blogs.find({creatorId: id})
         result.data = posts
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const writerProfile =async(id)=>{
     let result = {
        status: 0,
        data: ""
    }
    try {
        const profileData = await users.find({_id : id})
         result.data = profileData
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}