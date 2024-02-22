import React from 'react';

type ButtonPropsType = {
    title: string
    callBack?: () => void
}


export const Button = ({title, callBack}: ButtonPropsType) => {
    const callBackHandler = () => {
        if (callBack)
            callBack()
    }

    return (
        <div>
            <button onClick={callBackHandler} className={"counter-button"}>{title}</button>
        </div>
    );
};