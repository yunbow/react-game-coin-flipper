import React, { useEffect, useState } from 'react';
import { Text } from '../../../components/Text';
import { CoinDisplay } from '../components/CoinDisplay';
import { ButtonGroup } from '../components/ButtonGroup';
import { Stats } from '../components/Stats';
import { History } from '../components/History';
import { useCoinFlip } from '../useCoinFlip';
import { CoinSide } from '../types';
import styles from './CoinFlipperApp.module.css';

export interface CoinFlipperAppProps {
  className?: string;
}

export const CoinFlipperApp: React.FC<CoinFlipperAppProps> = ({
  className = ''
}) => {
  const { isFlipping, history, stats, flipCoin, reset } = useCoinFlip();
  const [currentSide, setCurrentSide] = useState<CoinSide>('heads');

  const handleFlip = async () => {
    const result = await flipCoin();
    setCurrentSide(result);
  };

  const handleReset = () => {
    reset();
    setCurrentSide('heads');
  };

  const getCurrentTimeString = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        handleFlip();
      } else if (event.code === 'KeyR') {
        event.preventDefault();
        handleReset();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFlipping]);

  return (
    <div className={`${styles.container} ${className}`}>
      <Text variant="h1">コインフリッパー</Text>

      <CoinDisplay side={currentSide} isFlipping={isFlipping} />

      <ButtonGroup onFlip={handleFlip} onReset={handleReset} disabled={isFlipping} />

      <Stats stats={stats} />

      <History history={history} getCurrentTime={getCurrentTimeString} />
    </div>
  );
};