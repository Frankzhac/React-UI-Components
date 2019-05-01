import React from 'react';
import './Button.css';

const ButtonOperator = (props) => {
    return (
        <button className = {props.buttonStyle}>
            <span> {props.value} </span>
        </button>
    );
}

export default ButtonOperator;
