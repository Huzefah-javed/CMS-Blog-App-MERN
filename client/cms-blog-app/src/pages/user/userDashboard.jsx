import { useEffect, useState } from "react";
import { DashboardDetail } from "../../components/dashboardDetail";
import { SideMenuDashboard } from "../../components/sideMenu";
import { userDashboardData, userFavPostData } from "../../Api/api";
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
    
    
    async function fetchFavPost(postId){
        const data =  await userFavPostData(postId)
        return data.message
      }
      
      useEffect(() => {
  async function hello() {
    if (!apiData?.favPosts) {
      return;
    }

    const fetchedResults = [];

    for (const elem of apiData.favPosts) {
      const result = await fetchFavPost(elem);
      fetchedResults.push(result);
    }
    setFavPosts(fetchedResults);
    console.log("All posts fetched and state updated.");
  }

  hello();

}, [apiData]);
 
    


    console.log(apiData)
    console.log("here is it ",favPosts)
    const TotalComments = apiData?.commentedPosts?.length
    const TotalLikePosts = apiData?.likePosts?.length
    const TotalFavoritePosts = apiData?.favPosts?.length
    const cardsData = [{TotalComments}, {TotalLikePosts}, {TotalFavoritePosts}]
   
    return(<div className="w-full flex gap-0">
          <SideMenuDashboard />  
            <DashboardDetail activitiesData={[favPosts]} cardData={cardsData}/>
        </div>)
}