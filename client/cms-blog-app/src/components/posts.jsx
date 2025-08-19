import { FeedPostCard } from "./Ui/feedcard"

export const PostingInterface =({apiData, setEditMode,setDraftPost, isDraftPost})=> {

    return(
        <div className="p-4 flex-1 dark:bg-slate-900 min-h-lvh">
            <header className="flex flex-col gap-1">
                <div className="text-[2rem] dark:text-white font-extrabold ">{isDraftPost?"Draft Posts":"Blog feed"}</div>
                <div className="text-[1rem] text-slate-500">{isDraftPost?"Publish your drafts Posts":"Stay updated with the latest news and insights"}</div>
            </header>  
            <br className="bg-slate-900" />
            {apiData?.map((element, id)=>{
               return(

                   <FeedPostCard
                   key={element._id}
                   post={element}
                   setEditMode={setEditMode}
                   setDraftPost={setDraftPost}
                   />
                ) 
            })}
        </div>
    )
}