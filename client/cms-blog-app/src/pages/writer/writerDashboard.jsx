import { useEffect, useState } from "react";
import { DashboardDetail } from "../../components/dashboardDetail";
import { SideMenuDashboard } from "../../components/sideMenu";
import { writerDashboardData } from "../../Api/api";
import LoadingPage from "../loading";

export function WriterDashboard(){

const [apiData, setApiData] = useState("")
const [loading, setLoading] = useState(false)

    useEffect(()=>{
     async function fetch(){
        setLoading(true)
        const data =  await writerDashboardData()
        setApiData(data)
        setLoading(false)
     }
     fetch()
    },[])

    
        if (loading) {
           return <LoadingPage/>
        }

    
    const postActivities = apiData.totalLikesAndCommentsOnPosts
    const userActivities = apiData.latestUserJoin
    const cardsData = apiData.cardData

    return(<> 
            <DashboardDetail activitiesData={[postActivities, userActivities]} cardData={cardsData}/>
        </>)
}