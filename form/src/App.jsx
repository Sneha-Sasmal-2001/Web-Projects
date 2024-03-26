import { useState } from 'react'
import './App.css'

function App() {
  const [formData,setFormData] = useState({
    firstname:"",lastname:"",email:""
  })

  function changeHandler(event)
  {
    let {name,value,checked,type} = event.target;
    setFormData((prev) => {
      return{...prev,[name]:value}
    })
  }
  return (
    <>
      <div className=' flex flex-col items-center mt-2 border-2 border-black'>
        <form >
          
          <label htmlFor='firstname'>First Name</label>
          <br/>
          <input type='text'
          placeholder='first name'
          name='firstname'
          id='firstname'
          value={formData.firstname}
          onChange={changeHandler}
          className='outline border-black'/>

          <br/>
          <label htmlFor='lastname'>Last Name</label>
          <br/>
          <input type='text'
          placeholder='last name'
          name='lastname'
          id='lastname'
          value={formData.lastname}
          onChange={changeHandler}
          className='outline border-black'/>

          <br/>
          <label htmlFor='email'>Email</label>
          <br/>
          <input type='text'
          placeholder='email'
          name='email'
          id='email'
          value={formData.email}
          onChange={changeHandler}
          className='outline border-black'/>

        </form>
      </div>
      
    </>
  )
}

export default App
