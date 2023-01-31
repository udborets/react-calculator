import React, { useState } from 'react'
import CalcButton from './../CalcButton/CalcButton';
import './Calc.css'

const Calc = () => {
  const [display, setDisplay] = useState('0')
  const nums = '0123456789'
  const operations = '+-*/'

  const addSymb = (symb: string) => {
    if (operations.includes(symb)) {
      if (nums.includes(display.charAt(display.length - 1)) && display.charAt(display.length - 1) !== '.') {
        setDisplay(oldValue => oldValue + symb)
        return
      }
      setDisplay(oldValue => oldValue.slice(0, -1) + symb)
      return
    }
    if (nums.includes(symb)) {
      if (display === '0') {
        setDisplay(oldValue => '')
      }
      setDisplay(oldValue => oldValue + symb)
      return
    }
    if (symb === '.') {
      if (nums.includes(display.charAt(display.length - 1))) {
        setDisplay(oldValue => oldValue + symb)
      }
      return
    }
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
          <CalcButton {...{ fn: () => setDisplay('0'), text: 'AC', isLong: false }} />
          <CalcButton {...{ fn: () => deleteLastSymb(), text: 'DEL', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb(''), text: '%', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('/'), text: '/', isLong: false }} />

          <CalcButton {...{ fn: () => addSymb('7'), text: '7', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('8'), text: '8', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('9'), text: '9', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('*'), text: 'x', isLong: false }} />
          
          <CalcButton {...{ fn: () => addSymb('4'), text: '4', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('5'), text: '5', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('6'), text: '6', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('-'), text: '-', isLong: false }} />

          <CalcButton {...{ fn: () => addSymb('1'), text: '1', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('2'), text: '2', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('3'), text: '3', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('+'), text: '+', isLong: false }} />

          <CalcButton {...{ fn: () => addSymb('8'), text: '+/-', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('0'), text: '0', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('.'), text: '.', isLong: false }} />
          <CalcButton {...{ fn: () => addSymb('='), text: '=', isLong: false }} />
        </div>
      </div>
    </div>
  )
}

export default Calc