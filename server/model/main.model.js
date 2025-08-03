import { blogs, users } from "./schema.model.js";


export const registration =async(name, email, password, role)=>{
    let result={
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