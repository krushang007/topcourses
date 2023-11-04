import React, { useState } from "react";

function Filter({ filterData,setCategory,category}) {
  const [cat,setCat]=useState("All");
    function changeFilter(title)
    {
        filterData.filter((data)=>
        {
            if(data.title===title)
            {
                setCategory(data.title);
                setCat(data.title);
                
            }
            return true;
        });
    }
     
    
    return (
    <div className=" flex justify-center flex-wrap">
      {filterData.map((filter) => {
        return <button className={`userselect-none text-white font-semibold m-3 px-4 py-2 rounded-md bg-[#2214547a]
        ${cat===filter.title?"bg-blue-400 border-red-700":""}
        `}
         onClick={()=>changeFilter(filter.title)} key={filter.id}>{filter.title}</button>;
      })}
    </div>
  );
}

export default Filter;
