import Card from "./Card";
import { filterData } from "../data";

function Cards({ courses, category }) {
  
 
  function getCourses()
  {
    // changing data for showing on screen
    const allcourse = [];
    if (category === filterData[0].title) {
      Object.values(courses).forEach((courseArr) => {
        courseArr.forEach((course) => {
          allcourse.push(course);
        });
      });
      
    } else {
      return courses[category];
      
    }
    return allcourse;
  }

  return (
    <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center gap-[2rem]">
      {getCourses().map((course) => {
        return <Card key={course.id} course={course}></Card>;
      })}
    </div>
  );
}

export default Cards;
