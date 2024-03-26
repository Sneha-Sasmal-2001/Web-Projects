import React, { useState } from 'react'
import Card from "./Card";
//map is always applied on array
function Cards(props) {
  let courses = props.courses;
  let categoryFilter = props.categoryFilter;

  let [likedCourses,setLikedCourses] = useState([]);

  function getCourses(){
    if(categoryFilter === "All")
    {
      let allCourses = [];

      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        })
      })     

      return allCourses;
    }
    else{
      // let filterCourse = [];
      // courses[categoryFilter].forEach((courseData) => {
      //   filterCourse.push(courseData);
      // })
      // return filterCourse;

      return courses[categoryFilter];
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
    {
      getCourses().map((eachCourse) => {
        return(<Card key={eachCourse.id} 
          course={eachCourse}
          likedCourses = {likedCourses}
          setLikedCourses = {setLikedCourses}/>)
      })
    }
    </div>
  )
}

export default Cards
