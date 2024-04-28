"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [quizData, setQuizData] = useState([]);
  const [visible, setVisible] = useState();
  const router = useRouter();

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      question: question,
      options: options,
      correctAnswer: correctAnswer,
    };
    setQuizData([...quizData, newQuestion]);
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
  };

  const handleSubmission = () => {
    const query = quizData
      .map((obj) => `data=${encodeURIComponent(JSON.stringify(obj))}`)
      .join("&");
    router.push(`/question?${query}`);
  };

  return (
    <div className="add-question-container">
      <div className="top-bar">
        <h1>KAHOOT !</h1>
        <h2>New Quizz</h2>
      </div>
      <div className="question-container">
        <p className="question">
          <label className="question-label">Question:</label>
        </p>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="question-input"
        />
      </div>
      <div className="options-container">
        <div className="option-row">
          {options.slice(0, 2).map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="option-input"
              placeholder={`Option ${index + 1}`}
            />
          ))}
        </div>
        <div className="option-row">
          {options.slice(2).map((option, index) => (
            <input
              key={index + 2}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index + 2, e.target.value)}
              className="option-input"
              placeholder={`Option ${index + 3}`}
            />
          ))}
        </div>
      </div>
      <div className="correct-answer-container">
        <p className="answer">
          <label className="correct-answer-label">Correct Answer:</label>
        </p>
        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          className="correct-answer-select"
        >
          <option value="">Select correct answer</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="buttons-container">
        <button onClick={handleAddQuestion} className="add-question-button">
          Add Question
        </button>
        <Link
          href={{
            pathname: "/question",
            query: { data: JSON.stringify(quizData) },
          }}
        >
          <button onClick={() => {}} className="submit-button">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddQuestion;
