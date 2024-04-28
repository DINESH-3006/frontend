"use client";
import React, { useState, useEffect } from "react";
import EditQuestion from "../../components/EditQuestion";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const Quiz = () => {
  const searchParams = useSearchParams();
  const questions = searchParams.get("data");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [questionsData, setQuestionsData] = useState(JSON.parse(questions));
  const router = useRouter();
  const params = useParams();
  // Update questionsData when the questions prop changes

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
    const updatedQuestionsData = [...questionsData];
    updatedQuestionsData[currentQuestion] = editedQuestionData;
    setQuestionsData(updatedQuestionsData);
    setIsEditing(false);
  };
  const { question, options, answer } = questionsData[currentQuestion] || {};
  const isLastQuestion = currentQuestion === questionsData.length - 1;
  console.log(question, options, answer);
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
          <button
            onClick={() => {
              setShowAnswer(true);
              console.log(answer + "i am answer");
            }}
          >
            Show Answer
          </button>
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
              defaultQuestion={question}
              defaultOptions={options}
              defaultCorrectAnswer={answer}
              onSubmit={handleEditQuestionSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
