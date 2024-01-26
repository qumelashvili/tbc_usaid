import "./CourseCard.css";

function CoursesCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Course image" />
      <div className="cardInfo">
        <div>
          <h1>{props.courseName}</h1>
          <p>
            {props.registrationStatus
              ? `რეგისტრაცია დასრულდება : ${props.registrationDate}`
              : "რეგისტრაცია დასრულებულია"}
          </p>
        </div>

        <div className="cardLink">
          <i className="fa-solid fa-arrow-right"></i>
          <a href="#">კურსის დეტალები</a>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
