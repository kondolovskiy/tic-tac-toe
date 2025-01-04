import { useState } from 'react';
import { Board, Square, WinningCombination } from '@/shared/types';
import { WINNING_POSITIONS } from '@/shared/constants';
import { getNextMove } from '@/api';

export const useGame = () => {
    const [board, setBoard] = useState<Board>(Array(9).fill(null));
    const [gameOver, setGameOver] = useState(false);

    const calculateWinner = (squares: Board): Square | 'Draw' => {
        const lines: WinningCombination[] = WINNING_POSITIONS;

        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return squares.every((square: Square) => square) ? 'Draw' : null;
    };

    const handlePlayerMove = (i: number): void => {
        if (board[i] || gameOver) return;

        const newBoard = board.slice();
        newBoard[i] = 'X';
        setBoard(newBoard);

        const winner = calculateWinner(newBoard);
        if (winner) {
            setGameOver(true);
            return;
        }

        setTimeout(async () => {
            const computerMove = await getNextMove(newBoard, 'O');
            if (computerMove !== null) {
                newBoard[computerMove] = 'O';
                setBoard([...newBoard]);
                if (calculateWinner(newBoard)) {
                    setGameOver(true);
                }
            }
        }, 500);
    };

    const resetGame = (): void => {
        setBoard(Array(9).fill(null));
        setGameOver(false);
    };

    return { board, gameOver, handlePlayerMove, resetGame, calculateWinner };

    
}