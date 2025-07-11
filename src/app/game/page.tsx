'use client';

import React, { useState } from 'react';
import styles from './game.module.css';

export default function GamePage() {

  const [boxes, setBoxes] = useState<string[]>(Array(16).fill(''));

  const handleClick = (index: number) => {
    setBoxes(prev => {
      const newBoxes = [...prev]; 
      newBoxes[index] = 't';       
      return newBoxes;             
    });
  };

  return (
    <div className={styles.container}>
      {boxes.map((content, i) => (
        <button
          key={i}
          className={styles.box}
          onClick={() => handleClick(i)}
        >
          {content}
        </button>
      ))}
    </div>
  );
}