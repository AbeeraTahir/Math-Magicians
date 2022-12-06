import React, { useState } from 'react';
import '../css/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setValue((state) => calculate(state, e.target.textContent));
  };

  const { total, next, operation } = value;
  const buttonNames = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <section className="calculator_container">
      <div className="container">
        <div className="display">
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons">
          {buttonNames.map((btn) => (
            <button type="button" className="btn_numbers" onClick={handleClick} key={btn}>{btn}</button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
