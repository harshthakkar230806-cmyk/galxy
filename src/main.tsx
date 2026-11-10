import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameContext } from './components/game-context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameContext.Provider value={{ gameState: {}, setGameState: () => {} }}>
      <div>Galaxy Tycoon Game</div>
    </GameContext.Provider>
  </React.StrictMode>
);