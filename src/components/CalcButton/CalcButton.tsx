import React from 'react'
import './CalcButton.css'

interface CalcButtonProps {
  fn: () => void,
  text: string,
}

const CalcButton = ({ fn, text}: CalcButtonProps) => {
  return (
    <button
      className='calc-button'
      onClick={fn}
    >
      {text}
    </button>
  )
}

export default CalcButton