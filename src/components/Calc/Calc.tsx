import React, { useEffect, useState } from 'react'
import CalcButton from './../CalcButton/CalcButton';
import './Calc.css'

const Calc = () => {
  const [display, setDisplay] = useState('0')
  const [result, setResult] = useState('0')
  const nums = '0123456789'
  const operations = '+-*/%'

  const addSymb = (symb: string) => {
    if (display.length === 12) {
      return
    }
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

  const updateResult = () => {
    const displayArr = display.split('')
    if (nums.includes(displayArr[displayArr.length - 1])) {
      try {
        setResult(eval(display).toString())
      }
      catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    updateResult()
  }, [display])

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
            {result}
          </div>
          {display}
        </div>
        <div className='calc__buttons'>
          <CalcButton {...{ fn: () => setDisplay('0'), text: 'AC' }} />
          <CalcButton {...{ fn: () => deleteLastSymb(), text: 'DEL' }} />
          <CalcButton {...{ fn: () => addSymb('%'), text: '%' }} />
          <CalcButton {...{ fn: () => addSymb('/'), text: '/' }} />

          <CalcButton {...{ fn: () => addSymb('7'), text: '7' }} />
          <CalcButton {...{ fn: () => addSymb('8'), text: '8' }} />
          <CalcButton {...{ fn: () => addSymb('9'), text: '9' }} />
          <CalcButton {...{ fn: () => addSymb('*'), text: 'x' }} />

          <CalcButton {...{ fn: () => addSymb('4'), text: '4' }} />
          <CalcButton {...{ fn: () => addSymb('5'), text: '5' }} />
          <CalcButton {...{ fn: () => addSymb('6'), text: '6' }} />
          <CalcButton {...{ fn: () => addSymb('-'), text: '-' }} />

          <CalcButton {...{ fn: () => addSymb('1'), text: '1' }} />
          <CalcButton {...{ fn: () => addSymb('2'), text: '2' }} />
          <CalcButton {...{ fn: () => addSymb('3'), text: '3' }} />
          <CalcButton {...{ fn: () => addSymb('+'), text: '+' }} />

          <CalcButton {...{ fn: () => addSymb('8'), text: '+/-' }} />
          <CalcButton {...{ fn: () => addSymb('0'), text: '0' }} />
          <CalcButton {...{ fn: () => addSymb('.'), text: '.' }} />
          <CalcButton {...{ fn: () => setDisplay(result), text: '=' }} />
        </div>
      </div>
    </div>
  )
}

export default Calc