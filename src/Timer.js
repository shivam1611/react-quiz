import React, { useEffect } from "react";

function Timer({dispatch, secondsRemaining}) {
  const minute = Math.floor(secondsRemaining / 60)
  const seconds = Math.floor(secondsRemaining % 60)
  useEffect(function () {
    const id =setInterval(function(){
      dispatch({type:"ticking"})
    },1000)
   return ()=>clearInterval(id)
  },[dispatch]);
  return <div className={`timer details ${minute === 0 && "animate"}`}> ⌛ {minute < 10 && 0}{minute} : {seconds < 10 && 0}{seconds}</div>;
}

export default Timer;
