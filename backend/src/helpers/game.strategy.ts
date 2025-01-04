import { Board } from '../shared/types';

interface GameStrategy {
    getNextMove: (board: Board, player: 'X' | 'O') => number | null;
}

class GameContext {
    private strategy: GameStrategy;

    constructor(strategy: GameStrategy) {
        this.strategy = strategy;
    }

    getNextMove = (board: Board, player: 'X' | 'O'): number | null => {
        return this.strategy.getNextMove(board, player);
    }
}

export { GameContext, GameStrategy };