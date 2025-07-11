'use client';
import React from 'react';
import styles from './game.module.css';

export default function GamePage() {
  const handleClick = (index: number) => {
    alert(`${index}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.box} onClick={() => handleClick(1)}>1</button>
      <button className={styles.box} onClick={() => handleClick(2)}>2</button>
      <button className={styles.box} onClick={() => handleClick(3)}>3</button>
      <button className={styles.box} onClick={() => handleClick(4)}>4</button>

      <button className={styles.box} onClick={() => handleClick(5)}>5</button>
      <button className={styles.box} onClick={() => handleClick(6)}>6</button>
      <button className={styles.box} onClick={() => handleClick(7)}>7</button>
      <button className={styles.box} onClick={() => handleClick(8)}>8</button>

      <button className={styles.box} onClick={() => handleClick(9)}>9</button>
      <button className={styles.box} onClick={() => handleClick(10)}>10</button>
      <button className={styles.box} onClick={() => handleClick(11)}>11</button>
      <button className={styles.box} onClick={() => handleClick(12)}>12</button>

      <button className={styles.box} onClick={() => handleClick(13)}>13</button>
      <button className={styles.box} onClick={() => handleClick(14)}>14</button>
      <button className={styles.box} onClick={() => handleClick(15)}>15</button>
      <button className={styles.box} onClick={() => handleClick(16)}>16</button>
    </div>
  );
}
