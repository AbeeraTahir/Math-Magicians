import React from 'react';
import styles from '../stylesheets/Calculator.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <section className={styles.calculator_container}>
        <div className={styles.container}>
          <div className={styles.display}>
            <p>0</p>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.btn_numbers}>AC</button>
            <button type="button" className={styles.btn_numbers}>+/-</button>
            <button type="button" className={styles.btn_numbers}>%</button>
            <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`}>/</button>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.btn_numbers}>7</button>
            <button type="button" className={styles.btn_numbers}>8</button>
            <button type="button" className={styles.btn_numbers}>9</button>
            <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`}>X</button>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.btn_numbers}>4</button>
            <button type="button" className={styles.btn_numbers}>5</button>
            <button type="button" className={styles.btn_numbers}>6</button>
            <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`}>-</button>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.btn_numbers}>1</button>
            <button type="button" className={styles.btn_numbers}>2</button>
            <button type="button" className={styles.btn_numbers}>3</button>
            <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`}>+</button>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={`${styles.btn_numbers} ${styles.btn_zero}`}>0</button>
            <button type="button" className={styles.btn_numbers}>.</button>
            <button type="button" className={`${styles.btn_numbers} ${styles.btn_operation}`}>=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
