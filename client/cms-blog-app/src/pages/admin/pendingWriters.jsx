import { useEffect, useState } from "react"
import { AccessActivity } from "../../components/Ui/accessActivity"

import { approvePendingWriter, declinePendingWriter, pendingWritersData } from "../../Api/api"

export const PendingWriters =()=>{

    const [apiData, setApiData] = useState([])
    
        useEffect(()=>{
         async function fetch(){
          const data =  await pendingWritersData()
         setApiData(data)
         }
         fetch()
        },[])

        
        

    return(<>
        <AccessActivity
         activities={apiData.pendingWriters} 
         heading={`Total pending Writers ${apiData.totalPendingWriters}`}
         approval={approvePendingWriter}
         decline={declinePendingWriter}
         />
        
    
            </>)
}