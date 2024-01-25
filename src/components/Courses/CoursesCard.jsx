function CoursesCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Course image" />
      <div>
        <div className="card_info">
          <h1>{props.courseName}</h1>
          <p>
            {props.registrationStatus
              ? `რეგისტრაცია დასრულდება : ${props.registrationDate}`
              : "რეგისტრაცია დასრულებულია"}
          </p>
        </div>

        <div className="card_link">
          <i></i>
          <a href="">კურსის დეტალები</a>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
