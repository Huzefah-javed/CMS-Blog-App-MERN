export function Activity ({heading, activities}){
    console.log(activities)
    return(<>
                      {/* console.log(activities) */}
                <section className="bg-white p-4 my-4 rounded-2xl dark:bg-[#ffffff10] flex-1/2">
                    <header className="text-[1.5rem] dark:text-white">{heading}</header>
                    <div className="py-4 flex flex-col gap-4">
                        {activities?.map((element, id) => {
                            const {name, title, createdAt, role, status, creatorName} = element
                        //    const data = Object.values(element)
                       let date = new Date(createdAt).toLocaleString()
                            return(

                                <section key={id} className=" bg-[#f7f7f7] shadow-2xl flex items-center justify-between p-2 dark:bg-[#ffffff18] rounded-2xl">
                                    <div className="flex gap-2">
                             {name?(           
                            <div className="size-12 rounded-3xl text-white bg-black flex justify-center items-center">{name.slice(0,1)}</div>):""}
                             <div className="flex flex-col">
                             <span className="text-[1rem] font-bold dark:text-white">{name || title.slice(0,25)+"..."}</span>
                             <span className="text-[0.75rem] font-light dark:text-white">{role || status || creatorName}</span>
                                    </div>
                             </div>
                             
                             <div className="text-[0.6rem] font-extrabold dark:text-white">{date}</div>
                             </section>
                            )
                         })}
                    </div>
                </section>        
    
        </>)
}