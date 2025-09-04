
import { createContext, useEffect, useState } from "react";
import { AdminProfile } from "./pages/admin/adminProfile";
import { WriterCreatePost } from "./pages/writer/writerCreatePost";
import { Login } from "./pages/loginpage";
import { WriterDraftPosts } from "./pages/writer/writerDraftPosts";
import { WriterProfile } from "./pages/writer/writerProfile";
import { WriterDashboard } from "./pages/writer/writerDashboard";
import { BlogPage } from "./pages/BlogsPage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { UserDashboard } from "./pages/user/userDashboard";
import { AdminDashboard } from "./pages/admin/adminDashboard";
import { PendingUsers } from "./pages/admin/pendingUsers";
import { PendingPosts } from "./pages/admin/pendingPost";
import { PendingWriters } from "./pages/admin/pendingWriters";
import { AdminLayout } from "./layouts/adminLayout";
import { WriterLayout } from "./layouts/writerLayout";
import { UserProfile } from "./pages/user/userProfile";
import { UserLayout } from "./layouts/userLayout";
import { Registration } from "./pages/registration";
import NotFound from "./pages/404";
import UserNotApproved from "./pages/userNotApprove"
import { ToastContainer } from 'react-toastify';

export const AuthContext = createContext({})
function App(){

const [theme, setTheme] = useState(()=>{
  const curTheme = localStorage.getItem("theme")
  return curTheme? curTheme :"light"
})

const [authUser, setAuthUser] = useState(()=>{
const storageData = localStorage.getItem("userAuth")
  return  storageData? JSON.parse(storageData): {}
})

useEffect(()=>{
  document.getElementById("root").className = theme
},[theme])

useEffect(()=>{
  localStorage.setItem("userAuth", JSON.stringify(authUser))
},[authUser])

const roleBasedRoute =()=>{
  if (authUser.role === "user") {
    return  {
            path: "/user",
            element: <UserLayout/>,
            children:[
              {
                path: "dashboard",
                element: <UserDashboard/>
              },
              {
                path: "feeds",
                element: <BlogPage/>
              },
              {
                path: "profile",
                element: <UserProfile/>
              },
            ]
          }
  }else if(authUser.role === "admin"){
    return  {
            path: "/admin",
            element: <AdminLayout/>,
            children:[
              {
                 path: "dashboard",
                element: <AdminDashboard/>
              },
              {
                 path: "profile",
                element: <AdminProfile/>
              },
              {
                 path: "pending-users",
                element: <PendingUsers/>
              },
              {
                 path: "pending-posts",
                element: <PendingPosts/>
              },
              {
                 path: "pending-writers",
                element: <PendingWriters/>
              },
              {
                 path: "feeds",
                element: <BlogPage/>
              },
              {
                 path: "logout",
                element: <Login/>
              },
            ]
          }
  }else if(authUser.role === "writer"){
    return  {
            path: "/writer",
            element: <WriterLayout/>,
            children:[
              {
                path: "dashboard",
                element: <WriterDashboard/>
              },
              {
                path: "create-post",
                element: <WriterCreatePost/>
              },
              {
                path: "draft-posts",
                element: <WriterDraftPosts/>
              },
              {
                path: "profile",
                element: <WriterProfile/>
              },
              {
                path: "feeds",
                element: <BlogPage/>
              },
            ]
          }
  }else{
    return  {
            path: "/",
            element: <Login/>,
          }
  }
}



const route = roleBasedRoute()
const router = createBrowserRouter([
  {
  path: "/",
  element: Object.keys(authUser).length === 0?  <Login/>: authUser.isApprove === true? <Navigate to={`/${authUser.role}/dashboard`} />:<UserNotApproved/>,
    },
  {
  path: "/registration",
  element: Object.keys(authUser).length === 0?  <Registration/>: <Navigate to={`/${authUser.role}/dashboard`} />,
    },
    route,
     { path: "*", element: <NotFound /> }
])


  return(
    <>
    <AuthContext.Provider value={{authUser, setAuthUser, theme, setTheme}}>
    <RouterProvider router={router}>

    </RouterProvider>
    </AuthContext.Provider>
    <ToastContainer />
  </>
  )
}

export default App;