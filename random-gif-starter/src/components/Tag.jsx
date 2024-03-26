import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag,setTag] = useState('car');
  const {gif,loading,fetchData} = useGif(tag);

  function clickHandler()
  {
    fetchData();
  }

  function changeHandler(event)
  {
    setTag(event.target.value);
  }
  return (
    <div className=' flex flex-col gap-y-5 items-center w-1/2 min-h-[450px] bg-violet-400 rounded-lg border border-black'>
      <h1 className='text-center text-2xl underline font-bold uppercase text-white'>Random {tag} GIF</h1>

      { loading ? 
        (<Spinner/>):
        (
          <div className='overflow-hidden'>
            <img src={gif}
            alt='gif'
            width={450}
            height={250}
            className='px-2'/>
          </div>
          
      )}

      <input type='text'
        className='w-3/4 p-2 rounded-lg text-center'
        onChange={changeHandler}
        value={tag}/>
      <button onClick={clickHandler}
        className='  w-3/4 py-1 mb-[20px] rounded-lg bg-violet-200 uppercase'>Generate</button>
    </div>
  )
}

export default Tag
