import argon2 from "argon2";
import { loginConfirmation, registration } from "../model/main.model.js";
import { settingCookie } from "../Jwt/cookie.js";


export const handleRegistration=async(req, res)=>{
    try {
        const {name, email, password, role} = req.body;
        const hashPassword = await argon2.hash(password)
        const respond = await registration(name, email, hashPassword, role)
        if (respond.status === 201) {
            res.json({status:respond.status ,message: respond.message})
            
        }else{
            res.status(500).json({status:respond.status, message: respond.message})

        }
    } catch (error) {
             res.status(500).json({status:respond.status, message: respond.message})
    }   
}


export const handleLogin =async(req, res)=>{
    try {
        const {email, password, role} = req.body

       const response = await loginConfirmation(email, password, role)

       if (response.status === 201) {
            const {name, email, role, _id} = response.data
            settingCookie(name, email, role, _id, res)
       }else{
         res.status(500).json({status:response.status, message: response.message})
       }
        
    } catch (error) {
         res.status(500).json({status:500, message: error.message})
    }

}