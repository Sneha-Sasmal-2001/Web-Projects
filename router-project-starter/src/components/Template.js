import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frameImage from '../assets/frame.png'
import {FcGoogle} from 'react-icons/fc'
const Template = ({title,description1,description2,image,formType,setIsLoggedIn}) => {

  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between '>
      <div className='w-11/12 max-w-[450px] relative -top-4'>
        <h1 className='text-richblack-5 text-[1.87rem] leading-[2.375rem] font-semibold'>{title}</h1>
        <p className=' text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100'>{description1}</span>
            <br/>
            <spann className='italic text-blue-100'>{description2}</spann>
        </p>
        
        {formType === "signup" ?
        (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
        (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        <div className=' flex w-full items-center my-4 gap-x-2 text-richblack-100'>
            <div className='h-[1px] w-full bg-richblack-700'></div>
            <div className='text-richblack-700 font-medium leading-[1.375rem]'>OR</div>
            <div className='h-[1px] w-full bg-richblack-700'></div>
        </div>

        <button className=' text-richblack-100 w-full border border-richblack-700 rounded-[8px] font-medium flex justify-center items-center px-[12px] py-[8px] gap-x-2 mt-4'>
          <FcGoogle/>
          Sign Up With Google
        </button>

      </div>

      <div className=' relative w-11/12 max-w-[450px] text-white'>
        {/*background pattern image is same for login and signup so imported*/}
        <img src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"/>

          <img src={image}
            alt="Students"
            width={558}
            height={490}
            loading="lazy"
            className='absolute -top-4 right-4'/>
      </div>
    </div>
  )
}

export default Template
