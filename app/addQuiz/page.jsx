"use client";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../../app/App.css"; // Import external stylesheet
import { useRouter } from "next/navigation";

function QuizDetails() {
  const [creatorName, setCreatorName] = useState("");
  const [category, setCategory] = useState("");
  //   const navigate = useNavigate();
  const router = useRouter();

  const handleContinue = () => {
    const quizDetails = {
      creatorName: creatorName,
      category: category,
    };
    console.log("Quiz Details:", quizDetails);

    // navigate("/addquestion");
    router.push("addQuestion");
  };

  return (
    <>
      <div className="top-bar">
        <h1>KAHOOT !</h1>
        <h2>New Quizz</h2>
      </div>
      <div className="quiz-details-outer-container">
        <div className="quiz-details-container">
          <h2 className="quiz-details-heading">Quiz Details</h2>
          <div className="input-container">
            <label className="input-label">Quiz Creator Name:</label>
            <input
              type="text"
              value={creatorName}
              onChange={(e) => setCreatorName(e.target.value)}
              className="input-field"
              placeholder="Enter your name"
            />
          </div>
          <div className="input-container">
            <label className="input-label">Category of Quiz:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-field"
              placeholder="Enter category"
            />
          </div>
          <button onClick={handleContinue} className="continue-button">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default QuizDetails;
