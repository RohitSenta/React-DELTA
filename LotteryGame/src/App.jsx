import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Lottery from './Lottery';
import { sum } from "./halper";

function App() {

  let winCondition = (ticket) => {
    return sum(ticket) === 15;  // winning condition-1
    // return ticket.every((num) => (num === ticket[0]));   // winning condition-2
    // return ticket[0] === 0;   // winning condition-2
  }
  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
