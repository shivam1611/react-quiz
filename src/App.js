import { useEffect, useReducer } from "react";
import "./App.css";

import Header from "./Header";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Error from "./Error";
import Question from "./Question";
import ProgessBar from "./ProgessBar";
import TopContainer from "./TopContainer";

function App() {
  const initialState = {
    question: [],
    status: "loading",
    index: 0,
    selectedAnswer: null,
    points: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataRecieved":
        console.log(action.payload);
        return {
          ...state,
          question: action.payload,
          status: "ready",
        };
      case "active":
        return {
          ...state,
          status: "active",
        };
      case "newAnswer":
        const question = state.question.at(state.index);
        return {
          ...state,
          selectedAnswer: action.payload,
          state:
            action.payload === question.correctOption
              ? (state.points = state.points + question.points)
              : state.points,
        };

      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          selectedAnswer: null,
        };
      default:
        throw new Error("Action Unknown");
    }
  }

  const [{ question, status, index, selectedAnswer, points }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);
  const questionLength = question?.length;

  const totalScore = question.reduce((prev, cur) => prev + cur.points, 0);
  return (
    <div className="App">
      <Header />
      {status === "loading" && <Loader />}
      {status === "ready" && (
        <StartScreen
          length={questionLength}
          status={status}
          dispatch={dispatch}
        />
      )}
      {status === "error" && <Error />}
      {status === "active" && (
        <div className="main-container">
          <TopContainer
            className="progress-container"
            questionLength={questionLength}
            points={points}
            index={index}
            totalScore={totalScore}
            selectedAnswer = {selectedAnswer}
          />

          <Question
            question={question[index]}
            dispatch={dispatch}
            selectedAnswer={selectedAnswer}
          />
        </div>
      )}
    </div>
  );
}

export default App;
