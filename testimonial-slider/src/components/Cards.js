import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
function Cards(props) {
    let eachPerson = props.eachPerson;
    return (
        <div className='flex flex-col md:relative bg-white'>

            <div className=' absolute top-[-7rem] z-[10] mx-auto'>          
                <img className=" aspect-square rounded-full w-[140px] h-[140px] z-[25]" 
                src={eachPerson.image} alt=''/>
                <div className=' w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px]'></div>
            </div>
            
            <div className=' mt-7 text-center'>
                <p className=' text-2xl font-bold capitalize tracking-wide'>{eachPerson.name}</p>
                <p className=' text-violet-300 uppercase text-sm'>{eachPerson.job}</p>
            </div>

            <div className='mx-auto mt-5 text-violet-300'>
                <FaQuoteLeft fontSize="1rem"/>
            </div>

            <p className=' text-center mt-4 text-slate-500'>
                {eachPerson.text}
            </p>

            <div className='mx-auto mt-5 text-violet-300'>
                <FaQuoteRight/>
            </div>
        </div>
    )
}

export default Cards
