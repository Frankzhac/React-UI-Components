import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonList from './components/ButtonComponents/ButtonList';

const App = () => {
  return (
    <div className = 'container'>
      <CalculatorDisplay />
      <ButtonList />
    </div>
  );
};

export default App;
