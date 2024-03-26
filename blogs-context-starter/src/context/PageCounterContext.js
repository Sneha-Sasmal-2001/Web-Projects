import {createContext} from "react";
import { useState , useEffect} from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const PageCounterContext = createContext();

 const PageCounterContextProvider = ({children}) => { 

    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const navigate = useNavigate();
    async function fetchData(page=1, tag=null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        //if tag is selected
        if(tag){
            url+=`&tag=${tag}`;
        }

        //if category is selected
        if(category){
            url+=`&category=${category}`;
        }
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        }
        catch(error)
        {
            console.log(error);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);    
    }

    function handlePageChange(page)
    {
        navigate({search: `?page=${page}`});
        setPage(page);
    }

    return(
        <PageCounterContext.Provider value={{loading,setLoading,posts,setPosts,page,setPage,totalPages,setTotalPages,fetchData,handlePageChange}}>
            {children}
        </PageCounterContext.Provider>
    ) 
}

export default PageCounterContextProvider




