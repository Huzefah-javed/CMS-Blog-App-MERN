import { useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { AuthContext } from "../App";
import { Navigate } from "react-router";

export function SideMenuDashboard({menus}){
  
  const personData = useContext(AuthContext)

  const [menuToggle, setMenuToggle] = useState(false)

const pageNameChange =(name)=>{
  setPageName(name)
}

  
console.log(menus)

    return(<>
             <div className={`${menuToggle? "w-[5%]": "w-1/4"} sticky top-0 h-dvh m-0 flex flex-col border-r border-slate-700 bg-white dark:bg-slate-900 transition-all ease-in-out duration-200`}>
               <header className="border-b border-slate-700  flex items-center justify-between p-4">
                    <h1 hidden={menuToggle} className="text-[1.7rem] text-transparent bg-clip-text font-[900] bg-gradient-to-r from-indigo-500 to-purple-600">Blog App</h1>
                    <button onClick={()=> setMenuToggle(!menuToggle)} className="p-2 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] dark:text-white rounded-[4px]">{menuToggle?<IoIosArrowForward />:<IoIosArrowBack />}</button>
               </header> 

                  <menu className="flex-1/2 flex flex-col  justify-start gap-3 border-b border-slate-700 p-2">
                { menus?.map(({menuName, navigateTo, icon}, id)=>(

                  <a key={id} onClick={()=>pageNameChange(menuName)} href={navigateTo} className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group">{icon} <span hidden={menuToggle} className="text-[1rem] font-bold">{menuName}</span></a>  
                ))
                }
                </menu>
                  
             

                <section className=" border-b border-slate-700 flex gap-2 p-2">
                  <div className="size-12 rounded-3xl text-white bg-black flex justify-center items-center">{personData.authUser.name.slice(0,1)}</div>
                    <div hidden={menuToggle} className="flex flex-col">
                    <span className="text-[1rem] font-bold dark:text-white">{personData.authUser.name}</span>
                    <span className="text-[0.75rem] font-light dark:text-white">{personData.authUser.role}</span>
                    </div>
                </section>
            </div>   
        </>)
}