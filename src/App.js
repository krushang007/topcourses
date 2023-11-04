import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import Cards from "./components/Cards";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [category, setCategory] = useState(filterData[0].title);
  const [courses, setCourses] = useState([]);
  const [loading,setLoading]=useState(true);
  async function getCourses() {
    try{
      setLoading(true);
      const apiData = await fetch(apiUrl);
      const jsonData = await apiData.json();
      const arrOfCourses = jsonData.data;
      setLoading(false);
      setCourses(arrOfCourses);
      toast.success("Yeyy Data fetch successfully");
    }
    catch(error)
    {
      toast.error("Oops Api is not working");
    }
  }

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="bg-bgDark2 min-h-[100vh]">
      <Navbar ></Navbar>
      <div className="bg-bgDark2">
      <Filter filterData={filterData} setCategory={setCategory}></Filter>
      {loading?(<Spinner></Spinner>):(<Cards category={category}  courses={courses}></Cards>)}
      </div>
      
    </div>
  );
};

export default App;
