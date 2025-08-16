import { useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { AuthContext } from "../App";

export function SideMenuDashboard(){

  const [menuToggle, setMenuToggle] = useState(false)

const personData = useContext(AuthContext)
// console.log("personData, ", personData)

    return(<>
             <div className={`${menuToggle? "w-[5%]": "w-1/4"} sticky top-0 h-dvh m-0 flex flex-col border-r border-slate-700 bg-white dark:bg-slate-900 transition-all ease-in-out duration-200`}>
               <header className="border-b border-slate-700  flex items-center justify-between p-4">
                    <h1 hidden={menuToggle} className="text-[1.5rem] dark:text-white font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600">Dashboard</h1>
                    <button onClick={()=> setMenuToggle(!menuToggle)} className="p-2 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] dark:text-white rounded-[4px]">{menuToggle?<IoIosArrowForward />:<IoIosArrowBack />}</button>
               </header> 

                <menu className="flex-1/2 flex flex-col  justify-evenly border-b border-slate-700 p-2">
                  <li className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group"><LuUsers className="text-[1.2rem]  group-hover:text-[1.3rem] transition-all ease-in-out duration-100" /> <span hidden={menuToggle} className="text-[1rem] font-bold">Users</span></li>  
                  <li className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group"><LuUsers className="text-[1.2rem]  group-hover:text-[1.3rem] transition-all ease-in-out duration-100" /> <span hidden={menuToggle} className="text-[1rem] font-bold">Users</span></li>  
                  <li className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group"><LuUsers className="text-[1.2rem]  group-hover:text-[1.3rem] transition-all ease-in-out duration-100" /> <span hidden={menuToggle} className="text-[1rem] font-bold">Users</span></li>  
                  <li className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group"><LuUsers className="text-[1.2rem]  group-hover:text-[1.3rem] transition-all ease-in-out duration-100" /> <span hidden={menuToggle} className="text-[1rem] font-bold">Users</span></li>  
                  <li className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group"><LuUsers className="text-[1.2rem]  group-hover:text-[1.3rem] transition-all ease-in-out duration-100" /> <span hidden={menuToggle} className="text-[1rem] font-bold">Users</span></li>  
                  <li className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group"><LuUsers className="text-[1.2rem]  group-hover:text-[1.3rem] transition-all ease-in-out duration-100" /> <span hidden={menuToggle} className="text-[1rem] font-bold">Users</span></li>  
                  <li className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group"><LuUsers className="text-[1.2rem]  group-hover:text-[1.3rem] transition-all ease-in-out duration-100" /> <span hidden={menuToggle} className="text-[1rem] font-bold">Users</span></li>  
                 
             
                </menu>

                <section className=" border-b border-slate-700 flex gap-2 p-2">
                  <div className="size-12 rounded-3xl text-white bg-black flex justify-center items-center">H</div>
                    <div hidden={menuToggle} className="flex flex-col">
                    <span className="text-[1rem] font-bold dark:text-white">{personData.name}</span>
                    <span className="text-[0.75rem] font-light dark:text-white">{personData.role}</span>
                    </div>
                </section>
            </div>   
        </>)
}