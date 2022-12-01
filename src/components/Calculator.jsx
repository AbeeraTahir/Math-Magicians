import React, { useState } from 'react';
import styles from '../stylesheets/Calculator.module.css';
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
  return (
    <section className={styles.calculator_container}>
      <div className={styles.container}>
        <div className={styles.display}>
          {total}
          {operation}
          {next}
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>AC</button>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>+/-</button>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>%</button>
          <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`} onClick={handleClick}>÷</button>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>7</button>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>8</button>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>9</button>
          <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`} onClick={handleClick}>x</button>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>4</button>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>5</button>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>6</button>
          <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`} onClick={handleClick}>-</button>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>1</button>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>2</button>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>3</button>
          <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`} onClick={handleClick}>+</button>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={`${styles.btn_numbers} ${styles.btn_zero}`} onClick={handleClick}>0</button>
          <button type="button" className={styles.btn_numbers} onClick={handleClick}>.</button>
          <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`} onClick={handleClick}>=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
