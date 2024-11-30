import React from 'react'

const DropDownKey = ({heading, icon , explanation , isExpanded , onToggle}) => {
  return (
    <div className={`rounded-xl shadow-md bg-blue-500 overflow-hidden transition-all duration-300  ${isExpanded ? 'max-h-96' : 'max-h-12'}`}>
      {/* //heaidng with icon  */}
      <div className={` z-40 rounded-2xl py-4 px-8 transition-all  flex justify-between items-center `}>
                <h1 className='font-bold'>{heading}</h1>
                {icon}
        </div>

        <div className={`px-8 py-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            {explanation}
        </div>
    </div>
  )
}

export default DropDownKey 
