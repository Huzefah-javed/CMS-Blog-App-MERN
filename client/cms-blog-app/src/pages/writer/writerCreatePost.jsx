import { useState } from "react"
import { CreatePost } from "../../components/createPost"
import { SideMenuDashboard } from "../../components/sideMenu"
import { postDraft, postSubmit } from "../../Api/api"
import LoadingPage from "../loading"
import { toast } from "react-toastify"

export function WriterCreatePost(){
  const [form, setForm] = useState({title:"", post:""})

  
  const handlePostDraft =async(e)=>{
    e.preventDefault()
    const id = toast.loading("Uploading...");
     try {
       const response = await postDraft(form)
         toast.update(id, {
           
          render: "Drafted successfully",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        })
       
      
     } catch (error) {
      toast.update(id, {
          render: "Failed to draft post ❌",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
     }
      
    }
    
    
    const handleFormSubmit=async(e)=>{
      e.preventDefault()
      const id = toast.loading("Uploading...");
      try {
        
        const response = await postSubmit(form)
        toast.update(id, {
           
          render: "Uploaded successfully",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        })
        setForm({title:"", post:""})

      } catch (error) {
        toast.update(id, {
          render: "Failed to upload post ❌",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
  }


  return(<>
      
      <div className="min-h-screen w-full flex-1/2 flex items-center justify-center bg-[#f4f4f4] dark:bg-slate-800 px-4 py-8">
      <CreatePost setForm={setForm} form={form} formSubmit={handleFormSubmit} formDraft={handlePostDraft}/>
      </div>
        </>)
}