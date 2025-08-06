import { approvePost, blogCount, declinePost, newPosts, pendingBlogCount, pendingPosts } from "../model/post.model.js";
import { adminProfile, approveUser, newUsersJoin, pendingUsers, userCounts } from "../model/user.model.js"
import { writerCounts, approveWriter, pendingWriters, declineWriter } from "../model/writer.model.js";


export const handleAdminDashboard =async(req,res)=>{
    
    // if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
    try {
        
        const resUser = await userCounts();
        const resWriter = await writerCounts();
        const resPost = await blogCount();
        const resPendPost = await pendingBlogCount();
        const resNewUsersJoin = await newUsersJoin();
        const resNewPosts = await newPosts();
        if (
            resUser.status === 201&&
            resWriter.status === 201&&
            resWriter.status === 201&&
            resPendPost.status === 201
        ) {
            res.status(201).json({
                status: resUser.status,
                message: resUser.message,
                cardData:[
                            {PendingBlogs:  resPendPost.data},
                            {TotalUsers:  resUser.data},
                            {TotalWriters:  resWriter.data},
                            {TotalBlogs:  resPost.data}
                        ],
                latestUserJoin:  resNewUsersJoin.data,
                latestPosts:  resNewPosts.data,
         
                                })
        }else{
          res.status(500).json({
              status: resUser.status,
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


export const handlePendingUser =async(req,res)=> {
    
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
    try {
        const response = await pendingUsers()
        if (response.status === 201) {
            res.status(201).json({
                status: 201,
                message: "success",
                totalPendingUsers: response.data.length,
                pendingUsers: response.data,
            })
        }else{
             res.status(500).json({
                status: 500,
                message: "failed",
            })
        }
    } catch (error) {
        res.status(500).json({
                status: 500,
                message: error.message,
            })
    }
}


export const handleApprovingUser =async(req,res)=>{
    
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
        try {
             const {id} = req.params;
            const response = await approveUser(id)
        if (response.status === 201) {
            res.status(201).json({
                status: 201,
                message: response.message,
                
            })
        }else{
             res.status(500).json({
                status: 500,
                message: "failed to approve",
            })
        }
    } catch (error) {
        res.status(500).json({
                status: 500,
                message: error.message,
            })
    }
}

export const handlePendingWriter =async(req,res)=> {
    
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
    try {
        const response = await pendingWriters()
        if (response.status === 201) {
            res.status(201).json({
                status: 201,
                message: "success",
                totalPendingWriters: response.data.length,
                pendingWriters: response.data,
            })
        }else{
             res.status(500).json({
                status: 500,
                message: "failed",
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            })
    }
}


 export const handleApprovingWriter =async(req,res)=>{
    
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
    try {
           const {id} = req.params;
         const response = await approveWriter(id)
         if (response.status === 201) {
             res.status(201).json({
             status: 201,
             message: response.message,
                                
                                })
        }else{
            res.status(500).json({
            status: 500,
            message: "failed to approve",
                                })
         }
     } catch (error) {
             res.status(500).json({
                 status: 500,
                 message: error.message,
                })
          }
     }
                
export const handlePendingPost =async(req, res)=> {
    
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
        try {
        const response = await pendingPosts()
        if (response.status === 201) {
            res.status(201).json({
                status: 201,
                message: "success",
                totalPendingPosts: response.data.length,
                pendingPosts: response.data,
            })
        }else{
             res.status(500).json({
                status: 500,
                message: "failed",
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            })
    }   
}


 export const handleApprovingPost =async(req,res)=>{
    
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
    try {
           const {id} = req.params;
         const response = await approvePost(id)
         if (response.status === 201) {
             res.status(201).json({
             status: 201,
             message: response.message,
                                
                                })
        }else{
            res.status(500).json({
            status: 500,
            message: "failed to approve",
                                })
         }
     } catch (error) {
             res.status(500).json({
                 status: 500,
                 message: error.message,
                })
          }
     }


   export const handleDeclineUser =async(req,res)=>{
    
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
        try {
           const {id} = req.params;
         const response = await declineUser(id)
         if (response.status === 201) {
             res.status(201).json({
             status: 201,
             message: response.message,
                                
                                })
        }else{
            res.status(500).json({
            status: 500,
            message: "failed to approve",
                                })
         }
     } catch (error) {
             res.status(500).json({
                 status: 500,
                 message: error.message,
                })
          }
     }

     export const handleDeclineWriter =async(req,res)=>{
        
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
        try {
           const {id} = req.params;
         const response = await declineWriter(id)
         if (response.status === 201) {
             res.status(201).json({
             status: 201,
             message: response.message,
                                
                                })
        }else{
            res.status(500).json({
            status: 500,
            message: "failed to approve",
                                })
         }
     } catch (error) {
             res.status(500).json({
                 status: 500,
                 message: error.message,
                })
          }
     }

   export const handleDecliningPost =async(req,res)=>{
    
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
         try {
           const {id} = req.params;
         const response = await declinePost(id)
         if (response.status === 201) {
             res.status(201).json({
             status: 201,
             message: response.message,
                                
                                })
        }else{
            res.status(500).json({
            status: 500,
            message: "failed to decline",
                                })
         }
     } catch (error) {
             res.status(500).json({
                 status: 500,
                 message: error.message,
                })
          }
   }

   export const handleAdminProfile =async(req,res)=>{
    
    if (req.user.role !== "admin") return res.status(500).send("You are allowed to get this route access")
    try {
         const id = ""
        const response = await adminProfile(id);
         if (response.status === 201) {
             res.status(201).json({
             status: 201,
             message: response.data,
                                
                                })
        }else{
            res.status(500).json({
            status: 500,
            message: "fail to fetch profile data",
                                })
         }
    } catch (error) {
         res.status(500).json({
            status: 500,
            message: "fail to fetch profile data",
                                })
    }
   }
    