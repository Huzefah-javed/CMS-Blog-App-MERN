import React, { useState } from 'react';
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { addComment, addLike } from '../../Api/api';
import { CommentBox } from './commentbox';


export const FeedPostCard = ({post, setEditMode, setDraftPost}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(28);
  const [showComments, setShowComments] = useState(true);
  


  const postDate = new Date(post.createdAt).toLocaleString()

  const handleLikeClick = async(postId) => {
    console.log("loo sambho 2.0: ", postId)
    setIsLiked(!isLiked);
    const response = await addLike(postId)
    console.log("loo sambho: ", response)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentToggle = () => {
    setShowComments(false);
  };

  

  const handleEditDraftPost =(id, post, title)=>{
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
            className={`flex items-center mr-6 focus:outline-none transition-colors duration-200 ${isLiked ? 'text-red-500' : 'hover:text-red-400'}`}
          >
            < FaRegHeart className={`h-6 w-6 mr-1 overflow-hidden ${isLiked ? 'fill-red-500' : ''}`}/>
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
                  onClick={() => onApprove(_id)}
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
<CommentBox Comments={post.Comments} showComments={showComments} setShowComments={setShowComments} postId={post._id}/>


      </div>
  );
};

