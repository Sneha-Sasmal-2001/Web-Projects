import React from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    const [formData,setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        createPassword:"",
        confirmPassword:""
    });

    const [showCreatePassword,setShowCreatePassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const [accountType,setAccountType] = useState("student");
    const navigate = useNavigate();

    function changeHandler(event)
    {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }


    function submitHandler(event)
    {
        event.preventDefault();
        if(formData.createPassword != formData.confirmPassword)
        {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");
    }

  return (
    <div className='mt-2'>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType === "student" ?
                " bg-richblack-900 text-richblack-5"
                :" bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button className={`${accountType === "instructor" ?
            " bg-richblack-900 text-richblack-5"
            :" bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
        </div>


        <form onSubmit={submitHandler} className='relative mt-2'>
            <div className='flex justify-between gap-x-4'>
                <label>
                    <p className='w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First name<sup className='text-pink-200'>*</sup></p>
                    <input 
                        type="text"
                        name="firstname"
                        placeholder='Enter First Name'
                        value={formData.firstname}
                        onChange={changeHandler}
                        required
                        className=' bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b-[1.2px] border-richblack-700'
                    />
                </label>

                <label>
                    <p className='w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last name<sup className='text-pink-200'>*</sup></p>
                    <input 
                        type="text"
                        name="lastname"
                        placeholder='Enter Last Name'
                        value={formData.lastname}
                        onChange={changeHandler}
                        required
                        className=' bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b-[1.2px] border-richblack-700'
                    />
                </label>
            </div>
            

            <label>
                <p className='w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-2'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input 
                    type="email"
                    name="email"
                    placeholder='Enter Email Address'
                    value={formData.email}
                    onChange={changeHandler}
                    required
                    className=' bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b-[1.2px] border-richblack-700'
                />
            </label>

            <div className='flex justify-between mt-2 gap-x-4'>
                <label>
                    <p className='w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input 
                        type={showCreatePassword ? ("text"):("password")}
                        name="createPassword"
                        placeholder='Enter Password'
                        value={formData.createPassword}
                        onChange={changeHandler}
                        required
                        className=' bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b-[1.2px] border-richblack-700'
                    />
                    <span className=' absolute left-[10rem] bottom-[5.4rem]'
                        onClick={() => setShowCreatePassword((prevData)=>!prevData)}>
                        {showCreatePassword?
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AF828F'/>):
                            (<AiOutlineEye fontSize={24} fill='#AF828F'/>)
                        }
                    </span>
                </label>

                <label>
                    <p className='w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input type={showConfirmPassword ? ("text"):("password")}
                        name="confirmPassword"
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        required
                        className=' bg-richblack-800 rounded-[0.5rem] p-[12px] w-full text-richblack-5 border-b-[1.2px] border-richblack-700'
                    />
                    <span className=' absolute right-4 bottom-[5.4rem]'
                        onClick={() => setShowConfirmPassword((prevData)=>!prevData)}>
                        {showConfirmPassword?
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AF828F'/>):
                            (<AiOutlineEye fontSize={24} fill='#AF828F'/>)
                        }
                    </span>
                </label>
            </div>
            

            <button className='w-full bg-yellow-600  border border-richblack-5 rounded-[8px] font-medium px-[12px] py-[8px] gap-x-2 mt-8'>Create Account</button>           
        </form>
    </div>
    
  )
}

export default SignupForm
