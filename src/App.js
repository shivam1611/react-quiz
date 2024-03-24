import { useEffect, useReducer } from "react";
import "./App.css";

import Header from "./Header";
import Error from "./Error";

function App() {
  const initialState = {
    questions: [],
    status: "loading",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataRecieved":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
        case "change":
          return{
            ...state,
            status:"readyy"
          }

      default:
        throw new Error("Action Unknown");
    }
  }

  const [{question, status}, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => console.log(err));
  },[]);
  return (
    <div className="App">
      {/* <Header  />
      {status === "error" && <Error/>}
      <Error/> */}
      
    </div>
  );
}

export default App;
