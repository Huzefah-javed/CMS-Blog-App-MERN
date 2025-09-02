import { useEffect, useState } from "react";
import { DashboardDetail } from "../../components/dashboardDetail";
import { adminDashboardData } from "../../Api/api";
import LoadingPage from "../loading";

export function AdminDashboard(){

const [apiData, setApiData] = useState("")
const [loading, setLoading] = useState(false)

    useEffect(()=>{
     async function fetch(){
             setLoading(true)
      const data =  await adminDashboardData()
      setApiData(data)
      setLoading(false)
     }
     fetch()
    },[])


    if (loading) {
       return <LoadingPage/>
    }
    
    const postActivities = apiData.latestPosts
    const userActivities = apiData.latestUserJoin
    const cardsData = apiData.cardData

    return(  <>
            <DashboardDetail activitiesData={[postActivities, userActivities]} cardData={cardsData}/>
    </>
        )
}