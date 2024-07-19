
import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)


  const addValue = () => {
    console.log('value added');
    setCounter(counter + 1)
  }

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>


      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
