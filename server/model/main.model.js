import  argon2  from "argon2";
import { blogs, users } from "./schema.model.js";


export const registration =async(name, email, password, role)=>{
    let result  = {
        status: 0,
        message:""
                  };
    try {
        const adminUser =  new users({name, email, password, role})
        await adminUser.save()
        result.status = 201;
        result.message = "Added successfully"
    } catch (error) {
        result.status = 500;
        result.message=error.message;
    }
    return result;
}

export const loginConfirmation =async(inputEmail, inputPassword, inputRole)=>{
    let result  = {
        status: 0,
        data:""
                  };
    try {
        const profile = await users.find({email: inputEmail, role: inputRole})
        const isPassCorrect =await argon2.verify(profile[0].password, inputPassword)
        if (profile.length===1 && isPassCorrect) {
            console.log(profile)
            result.status = 201;
            result.data = profile[0]
            
        }
    } catch (error) {
        result.status = 400;
        result.message=error.message;
    }
    return result;   
}