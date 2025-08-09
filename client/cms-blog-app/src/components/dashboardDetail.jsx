import { IoIosArrowBack } from "react-icons/io";
import { Activity } from "./Ui/activity";
import { GridCard } from "./Ui/gridCard";

export function DashboardDetail({activitiesData, cardData}){
    console.log(activitiesData)
    return(<div className="p-4 flex-1 dark:bg-slate-900">
             <header className="flex flex-col gap-1">
                <div className="text-[2rem] dark:text-white font-extrabold ">Dashboard</div>
                <div className="text-[1rem] text-slate-500">Welcome person, here is the update</div>
            </header>   

           {cardData?( <GridCard cards={cardData} />): ""}
            <div className="w-full flex gap-5 flex-col md:flex-row">

            {activitiesData?.map((activity, id)=>{
                return(
                <Activity 
                key={id}
                heading="Recent added users"
                activities={activity}
                />
                )
            })}
               </div>
                               
        </div>)
}