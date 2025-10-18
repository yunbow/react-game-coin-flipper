import React from 'react';
import { Text } from '../../../../components/Text';
import { CoinFlipStats } from '../../types';
import styles from './Stats.module.css';

export interface StatsProps {
  stats: CoinFlipStats;
  className?: string;
}

export const Stats: React.FC<StatsProps> = ({
  stats,
  className = ''
}) => {
  return (
    <div className={`${styles.stats} ${className}`}>
      <div className={styles.stat}>
        <Text variant="p">表: <Text variant="span">{stats.heads}</Text></Text>
      </div>
      <div className={styles.stat}>
        <Text variant="p">裏: <Text variant="span">{stats.tails}</Text></Text>
      </div>
      <div className={styles.stat}>
        <Text variant="p">合計: <Text variant="span">{stats.total}</Text></Text>
      </div>
    </div>
  );
};