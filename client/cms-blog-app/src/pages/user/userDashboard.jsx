import { useEffect, useState } from "react";
import { DashboardDetail } from "../../components/dashboardDetail";
import { SideMenuDashboard } from "../../components/sideMenu";
import { userDashboardData } from "../../Api/api";
import { AccessActivity } from "../../components/Ui/accessActivity";

export function UserDashboard(){
    
const [apiData, setApiData] = useState("")
const [favPosts, setFavPosts] = useState([])

    useEffect(()=>{
     async function fetch(){
      const data =  await userDashboardData()
     setApiData(data)
     }
     fetch()
    },[])
    

    console.log(apiData)
    
    const TotalComments = apiData?.commentedPosts?.length
    const TotalLikePosts = apiData?.likePosts?.length
    const TotalFavoritePosts = apiData?.favPosts?.length
    const cardsData = [{TotalComments}, {TotalLikePosts}, {TotalFavoritePosts}]
   
    return(<>
            <DashboardDetail cardData={cardsData}/>
        </>)
}