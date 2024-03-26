import React from 'react'
import { useContext } from 'react'
import { PageCounterContext } from '../context/PageCounterContext';


function PageCount() {
  const {page, totalPages, handlePageChange} =useContext(PageCounterContext);

  return (
    <div className='flex w-full justify-around items-cente px-16 py-2 flex-wrap fixed bottom-0 left-0 bg-white '>
      <div className='flex gap-2'>
          { page>1 ?
            <button onClick={() => handlePageChange(page-1)} className=' bg-sky-300 p-2 rounded-lg font-medium w-28 text-lg'>Previous</button> : ""
          }
          {
            page<totalPages ? 
            <button onClick={() => handlePageChange(page+1)} className=' bg-sky-300 p-2 rounded-lg font-medium w-28 text-lg'>Next</button> : ""
          }
        </div>  
        <div>Page <span className=' font-bold'>{page}</span> out of <span className=' font-bold'>{totalPages}</span></div>
    </div>
  )
}

export default PageCount
