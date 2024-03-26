import React from 'react'
import Blog from './Blog'
import { useContext } from 'react'
import { PageCounterContext } from '../context/PageCounterContext'
import Spinner from './Spinner'
function PageContent() {
  const {loading, posts} = useContext(PageCounterContext)
  return (
    <div className='w-full h-full pt-6 pb-16'>
      {
        loading ? <Spinner/> : 
          posts.length === 0 ? 
            <div>No Posts Available</div> : 
              posts.map( (blog) => (
                <Blog key={blog.id} blog={blog}/>
              ))
      }
    </div>
  )
}

export default PageContent
