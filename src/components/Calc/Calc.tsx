import React, { useState } from 'react'
import CalcButton from './../CalcButton/CalcButton';
import './Calc.css'

const Calc = () => {
  const [display, setDisplay] = useState('0')

  const addSymb = (symb: string) => {
    setDisplay(oldValue => oldValue + symb)
  }

  const deleteLastSymb = () => {
    if (display.length === 1) {
      setDisplay('0')
      return
    }
    setDisplay(oldValue => oldValue.slice(0, -1))
  } 


  return (
    <div className='calc'>
      <div className="calc__container">
        <div className="calc__display">
          <div className='calc__result'>
            {0}
          </div>
          {display}
        </div>
        <div className='calc__buttons'>
          <CalcButton {...{ fn: () => console.log(), text: 'AC', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: 'DEL', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '%', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '/', isLong: false }} />

          <CalcButton {...{ fn: () => console.log(), text: '7', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '8', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '9', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: 'x', isLong: false }} />
          
          <CalcButton {...{ fn: () => console.log(), text: '4', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '5', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '6', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '-', isLong: false }} />

          <CalcButton {...{ fn: () => console.log(), text: '1', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '2', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '3', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '+', isLong: false }} />

          <CalcButton {...{ fn: () => console.log(), text: '+/-', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '0', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '.', isLong: false }} />
          <CalcButton {...{ fn: () => console.log(), text: '=', isLong: false }} />
        </div>
      </div>
    </div>
  )
}

export default Calc