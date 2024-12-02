import React from 'react'

const CustomButton = ({className , text}) => {
  return (
    <>
      <span className={` cursor-pointer  px-5 py-3 rounded-md transition-all ${className || ""}`}>
            {text}
      </span>
    </>
  )
}

export default CustomButton
