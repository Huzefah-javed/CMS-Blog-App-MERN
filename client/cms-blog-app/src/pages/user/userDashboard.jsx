import { useEffect, useState } from "react";
import { DashboardDetail } from "../../components/dashboardDetail";
import { SideMenuDashboard } from "../../components/sideMenu";
import { userDashboardData } from "../../Api/api";
import { AccessActivity } from "../../components/Ui/accessActivity";
import LoadingPage from "../loading";

export function UserDashboard(){
    
const [apiData, setApiData] = useState("")
const [loading, setLoading] = useState(false)

    useEffect(()=>{
     async function fetch(){
        setLoading(true)
        const data =  await userDashboardData()
        setApiData(data)
        setLoading(false)
     }
     fetch()
    },[])
    
    if (loading) {
           return <LoadingPage/>
        }

    
    
    const TotalComments = apiData?.commentedPosts?.length
    const TotalLikePosts = apiData?.likePosts?.length
    const TotalFavoritePosts = apiData?.favPosts?.length
    const cardsData = [{TotalComments}, {TotalLikePosts}, {TotalFavoritePosts}]
   
    return(<>
            <DashboardDetail cardData={cardsData}/>
        </>)
}