import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";

import { fetchQuestions } from './API';
import { QuestionState, Difficulty } from "./API";

import { GlobalStyle, Wrapper } from "./App.styles";



export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestios] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)



  const startApi = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM
    );

    setQuestios(newQuestions)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLoading(false)
  };


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1)

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }

      setUserAnswer(prev => [...prev, answerObject])

    }
  };


  const nextQuestion = () => {
    const nextQuestion = number + 1

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  };


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1> React Quiz </h1>

        {gameOver || userAnswer.length === TOTAL_QUESTIONS ?
          (
            <button className="start" onClick={startApi}>
              Start
            </button>
          ) : null}

        {!gameOver ? <p className="score"> Score: {score} </p> : null}

        {loading && <p>Loading Questions ... <br /> Check your network if not load</p>}


        {!loading && !gameOver && (
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            callback={checkAnswer}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
          />
        )}


        {!loading &&
          !gameOver &&
          userAnswer.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}> Next </button>

        ) : null
        }
      </Wrapper>
    </>
  );
};

export default App;
