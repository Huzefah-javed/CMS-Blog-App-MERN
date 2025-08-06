import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/"
})

export const adminDashboardData =async()=>{
   const result = await api.get("admin/dashboard")
   return result.data;
}