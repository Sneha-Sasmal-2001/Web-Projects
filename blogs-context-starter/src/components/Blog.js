import React from 'react'
import { NavLink } from 'react-router-dom'

function Blog({blog}) {
  return (
    <div className=' flex flex-col justify-center items-start mx-auto w-3/5 leading-loose p-6 rounded-md mb-6 shadow-xl bg-white'>
      <NavLink to={`/blog/${blog.id}`}> 
        <h2 className='font-bold text-2xl'>{blog.title}</h2>
      </NavLink>
      <p>By <span className=' text-gray-600 italic'>{blog.author}</span> on <NavLink to={`/categories/${blog.category.replaceAll(" ","-")}`}><span  className=' font-semibold underline decoration-dashed'>{blog.category}</span></NavLink></p>
      <p>Posted on {blog.date}</p>
      <p className='leading-tight'>{blog.content}</p>
      <p className='flex justify-center items-center gap-2 flex-wrap'>
        {blog.tags.map((eachTag,index)=> (
          <NavLink key={index} to={`/tags/${eachTag.replaceAll(" ","-")}`}><span className=' text-blue-600 font-semibold underline'>#{eachTag}</span></NavLink>
          
        ))}
      </p>
    </div>
  )
}

export default Blog
