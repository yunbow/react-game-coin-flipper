import React from 'react';
import { CoinSide } from '../../types';
import styles from './Coin.module.css';

export interface CoinProps {
  side?: CoinSide;
  isFlipping?: boolean;
  className?: string;
}

export const Coin: React.FC<CoinProps> = ({
  side = 'heads',
  isFlipping = false,
  className = ''
}) => {
  const coinClasses = [
    styles.coin,
    isFlipping ? styles.animateFlip : '',
    className
  ].filter(Boolean).join(' ');

  const transform = side === 'heads' ? 'rotateY(0deg)' : 'rotateY(180deg)';

  return (
    <div className={coinClasses} style={{ transform: isFlipping ? undefined : transform }}>
      <div className={`${styles.coinFace} ${styles.heads}`}>表</div>
      <div className={`${styles.coinFace} ${styles.tails}`}>裏</div>
    </div>
  );
};