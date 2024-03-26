import { useEffect, useReducer } from "react";
import "./App.css";

import Header from "./Header";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Error from "./Error";
import Question from "./Question";

function App() {
  const initialState = {
    question: [],
    status: "loading",
    index: 0,
    selectedAnswer : null
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataRecieved":
        return {
          ...state,
          question: action.payload,
          status:"ready"
        }
        case "active":
          return{
            ...state,
            status:"active"
          }
          case "newAnswer":
            return {
              ...state,
            }


      default:
        throw new Error("Action Unknown");
    }
  }

  const [{question ,status, index, selectedAnswer}, dispatch] = useReducer(reducer, initialState);


  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatch({type:"error"}));
  },[]);
  const length = question?.length;
  return (
    <div className="App">
      <Header />
      {status === "loading" && <Loader/>}
      {status === "ready" && <StartScreen length = {length} status = {status} dispatch={dispatch}/>}
      {status === "error" && <Error/>}
      {status === "active" && <Question question = {question[index]} dispatch={dispatch}/>}
     
    
      
    </div>
  );
}

export default App;
