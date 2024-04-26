"use client";
import React, { useState } from "react";

const EditQuestion = ({
  defaultQuestion,
  defaultOptions,
  defaultCorrectAnswer,
  onSubmit,
}) => {
  const [question, setQuestion] = useState(defaultQuestion);
  const [options, setOptions] = useState([...defaultOptions]);
  const [correctAnswer, setCorrectAnswer] = useState(defaultCorrectAnswer);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleCorrectAnswerChange = (e) => {
    setCorrectAnswer(e.target.value);
  };

  const handleSubmit = () => {
    const editedQuestionData = {
      question: question,
      options: options,
      answer: correctAnswer,
    };
    onSubmit(editedQuestionData);
  };

  return (
    <div className="card">
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>
        <label>Options:</label>
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
      </div>
      <div>
        <label>Correct Answer:</label>
        <select value={correctAnswer} onChange={handleCorrectAnswerChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSubmit}>Change</button>
    </div>
  );
};

export default EditQuestion;
