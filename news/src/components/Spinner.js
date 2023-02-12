import React from 'react'
import spinner from './spinner.gif'

 const Spinner=()=>{
    return (
      <div className="text-center">
        <img src={spinner} alt="loader"  height={50}/>
      </div>
    )
  }


export default Spinner;