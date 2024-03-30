import React from 'react'
import titleImg from './title.png'


function Header() {
  return (
    <div className='header'
    
    >
        <img src={titleImg} alt="react quicc app" className='title-img' id='react-quizz-title' />
        <h1 className='title-text'>React Quiz App</h1>
    </div>
  )
}

export default Header