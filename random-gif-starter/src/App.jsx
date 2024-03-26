import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='flex flex-col items-center background w-full h-full'>
      <h1 className='bg-white rounded-lg text-center mt-[40px] w-11/12 text-3xl font-bold text-gray-800'>Random Gif</h1>
    
      <div className='flex flex-col w-full items-center gap-y-10 my-4'>
        <Random/>
        <Tag/>
      </div>
      
    </div>
  )
}

export default App

