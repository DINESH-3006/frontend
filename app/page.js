"use client";
import React, { useState } from "react";
import "./App.css"; // Import external stylesheet
// import Link from "next/link";
import { useRouter } from "next/navigation";

function GamePage() {
  const [gamePin, setGamePin] = useState("");

  const handleEnter = () => {
    // Handle functionality when "Enter" button is clicked
    console.log("Game Pin entered:", gamePin);
  };

  const router = useRouter();
  const handleCreateQuiz = () => {
    router.push("/addQuiz");
  };
  return (
    <div className="background">
      <div className="container">
        <div className="top-bar">
          <h1 className="">KAHOOT !</h1>
        </div>
        <div className="white-container">
          <input
            type="text"
            value={gamePin}
            onChange={(e) => setGamePin(e.target.value)}
            placeholder="Enter Game Pin"
            className="game-pin-input"
          />
          <button onClick={handleEnter} className="enter-button">
            Enter
          </button>
        </div>
        <button onClick={handleCreateQuiz} className="create-quizz-button">
          Create a Quizz
        </button>
      </div>
    </div>
  );
}

export default GamePage;
