import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


function Random() {

  const {gif,loading,fetchData} = useGif();
  function clickHandler()
  {
    fetchData();
  }

  return (
    <div className=' flex flex-col gap-y-5 items-center w-1/2 bg-green-400 rounded-lg border border-black'>
      <h1 className='text-center text-2xl underline font-bold uppercase text-white mt-[15px]'>A Random Gif</h1>

      { loading ? 
        (<Spinner/>):
        (
          <div className='overflow-hidden'>
            <img src={gif}
            alt='gif'
            width={450}
            height={250}
            className=' px-2'/>
          </div>
          
      )}
      

      <button onClick={clickHandler}
        className='  w-3/4 py-2 rounded-lg bg-green-200 uppercase mb-[20px]'>
          Generate
      </button>
    </div>
  )
}

export default Random
