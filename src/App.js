import { useEffect, useReducer } from "react";
import "./App.css";

import Header from "./Header";
<<<<<<< HEAD
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
=======

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
>>>>>>> 515b468522ce63b7d3766197950e2703e26bfa37

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
<<<<<<< HEAD
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((err) => console.log(err));
  },[]);
  return (
    <div className="App">
      {/* <Header  />
      {status === "error" && <Error/>}
      <Error/> */}
      
=======
      .then((data)=>dispatch({type:"dataRecieved", payload:data}))
      .catch((err) => console.log(err));
  });
  return (
    <div className="App">
      <Header/>


>>>>>>> 515b468522ce63b7d3766197950e2703e26bfa37
    </div>
  );
}

export default App;
