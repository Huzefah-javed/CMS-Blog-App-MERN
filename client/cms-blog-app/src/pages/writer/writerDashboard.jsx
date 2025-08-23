import { useEffect, useState } from "react";
import { DashboardDetail } from "../../components/dashboardDetail";
import { SideMenuDashboard } from "../../components/sideMenu";
import { writerDashboardData } from "../../Api/api";

export function WriterDashboard(){

const [apiData, setApiData] = useState("")

    useEffect(()=>{
     async function fetch(){
      const data =  await writerDashboardData()
     setApiData(data)
     }
     fetch()
    },[])

    console.log(apiData)
    const postActivities = apiData.totalLikesAndCommentsOnPosts
    const userActivities = apiData.latestUserJoin
    const cardsData = apiData.cardData

    return(<> 
            <DashboardDetail activitiesData={[postActivities, userActivities]} cardData={cardsData}/>
        </>)
}