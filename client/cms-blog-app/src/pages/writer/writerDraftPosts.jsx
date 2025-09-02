import { useState } from "react"
import { PostingInterface } from "../../components/posts"
import { SideMenuDashboard } from "../../components/sideMenu"
import { useEffect } from "react"
import { draftPostSubmit, getDraftPosts } from "../../Api/api"
import { IoMdClose } from "react-icons/io"
import { CreatePost } from "../../components/createPost"
import { toast } from "react-toastify"

export const WriterDraftPosts = () => {

    
        
        const [editMode, setEditMode] = useState(true)
        const [apiData, setApiData] = useState([])
        const [draftPost, setDraftPost] = useState({title:"", post:"", draftPostId:""})

        const handleDraftPostPublish =async(e)=>{
            e.preventDefault()
            try {
                setApiData(prev=> prev.filter(Elem=> Elem._id!==draftPost.draftPostId))
                const response = await draftPostSubmit(draftPost)
                toast.success("Uploaded successfully")
                
            } catch (error) {
                toast.error("Failed to upload")
                
            }finally{
                setEditMode(true)
                
            }
        }

            useEffect(()=>{
             async function fetch(){
              const data =  await getDraftPosts()
             setApiData(data)
             }
             fetch()
            },[])
    
        return(
            <div className="flex flex-1/2">
                <div hidden={editMode} className="h-full w-full absolute z-40 inset-0  bg-[#00000067] backdrop-blur-[4px]">
                    <div className="h-lvh sticky inset-0 flex justify-center items-center">

                    <span onClick={()=>setEditMode(true)} className="absolute right-2 top-2  bg-black text-white dark:text-black dark:bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform ">
                        <IoMdClose/>
                    </span>
                    <CreatePost formSubmit={handleDraftPostPublish} setForm={setDraftPost} form={draftPost} titleVal={draftPost.title} postVal={draftPost.post} isDraftPost={true}/>
                </div>
                    </div>
            <PostingInterface apiData={apiData} setEditMode={setEditMode} setDraftPost={setDraftPost} isDraftPost={true}/>
            </div>
        )
}