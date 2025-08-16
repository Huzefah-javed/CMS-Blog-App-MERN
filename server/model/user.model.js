import mongoose from "mongoose";
import { blogs, users } from "./schema.model.js"
import crypto from "crypto"

export const userCounts =async()=>{
     let result={
        status: 0,
        message:"",
        data: -0
    };
    try {
        const count = await users.countDocuments({role: "user", status:"approved"})
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

export const newUsersJoin =async()=>{
    let result = {
        status: 0,
        data: ""
    }
    try {
        const count = await users.find({}, {name:1, role:1, createdAt:1}).sort({createdAt: -1}).limit(5)
        result.data = count
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const pendingUsers =async()=>{
      let result = {
        status: 0,
        data: ""
    }
    try {
        const pendingUsers = await users.find({role: "user", isApprove: "pending"}, {name: 1, role:1, createdAt:1})
        result.data = pendingUsers
        result.status = 201
    } catch (error) {
        result.status = 500
        result.data = error.message
    }
    return result;
}

export const approveUser =async(id)=>{
      let result = {
        status: 0,
        message: ""
    }

    try {
        const pendingUsers = await users.updateOne({_id: id},{$set: {isApprove: "approve"}})
        result.message = "User Approved successfully"
        result.status = 201
    } catch (error) {
        result.status = 500
        result.message = error.message
    }
    return result;
}

export const declineUser =async(id)=>{
      let result = {
        status: 0,
        message: ""
    }
    try {
        await users.updateOne({_id: id},{$set: {isApprove: "decline"}})
        result.message = "User Decline successfully"
        result.status = 201
    } catch (error) {
        result.status = 500
        result.message = error.message
    }
    return result;
}

export const adminProfile =async(adminId)=>{
     let result = {
            status: 0,
            data: ""
        }
        const adminObjId = new mongoose.Types.ObjectId(adminId)
        try {
           const admin = await users.find({_id : adminObjId}, {password: 0})
            result.data = admin;
            result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
}

export const gettingFeed =async(skipPage)=>{
     let result = {
            status: 0,
            data: ""
        }
        try {
           const blogFeed = await blogs.find({status: "approved"}).sort({createdAt:-1}).skip(skipPage*10).limit(10)
            result.data = blogFeed;
            result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
}

export const gettingUserProfile =async(id)=>{
     let result = {
            status: 0,
            data: ""
        }
        try {
           const user = await users.find({_id : id})
            result.data = user[0];
            result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
}

export const gettingSinglePost =async(id)=>{
     let result = {
            status: 0,
            data: ""
        }
        const objectId= new mongoose.Types.ObjectId(id)
        try {
           const singlePost = await blogs.find({_id : objectId},{title:1, creatorName:1, createdAt:1})
            result.data = singlePost[0];
            result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
}

export const userComment =async(userComment, postId, userProfileId, userName)=>{
     let result = {
            status: 0,
            data: ""
        }
        try {
            console.log(postId, userProfileId)
             const postObjectId = new mongoose.Types.ObjectId(postId);
                
            const userObjectId = new mongoose.Types.ObjectId(userProfileId);
            console.log(postObjectId, userObjectId)
            await users.findOneAndUpdate({_id:userObjectId}, {$addToSet:{commentedPosts: postId}})
            await blogs.findOneAndUpdate({_id: postObjectId}, {$push:{Comments: {userId: userProfileId, name: userName, comment: userComment}}})
            result.data = "comment added";
            result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
}

export const userLike =async(postId, userId)=>{
     let result = {
            status: 0,
            data: ""
        }
            console.log(postId, userId)
            try {
                const postObjectId = new mongoose.Types.ObjectId(postId);
                
                const userObjectId = new mongoose.Types.ObjectId(userId);
                console.log(postObjectId, userObjectId)

            const result2 = await blogs.updateOne({_id: postObjectId}, {$addToSet:{likes: userId}})
          const result1 =  await users.updateOne({_id: userObjectId}, {$addToSet:{likePosts: postId}})
            console.log(result1," tung tung sahoor ", result2)
            result.data = "Like added";
            result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
}

export const userDetail =async(id)=>{
     let result = {
            status: 0,
            data: ""
        }
        try {
            const userDetail = await users.find({_id: id}, {commentedPosts: 1, likePosts : 1, favPosts : 1})
           result.data = userDetail[0];
           result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
}

export const userAddToFav =async(postId, userProfileId)=>{
     let result = {
            status: 0,
            data: ""
        }
        try {
            
            await users.findOneAndUpdate({_id:userProfileId}, {$push:{favPosts: postId}})
            result.data = "Added to favorite";
            result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
}