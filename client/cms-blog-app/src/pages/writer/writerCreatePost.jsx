import { useState } from "react"
import { CreatePost } from "../../components/createPost"
import { SideMenuDashboard } from "../../components/sideMenu"
import { postDraft, postSubmit } from "../../Api/api"

export function WriterCreatePost(){
  const [form, setForm] = useState({title:"", post:""})

  const handlePostDraft =async(e)=>{
     e.preventDefault()
    const response = await postDraft(form)
    console.log(response)
    console.log("form drafted successfully") 
  }


  const handleFormSubmit=async(e)=>{
    e.preventDefault()
    const response = await postSubmit(form)
    console.log(response)
    console.log("form Submitted successfully")
  }

  return(<>
      
      <div className="min-h-screen w-full flex-1/2 flex items-center justify-center bg-[#f4f4f4] dark:bg-slate-800 px-4 py-8">
      <CreatePost setForm={setForm} form={form} formSubmit={handleFormSubmit} formDraft={handlePostDraft}/>
      </div>
        </>)
}