import courses from "./data/coursesData";
import CoursesCard from "./CoursesCard";
import "./Courses.css";

function Courses() {
  return (
    <div className="coursesContainer">
      <p>სასწავლო კურსები</p>

      <div className="cardsContainer">
        {courses.map((course, index) => {
          return (
            <CoursesCard
              key={index}
              image={course.img}
              courseName={course.courseName}
              status={course.status}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
