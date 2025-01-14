import React, { useState } from 'react';
import './App.css';

const App = () => {
  const questions = [
    "Вы любите программировать?",
    "Вам нравится React?",
    "Хотите изучить что-то новое?"
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Вы ответили на все вопросы!");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{questions[currentQuestionIndex]}</h1>
      <div style={{ marginTop: '20px' }}>
        <button 
          style={{ marginRight: '20px', padding: '10px 20px', fontSize: '16px' }}
          onClick={handleAnswer}
        >
          Да
        </button>
        <button 
          style={{ padding: '10px 20px', fontSize: '16px' }}
          onClick={handleAnswer}
        >
          Нет
        </button>
      </div>
    </div>
  );
};

export default App;
