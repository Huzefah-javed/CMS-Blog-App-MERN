
import { createContext, useState } from "react";
import { AdminProfile } from "./pages/admin/adminProfile";
import { WriterCreatePost } from "./pages/writer/writerCreatePost";
import { Login } from "./pages/loginpage";
import { WriterDraftPosts } from "./pages/writer/writerDraftPosts";
import { WriterProfile } from "./pages/writer/writerProfile";

export const AuthContext = createContext({})
function App(){

const [authUser, setAuthUser] = useState({})


  return(
    <>
    <AuthContext.Provider value={{authUser, setAuthUser}}>
    {/* <Registration/> */}
    {/* <Login/> */}
    {/* <UserDashboard/> */}
    {/* <AdminDashboard/> */}
    {/* <WriterDashboard/> */}
    {/* <FeedPostCard/> */}
    {/* <BlogPage/> */}
    {/* <PendingUsers/> */}
    {/* <PendingWriters/> */}
    {/* <AdminProfile/> */}
    {/* <WriterCreatePost/> */}
    {/* <WriterDraftPosts/> */}
    <WriterProfile/>
    {/* <PendingPosts/> */}
    </AuthContext.Provider>
  </>
  )
}

export default App;