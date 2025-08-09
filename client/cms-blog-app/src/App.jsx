import { FeedPostCard } from "./components/Ui/feedcard";
import { AdminDashboard } from "./pages/adminDashboard";
import { Login } from "./pages/loginpage";
import { Registration } from "./pages/registration";
import { WriterDashboard } from "./pages/writerDashboard";
import { BlogPage } from "./pages/BlogsPage";
import { createContext, useState } from "react";
import { UserDashboard } from "./pages/userDashboard";

export const AuthContext = createContext({})
function App(){

const [authUser, setAuthUser] = useState({})


  return(
    <>
    <AuthContext.Provider value={{authUser, setAuthUser}}>
    {/* <Registration/> */}
    {/* <Login/> */}
    <UserDashboard/>
    {/* <AdminDashboard/> */}
    {/* <WriterDashboard/> */}
    {/* <FeedPostCard/> */}
    {/* <BlogPage/> */}
    </AuthContext.Provider>
  </>
  )
}

export default App;