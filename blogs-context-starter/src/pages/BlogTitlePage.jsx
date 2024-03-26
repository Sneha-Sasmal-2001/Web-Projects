import React, { useContext, useState, useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PageContent from '../components/PageContent';
import Blog from '../components/Blog';
import { PageCounterContext } from '../context/PageCounterContext';
import { baseUrl } from '../baseUrl';
import Spinner from '../components/Spinner';
function BlogTitlePage() {
    const newURL = "https://codehelp-apis.vercel.app/api/get-blog";
    const navigate = useNavigate();

    const location = useLocation();

    const [blog,setBlog] = useState();
    const [relatedBlogs, setRelatedBlogs] = useState();

    const {loading, setLoading} = useContext(PageCounterContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newURL}?blogId=${blogId}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log(error);
            setBlog(null);
            setRelatedBlogs([]);
            <h2>Page Not Found</h2>
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId)
        {
            fetchRelatedBlogs();
        }
    }, [blogId]);
  return (
    <div>
        <NavBar/>
        <div>
            <div className='w-3/5 mx-auto'>
                <button onClick={() => navigate(-1)} className=' bg-sky-300 p-2 rounded-lg font-medium w-28 text-lg'>Back</button>
            </div>
            {
                loading ? (<Spinner/>) : 
                    blog ?
                        (
                           <div>
                               <Blog blog={blog}/>
                               <h2 className='w-3/5 mx-auto text-3xl font-bold'>Related Blogs</h2>
                               {
                                   relatedBlogs.map((eachBlog) => (
                                       <Blog key={eachBlog.id} blog={eachBlog}/>
                                   ))
                               }
                           </div>
                       ) : <h1>No Blogs Found</h1>
            }
                

        </div>
    </div>
  )
}

export default BlogTitlePage
