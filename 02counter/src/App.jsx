import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
  let [counter,setCounter] = useState(5)
  
  const addValue = () => {
    if(counter<20){
      counter += 1;
    console.log("Value added",counter);
    setCounter(counter)
    }
    
  }
  const decValue = () => {
    if(counter>0){
      counter -= 1;
    console.log("Value decrease",counter);
    setCounter(counter)
    }
    

  }

  return (
    <>
      <h1>Hii React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={decValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
