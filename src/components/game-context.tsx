import { createContext, useContext } from 'react';

interface GameContextType {
  gameState: any;
  setGameState: (state: any) => void;
}

export const GameContext = createContext<GameContextType | null>(null);

export const useGame = () => useContext(GameContext)!;
