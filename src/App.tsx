import React from 'react';
import { CoinFlipperApp } from './features/coin-flipper/CoinFlipperApp';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <CoinFlipperApp />
    </div>
  );
};

export default App;