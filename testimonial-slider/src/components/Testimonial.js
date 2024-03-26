import React , {useState} from 'react'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import Cards from './Cards';
function Testimonial(props) {
  let reviews = props.reviews;
  let [testimonialId,setTestimonialId] = useState(0)
  let len = reviews.length;
  function leftShiftHandler()
  {
    if(testimonialId-1<0){
      setTestimonialId(len-1);
    }
    else
    {
      setTestimonialId(testimonialId-1);
    }
    console.log(testimonialId);

  }
  function rightShiftHandler()
  {
    if(testimonialId+1>=len){
      setTestimonialId(0);
    }
    else
    {
      setTestimonialId(testimonialId+1);
    }
  }
  function surpriseHandler()
  {
    let randomIndex = Math.floor(Math.random() * len);
    setTestimonialId(randomIndex);
  }
  return(
    <div className=' w-[85vw] md:w[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl shadow-slate-400'>
      <Cards eachPerson = {reviews[testimonialId]}/>


      <div className=' flex text-2xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
          <button onClick = {leftShiftHandler}
          className=' cursor-pointer hover:text-violet-500'><FaAngleLeft/></button>
          <button onClick = {rightShiftHandler}
           className=' cursor-pointer hover:text-violet-500'><FaAngleRight/></button>
      </div>
      <button 
      onClick = {surpriseHandler}
      className=' bg-violet-400 w-fit mt-6 text-white px-10 py-2 rounded-md font-bold hover:bg-violet-500 transition-all duration-200 cursor-pointer '>Surprise Me</button>
    </div>
  )
}

export default Testimonial;
// {
      //   reviews.map((eachPerson) => {
      //     (<Cards eachPerson={eachPerson}/>)
      //   })
      // }