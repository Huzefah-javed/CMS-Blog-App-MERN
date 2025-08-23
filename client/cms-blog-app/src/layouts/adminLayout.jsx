import { Outlet } from "react-router"
import { SideMenuDashboard } from "../components/sideMenu"

export const AdminLayout =()=>{

    return(<>
            
             <div className="w-full flex gap-0">
                    <SideMenuDashboard/>
                    <Outlet />
                    </div>

        </>)
}