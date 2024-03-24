import React from 'react'
import ErrorIMg from './serverError.png'

function Error() {
  return (
    <div className='error-component'>
        <img src={ErrorIMg} alt="error" />
       <p className="error-msg"> Oops!! <br /> An Error occured.</p>
    </div>
  )
}

export default Error