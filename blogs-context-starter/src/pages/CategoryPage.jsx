import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PageContent from '../components/PageContent';
import PageCount from '../components/PageCount';

function CategoryPage() {
    const navigate = useNavigate();

    const location = useLocation();
    const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
  return (
    <div>
        <NavBar/>
        <div>
          <div className='w-3/5 mx-auto flex gap-4 items-center flex-wrap'>
            <button onClick={() => navigate(-1)} className=' bg-sky-300 p-2 rounded-lg font-medium w-28 text-lg'>Back</button>
            <h2 className='text-xl '>Blogs on <span className=' underline decoration-dashed font-semibold text-2xl'>{category}</span></h2>

          </div>
        </div>
        <PageContent/>
        <PageCount/>
    </div>
  )

}

export default CategoryPage
