import { useState } from "react"
import { PostingInterface } from "../../components/posts"
import { SideMenuDashboard } from "../../components/sideMenu"
import { useEffect } from "react"
import { draftPostSubmit, getDraftPosts } from "../../Api/api"
import { IoMdClose } from "react-icons/io"
import { CreatePost } from "../../components/createPost"

export const WriterDraftPosts = () => {

    
        
        const [editMode, setEditMode] = useState(true)
        const [apiData, setApiData] = useState([])
        const [draftPost, setDraftPost] = useState({title:"", post:"", draftPostId:""})

        const handleDraftPostPublish =async(e)=>{
            e.preventDefault()
           const response = await draftPostSubmit(draftPost)
           setEditMode(true)
           console.log(response)
        }

            useEffect(()=>{
             async function fetch(){
              const data =  await getDraftPosts()
             setApiData(data)
             }
             fetch()
            },[])
    
        return(
            <div className="flex md:flex-1/2">
                <div hidden={editMode} className="h-full w-full absolute inset-0  bg-[#00000067] backdrop-blur-[4px] z-10">
                    <div className="h-lvh sticky inset-0 flex justify-center items-center">

                    <span onClick={()=>setEditMode(true)} className="bg-white p-2 absolute right-2 top-2">
                        <IoMdClose/>
                    </span>
                    <CreatePost formSubmit={handleDraftPostPublish} setForm={setDraftPost} form={draftPost} titleVal={draftPost.title} postVal={draftPost.post} isDraftPost={true}/>
                </div>
                    </div>
            <PostingInterface apiData={apiData} setEditMode={setEditMode} setDraftPost={setDraftPost} isDraftPost={true}/>
            </div>
        )
}