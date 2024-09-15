import React from 'react';

const Button = ({disabled, handleChange, text}) => {
    return (
        <div>
            <button disabled={disabled} onChange={handleChange}>{text}</button>
        </div>
    );
}

export default Button;
