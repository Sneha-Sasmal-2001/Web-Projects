import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import {toast} from "react-toastify";
function Card(props){
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const isLiked = () => {
    if(likedCourses.includes(course.id))
    {
      setLikedCourses((prev) => prev.filter((cid)=> (cid !== course.id) ));
      toast.warning("Like Removed!!!");
      
    }
    else
    {
      //empty array
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      //non-empty
      else{
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked!!!");
      
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden">
        <div className='relative'>

          <img src={course.image.url} alt="" className=""/>

          <div className="bg-white w-fit h-fit rounded-full absolute right-2 top-36">
            <button onClick={isLiked} className="p-2">
              {likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)}
            </button>
          </div>

        </div>
        
        <div className='m-3'>
          <p className="text-orange-300 font-semibold text-xl leading-6">{course.title}</p>
          <p className='text-white mt-2'>
            {course.description.length > 100 ? (course.description.substring(0,100)+"...") : (course.description)}
          </p>
        </div>
    </div>
  )
}

export default Card
