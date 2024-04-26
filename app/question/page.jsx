"use client";
import React, { useState } from "react";
import EditQuestion from "../../components/EditQuestion";

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["New York", "Paris", "London", "Tokyo"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  // Add more questions here
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState({});

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setShowAnswer(false);
    setIsEditing(false); // Close edit mode when moving to the next question
  };

  const handleEditQuestion = () => {
    setIsEditing(true);
    setEditedQuestion(questionsData[currentQuestion]);
  };

  const handleEditQuestionSubmit = (editedQuestionData) => {
    questionsData[currentQuestion] = editedQuestionData;
    setIsEditing(false);
  };

  const { question, options, answer } = questionsData[currentQuestion] || {};

  const isLastQuestion = currentQuestion === questionsData.length - 1;

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="question">{question}</div>
        <div className="options">
          {options &&
            options.map((option, index) => (
              <div key={index} className="option">
                {option}
              </div>
            ))}
        </div>
        {showAnswer && <div className="answer">Correct Answer: {answer}</div>}
        <div className="button-container">
          <button onClick={() => setShowAnswer(true)}>Show Answer</button>
          <button
            onClick={handleNextQuestion}
            disabled={isLastQuestion}
            className={isLastQuestion ? "disabled" : ""}
          >
            Next Question
          </button>
          <button onClick={handleEditQuestion}>Edit Question</button>
        </div>
      </div>
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <EditQuestion
              defaultQuestion={editedQuestion.question}
              defaultOptions={editedQuestion.options}
              defaultCorrectAnswer={editedQuestion.answer}
              onSubmit={handleEditQuestionSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
