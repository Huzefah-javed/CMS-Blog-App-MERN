import { useState } from "react";
import { addComment } from "../../Api/api";
import { IoMdClose } from "react-icons/io";
import { BsSend } from "react-icons/bs";

export function CommentBox({Comments, showComments, setShowComments, postId}){

     const [commentText, setCommentText] = useState('');


    const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async(event) => {
    event.preventDefault();
    if (commentText.trim() !== '') {      
      await addComment(commentText, postId)
      console.log('Submitted comment:', commentText);
      setCommentText('');
    }
  };

  console.log(commentText)

    return(<div hidden={showComments} className="h-full w-full absolute top-0 left-0 bg-[#00000067] backdrop-blur-[4px] z-10">
        <div className="h-dvh sticky top-0 left-0 flex flex-col justify-between gap-8 overflow-y-scroll">

        <span className="w-full p-4 absolute right-2 top-2 flex justify-between items-center">
                                <div className="text-white font-extrabold text-4xl">Comment section </div>
                               <div className="bg-white p-2" onClick={()=>setShowComments(true)}><IoMdClose/></div>
        </span>

                    {/* Existing Comment */}
                    <div className="flex flex-col gap-4 mt-20">

                      {Comments.map((comment)=>{
                          const commentDate = new Date(comment.createdAt).toLocaleString()
                        return(
                    <div key={comment._id} className="flex max-h-fit items-start border-[1px] bg-white dark:bg-slate-900 border-slate-700 p-4 rounded-2xl">
        
                          <img
                          src={`https://placehold.co/36x36/566173/FFFFFF?text=${comment.name.slice(0,1)}`}
                          alt={comment.name}
                          className="rounded-full mr-3 border-2 border-slate-700"
                          />
                      <div className="flex-1 min-h-fit overflow-hidden">
                        <p className="font-semibold text-sm dark:text-white">{comment.name}<span className="text-xs px-4 text-slate-400 font-normal">{commentDate}</span></p>
                        <p className="text-sm dark:text-white mt-1">{comment.comment}</p>
                       
                      </div>
                    </div>
                  )
                })}
                </div>
        
                    {/* New Comment Input */}
                    <form onSubmit={(e)=>handleCommentSubmit(e)} className={`w-full sticky bottom-0 bg-white dark:bg-slate-800 p-4 flex items-center`}>
                      <img
                        src="https://placehold.co/36x36/566173/FFFFFF?text=Y"
                        alt="Your Profile"
                        className="rounded-full mr-3 border-2 border-slate-700"
                      />
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={commentText}
                          onChange={handleCommentChange}
                          placeholder="Write a comment..."
                          className="w-full dark:bg-slate-800 dark:text-white border-slate-900 border-[1px] rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400 transition-colors duration-200">
                          <BsSend className="h-6 w-6" />
                        </button>
                      </div>
                    </form>
                
    
        </div>
          </div>)
}