import { useState } from "react"
import { adminProfileData } from "../../Api/api"
import ProfilePage from "../../components/profile"
import { useEffect } from "react"
import { SideMenuDashboard } from "../../components/sideMenu"

export const AdminProfile =()=>{

        
            const [apiData, setApiData] = useState([])
            
                useEffect(()=>{
                 async function fetch(){
                  const data =  await adminProfileData()
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