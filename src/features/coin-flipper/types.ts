export type CoinSide = 'heads' | 'tails';

export interface CoinFlipResult {
  result: CoinSide;
  timestamp: Date;
}

export interface CoinFlipStats {
  heads: number;
  tails: number;
  total: number;
}

export interface CoinFlipHistory {
  results: CoinFlipResult[];
  maxLength: number;
}