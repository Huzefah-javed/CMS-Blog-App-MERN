import argon2 from "argon2";
import { registration } from "../model/main.model.js";


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