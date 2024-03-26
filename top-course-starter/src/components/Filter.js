import React from 'react'

function Filter(props) {
  let filterData = props.filterData;
  let categoryFilter = props.categoryFilter;
  let setCategoryFilter = props.setCategoryFilter;

  function filterHandler(categoryTitle)
  {
    setCategoryFilter(categoryTitle);
    // console.log(categoryTitle);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
       {
        filterData.map( (data) => {
        return( 
          <button onClick = {() => filterHandler(data.title)} 
            className={`bg-bgDark text-lg text-white px-2 py-1 rounded-md font-medium hover:bg-opacity-60 border-2 transition-all duration-300
            ${categoryFilter === data.title ? " bg-opacity-60 border-white " : " bg-opacity-40 border-transparent "}
            `} 
            key={data.id}>
            {data.title}
          </button>
        )
      })
    }
    </div>
  )
}

export default Filter
