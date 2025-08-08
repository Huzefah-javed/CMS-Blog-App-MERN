import { useEffect, useState } from "react"
import { blogPosts } from "../Api/api"
import { PostingInterface } from "../components/posts"
import { SideMenuDashboard } from "../components/sideMenu"

export const BlogPage =()=>{

    
    const [apiData, setApiData] = useState([])
    
        useEffect(()=>{
         async function fetch(){
          const data =  await blogPosts()
         setApiData(data)
         }
         fetch()
        },[])
    console.log(apiData)

    return(
        <div className="flex">
        <SideMenuDashboard/>
        <PostingInterface apiData={apiData}/>
        </div>
    )
}