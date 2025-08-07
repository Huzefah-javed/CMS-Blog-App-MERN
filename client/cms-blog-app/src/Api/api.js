import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/"
})

export const adminDashboardData =async()=>{
   const result = await api.get("admin/dashboard", {withCredentials: true})
   return result.data;
}

export const writerDashboardData =async()=>{
   const result = await api.get("writer/dashboard", {withCredentials: true})
   return result.data;
}

export const login =async(form)=> {
   const result = await api.post("/login", form, {withCredentials: true})
   console.log(result.data)
}

export const registration =async(form)=> {
   const result = await api.post("/userRegistration", form, {withCredentials: true})
   console.log(result.data)
}