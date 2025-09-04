import React, { useContext, useEffect, useState } from 'react';
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { addComment, addLike, declinePendingPosts, DraftingPost, draftPostSubmit } from '../../Api/api';
import { CommentBox } from './commentbox';
import { AuthContext } from '../../App';
import { toast } from 'react-toastify';


export const FeedPostCard = ({data={}, setEditMode, setDraftPost,}) => {

  const [post, setPost] = useState(data);
  const [isLiked, setIsLiked] = useState(false);

  const [showComments, setShowComments] = useState(true);
  const postDate = new Date(post?.createdAt).toLocaleString()
  const personData = useContext(AuthContext)


   const handlePostDecline =async(id)=>{
          try {
            const response = await declinePendingPosts(id)
            if (response.status ===201) {
              console.log(post)
              setPost("")
              toast.success("Declined successfully")  
            }
            
          } catch (error) {
            toast.error("SomeThing went wrong")  
            
          }
        }
        const handlePostDraft =async(id)=>{
          try {
            const response = await DraftingPost(id)
            if(response.status === 201){
              
              console.log(post)
              setPost("")
                toast.success("Sent to writer's Draft successfully")  
            }
            
            
          } catch (error) {
            toast.error("SomeThing went Wrong")  
            
          }
        }


  const handleLikeClick = async(postId) => {
    try {
      const response = await addLike(postId)
      if (response.status === 201) {
        setPost(prev=>({...prev, likes: [...prev.likes, personData.authUser.id]}))
        toast.success("Like added successfully")  
      }
    } catch (error) {
      toast.error("Some thing went wrong")
      
    }
  };

  const handleCommentToggle = () => {
    setShowComments(false);
  };

  const onApprove=async(id)=>{
    try {
      const response =  await draftPostSubmit(id)
      if (response.status === 201) {
        toast.success("Post Submit to Admin successfully")  
      }
    } catch (error) {
      toast.success("Some thing went wrong")
      
    }
  }

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
              src={`https://placehold.co/40x40/566173/FFFFFF?text=${post?.creatorName?.slice(0,1)}`}
              alt="N"
              className="rounded-full mr-3 border-2 border-slate-700"
            />
            <div>
              <p className="font-semibold text-lg dark:text-white">{post?.creatorName}</p>
              <p className="text-sm text-slate-400">{postDate}</p>
            </div>
          </div>
          <div className="text-xl dark:text-white cursor-pointer">...</div>
        </div>

        {/* Post Title and Content */}
        <h2 className="md:text-2xl text-[1rem] font-bold mb-2 dark:text-white">{post?.title}</h2>
        <p className="dark:text-white leading-relaxed text-[0.75rem] md:text-[1rem] mb-4">{post?.post}</p>


        {post.status === "approved"?(
          <div className="flex items-center dark:text-white mb-4 border-b border-slate-800 dark:border-white pb-4">
          <button
            onClick={()=>handleLikeClick(post._id)}
            className={`flex items-center mr-6`}
          >
           {post?.likes?.includes(personData?.authUser?.id) || isLiked? <FaHeart className={`h-6 w-6 mr-1 text-red-500`}/>:< FaRegHeart className={`h-6 w-6 mr-1`}/>}
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
                <div className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-between dark:bg-gray-800 bg-white text-gray-500 p-3 rounded-lg shadow-md">
                  <span className="text-sm font-medium flex-1/2">Change status:</span>
                  <span className="space-x-2 w-full flex justify-end gap-4  flex-1/2">
                    <button onClick={()=>handlePostDecline(post._id)} className="flex-1/2 md:flex-[0] px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm transition-colors">
                      Decline
                    </button>
                    <button onClick={()=>handlePostDraft(post._id)} className="flex-1/2 md:flex-[0] px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm transition-colors">
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

