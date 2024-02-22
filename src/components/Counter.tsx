import React, {ChangeEvent} from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    value?: number
    onIncrement?: () => void
    onReset?: () => void
    onSet?: () => void
    isSettingsCounter?: boolean
    maxValue?: number
    startValue?: number
    updateMaxValue?: (newValue: number) => void
    updateStartValue?: (newValue: number) => void
}

export const Counter = ({
                            value,
                            onIncrement,
                            onReset,
                            isSettingsCounter,
                            maxValue,
                            startValue,
                            updateMaxValue,
                            updateStartValue,
                            onSet
                        }: CounterPropsType) => {

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = parseInt(e.currentTarget.value, 10)
        if (!isNaN(newMaxValue) && updateMaxValue) {
            updateMaxValue(newMaxValue)
        }
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = parseInt(e.currentTarget.value, 10)
        if (!isNaN(newStartValue) && updateStartValue) {
            updateStartValue(newStartValue)
        }
    }

    return (
        <div className={"counter"}>
            <div className={"counter-display"}>
                {isSettingsCounter ?
                    <>
                        <div>
                            <label htmlFor={"max"} className={"input-title"}>max value:
                                <input id={"max"} type="number" className={"input"}
                                       onChange={maxValueHandler}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor={"start"} className={"input-title"}>start value:
                                <input id={"start"} type="number" className={"input"}
                                       onChange={startValueHandler}
                                />
                            </label>
                        </div>
                    </>
                    : <span className={"counter-number"}>{value}</span>
                }
            </div>
            <div className={"counter-buttons"}>
                {!isSettingsCounter ? <>
                        <Button callBack={onIncrement} title={"inc"}/>
                        <Button callBack={onReset} title={"reset"}/></>
                    : <Button callBack={onSet} title={"set"}/>
                }
            </div>
        </div>
    );
};