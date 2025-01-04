import { GameStrategy } from '../helpers/game.strategy';
import { Board, Square, WinningCombination } from '../shared/types';
import { CORNERS, SIDES, WINNING_POSITIONS } from '../shared/constants';

export class AIGameService implements GameStrategy {
    
    private player: 'X' | 'O';

    constructor(player: 'X' | 'O') {
        this.player = player;
    }

    private findWinningMove = (squares: Board, player: 'X' | 'O'): number | null => {
        const lines: WinningCombination[] = WINNING_POSITIONS;
    
        for (const [a, b, c] of lines) {
            const squares2 = squares.slice();
            if (squares2[a] === null && squares2[b] === player && squares2[c] === player) return a;
            if (squares2[a] === player && squares2[b] === null && squares2[c] === player) return b;
            if (squares2[a] === player && squares2[b] === player && squares2[c] === null) return c;
        }
        return null;
    };

    private getOpponent = (player: 'X' | 'O'): 'X' | 'O' => {
        return player === 'X' ? 'O' : 'X';
    }

    private getSmartComputerMove = (squares: Board): number | null => {
        // 1. Try to win
        const winningMove = this.findWinningMove(squares, this.player);
        if (winningMove !== null) return winningMove;

        // 2. Block player's winning move
        const blockingMove = this.findWinningMove(squares, this.getOpponent(this.player));
        if (blockingMove !== null) return blockingMove;

        // 3. Take center if available
        if (squares[4] === null) return 4;

        // 4. Take corners if available
        const availableCorners = CORNERS.filter(i => squares[i] === null);
        if (availableCorners.length > 0) {
            return availableCorners[Math.floor(Math.random() * availableCorners.length)];
        }

        // 5. Take any available side
        const availableSides = SIDES.filter(i => squares[i] === null);
        if (availableSides.length > 0) {
            return availableSides[Math.floor(Math.random() * availableSides.length)];
        }

        // 6. Take any available move
        const emptySquares = squares
            .map((square: Square, index: number) => square === null ? index : null)
            .filter((val: number | null) => val !== null);

        if (emptySquares.length === 0) return null;
        return emptySquares[Math.floor(Math.random() * emptySquares.length)];
    };

    getNextMove = (board: Board, player: 'X' | 'O'): number | null => {
        if (player === this.player) return this.getSmartComputerMove(board);
        return null;
    };
}
