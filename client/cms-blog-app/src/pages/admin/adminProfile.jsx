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

                
        
            
            return(<>

        <ProfilePage profileData={apiData[0]} />
    
        </>)
}