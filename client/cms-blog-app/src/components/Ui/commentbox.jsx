import { useContext, useState } from "react";
import { addComment } from "../../Api/api";
import { IoMdClose } from "react-icons/io";
import { BsSend } from "react-icons/bs";
import { AuthContext } from "../../App";
import { toast } from "react-toastify";

export function CommentBox({ Comments=[], showComments, setShowComments, postId }) {
  const { authUser } = useContext(AuthContext);
  const [commentText, setCommentText] = useState("");
  const [allComments, setAllComments] = useState(Comments);


  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    try {
      if (commentText.trim() !== "") {
       const response = await addComment(commentText, postId);
       console.log(response)
       if (response.status === 201) {
        console.log("all comments ",allComments)
        const randomId = Math.round(Math.random() * 100)
         setAllComments((prev)=>([...prev, {_id: randomId, name: authUser.name, comment: commentText, createdAt:new Date().toLocaleDateString()}]))
         toast.success("Comment Added successfully")
         setCommentText("");
         
        }
      }
      
    } catch (error) {
      toast.error("Something went wrong")
      
    }
  };

  return (
    <div
      hidden={showComments}
      className="h-full w-full absolute top-0 left-0 z-40 bg-white dark:bg-slate-800"
    >
      <div className="h-dvh sticky top-0 left-0 flex flex-col justify-between overflow-y-scroll">
        {/* Header */}
        <span className="w-full p-4 absolute right-2 top-2 flex justify-between items-center border-b border-slate-300 dark:border-slate-600">
          <div className="dark:text-white font-extrabold text-2xl md:text-3xl">
            Comment Section
          </div>
          <div
            className="bg-black text-white dark:text-black dark:bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setShowComments(true)}
          >
            <IoMdClose />
          </div>
        </span>

        {/* Existing Comments */}
        <div className="flex flex-col gap-4 px-3 mt-20 pb-28">
          {allComments?.length === 0 ? (
            <p className="text-center text-slate-500 dark:text-slate-400 italic">
              No comments yet. Be the first one!
            </p>
          ) : (
            allComments?.map((comment, index) => {
              const commentDate = new Date(comment.createdAt).toLocaleDateString();
              return (
                <div
                  key={comment._id}
                  className={`flex items-start border-[1px] bg-white dark:bg-slate-900 border-slate-700 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${
                    index !== Comments.length - 1 ? "mb-2" : ""
                  }`}
                >
                  <img
                    src={`https://placehold.co/40x40/566173/FFFFFF?text=${comment.name.slice(
                      0,
                      1
                    )}`}
                    alt={comment.name}
                    className="rounded-full mr-3 border-2 border-slate-700 flex-shrink-0"
                  />
                  <div className="flex-1 min-h-fit">
                    {/* Header with name + date */}
                    <p className="font-semibold text-sm dark:text-white">
                      {comment.name}
                      <span className="text-xs px-3 text-slate-400 font-normal">
                        {commentDate}
                      </span>
                    </p>

                    {/* Comment text */}
                    <p className="text-sm dark:text-white mt-2 leading-relaxed break-words">
                      {comment.comment}
                    </p>

                    {/* Like/Reply - always below comment */}
                    <div className="flex gap-4 mt-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer justify-start">
                      <span className="hover:underline">Like</span>
                      <span className="hover:underline">Reply</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* New Comment Input */}
        <form
          onSubmit={(e) => handleCommentSubmit(e)}
          className="w-full sticky bottom-0 bg-white dark:bg-slate-900 p-4 flex items-center border-t border-slate-300 dark:border-slate-700"
        >
          <img
            src={`https://placehold.co/40x40/566173/FFFFFF?text=${authUser?.name.slice(
              0,
              1
            )}`}
            alt="Your Profile"
            className="rounded-full mr-3 border-2 border-slate-700 flex-shrink-0"
          />
          <div className="relative flex-1">
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Write a comment..."
              className="w-full dark:bg-slate-800 dark:text-white border-slate-900 border-[1px] rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400 transition-colors duration-200"
            >
              <BsSend className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
