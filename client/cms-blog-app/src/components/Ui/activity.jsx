export function Activity ({heading, activities}){
    
    return(<>
                      
                <section className="bg-white p-4 my-4 rounded-2xl dark:bg-[#ffffff10] flex-1/2">
                    <header className="text-[1.5rem] dark:text-white">{heading}</header>
                    <div className="py-4 flex flex-col gap-4">
                        {activities?.map((element, id) => {
                           const data = Object.values(element)
                       let date = new Date(data[3]).toLocaleString()
                            return(

                                <section key={id} className=" bg-[#f7f7f7] shadow-2xl flex items-center justify-between p-2 dark:bg-[#ffffff18] rounded-2xl">
                                    <div className="flex gap-2">
                            <div className="size-12 rounded-3xl text-white bg-black flex justify-center items-center">{data[1].slice(0,1)}</div>
                             <div className="flex flex-col">
                             <span className="text-[1rem] font-bold dark:text-white">{data[1]}</span>
                             <span className="text-[0.75rem] font-light dark:text-white">{data[2]}</span>
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