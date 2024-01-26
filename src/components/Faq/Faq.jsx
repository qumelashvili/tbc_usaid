import { useState } from "react";
import faqData from "./data/faqData";
import "./Faq.css";

function Faq() {
  const [visibleQuestion, setVisibleQuestion] = useState(); // Store questionID

  const toggleAnswerVisibility = (questionId) => {
    setVisibleQuestion((prevVisibleQuestion) =>
      prevVisibleQuestion === questionId ? null : questionId
    );
  };

  return (
    <div className="faq">
      <div className="faqHeader">
        <h1>ხშირად დასმული კითხვები</h1>
        <a href="#">ყველა კითხვა</a>
      </div>

      {faqData.map((item, index) => (
        <div className="faqRow" key={index}>
          <div
            className="faqQuestion"
            onClick={() => toggleAnswerVisibility(item.id)}
          >
            <p>{item.question}</p>
            <i
              className={`fa-solid ${
                visibleQuestion === item.id ? "fa-arrow-up" : "fa-arrow-down"
              }`}
            ></i>
          </div>

          {visibleQuestion === item.id && (
            <p className="faqAnswer">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
