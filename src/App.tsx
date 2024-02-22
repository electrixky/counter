import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    let [counter,setCounter] = useState(0)

    const increment = () => {
        console.log("counter")
        setCounter(++counter)
    }

    const reset = () => {
        console.log("reset")
        setCounter(0)
    }


    return (
    <div className="App">
      <Counter isSettingsCounter/>
      <Counter value={counter} onIncrement={increment} onReset={reset}/>
    </div>
  );
}

export default App;
