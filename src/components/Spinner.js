import React from 'react'
import "./Spinner.css"

function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-[50vh] flex-col gap-5 text-white text-2xl" >
        <div className="custom-loader"></div>
        <div>Loading...</div>
    </div>
  )
}

export default Spinner;