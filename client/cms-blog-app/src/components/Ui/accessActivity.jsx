import { useEffect, useState } from "react"

export function AccessActivity ({heading, activities, approval, decline}){

console.log(activities)

const [data, setData] = useState([])

useEffect(()=>{
    setData(activities)
},[activities])


  const onApprove=async(id)=>{
    await approval(id)
    setData(prev=> prev.filter(elem=> elem._id!==id))
    
  }
  
  const onDecline =async(id)=>{
    await decline(id)
    setData(prev=> prev.filter(elem=> elem._id!==id))
  
  }

              return(<>

                      <div className="p-4 flex-1 dark:bg-slate-900">
                         <header className="flex flex-col gap-1">
                             <div className="text-[2rem] dark:text-white font-extrabold ">Pending persons</div>
                             <div className="text-[1rem] text-slate-500">approve or decline the requests</div>
                         </header>   

                 <section className="bg-white p-4 my-4 rounded-2xl dark:bg-[#ffffff10] flex-1/2">
                    <header className="text-[1.5rem] dark:text-white">{heading || 0}</header>
                    <div className="py-4 flex flex-col gap-4">
                        {data?.map((element, id) => {
                            const {_id, name, title, createdAt, role, status, creatorName} = element
                       let date = new Date(createdAt).toLocaleDateString()
                            return(

                                <section key={id} className=" bg-[#f7f7f7] shadow-2xl flex flex-wrap md:flex-nowrap items-center justify-between p-2 dark:bg-[#ffffff18] rounded-2xl">
                                    <div className="flex gap-2">
                             {name?( <div className="size-12 rounded-3xl text-white bg-black flex justify-center items-center">{name.slice(0,1)}</div>):""}
                             <div className="flex flex-col">
                             <span className="text-[1rem] font-bold dark:text-white">{(name )|| (title.length > 25? title.slice(0,25)+"...": title)}</span>
                             <span className="text-[0.75rem] font-light dark:text-white">{role || status || creatorName}</span>
                                    </div>
                             </div>
                             
                             <div className="flex gap-2 items-center">
                <div className="text-[0.6rem] font-extrabold dark:text-white">
                              {date}
                </div>
               
                
              </div>
              <div className="w-full md:w-auto flex gap-2 p-4">
                 <button
                  onClick={() => onApprove(_id)}
                  className="bg-green-500 hover:bg-green-600 flex-1/2 md:flex-[0] text-white font-bold py-1 px-2 rounded-lg text-xs"
                >
                  Approve
                </button>
                <button
                  onClick={() => onDecline(_id)}
                className="bg-red-500 hover:bg-red-600 flex-1/2 md:flex-[0] text-white font-bold py-1 px-2 rounded-lg text-xs"
                >
                  Decline
                </button> 
              </div>
                             </section>
                            )
                         })}
                    </div>
                </section>        
                
                </div>
                </>)
}