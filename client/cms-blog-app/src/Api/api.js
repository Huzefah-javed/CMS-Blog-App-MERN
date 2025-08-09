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
export const userDashboardData =async()=>{
   const result = await api.get("user/dashboard", {withCredentials: true})
   return result.data.message;
}

export const blogPosts =async()=>{
   const result = await api.get("user/feeds", {withCredentials: true})
   return result.data.message;
}
export const userFavPostData =async(postId)=>{
   const result = await api.get(`user/feeds/${postId}`, {withCredentials: true})
   console.log("oyeeeee ss",result.data)
   return result.data;
}
export const addLike =async(id)=>{
   const result = await api.post("user/addLike", {postId: id}, {withCredentials: true})
   return result.data;
}
export const addComment =async(userComment, id)=>{
   const result = await api.post("user/addComment", {comment: userComment,postId: id}, {withCredentials: true})
   return result.data;
}

export const login =async(form)=> {
   const result = await api.post("/login", form, {withCredentials: true})
   console.log(result.data.personDetail)
   return result.data.personDetail
}

export const registration =async(form)=> {
   const result = await api.post("/userRegistration", form, {withCredentials: true})
   console.log(result.data)
}