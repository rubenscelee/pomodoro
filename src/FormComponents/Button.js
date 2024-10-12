import React from 'react';

const Button = ({disabled, handleOnclick, text}) => {
    return (
        <div>
            <button disabled={disabled} onClick={handleOnclick}>{text}</button>
        </div>
    );
}

export default Button;
