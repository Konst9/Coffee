import React, { useState } from 'react';
import './App.css';

const App = () => {
  const questions = [
    "Вы любите программировать?",
    "Вам нравится React?",
    "Хотите изучить что-то новое?"
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [endQuestions, setEndQuestions] = useState(null);

  const handleAnswer = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setEndQuestions("Вы ответили на все вопросы!");
    }
  };

  return (
    <div className="app-container">
      {endQuestions === null ? (
        <>
          <h1 className="question">{questions[currentQuestionIndex]}</h1>
          <div className="button-container">
            <button className="answer-button" onClick={handleAnswer}>
              Да
            </button>
            <button className="answer-button" onClick={handleAnswer}>
              Нет
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="question">{endQuestions}</h1>
          <div className="button-container">
          <button className="answer-button" onClick={handleAnswer}>
            Забрать напиток
          </button>
        </div>
      </>
      )}
    </div>
  );
};

export default App;
