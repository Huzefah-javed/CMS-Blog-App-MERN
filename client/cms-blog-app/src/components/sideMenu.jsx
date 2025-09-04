import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuLogOut, LuUsers } from "react-icons/lu";
import { AuthContext } from "../App";
import { logout } from "../Api/api";
import { CgDarkMode } from "react-icons/cg";

export function SideMenuDashboard({menus}){
  
  const personData = useContext(AuthContext)

  const [menuToggle, setMenuToggle] = useState(()=>{
   const result= localStorage.getItem("isMenubarClosed")
   return result? result : "false"
  })
  const [menuToggleSmallScreen, setMenuToggleSmallScreen] = useState(false)

useEffect(()=>{
  localStorage.setItem("isMenubarClosed", menuToggle)
},[menuToggle])

const handleMenuToggle=()=>{
  const result = menuToggle=== "false"? "true": "false"
  localStorage.setItem("isMenubarClosed", result)
  setMenuToggle(result)
}


const handleLogout =async()=>{
   const res = await logout()
   if (res.status=== 200) {
    localStorage.clear();
    window.location.href = "/";

   }

}


const handleMenuShowOnMobile =()=>{
  setMenuToggleSmallScreen(!menuToggleSmallScreen)
}

const handleMode = () => {
  const newTheme = personData.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  personData.setTheme(newTheme);
};


  

    return(<>
              <button onClick={handleMenuShowOnMobile} className="md:hidden fixed w-[3rem] z-30 h-[3rem] inset-0 p-4 dark:bg-slate-600 dark:hover:bg-slate-800 dark:text-white bg-[#ffffffab] hover:bg-white text-black rounded-[4px]"><IoIosArrowForward /></button>
             <div className={`${menuToggle=== "true"? "w-[5%]": "w-1/4"} md:sticky  z-30 top-0 md:left-0 fixed ${menuToggleSmallScreen?"left-0 w-auto":"left-[-50%]"} h-dvh m-0 flex flex-col border-r border-slate-700 bg-white dark:bg-slate-900 transition-all ease-in-out duration-200`}>
               <header className="border-b border-slate-700  flex items-center justify-between gap-4 p-4">
                    <h1 hidden={menuToggle=== "true"} className="text-[1.7rem] dmsans text-transparent bg-clip-text font-[900] bg-gradient-to-r from-indigo-500 to-purple-600">Blog App</h1>
                    <button onClick={handleMenuToggle} className="hidden md:block p-2 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] dark:text-white rounded-[4px]">{menuToggle=== "true"?<IoIosArrowForward />:<IoIosArrowBack />}</button>
              <button onClick={handleMenuShowOnMobile} className="md:hidden p-2 dark:bg-slate-600 dark:hover:bg-slate-800 dark:text-white rounded-[4px]">{menuToggle=== "true"?<IoIosArrowForward />:<IoIosArrowBack />}</button>
               </header> 

                  <menu className="flex-1/2 flex flex-col overflow-y-scroll scroll-p-0 custom-scrollbar justify-start gap-3 border-b border-slate-700 p-2">
                { menus?.map(({menuName, navigateTo, icon}, id)=>(

                  <a key={id} href={navigateTo} className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group">{icon} <span hidden={menuToggle=== "true"} className="text-[1rem] font-bold">{menuName}</span></a>  
                ))
              }
              <button onClick={()=>handleMode()} className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group"><CgDarkMode className="text-[1.2rem] group-hover:text-[1.3rem] transition-all ease-in-out duration-100" /> <span hidden={menuToggle=== "true"} className="text-[1rem] font-bold">Change mode</span></button>  
              <button onClick={()=>handleLogout()} className="flex gap-2 dark:text-white hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:cursor-pointer rounded-[4px] px-2 py-4 group"><LuLogOut className="text-[1.2rem] group-hover:text-[1.3rem] transition-all ease-in-out duration-100" /> <span hidden={menuToggle=== "true"} className="text-[1rem] font-bold">Logout</span></button>  
                </menu>
                  
             

                <section className=" border-b border-slate-700 flex gap-2 p-2">
                  <div className="size-12 rounded-3xl text-white bg-black flex justify-center items-center">{personData?.authUser?.name?.slice(0,1)}</div>
                    <div hidden={menuToggle=== "true"} className="flex flex-col">
                    <span className="text-[1rem] font-bold dark:text-white">{personData?.authUser?.name}</span>
                    <span className="text-[0.75rem] font-light dark:text-white">{personData?.authUser?.role}</span>
                    </div>
                </section>
            </div>   
        </>)
}