import React from 'react'
import { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {
    const [formData,setFormData] = useState({email:"",password:""});
    const [isPasswordShowing,setIsPAsswordShowing] = useState(false);
    const navigate = useNavigate();
    function changeHandler(event)
    {
        setFormData((prevData) => {
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6 relative'>
        <label htmlFor='email' className='w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></label>
        <input type="email"
            id='email'
            name="email"
            value={formData.email}
            placeholder='Enter your email address'
            required
            onChange={changeHandler}
            className=' bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b-[1.2px] border-richblack-700'/>
        
        <label htmlFor='password' className='w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></label>
        <input type={isPasswordShowing?("text"):("password")}
            id='password'
            name="password"
            value={formData.password}
            placeholder='Enter password'
            required
            onChange={changeHandler}
            className=' bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b-[1.2px] border-richblack-700'/>

            <span className=' absolute right-4 top-40'
            onClick={()=>{setIsPAsswordShowing((prev) => !prev)}}>
                {isPasswordShowing ? (<AiOutlineEyeInvisible fontSize={24} fill='#AF828F'/>):(<AiOutlineEye fontSize={24} fill='#AF828F'/>)}
            </span>
        <Link className='absolute right-0 top-52 text-blue-500 text-sm'>Forgot Password</Link>

        <button className='w-full bg-yellow-600  border border-richblack-5 rounded-[8px] font-medium px-[12px] py-[8px] gap-x-2 mt-8'>Sign In</button>
    </form>
  )
}

export default LoginForm
