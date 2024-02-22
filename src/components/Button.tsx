import React from 'react';

type ButtonPropsType = {
    title: string
    callBack?: () => void
    disabled?: boolean
}


export const Button = ({title, callBack, disabled}: ButtonPropsType) => {
    const callBackHandler = () => {
        if (callBack)
            callBack()
    }

    return (
        <div>
            <button onClick={callBackHandler} className={disabled ? "counter-button button-disabled" : "counter-button"}
                    disabled={disabled}>{title}</button>
        </div>
    );
};