import { users } from "./schema.model.js"


export const userCounts =async()=>{
     let result={
        status: 0,
        message:"",
        data: -0
    };
    try {
        const count = await users.countDocuments({role: "user"})
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
        const count = await users.find().sort({createdAt: -1}).limit(5)
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
        const pendingUsers = await users.find({role: "user", isApprove: false})
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
        try {
           const adminId = await users.find({_id : adminId})
            result.data = adminId;
            result.status = 201
        } catch (error) {
            result.status = 500
            result.data = error.message
        }
        return result;
}