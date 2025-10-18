import React from 'react';
import { Text } from '../../../../components/Text';
import { CoinFlipResult } from '../../types';
import styles from './History.module.css';

export interface HistoryProps {
  history: CoinFlipResult[];
  getCurrentTime: (date: Date) => string;
  className?: string;
}

export const History: React.FC<HistoryProps> = ({
  history,
  getCurrentTime,
  className = ''
}) => {
  return (
    <div className={`${styles.history} ${className}`}>
      <Text variant="h2">履歴</Text>
      <ul className={styles.historyList}>
        {history.map((result, index) => (
          <li key={`${result.timestamp.getTime()}-${index}`} className={styles.historyItem}>
            <Text variant="span" className={result.result === 'heads' ? styles.headsResult : styles.tailsResult}>
              {result.result === 'heads' ? '表' : '裏'}
            </Text>
            <Text variant="span"> - {getCurrentTime(result.timestamp)}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};