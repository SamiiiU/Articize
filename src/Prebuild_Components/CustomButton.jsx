import React from 'react'

const CustomButton = ({className , text , onClick}) => {
  return (
    <>
      <span onClick={onClick} className={`${className || ""} cursor-pointer  px-5 py-3 rounded-md transition-all `}>
            {text}
      </span>
    </>
  )
}

export default CustomButton
