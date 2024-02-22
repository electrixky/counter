import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    let [counter,setCounter] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)

    const incrementHandler = () => {
        setCounter(++counter)
    }

    const resetHandler = () => {
        setCounter(0)
    }

    const setHandler = () => {
        setCounter(startValue)
    }

    const updateMaxValue = (newValue: number) => {
        setMaxValue(newValue)
    }

    const updateStartValue = (newValue: number) => {
        setStartValue(newValue)
    }


    return (
    <div className="App">
      <Counter isSettingsCounter updateMaxValue={updateMaxValue} updateStartValue={updateStartValue} onSet={setHandler}/>
      <Counter value={counter} onIncrement={incrementHandler} onReset={resetHandler} maxValue={maxValue} startValue={startValue}/>
    </div>
  );
}

export default App;
