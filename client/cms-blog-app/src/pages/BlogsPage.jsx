import { useEffect, useState } from "react"
import { blogPosts } from "../Api/api"
import { PostingInterface } from "../components/posts"
import { SideMenuDashboard } from "../components/sideMenu"
import LoadingPage from "./loading"

export const BlogPage =()=>{

    
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(false)
    
        useEffect(()=>{
         async function fetch(){
            setLoading(true)
            const data =  await blogPosts()
            setApiData(data)
            setLoading(false)
         }
         fetch()
        },[])

        if (loading) {                 
            return <LoadingPage/>    
        }

    return(<>
        <PostingInterface apiData={apiData}/>
        </>
    )
}