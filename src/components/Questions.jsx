import React, { useState } from "react";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";

const Questions = ({ question, answer }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleQuestion = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="questions">
      <div className="question" onClick={toggleQuestion}>
        <p>{question}</p>
        <img src={isOpen ? minus : plus} alt={isOpen ? minus : plus} />
      </div>
      {isOpen && <p className="answer">{answer}</p>}
    </div>
  );
};

export default Questions;
