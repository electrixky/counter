import React, {useState} from 'react';
import {Button} from "./Button";

export const Counter = () => {
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
        <div className={"counter"}>
            <div className={"counter-display"}>
                <span className={"counter-number"}>{counter}</span>
            </div>
            <div className={"counter-buttons"}>
                <Button callBack={increment} title={"inc"}/>
                <Button callBack={reset} title={"reset"}/>
            </div>
        </div>
    );
};