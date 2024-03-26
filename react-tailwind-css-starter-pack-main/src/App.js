import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname:"",lastname:"",email:"", country:"India", address:"", city:"",state:"",zip:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event)
  {
    const{name,value,checked,type} = event.target;
    setFormData( (prev) => ({
        ...prev,
        [name]:type === "checkbox" ? checked : value}) );
  }

  function submitHandler(event)
  {
    event.preventDefault();
    console.log("Printing FormData: ");
    console.log(formData);
  }
  return (
    <div className=" w-2/4 mx-auto flex flex-col flex-wrap border-2 border-slate-200">
    <form className="py-6 px-12" onSubmit={submitHandler}>

      <label htmlFor="firstname" className=" font-semibold">First Name</label>
      <br/>
      <input 
      type='text'
      placeholder="Sneha"
      name="firstname"
      id="firstname"
      value={formData.firstname}
      onChange={changeHandler}
      className="outline outline-slate-400 outline-1 rounded-md my-2 w-full pl-2 py-1"/>

      <br/>
      <br/>

      <label htmlFor="lastname" className=" font-semibold">Last Name</label>
      <br/>
      <input 
      type="text"
      placeholder="Sasmal"
      name="lastname"
      id="lastname"
      onChange={changeHandler}
      value={formData.lastname}
      className="outline outline-slate-400 outline-1 rounded-md my-2 w-full pl-2 py-1"/>

      <br/>
      <br/>

      <label htmlFor="email" className=" font-semibold">Email</label>
      <br/>
      <input type="email"
      placeholder="xyz@abc.com"
      name="email"
      id="email"
      onChange={changeHandler}
      value={formData.email}
      className="outline outline-slate-400 outline-1 rounded-md my-2 w-full pl-2 py-1"/>

      <br/>
      <br/>

      <label htmlFor="country" className=" font-semibold">Country</label>
      <br/>
      <select
      id="country"
      name="country"
      onChange={changeHandler}
      value={formData.country}
      className="outline outline-slate-400 outline-1 rounded-md my-2 w-full pl-2 py-1"
      >

        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>

      </select>

      <br/>
      <br/>

      <label htmlFor="address" className=" font-semibold">Street Address</label>
      <br/>
      <input type="text"
      placeholder=" 1234 Main St"
      name="address"
      id="address"
      onChange={changeHandler}
      value={formData.address}
      className="outline outline-slate-400 outline-1 rounded-md my-2 w-full pl-2 py-1"/>

      <br/>
      <br/>

      <label htmlFor="city" className=" font-semibold">City</label>
      <br/>
      <input type=" text"
      placeholder=" Howrah"
      name="city"
      onChange={changeHandler}
      value={formData.city}
      className="outline outline-slate-400 outline-1 rounded-md my-2 w-full pl-2 py-1"/>

      <br/>
      <br/>

      <label htmlFor="state" className=" font-semibold">State/Province</label>
      <br/>
      <input type=" text"
      placeholder=" West Bengal"
      name="state"
      onChange={changeHandler}
      value={formData.state}
      className="outline outline-slate-400 outline-1 rounded-md my-2 w-full pl-2 py-1"/>

      <br/>
      <br/>

      <label htmlFor="zip" className=" font-semibold">ZIP/Postal Code</label>
      <br/>
      <input type="number"
      placeholder=" 711201"
      name="zip"
      onChange={changeHandler}
      value={formData.zip}
      className="outline outline-slate-400 outline-1 rounded-md my-2 w-full pl-2 py-1"/>

     
      <br/>
      <br/>
      <br/>

      <fieldset>
        <legend className=" font-semibold">By Email</legend>

      <div className="flex gap-4 ">
        <input type="checkbox"
        id="comments"
        name="comments"
        checked={formData.comments}
        onChange={changeHandler}/>

        <div className="my-2">
        <label htmlFor="comments" className=" font-semibold">Comments</label>
        <p className=" text-slate-400 text-sm">Get notified when someones posts a comment on a posting.</p>
        </div>
      </div>

      <div className="flex gap-4">
        <input 
        type="checkbox"
        id="candidates"
        name="candidates"
        checked={formData.candidates}
        onChange={changeHandler}/>

        <div className="my-2">
        <label htmlFor="candidates" className=" font-semibold">Candidates</label>
        <p className=" text-slate-400 text-sm">Get notified when a candidate applies for a job.</p>
        </div>
      </div>

      <div className="flex gap-4">
        <input type="checkbox"
        id="offers"
        name="offers"
        checked={formData.offers}
        onChange={changeHandler}/>

        <div className="my-2">
        <label htmlFor="offers" className=" font-semibold">Offers</label>
        <p className=" text-slate-400 text-sm">Get notified when a candidate accepts or rejects an offer.</p>
        </div>
      </div>
      </fieldset>

      <br/>
      <br/>

      <fieldset>
        <legend className=" font-semibold">Push Notifications</legend>
        <p className=" text-slate-400 text-sm mb-2">These are delivered via SMS to your mobile phone.</p>

      <div className="flex gap-4 my-2">
        <input
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}
        />
        <label htmlFor="pushEverything" className=" font-semibold">Everything</label>
      </div>
      
      <div className="flex gap-4 my-2">
        <input
        type="radio"
        id="pushSameAsMail"
        name="pushNotifications"
        value="Same as Mail"
        onChange={changeHandler}
        />
        <label htmlFor="pushSameAsMail" className=" font-semibold">Same as Mail</label>
      </div>
      <div className="flex gap-4 my-2">
        <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
        />
        <label htmlFor="pushNothing" className=" font-semibold">No Push Notifications</label>

      </div>
      </fieldset>
    
      <br/>
      <br/>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Save</button>
      
    </form>
    </div>
    
  );
}

export default App;
