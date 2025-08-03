import { blogs } from "./schema.model.js"


export const blogCount=async()=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await blogs.countDocuments({status: "approved"})
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}


export const pendingBlogCount =async()=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await blogs.countDocuments({status: "pending"})
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const newPosts =async()=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await blogs.find().sort({createdAt: -1}).limit(5)
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const pendingPosts =async()=>{
      let result = {
        status: 0,
        data: ""
    }
    try {
        const pendingPosts = await blogs.find({status : "pending"})
        result.data = pendingPosts
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const approvePost =async(id)=>{
      let result = {
        status: 0,
        message: ""
    }
    try {
         await blogs.updateOne({_id: id},{$set: {status: "approved"}})
        result.message = "post Approved successfully"
        result.status = 201
    } catch (error) {
        result.status = 500
        result.message = error.message
    }
    return result;
}

export const declinePost =async(id)=>{
     let result = {
            status: 0,
            message: ""
        }
        try {
            await blogs.updateOne({_id: id},{$set: {status: "decline"}})
            result.message = "Post Decline successfully"
            result.status = 201
        } catch (error) {
            result.status = 500
            result.message = error.message
        }
        return result;
}
