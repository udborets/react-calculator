import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CalcButton from './components/CalcButton/CalcButton';
import Calc from './components/Calc/Calc';

function App() {
  console.log('rendered App')
  return (
    <div className="App">
      <Calc />
    </div>
  )
}

export default App
