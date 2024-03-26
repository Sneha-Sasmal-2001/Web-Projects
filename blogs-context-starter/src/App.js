import React, { useContext } from 'react'
import './App.css'

import { useEffect } from 'react';
import { PageCounterContext } from './context/PageCounterContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'

import Home from './pages/Home'
import BlogTitlePage from './pages/BlogTitlePage'
import CategoryPage from './pages/CategoryPage'
import TagPage from './pages/TagPage'

function App() {

  const {fetchData} = useContext(PageCounterContext);

  const [searchParams , setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags"))
    {
      //"tags" exist in path
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page),tag);
    }
    else if(location.pathname.includes("categories"))
    {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page),null,category);
    }
    else
    {
      fetchData(Number(page));

    }
  }, [location.pathname, location.search]);
  return (
    /*<div className='w-full h-full p-10 bg-blue-100 font-sans'>

      <NavBar/>
      <PageContent/>
  <PageCount/>
    </div>*/

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogTitlePage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/categories/:category" element={<CategoryPage/>} />

    </Routes>
     
  );
}

export default App


