import { useEffect, useReducer } from "react";
import "./App.css";

import Header from "./Header";

function App() {


  const initialState = {
    questions : [],
    state : "loading"
  }

  function reducer(state, action){
    switch(action.type){
      case "dataRecieved":
        return {
          ...state,
          questions : action.payload
        }
        
        default:
          throw new Error("Action Unknown") 
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data)=>dispatch({type:"dataRecieved", payload:data}))
      .catch((err) => console.log(err));
  });
  return (
    <div className="App">
      <Header/>


    </div>
  );
}

export default App;
