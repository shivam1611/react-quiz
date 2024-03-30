import React from 'react'

function ProgessBar({maxValue, value}) {
    
     const progress = ((value ) / maxValue) * 100;
  return (
    <div className='progress-bar-container'>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ProgessBar