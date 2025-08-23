import { Outlet } from "react-router"
import { SideMenuDashboard } from "../components/sideMenu"
import { MdSpaceDashboard, MdCreate, MdDrafts } from "react-icons/md";
import { FaBlog, FaUserCircle } from "react-icons/fa";
import { CgFeed } from "react-icons/cg";
export const WriterLayout =()=>{

       const menu = [
  {
    menuName: "Dashboard",
    navigateTo: "dashboard",
    icon: <MdSpaceDashboard className="text-[1.2rem] group-hover:text-[1.3rem] transition-all ease-in-out duration-100" />
  },
  {
    menuName: "Create Post",
    navigateTo: "create-post",
    icon: <MdCreate className="text-[1.2rem] group-hover:text-[1.3rem] transition-all ease-in-out duration-100" />
  },
  {
    menuName: "Draft Post",
    navigateTo: "draft-posts",
    icon: <MdDrafts className="text-[1.2rem] group-hover:text-[1.3rem] transition-all ease-in-out duration-100" />
  },
  {
    menuName: "Blogs",
    navigateTo: "feeds",
    icon: <CgFeed className="text-[1.2rem] group-hover:text-[1.3rem] transition-all ease-in-out duration-100" />
  },
  {
    menuName: "Profile",
    navigateTo: "profile",
    icon: <FaUserCircle className="text-[1.2rem] group-hover:text-[1.3rem] transition-all ease-in-out duration-100" />
  },
];



    return(<>
            
             <div className="w-full flex gap-0 relative">
                    <SideMenuDashboard menus={menu}/>
                    <Outlet />
             </div>

        </>)
}