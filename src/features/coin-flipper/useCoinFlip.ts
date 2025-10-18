import { useState, useCallback } from 'react';
import { CoinSide, CoinFlipResult, CoinFlipStats, CoinFlipHistory } from './types';

export const useCoinFlip = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [history, setHistory] = useState<CoinFlipHistory>({
    results: [],
    maxLength: 10
  });

  const getCurrentTime = useCallback((): string => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }, []);

  const getStats = useCallback((): CoinFlipStats => {
    const heads = history.results.filter(result => result.result === 'heads').length;
    const tails = history.results.filter(result => result.result === 'tails').length;
    return {
      heads,
      tails,
      total: heads + tails
    };
  }, [history.results]);

  const flipCoin = useCallback((): Promise<CoinSide> => {
    if (isFlipping) {
      return Promise.resolve('heads');
    }

    setIsFlipping(true);

    return new Promise((resolve) => {
      const result: CoinSide = Math.random() < 0.5 ? 'heads' : 'tails';

      setTimeout(() => {
        const newResult: CoinFlipResult = {
          result,
          timestamp: new Date()
        };

        setHistory(prev => {
          const newResults = [newResult, ...prev.results];
          if (newResults.length > prev.maxLength) {
            newResults.pop();
          }
          return {
            ...prev,
            results: newResults
          };
        });

        setIsFlipping(false);
        resolve(result);
      }, 3000);
    });
  }, [isFlipping]);

  const reset = useCallback(() => {
    if (isFlipping) return;

    setHistory(prev => ({
      ...prev,
      results: []
    }));
  }, [isFlipping]);

  return {
    isFlipping,
    history: history.results,
    stats: getStats(),
    flipCoin,
    reset,
    getCurrentTime
  };
};