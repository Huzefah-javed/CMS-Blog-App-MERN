import { useContext, useEffect, useState } from "react"
import { AccessActivity } from "../../components/Ui/accessActivity"
import { SideMenuDashboard } from "../../components/sideMenu"
import { approvePendingPosts, declinePendingPosts, pendingPostsData } from "../../Api/api"
import { AuthContext } from "../../App"

export const PendingPosts =()=>{
    const personData = useContext(AuthContext)
    
    const [apiData, setApiData] = useState([])
    
        useEffect(()=>{
         async function fetch(){
         const data =  await pendingPostsData()
         setApiData(data)
         }
         fetch()
        },[])

        
        console.log("personData, ", personData)

    return( <>
        <AccessActivity activities={apiData.pendingPosts}
                        heading={`Total pending posts - ${apiData.totalPendingPosts}`}
                        approval={approvePendingPosts}
                        decline={declinePendingPosts}
                        />
        
                        </>
    
            )
}