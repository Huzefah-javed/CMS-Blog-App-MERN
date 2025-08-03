import { users } from "./schema.model.js"


export const writerCounts =async()=>{
     let result={
        status: 0,
        message:"",
        data: -0
    };
    try {
        const count = await users.countDocuments({role: "writer"})
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
            const pendingWriter = await users.find({role: "writer", isApprove: false})
            result.data = pendingUsers
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