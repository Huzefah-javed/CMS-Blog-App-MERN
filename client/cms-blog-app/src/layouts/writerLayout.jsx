import { Outlet } from "react-router"
import { SideMenuDashboard } from "../components/sideMenu"

export const WriterLayout =()=>{

    return(<>
            
             <div className="w-full flex gap-0">
                    <SideMenuDashboard/>
                    <Outlet />
             </div>

        </>)
}