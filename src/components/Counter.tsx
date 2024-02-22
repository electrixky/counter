import React from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    value?: number
    onIncrement?: () => void
    onReset?: () => void
    isSettingsCounter?: boolean
}

export const Counter = ({value, onIncrement, onReset, isSettingsCounter}: CounterPropsType) => {


    return (
        <div className={"counter"}>
            <div className={"counter-display"}>
                {isSettingsCounter ?
                    <>
                        <div>
                            <span>max value:</span>
                            <input/>
                        </div>
                        <div>
                            <span>start value:</span>
                            <input/>
                        </div>
                    </>
                    : <span className={"counter-number"}>{value}</span>
                }
            </div>
            <div className={"counter-buttons"}>
                {!isSettingsCounter ? <>
                        <Button callBack={onIncrement} title={"inc"}/>
                        <Button callBack={onReset} title={"reset"}/></>
                    : <Button title={"set"}/>
                }

            </div>
        </div>
    );
};