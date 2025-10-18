import React from 'react';
import { Coin } from '../Coin';
import { CoinSide } from '../../types';
import styles from './CoinDisplay.module.css';

export interface CoinDisplayProps {
  side?: CoinSide;
  isFlipping?: boolean;
  className?: string;
}

export const CoinDisplay: React.FC<CoinDisplayProps> = ({
  side = 'heads',
  isFlipping = false,
  className = ''
}) => {
  return (
    <div className={`${styles.coinContainer} ${className}`}>
      <Coin side={side} isFlipping={isFlipping} />
    </div>
  );
};