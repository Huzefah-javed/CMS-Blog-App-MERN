import { useEffect, useState } from "react"
import { writerProfileData } from "../../Api/api"
import { SideMenuDashboard } from "../../components/sideMenu"
import ProfilePage from "../../components/profile"

export const WriterProfile = ()=>{

     const [apiData, setApiData] = useState([])
                
                    useEffect(()=>{
                     async function fetch(){
                      const data =  await writerProfileData()
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
    
                <div className="w-full flex gap-0">
            <SideMenuDashboard/>
            <ProfilePage profileData={apiData[0]} />
            </div>
        
            </>)
    }
    
}