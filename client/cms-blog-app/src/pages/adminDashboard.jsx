import { useEffect, useState } from "react";
import { DashboardDetail } from "../components/dashboardDetail";
import { SideMenuDashboard } from "../components/sideMenu";
import { adminDashboardData } from "../Api/getApi.js";

export function AdminDashboard(){

const [apiData, setApiData] = useState("")

    useEffect(()=>{
     async function fetch(){
      const data =  await adminDashboardData()
     setApiData(data)
     }
     fetch()
    },[])


    return(<div className="w-full flex gap-0">
          <SideMenuDashboard />  
            <DashboardDetail apiData={apiData} />
        </div>)
}