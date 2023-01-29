import React from 'react'
import './CalcButton.css'

interface CalcButtonProps {
  fn: () => void,
  text: string,
  isLong: boolean
}

const CalcButton = ({ fn, text, isLong }: CalcButtonProps) => {
  return (
    <button
      className={isLong ? 'calc-button calc-button-long' : 'calc-button'}
      onClick={fn}
    >
      {text}
    </button>
  )
}

export default CalcButton