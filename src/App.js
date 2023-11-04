import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { filterData,apiUrl } from "./data";
import Cards from "./components/Cards";
import { Toast, ToastContainer } from "react-toastify/dist/components";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const[category,setCategory]=useState(filterData[0].title);
  const [courses,setCourses]=useState([]);
  
    async function getCourses()
    {
        const allcourse=[];
        const apiData= await fetch(apiUrl);
        const jsonData=await apiData.json();
        const arrOfCourses=jsonData.data;
        setCourses(arrOfCourses);
        Toast.sucess("Yeyy Data fetch successfully");
    }
    
    
    useEffect(()=>
    {
        getCourses();
    },[]);
  return <div>
        <Navbar></Navbar>
        <Filter filterData={filterData} setCategory={setCategory} ></Filter>
        <Cards category={category} courses={courses}></Cards>
        <Spinner></Spinner>
  </div>;
};

export default App;
