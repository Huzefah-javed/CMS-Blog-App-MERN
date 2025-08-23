
import { useState } from "react"
import { userProfileData } from "../../Api/api"
import { useEffect } from "react"
import ProfilePage from "../../components/profile"

export const UserProfile =()=>{
 
    
            
                const [apiData, setApiData] = useState([])
                
                    useEffect(()=>{
                     async function fetch(){
                      const data =  await userProfileData()
                     setApiData(data)
                     }
                     fetch()
                    },[])
    
                    if (apiData.length===0) {
                      return <div className="w-full flex gap-0">
                        <p className="text-4xl text-gray-600">Loading...</p>
                      </div>
                        
                    }
            if (apiData.length > 0) {
                
                return(<>
    
            <ProfilePage profileData={apiData[0]} />
        
            </>)
    }
    
}