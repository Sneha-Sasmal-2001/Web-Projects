import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { apiUrl,filterData} from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [categoryFilter,setCategoryFilter] = useState(filterData[0].title);

  //fetching data from API
  const fetchData = async() => { 
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      console.log(output.data);
      setCourses(output.data);
    } 
    catch (error) {
        toast.error("Error occurs in URL accessing")
    }
    setLoading(false);
  }

  useEffect(()=>{    
      fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>

      <div className="bg-bgDark2">
        <div>
            <Filter filterData={filterData} 
            categoryFilter={categoryFilter} 
            setCategoryFilter={setCategoryFilter}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? 
            (<Spinner/>) 
            : (<Cards courses={courses} categoryFilter={categoryFilter}/>)
          }
        </div>
      </div>
      
    </div>
  );   
};

export default App;
