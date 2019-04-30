import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import ButtonOperator from './ButtonOperator';
import NumberButton from './NumberButton';

const ButtonList = () => {
    return (
        <div>
            <ActionButton buttonStyle = 'white-btn action-btn' value = 'clear' />
            <ButtonOperator buttonStyle = 'red-btn operator-btn' value = '&divide;' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '7' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '8' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '9' />
            <ButtonOperator buttonStyle = 'red-btn operator-btn' value = '&times;' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '4' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '5' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '6' />
            <ButtonOperator buttonStyle = 'red-btn operator-btn' value = '-' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '1' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '2' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '3' />
            <ButtonOperator buttonStyle = 'red-btn operator-btn' value = '+' />
            <ActionButton buttonStyle = 'white-btn action-btn' value = '0' />
            <ButtonOperator buttonStyle = 'red-btn operator-btn' value = '=' />
        </div>
    );
}

export default ButtonList;
