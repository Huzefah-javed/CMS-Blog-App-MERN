import { useEffect, useState } from "react";
import { DashboardDetail } from "../components/dashboardDetail";
import { SideMenuDashboard } from "../components/sideMenu";
import { adminDashboardData } from "../Api/api.js";

export function AdminDashboard(){

const [apiData, setApiData] = useState("")

    useEffect(()=>{
     async function fetch(){
      const data =  await adminDashboardData()
     setApiData(data)
     }
     fetch()
    },[])

    
    const postActivities = apiData.latestPosts
    const userActivities = apiData.latestUserJoin
    const cardsData = apiData.cardData

    return(<div className="w-full flex gap-0">
          <SideMenuDashboard />  
            <DashboardDetail activitiesData={[postActivities, userActivities]} cardData={cardsData}/>
        </div>)
}