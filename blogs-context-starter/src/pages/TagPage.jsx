import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';
import PageCount from '../components/PageCount';
import PageContent from '../components/PageContent';
function TagPage() {
    const navigate = useNavigate();

    const location = useLocation();

    const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
  return (
    <div>
        <NavBar/>
        <div>
              <div className='w-3/5 mx-auto flex flex-wrap gap-4 items-center'>
                <button onClick={() => navigate(-1)} className=' bg-sky-300 p-2 rounded-lg font-medium w-28 text-lg'>Back</button>
                <h2 className='text-lg font-semibold'>Blogs Tagged <span className=' font-semibold text-2xl text-blue-800'>#{tag}</span></h2>
              </div>

        </div>
        <PageContent/>
        <PageCount/>
    </div>
  )
}

export default TagPage
