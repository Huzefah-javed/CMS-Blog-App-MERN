import React, { useContext, useEffect, useState } from 'react';
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { addComment, addLike, declinePendingPosts, DraftingPost, draftPostSubmit } from '../../Api/api';
import { CommentBox } from './commentbox';
import { AuthContext } from '../../App';


export const FeedPostCard = ({post, setEditMode, setDraftPost}) => {

  const postDate = new Date(post.createdAt).toLocaleString()
  const personData = useContext(AuthContext)

  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(true);
  

const handlePostDecline =async(id)=>{
   const response = await declinePendingPosts(id)
   console.log(response)
}
const handlePostDraft =async(id)=>{
   const response = await DraftingPost(id)
   console.log(response)
}

  const handleLikeClick = async(postId) => {
    setIsLiked(!isLiked);
    const response = await addLike(postId)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentToggle = () => {
    setShowComments(false);
  };

  const onApprove=async(id)=>{
    await draftPostSubmit(id)
  }

  const handleEditDraftPost =(id, post, title)=>{
    console.log(id, post, title)
    setDraftPost({draftPostId:id, post:post, title:title})
    setEditMode(false)
  }



  return (
      <div className="bg-white rounded-2xl p-6 mb-12 shadow-2xl dark:bg-[#ffffff10]">

        {/* Post Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img 
              src={`https://placehold.co/40x40/566173/FFFFFF?text=${post.creatorName.slice(0,1)}`}
              alt="N"
              className="rounded-full mr-3 border-2 border-slate-700"
            />
            <div>
              <p className="font-semibold text-lg dark:text-white">{post.creatorName}</p>
              <p className="text-sm text-slate-400">{postDate}</p>
            </div>
          </div>
          <div className="text-xl dark:text-white cursor-pointer">...</div>
        </div>

        {/* Post Title and Content */}
        <h2 className="text-2xl font-bold mb-2 dark:text-white">{post.title}</h2>
        <p className="dark:text-white leading-relaxed mb-4">{post.post}</p>


        {post.status === "approved"?(
          <div className="flex items-center dark:text-white mb-4 border-b border-slate-800 dark:border-white pb-4">
          <button
            onClick={()=>handleLikeClick(post._id)}
            className={`flex items-center mr-6`}
          >
           {post?.likes?.includes(personData.authUser.id) || isLiked? <FaHeart className={`h-6 w-6 mr-1 text-red-500`}/>:< FaRegHeart className={`h-6 w-6 mr-1`}/>}
            <span className="text-lg">{post.likes.length}</span>
          </button> 
          <button
            onClick={handleCommentToggle}
            className="flex items-center mr-6 hover:text-slate-500 transition-colors duration-200 focus:outline-none"
            >
            <FaRegComment className={`h-6 w-6 mr-1`} />
            <span className="text-lg">{post.Comments.length}</span>
          </button>
          <button className="flex items-center hover:text-blue-700 transition-colors duration-200 focus:outline-none">
            <CiShare1 className="h-6 w-6 mr-1" />
            <span className="text-lg">Share</span>
          </button>
        </div>):(<div className='flex gap-4'>
          <button
                  onClick={() => onApprove(post._id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg text-xs"
                >
                  Publish
                </button>
                <button
                  onClick={() => handleEditDraftPost(post._id, post.post,post.title)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg text-xs"
                >
                  Edit
                </button> 
        </div>)
          }
          {
            personData?.authUser?.role === "admin"? (
                <div className="flex items-center justify-between bg-gray-800 text-gray-200 p-3 rounded-lg shadow-md">
                  <span className="text-sm font-medium">Change status:</span>
                  <span className="space-x-2">
                    <button onClick={()=>handlePostDecline(post._id)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm transition-colors">
                      Decline
                    </button>
                    <button onClick={()=>handlePostDraft(post._id)} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm transition-colors">
                      Draft
                    </button>
                  </span>
                </div>

                   ):""
          }
     <CommentBox
         Comments={post.Comments}
         showComments={showComments} 
         setShowComments={setShowComments} 
         postId={post._id}
         />


      </div>
  );
};

