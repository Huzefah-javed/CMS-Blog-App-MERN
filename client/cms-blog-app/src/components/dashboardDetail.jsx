import { IoIosArrowBack } from "react-icons/io";
import { Activity } from "./Ui/activity";
import { GridCard } from "./Ui/gridCard";

export function DashboardDetail({apiData}){
    console.log(apiData)
    const postActivities = apiData.latestPosts
 const userActivities = apiData.latestUserJoin
 const cardsData = apiData.cardData

    return(<div className="p-4 flex-1 dark:bg-slate-900">
             <header className="flex flex-col gap-1">
                <div className="text-[2rem] dark:text-white font-extrabold ">Dashboard</div>
                <div className="text-[1rem] text-slate-500">Welcome person, here is the update</div>
            </header>   

            <GridCard cards={cardsData} />

            <Activity 
                heading="Recent added users"
                activities={userActivities}
                />
            <Activity 
                heading="Recent added posts"
                activities={postActivities}
                />
                               
        </div>)
}