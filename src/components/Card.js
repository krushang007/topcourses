import React, { useState } from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

function Card({course}) {
  const [likecourse,setLikeCourse]=useState([]);
  function handleLike()
  {
    if(likecourse.includes(course.id))
    {
      setLikeCourse((prev)=>prev.filter((cid)=>(cid!==course.id)));
      toast.warn("Like removed");
    }
    else
    {
      if(likecourse.length===0)
      {
        setLikeCourse([course.id]);
      }
      else{
        setLikeCourse((prev)=>[...prev,course.id]);
      }
      toast.success("Liked added");
      }
  }
  return (
    <div className="max-w-[300px] bg-bgDark  text-white rounded-md overflow-hidden min-h-[350px] ">
            <img src={course.image.url} alt="developmenty"></img>
        <div className="relative">
            <div className="absolute right-1 -top-5  w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
              {likecourse.includes(course.id)?(<FcLike className="w-[25px] h-[25px] cursor-pointer transition-all duration-300" onClick={handleLike}></FcLike>):(<FcLikePlaceholder className="transition-all duration-300 w-[25px] h-[25px] cursor-pointer" onClick={handleLike}></FcLikePlaceholder>)}
              </div>
        </div>
        <div className="px-2 pt-4 font-bold text-md">{course.title}</div>
        <div className='mt-2 px-2 text-justify'>{course.description.substring(0,150)}...</div>
        
    </div>
  )
}

export default Card;