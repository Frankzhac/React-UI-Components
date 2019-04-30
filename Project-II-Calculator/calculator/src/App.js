import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonArray from './components/ButtonComponents/ButtonArray';

const App = () => {
  return (
    <div className = 'container'>
      <CalculatorDisplay />
      <ButtonArray />
    </div>
  );
};

export default App;
