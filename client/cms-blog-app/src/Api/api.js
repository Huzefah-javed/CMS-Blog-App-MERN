import axios from "axios"

const api = axios.create({
    baseURL: "https://cms-blog-app-mern-production.up.railway.app",
    withCredentials: true
})

export const adminDashboardData =async()=>{
   const result = await api.get("admin/dashboard", {withCredentials: true})
   return result.data;
}
export const adminProfileData =async()=>{
   const result = await api.get("admin/profile", {withCredentials: true})
   return result.data.message;
}
export const userProfileData =async()=>{
   const result = await api.get("user/profile", {withCredentials: true})
   return result.data.message;
}

export const writerDashboardData =async()=>{
   const result = await api.get("writer/dashboard", {withCredentials: true})
   return result.data;
}
export const writerProfileData =async()=>{
   const result = await api.get("writer/profile", {withCredentials: true})
   return result.data.message;
}
export const postSubmit =async({title, post})=>{
   const result = await api.post("writer/createPost",{title, post} ,{withCredentials: true})
   return result.data;
}
export const draftPostSubmit =async({title, post, draftPostId})=>{
   const result = await api.post("writer/createPost",{title, post, draftPostId} ,{withCredentials: true})
   return result.data;
}
export const getDraftPosts =async()=>{
   const result = await api.get("writer/getDraftPosts" ,{withCredentials: true})
   return result.data.message;
}
export const postDraft =async({title, post})=>{
   const result = await api.post("writer/draftPost",{title, post} ,{withCredentials: true})
   return result.data;
}
export const DraftingPost =async(id)=>{
   const result = await api.post("admin/draftingPost",{postId: id} ,{withCredentials: true})
   return result.data;
}
export const userDashboardData =async()=>{
   const result = await api.get("user/dashboard", {withCredentials: true})
   return result.data.message;
}

export const blogPosts =async()=>{
   const result = await api.get("/feeds", {withCredentials: true})
   return result.data.message;
}
export const pendingUsersData =async()=>{
   const result = await api.get("admin/pendingUsers", {withCredentials: true})
   return result.data;
}
export const approvePendingUser =async(id)=>{
   const result = await api.get(`admin/approvingUser/${id}`, {withCredentials: true})
   return result.data;
}
export const declinePendingUser =async(id)=>{
   const result = await api.get(`admin/decliningUser/${id}`, {withCredentials: true})
   return result.data;
}
export const pendingWritersData =async()=>{
   const result = await api.get("admin/pendingWriters", {withCredentials: true})
   return result.data;
}
export const approvePendingWriter =async(id)=>{
   const result = await api.get(`admin/approvingWriter/${id}`, {withCredentials: true})
   return result.data;
}
export const declinePendingWriter =async(id)=>{
   const result = await api.get(`admin/decliningWriter/${id}`, {withCredentials: true})
   return result.data;
}
export const pendingPostsData =async()=>{
   const result = await api.get("admin/pendingPosts", {withCredentials: true})
   return result.data;
}
export const approvePendingPosts =async(postId)=>{
   const result = await api.get(`admin/pendingPosts/${postId}`, {withCredentials: true})
   return result.data
}
export const declinePendingPosts =async(postId)=>{
const result = await api.get(`admin/decliningPosts/${postId}`, {withCredentials: true})
   return result.data
}

export const addLike =async(id)=>{
   const result = await api.post("/addLike", {postId: id}, {withCredentials: true})
   return result.data;
}
export const addComment =async(userComment, id)=>{
   const result = await api.post("/addComment", {comment: userComment,postId: id}, {withCredentials: true})
   return result.data;
}

export const login =async(form)=> {
   const result = await api.post("/login", form, {withCredentials: true})
   return result.data
}

export const registration =async(form)=> {
   const result = await api.post("/userRegistration", form, {withCredentials: true})
   return result.data
}
export const logout =async()=> {
   const result = await api.get("/logout", {withCredentials: true})
   return result.data
}