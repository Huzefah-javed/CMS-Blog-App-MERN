
import { createContext, useState } from "react";
import { AdminProfile } from "./pages/admin/adminProfile";

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
    <AdminProfile/>
    {/* <PendingPosts/> */}
    </AuthContext.Provider>
  </>
  )
}

export default App;