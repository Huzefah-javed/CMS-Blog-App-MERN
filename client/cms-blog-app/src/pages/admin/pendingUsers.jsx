import { useEffect, useState } from "react"
import { AccessActivity } from "../../components/Ui/accessActivity"
import { approvePendingUser, declinePendingUser, pendingUsersData } from "../../Api/api"

export const PendingUsers =()=>{

    const [apiData, setApiData] = useState([])
    
        useEffect(()=>{
         async function fetch(){
          const data =  await pendingUsersData()
         setApiData(data)
         }
         fetch()
        },[])

        
        

    return(<>
        <AccessActivity
                 activities={apiData.pendingUsers}
                 heading={`Total pending Users ${apiData.totalPendingUsers}`}
                approval={approvePendingUser}
                decline={declinePendingUser}
                />
        
    
            </>)
}