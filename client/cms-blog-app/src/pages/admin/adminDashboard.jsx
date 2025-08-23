import { useEffect, useState } from "react";
import { DashboardDetail } from "../../components/dashboardDetail";
import { adminDashboardData } from "../../Api/api";

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

    return(  <>
            <DashboardDetail activitiesData={[postActivities, userActivities]} cardData={cardsData}/>
    </>
        )
}