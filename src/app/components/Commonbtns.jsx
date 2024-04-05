import React from 'react'

const Commonbtns = (props) => {
  return (
    <div>
      <button className={`${props.custom} duration-300 hover:bg-gradient-to-br hover:to-[#4F91FC] hover:to-50% hover:from-[#A854E8] hover:scale-95 bg-gradient-to-br to-[#A854E9] to-50%  from-[#4F91FC] font-Outfit font-semibold text-sm md:text-base rounded-[4px] text-[#FDFDFF] cursor-pointer py-[14px] px-[24px] `}>{props.text}</button>
    </div>
  )
}

export default Commonbtns
