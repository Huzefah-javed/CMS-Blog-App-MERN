import jwt from "jsonwebtoken"

export const settingCookie =(name, email, role, id, res)=> {
     const token =  jwt.sign({name, email, role, id}, process.env.JWT_SECRET, {expiresIn: "3h"}) 
     res.cookie("authToken", token, {
       maxAge:  10800000,
       httpOnly: true,
       secure: true, 
        sameSite: "none",
 })

     res.status(201).json({status: 201 ,message: "JWT cookie set successfully" , personDetail: {name, email, role, id}})
}

export const cookieVerifying =(req, res, next)=> {
              
       try {
              const token = req.cookies?.authToken
              if (!token){
                     res.status(500).send("Cannot hit this route without login")       
                     return next()
              }
       
              const verifyingToken = jwt.verify(token, process.env.JWT_SECRET)
             req.user  = {
              name: verifyingToken.name,
              id : verifyingToken.id,
              email : verifyingToken.email,
              role : verifyingToken.role
              }
              console.log(req.user)
             return next()
       
       } catch (error) {
              res.status(500).send(error.message)       
              return next()
       }
}