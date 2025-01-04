import { Board } from '@shared/types';

export async function getNextMove(board: Board, player: 'X' | 'O'): Promise<number | null> {
    const response = await fetch('http://localhost:3001/api/game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ board, player })
    });
    const data = await response.json();
    return data.data?.nextMove;
}