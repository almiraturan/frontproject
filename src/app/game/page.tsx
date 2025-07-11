'use client';
import React, { useState } from 'react';
import styles from './game.module.css';
import { useBank } from '@/context/BankContext'; 


export default function GamePage() {
  const [boxes, setBoxes] = useState<string[]>(Array(16).fill(''));
  const { balance, decreaseBalance, increaseBalance } = useBank();

  const growPlant = (index: number) => {
    if (balance == 0 || balance < 10) {
      return;
    }

    decreaseBalance(10);

    setBoxes(prev => {
      const updated = [...prev];
      updated[index] = 'tohum';
      return updated;
    });

    setTimeout(() => {
      setBoxes(prev => {
        const updated = [...prev];
        if (updated[index] === 'tohum') {
          updated[index] = 'fidan';
        }
        return updated;
      });
    }, 2000);

    setTimeout(() => {
      setBoxes(prev => {
        const updated = [...prev];
        if (updated[index] === 'fidan') {
          updated[index] = 'bitki';
        }
        return updated;
      });
    }, 4000);

    setTimeout(() => {
      setBoxes(prev => {
        const updated = [...prev];
        if (updated[index] === 'bitki') {
          updated[index] = 'çiçek';
        }
        return updated;
      });
    }, 6000);

    setTimeout(() => {
      setBoxes(prev => {
        const updated = [...prev];
        if (updated[index] === 'çiçek') {
          updated[index] = 'kurumuş çiçek';
        }
        return updated;
      });
    }, 10000);
  };

  const handleClick = (index: number) => {
    if (boxes[index] === '') {
      growPlant(index);
    } else {
      if (boxes[index] === 'çiçek') {
        increaseBalance(20);
      }
      setBoxes(prev => {
        const updated = [...prev];
        updated[index] = '';
        return updated;
      });
    }
  };

  return (
    <div>
      <div>Bankadaki Para: {balance}</div>
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
    </div>
  );
}
